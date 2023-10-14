import React, { PureComponent } from 'react'
import './style.css'

export default class Main extends PureComponent {
    render() {
    return (
        <div className='hero'> 
            <h1 className= "heading">Create Memories, Stay Uniquely.</h1>
            <img className="hero-img" src = "https://airbnb-experience-clone-ten.vercel.app/airbnb-pics.png" />
            <h1 className='title'>Elevate Your Travel Experience with Airbnb, Where Every Stay Transforms Into a Symphony of Comfort, Cultural Richness, and Personal Connection.</h1>
        </div>
        )
    }
}
