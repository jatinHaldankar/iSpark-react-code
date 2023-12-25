import React from 'react';


const Card = (props) => {

    let num=props.id;
    num=(num+1)%8;


    return <div className="col">
        <div className="card card_shadow h-100 ">
        <img src={`images/user${num}.jpg`} className="card-img-top" alt="...." />
            <div className="card-body">
                <h5 className="card-title"><b>{props.name}</b></h5>
                <p className="card-text pCardText"><b>Email:</b>{props.email}</p>
                <p className="card-text pCardText"><b>Account No:</b>{props.account_no}</p>
                <p className="card-text pCardText"><b>Balance:</b>{props.balance}</p>
            </div>
        </div>
    </div>
}

export default Card;