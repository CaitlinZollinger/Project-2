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
      <input onChange={(evt)=>setnameprop(evt.target.value)} type="text" defaultValue={nameprop}/>
      <input onChange={(evt)=>setageprop(evt.target.value)}type="text" defaultValue={ageprop}/>
      <button onClick={()=>buttonfuncprop()}> Submit </button>
    </div>
    </>
  )
}

// user is one thing (that you can have multiple of) that is in the display box
function User({idk}){
    
  return(
    <>
    </>
  )
}

// display is the box that all the users are in
function Display({allinfoprop}){
  
  const allinfo = allinfoprop.map(name => <li>{name}</li>);
  
  return(
    <>

    </>
  )
}


function App() {

  const[name, setname] = useState("Name")
  const[age, setage] = useState("Age")
  const[allinfo, setallinfo] = useState(
    [
      {"name":"Caitlin", "age": "17"},
      {"name":"Matt", "age": "40"}
    ]
  )

  function submit(){
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

   
    </>
  )
}

export default App