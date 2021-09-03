import React from 'react';
import Particles from 'react-particles-js';
import particlesConfig from './Particles-Config/Particles-config';
import './css/default.css'

export default function ParticleBackground() {
    return (
        <div id="particle-js">
            <Particles params={particlesConfig} ></Particles>
        </div>

    )
}