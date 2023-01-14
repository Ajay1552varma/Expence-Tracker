import { Typography,Box, Divider ,List} from '@mui/material'
import React from 'react'
import PerticularTrans from './PerticularTrans'


const Transaction = ({transactions,setTransaction}) => {
  return (
    <div>
        <Box>
            <Typography variant='h5'>Transaction History</Typography>
            <Divider/>
            <List>
              {
                transactions.map(transaction=>(
                    <PerticularTrans transaction={transaction} setTransaction={setTransaction} transactions={transactions}/>
                ))
              }
            </List>
        </Box>
    </div>
  )
}

export default Transaction