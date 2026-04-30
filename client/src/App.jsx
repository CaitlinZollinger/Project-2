import { useEffect, useState } from 'react'
import axios from 'axios' // Make sure you've run: npm install axios


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
      <input onChange={(evt)=>setnameprop(evt.target.value)} type="text" defaultValue={nameprop}/>
      <input onChange={(evt)=>setageprop(evt.target.value)}type="text" defaultValue={ageprop}/>
      <button onClick={()=>buttonfuncprop()}> Submit </button>
    
    </>
  )
}

//user is one thing (that you can have multiple of) that is in the display box
function User({infoprop}){
  return(
    <>
    
    </>
  )
}

//display is the box that all the users are in
function Display({allinfoprop}){
  return(
    <>
      \<user
    </>
  )
}


function App() {

  const[name, setname] = useState("Name")
  const[age, setage] = useState("Age")
  const[allinfo, setallinfo] = useState([{"name":"Caitlin", "age": "16"}{"name":"Matt", "age": "40"}])

  function submit(){
    console.log(name, age)
  }

  return (
    <>

      <Input 
        nameprop = {name} 
        setnameprop = {(value) => setname(value)} 
        ageprop = {age} setage={(value) => setage(value)} 
        buttonfuncprop = {() => submit()}
      />

      <Display
        infoprop = {allinfo}
      />
   
    </>
  )
}

export default App