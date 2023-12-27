import React, { useEffect, useState } from "react";
import { DeleteData, GetAll } from "../components/Api/Service";
import { Container, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Get = () => {
  const [data, setData] = useState([]);
  const [updateData, setUpdateData] =  useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    GetAll("")
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


const handleDelete = (id)=>{
  DeleteData(id)
  .then(()=>{
    GetAll()
    .then((res)=>{
      setData(res.data)
    })
  })
  .catch((err)=>{
    console.log(err)
  })
}

const handleUpdate = (id) =>{
  let newData  = data.find(item=>item.id === id);
  setUpdateData(newData);

  navigate('/create', { state: { update: newData } });


}
  return (
    <section className="py-5">
      <Container>
        <h1>Get</h1>
        <Table striped bordered hover>
          <thead className="text-center">
            <tr>
              <th className="py-3" width="20%">Id</th>
              <th className="py-3" width="20%">Name</th>
              <th className="py-3" width="20%">Age</th>
              <th className="py-3" width="20%">Email</th>
              <th className="py-3" width="20%">Action</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {data.map((elem) => (
              <tr key={elem.id}>
                <td>{elem.id}</td>
                <td>{elem.e_name}</td>
                <td>{elem.e_age}</td>
                <td>{elem.e_email}</td>
                <td>
                  <button className="btn btn-sm btn-warning" onClick={()=>handleUpdate(elem.id)} >Edit</button>
                  <button className="btn btn-danger btn-sm ms-3" onClick={()=>handleDelete(elem.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </section>
  );
};

export default Get;
