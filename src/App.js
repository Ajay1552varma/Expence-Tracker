import React, { useState } from 'react'
import './App.css';
import {Typography,styled,Box} from '@mui/material'
import Balance from './components/Balance';
import ExpenceCard from './components/ExpenceCard';
import NewTransations from './components/NewTransations';
import Transaction from './components/Transaction';



function App() {
  const Header=styled(Typography)`
  font-size:36px;
  color:blue;
  text-transform :uppercase;
  `
 const Comp=styled(Box)`
 display:flex;
 background:#fff;
 width:800px;
 padding:10px;
 border-radius:20px;
 margin:auto;
 &>div{
  height:70vh;
  width:50%;
  padding:10px;
 }
 `

const [transactions,setTransaction]=useState([
  {
    id:1,
    text:'momos',
    amount:-100,
  },
  {
    id:1,
    text:'book',
    amount:-20,
  },
  {
    id:1,
    text:'salary',
    amount:3000,
  },
  {
    id:1,
    text:'Bonus',
    amount:2000,
  },
]);


  return (
    <Box className="App">
       <Header>Expence Tracker</Header>
       <Comp>
          <Box>
            <Balance transactions={transactions}/>
            <ExpenceCard transactions={transactions}/>
            <NewTransations setTransaction={setTransaction}/>
          </Box>
          <Box>
            <Transaction transactions={transactions} setTransaction={setTransaction}/>
          </Box>
       </Comp>
    </Box>
  );
}

export default App;
