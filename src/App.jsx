import { colors, TextField } from '@mui/material'
import { useState } from 'react';
import Button from '@mui/material/Button';
import './App.css'

function App() {
  const[hight, sethight]=useState("")
  const[status, setstatus]=useState("no status")
  const[wight, setwight]=useState("")
  const[result, setresult]=useState(0)
  const[ishight , setishight]=useState(true)
  const[iswight ,setIswight]=useState(true)

  const validate=(e)=>{
    console.log(e.target.name);
    console.log(e.target.value);
    console.log(!!e.target.value.match('^[0-9 .]*$'));
    if(!!e.target.value.match('^[0-9 .]*$')){
      if(e.target.name=='hight'){
        sethight(e.target.value)
        setishight(true)
      }else if(e.target.name=='wight'){
        setwight(e.target.value)
        setIswight(true)
      }
    }else{
      if(e.target.name=='hight'){
        sethight(e.target.value)
        setishight(false)
      }else if(e.target.name=='wight'){
        setwight(e.target.value)
        setIswight(false)
      }
  }
  
  
}
const handleReset =()=>{
  sethight("")
  setwight("")
  setishight(true)
  setIswight(true)
  setresult(0)
  setstatus('No status')
}
const handleCalculate =()=>{
  if (!hight || !wight) {
   
    alert("please enter the values")
  }else{
    const res=(wight/(hight/100)**2)
  setresult(res)
  if(res<18.5){
    setstatus("your under weight" )
    
  }else if(res>=18.5 && res<=24.9){
    setstatus("normel weight")
  }else if(res>=25){
    setstatus("over weight")
  }}
}


  return (
    <>
     <div style={{height:'100vh'}} className='bg-primary w-100 d-flex justify-content-center align-items-center' >
      <div style={{width:'500px'}}className='p-5 bg-light rounded'>
        <h1>BMI calculator</h1>
        <p>Calculate your body mass index</p> 
       <div> <TextField className='w-100 ' id="outlined-basic" label="height in cm" variant="outlined" name='hight' value={hight} onChange={(e)=>validate(e)}/>
       {!ishight && <span className='text-danger'>Invalid input</span>}
       </div>
        <div><TextField className='w-100 mt-3 ' id="outlined-basic" label="weight" variant="outlined" name='wight' value={wight} onChange={(e)=>validate(e)} />
        {!iswight && <span className='text-danger'>Invalid input</span>}
        </div>
        <div className='mb-3 mt-3 d-flex justify-content-between'>
      <Button disabled={ishight && iswight ?false:true} onClick={handleCalculate}  style={{width:'190px' , height:'60px'}} variant="contained" color='primary'>calculate</Button>
      <Button onClick={handleReset}   style={{width:'190px', height:'60px'}} variant="outlined">Reset</Button>
      

      </div>
      <div style={{height:'150px'}}className='p-2 bg-primary rounded d-flex justify-content-center align-items-center flex-column text-light '>
          <h1 >
          {String(result).slice(0,5)}
        </h1>
        <p>your body mass index</p>
        <p>status:{status}</p>
        </div>
        </div>
        </div>
    </>
  )
}

export default App
