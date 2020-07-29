import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import { image } from './images';

class Home extends Component {
    render() {
        return (
            <div className="mt-5">
                <Image src={image.class} fluid />
            </div>
        );
    }
}

export default Home;