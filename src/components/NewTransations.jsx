import { Box, TextField, Typography ,Button,styled} from '@mui/material'
import React, { useState } from 'react'

const Container=styled(Box)`
display:flex;
flex-direction:column;
&>h4,&>div,&>button{
    margin-top:30px;
}
`

const NewTransations = ({setTransaction}) => {
    const [text,setText]=useState('');
    const [amount,setAmount]=useState();
    const handleClick=()=>{
      const transaction={
        id: Math.floor(Math.random()*1000000),
        text: text,
        amount:+amount,
      }
      setTransaction(prevstate=>[transaction,...prevstate]);
    }
  return (
    <Container>
        <Typography variant='h4'>New Transaction</Typography>
        <TextField label="Enter Expence" onChange={(e)=>setText(e.target.value)}/>
        <TextField label="Enter Amount" onChange={(e)=>setAmount(e.target.value)}/>
        <Button variant='contained' onClick={()=>handleClick()}>Add Transaction</Button>
    </Container>
  )
}

export default NewTransations