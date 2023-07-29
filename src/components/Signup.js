import React, { useState } from "react";
import axios from "axios";
console.log("i am in");
function Signup(){
let[user,setuser]=useState({username:"",password:""});
let[Success,setsuccess]=useState("");
let[error,seterror]=useState("");
let[token,settoken]=useState("");
let {username,password}=user;

async function sign(e){
    e.preventDefault();
    if(!username || !password){
       setsuccess("");
       seterror("please fill all field");
    //    return;
    }
    else{
        setsuccess("user added successfully");
        seterror("");
        // return;
    }
    try{
        let response = await axios.post("https://dummyjson.com/auth/login",{ username, password})
        setsuccess("user added successfully");
        seterror("");
        settoken(response.data.data.token);
        console.log(response);
    }catch(error){
      console.log(error);
    }    
}


    return(
        <div>
            {  error &&  <h1>  { error}  </h1>   }
            {Success && <h1>{Success}</h1>}
            {token && <h1>{token}</h1>}
            <form onSubmit={sign}>
            <input type="text" onChange={(e)=>setuser({...user,username:e.target.value})}/>
            <input type="password" onChange={(e)=>setuser({...user,password:e.target.value})}/>
            <button >submit</button>
            </form>
        </div>
    )
}
export default Signup
// async function sign(){
//   let response=await fetch('https://dummyjson.com/auth/login', {
// method: 'POST',
// headers: { 'Content-Type': 'application/json' },
// body: JSON.stringify({
//     username:username,
//     password:password
// })
// })
// .then(response => response.json())
// .then(console.log());