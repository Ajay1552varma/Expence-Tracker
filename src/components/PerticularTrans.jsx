import React from 'react'
import {ListItem,ListItemText,styled,Button} from '@mui/material'

const Detail=styled(ListItem)`
margin-top:10px;
`
const PerticularTrans = ({transaction,setTransaction,transactions}) => {
    const color=transaction.amount>0 ? 'Green' :'Red';
    const deleteTransaction=(id)=>{
        setTransaction(transactions.filter(transaction=>transaction.id!==id))
    }
  return (
    <div>
        <Detail style={{background: `${color}`, color:"#fff"}}>
            <Button onClick={()=>deleteTransaction(transaction.id)} variant="contained" component="label">Delete</Button>
            <ListItemText>{transaction.text}</ListItemText>
            <ListItemText>{transaction.amount}</ListItemText>
        </Detail>
    </div>
  )
}

export default PerticularTrans