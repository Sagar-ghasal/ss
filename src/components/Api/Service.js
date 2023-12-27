import axios from "axios";

const BASE_URL = "https://651e55bb44a3a8aa476820f2.mockapi.io"

export const client = axios.create({
    baseURL :BASE_URL
});


export const GetAll = ()=>{
    return client.get("/crud");
}
export const CreateData = (postData)=>{
    return client.post("/crud", postData);
}
export const UpdateData = (postId, updateData)=>{
    return client.put(`crud/${postId}`, updateData);
}
export const DeleteData = (postId)=>{
    return client.delete(`crud/${postId}`);
}
