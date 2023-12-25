import React from 'react'

const Service=(props)=> {
  return <div class="col">
  <div class="card card_shadow h-100">
    <img src={props.img} class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">{props.title}</h5>
      <p class="card-text pCardText">{props.content}</p>
    </div>
  </div>
</div>
}

export default Service;