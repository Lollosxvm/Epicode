import React from 'react'
import '../css/card.css'

const Card = ({props}) => {
    console.log(props);
    return (
        <div class="card">
            <div class="card-header">
                <img src={props.images[1]} alt={props.title}/>
            </div>
            <div class="card-body">
                <span class="tag tag-teal">{props.category}</span>
                <h4>
                    {props.title}
                </h4>
                <p>
                    {props.description}
                </p>
                <div class="user">
                    <img src={props.images[0]} alt={props.title}/>
                    <div class="user-info">
                        <h5>July Dec</h5>
                        <small>2h ago</small>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card