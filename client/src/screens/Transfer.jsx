import React, { useState } from 'react';
import Header from '../components/Header';


const Transfer=()=>{

    const [transfer,setTransfer] =useState({
        creditAccountNumber:"",
        debitAccountNumber:"",
        amount:"" 
    })

    const changeTransfer=(event)=>{
      const {value,name}=event.target;

      setTransfer((prevValue)=>{
           return {
            ...prevValue,
            [name]: value
           }
      })
    }

    const handleSubmit=async(event)=>{
        event.preventDefault();

        const options = {
          method: "POST",
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            creditAccountNumber:transfer.creditAccountNumber,
            debitAccountNumber:transfer.debitAccountNumber,
            amount:transfer.amount
          })
        }
    
        const response = await fetch("https://ispark.onrender.com/transferData", options);
        const json = await response.json();

            alert(json.message);
    }
  return <div>
  <Header />
  <div className="container transferCard card_shadow" style={{height:"65vh"}}>
        <div className="container ">
        <h5 className="card-title my-2 headingUser">Transfer Money Now!!</h5>
            <form  onSubmit={handleSubmit}>

                <div className="mb-3 w-60">
                    <label  className="form-label">Credited Account No</label>
                    <input type="text" name="creditAccountNumber" value={transfer.creditAccountNumber} className="form-control" onChange={changeTransfer}/>

                </div>
                <div className="mb-3  w-60">
                    <label className="form-label">Debited Account No</label>
                    <input type="text" name="debitAccountNumber" value={transfer.debitAccountNumber} className="form-control"  onChange={changeTransfer}/>
                </div>

                <div className="mb-3 w-60">
                    <label className="form-label">Amount</label>
                    <input type="text" name="amount" value={transfer.amount} className="form-control" onChange={changeTransfer} />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>


        <img src="images/sliderNew1.jpg" alt="this is an img"  style={{width:"50%"}} />

    </div>
    </div>
}

export default Transfer;