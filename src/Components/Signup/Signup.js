import Login from "../Login/Login";
import { useState } from "react";
import Axios from "axios";


function Signup()
{
    const [arr, setArr] = useState([]);

    const getState = (childData)=>{
        setArr(childData);
    }

    const handleSubmit = () => {
        const data = {email: arr[0], password: arr[1]};
        Axios.post("http://localhost:4000/people/create-people",data)
        .then((res)=>{
            if(res.status === 200){
                alert("Record added successfully");
            }
            else{
                Promise.reject();
            }
        })
        .catch((err)=>alert(err));
    }



    return (
        <form onSubmit={handleSubmit}>
        <Login getState={getState}/>
        </form>
    )
}

export default Signup;