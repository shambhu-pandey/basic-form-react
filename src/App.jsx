import React  , {useState} from "react";
import "./index.css";


// hmara main task hai ki input field me kuch bhi likhe  aur oo hello ke baad show ho jaai buttom par click karne ke baad  

const App = () => {

  const [fullName , setFullName] = useState({
    firstName : " ",
    lastName : " ",
    email : " ",
    phone : " ",

  });

  const inputEvent = (event) => {
    console.log(event.target.value);  // hm jo bhi likhenge input type me oo sab console me show hoga 

    console.log(event.target.name);  // ab hm jo bhi likhenge console me oo sab hello ke baad dikhayega bina button par click kiye bs hello ke baad {name} pass kar dena hai 
   // aur baad me hm esi ko use kar lenge buttom par bhi 


   const {value , name} = event.target;
   
   setFullName((prevValue) =>{
    console.log(prevValue);
    return{
      ...prevValue,
      [name] : value,
    }
   })
  };


  const onSubmit = (event) => {
    event.preventDefault(); // form ke default behaviour ko ye rok dega 
    alert("form submitted");
  }


return(
<>
<div className="container">
  <form onSubmit={onSubmit}>
<h1 className="heading">hello {fullName.firstName} {fullName.lastName}</h1>
<p>{fullName.email}</p>
<p>{fullName.phone}</p>
<input type="text"
 placeholder="enter yours first name"
 className="input_type"
 name = "firstName"
  onChange={inputEvent}
  value = {fullName.firstName}></input>

<br></br>

<input type="text"
 placeholder="enter your last name" 
 className="input_type"
 name = "lastName"
  onChange={inputEvent}
  value = {fullName.lastName}></input>

<br></br>

<input type="email"
 placeholder="enter your email " 
 className="input_type"
 name = "email"
  onChange={inputEvent}
  value = {fullName.email}></input>


<input type="phone"
 placeholder="enter your phone number  " 
 className="input_type"
 name = "phone"
  onChange={inputEvent}
  value = {fullName.phone}></input>


<button className="button" >click me </button>
</form>
</div>
</>
);
}

export default App;
