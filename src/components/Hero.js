import React, { PureComponent } from 'react'

export default class Main extends PureComponent {
    render() {
    return (
        <div className='hero'> 
            <img src = "https://photo-collage.net/wp-content/uploads/collage_tips_8_1.jpg" />
            <h1 className='title'>Select Your Order</h1>
            <ul className='menu'>
                <li>
                    <a href="/">Order</a>
                </li>
                <li>
                    <a href="/">History</a>
                </li>
            </ul>
        </div>
        )
    }
}
