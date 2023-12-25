import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
import Header  from '../components/Header';

const User = () => {

  const [data, setData] = useState([]);

  const load = async () => {

    const options = {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      }
    }

    let response = await fetch("https://ispark.onrender.com/UserData",options);
    let UserArray = await response.json();
    setData(UserArray);
  }

  useEffect(() => {
    load();
  }, [])

  const [details, setDetails] = useState({
    "name": "",
    "email": "",
    "account_no": "",
    "balance": "",
  })

  const changeDetails = (event) => {
    const { value, name } = event.target;
    setDetails((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      }

    })
  }


  const handleSubmit = async (event) => {
    event.preventDefault();

    const options = {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: details.name,
        email: details.email,
        account_no: details.account_no,
        balance: details.balance,

      })
    }

    const response = await fetch("https://ispark.onrender.com/addUser", options);
    const json = await response.json();

    alert(json.message);
    load();

  }
  return <div>
  <Header />

    <div className="container transferCard card_shadow">
      <div className="container">
        <h5 className="card-title my-2 headingUser">Enter  iSpark Account Details Here</h5>
        <form className="transferForm" onSubmit={handleSubmit}>

          <div className="mb-3 w-60">
            <label className="form-label">Name</label>
            <input type="text" name="name" className="form-control" value={details.name} onChange={changeDetails} />

          </div>


          <div className="mb-3 w-60">
            <label className="form-label">Email address</label>
            <input type="email" className="form-control" name="email" aria-describedby="emailHelp" onChange={changeDetails} value={details.email} />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>

          <div className="mb-3 w-60">
            <label className="form-label">Account No</label>
            <input type="text" className="form-control" name="account_no" onChange={changeDetails} value={details.account_no} />
          </div>

          <div className="mb-3 w-60">
            <label className="form-label">Balance</label>
            <input type="text" name="balance" className="form-control" onChange={changeDetails} value={details.balance} />
          </div>

          <button type="submit" className="btn btn-success">Submit</button>
        </form>
      </div>


      <img src="images/s2.jpg" style={{ width: "50%" }} alt="it is an account opening " />
    </div>


    <div className='container my-3' >
       <h2>Customers</h2>
      <div className="row row-cols-1 row-cols-md-4 g-4 ">
        {
          data.map((d, index) => {
            return <Card
              key={index}
              id={index}
              name={d.name}
              email={d.email}
              balance={d.balance}
              account_no={d.account_no}
            />
          })
        }
      </div>
    </div>
  </div>
}

export default User;