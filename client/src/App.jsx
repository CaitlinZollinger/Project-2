import { useEffect, useState } from 'react'
import axios from 'axios' // Make sure you've run: npm install axios



// input is the section where you input name and age and then submit it
function Input({nameprop, setnameprop, ageprop, setageprop, buttonfuncprop}){

  // function short-hand explanation:
  
  // SHORT-HAND VERSION:
  //   (evt)=>setnameprop(evt.target.value)
  
  // WHAT IT MEANS:
  //   function(evt){
  //     setnameprop(evt.target.value)
  //   }

  
  return(
    <>
    <div>
      --------------------------
      <div>ADD NEW USER:</div>
      <div><input onChange={(evt)=>setnameprop(evt.target.value)} type="text" defaultValue={nameprop}/></div>
      <div><input onChange={(evt)=>setageprop(evt.target.value)}type="text" defaultValue={ageprop}/></div>
      <div><button onClick={()=>buttonfuncprop()}> Submit </button></div>
      --------------------------
    </div>
    </>
  )
}

// user is one thing (that you can have multiple of) that is in the display box
function User({userprop}){
    
  return(
    <>
      <div>
        Name: {userprop.name} | Age: {userprop.age}
      </div>

    </>
  )
}

// display is the box that all the users are in
function Display({allusersprop}){
  
  // allusersprop is a list of objects which gets looped/mapped through to create a list of components which gets stored in allusers
  const allusers = allusersprop.map(listitem => <User userprop = {listitem}/>);
  
  return(
    <>
      <div>
        USERS:
        {allusers}
      </div>
    </>
  )
}



function App() {

  const[name, setname] = useState("Name")
  const[age, setage] = useState("Age")
  const[allusers, setallusers] = useState(
    [
      {"name":"Caitlin", "age": "17"},
      {"name":"Matt", "age": "40"}
    ]
  )

  // submitting a new user to the back end
  function submit(){
    axios.post("http://localhost:5000/api/submituser", {"body":{"name":name, "age":age}}).then(
      (response) => {
        console.log(response)
      }
    )
    console.log(name, age)
  }

  return (
    <>

      <Input 
        nameprop = {name} 
        ageprop = {age}
        setnameprop = {(value) => setname(value)} 
        setageprop ={(value) => setage(value)} 
        buttonfuncprop = {() => submit()}
      />

      <Display
        allusersprop = {allusers}
      />
   
    </>
  )
}

export default App