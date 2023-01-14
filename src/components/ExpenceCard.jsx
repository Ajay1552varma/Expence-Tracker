import { Box, Card, CardContent, Typography,styled } from '@mui/material'
import React from 'react'
const Container=styled(Box)`
display:flex;
&>div{
    flex:1;
    padding:10px;
}
`
const ExpenceCard = ({transactions}) => {
    const amount=transactions.map(transaction=>transaction.amount)
    const income=amount.filter(item=>item>0).reduce((acc,item)=>(acc+=item),0).toFixed(2);
    const expence=(amount.filter(item=>item<0).reduce((acc,item)=>(acc+=item),0)*-1).toFixed(2);
    return (
    <Container>
       <Card>
         <CardContent>Income</CardContent>
         <Typography style={{color:'green'}}>₹{income}</Typography>
       </Card>
       <Card>
         <CardContent>Expence</CardContent>
         <Typography  style={{color:'red'}}>₹{expence}</Typography>
       </Card>
    </Container>
  )
}

export default ExpenceCard