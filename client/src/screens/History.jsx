import React, { useEffect, useState } from 'react';
import Header from '../components/Header';


const History = () => {

  const [history, setHistory] = useState([]);

  const load = async () => {

    const options = {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      }
    }


    let response = await fetch("https://ispark.onrender.com/historyData",options);
    let TransferArray = await response.json();
    setHistory(TransferArray);
  }


  useEffect(() => {
    load();
  }, [])

  return <div>
    <Header />
    <div className='container mt-3'>
      <table className="table table-bordered border-primary  table-hover">
        <thead>
          <tr>
            <th scope="col">credited Account</th>
            <th scope="col">debited Account</th>
            <th scope="col">amount</th>
          </tr>
        </thead>
        <tbody>

          {
            history.map((his, index) => {
              return <tr key={index}>
                <td>{his.creditNumber}</td>
                <td>{his.debitNumber}</td>
                <td>{his.amount}</td>
              </tr>
            })
          }
        </tbody>
      </table>
    </div>
  </div>

}

export default History;