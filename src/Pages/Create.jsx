import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { CreateData, GetAll, UpdateData } from '../components/Api/Service';
import { useLocation, useNavigate } from 'react-router-dom';

const Create = () =>{
    const navigate = useNavigate();
    const location = useLocation();
    const [pp, setPp] = useState(null)

    const initialState = {
        name:"",
        age:"",
        email:""
    };
    // const update = location.state
    // console.log(update)
    useEffect(()=>{
        const update = location.state
        // console.log(update)
        setPp(update);

    }, [location.state])

    if(pp !=null){
        console.log(pp.update.name)
    }

    const [inputData, setInputData] = useState(initialState);
    const handleChange = (e)=>{
        setInputData((prev)=> {
            return {
                ...prev,
                [e.target.name] :e.target.value
            }
        })
    }

    useEffect(()=>{
       if(pp!=null){
        setInputData({
            name:pp.update.e_name || "",
            age:pp.update.e_age || "",
            email:pp.update.e_email || ""
        })
       }

    }, [pp])

    const handleSubmit = (e)=>{
        e.preventDefault();
        CreateData({
            e_name:inputData.name,
            e_age:inputData.age,
            e_email:inputData.email,
        }).then(()=>{
            GetAll();
            navigate("/")

        }).catch((error)=>{})
        setInputData(initialState);
    }
    const handleUpdate = ()=>{
        UpdateData(pp.update.id,{
            e_name:inputData.name,
            e_age:inputData.age,
            e_email:inputData.email,

        }).then(()=>{
            GetAll()
            navigate("/")
        }).catch(()=>{})
    }
    return(
        <section className='py-5'>
          <Container>
            <div className='text-white text-center'>
                <h1>{pp ? "update" : "create"}</h1>
            </div>
            <Row>
                <Col lg={6} className='m-auto'>
                <form onSubmit={handleSubmit}>
                <Row>
                <Col lg={6} className='mb-3'>
                    <label htmlFor='name'>Name</label>
                    <input type='text' className='form-control' id='name' name='name' value={inputData.name} onChange={handleChange} />
                </Col>
                <Col lg={6} className='mb-3'>
                    <label htmlFor='age'>Age</label>
                    <input type='text' id='age' className='form-control' name='age' value={inputData.age} onChange={handleChange} />
                </Col>
                <Col lg={12} className='mb-3'>
                    <label htmlFor='email'>Email</label>
                    <input type='email' id='email' className='form-control' name='email' value={inputData.email} onChange={handleChange} />
                </Col>
                <Col lg={12}>
                    {pp
                        ? <button type='button' className='btn btn-warning' onClick={handleUpdate}>update</button>
                        : <button type='submit' className='btn btn-secondary w-100'>Create</button>}
                </Col>

                </Row>
            </form>

                </Col>
            </Row>
          </Container>
        </section>
    )
}

export default Create