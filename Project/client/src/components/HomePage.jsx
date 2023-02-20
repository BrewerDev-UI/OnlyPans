import React from 'react'
import { Container } from 'react-bootstrap'


const HomePage = () => {


    return (
        <>
            <Container>
                <div className='d-flex flex-row'>
                    <div className='p-4'>
                        <h1 className='onlyHeader'>Welcome</h1>
                        <p className='homeP'>Here at OnlyPans we love one thing and one thing only: Cast Iron Pans</p>
                        <p className='homeP'>Wander around the site and view some Hot pans or chat with other enthusiastic Pan fans </p>
                        <p></p>
                    </div>
                    <div>
                        <div>
                            <iframe width="300" height="400" src="https://youtube.com/embed/6bx8X7dfDeM?autoplay=1&mute=1&loop=1&playlist=6bx8X7dfDeM" title="YouTube video" allowfullscreen allow='autoplay, loop' ></iframe>
                        </div>
                    </div>
                </div></Container>
        </>
    )
}

export default HomePage