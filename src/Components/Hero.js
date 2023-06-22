import React from 'react'

const Hero = () => {
    return (
        <div style={{
            width: '75%',
            margin: 'auto',
            textAlign: 'justify',
        }}>
            <h1 style={{
                fontSize: '48px',
                textAlign: 'center',
                textDecoration: "underline #ff0000 8px",
                textDecorationSkipInk: "none",
                textUnderlineOffset: '-4px',
                marginBottom: '2rem',
            }}>
                Queuing Model
            </h1>

            <p
                style={{
                    fontSize: '1.2rem',
                }}>
                The objective of this Operation Research project is to analyze and optimize a queueing system to improve operational efficiency and enhance customer satisfaction. Queueing systems are prevalent in various domains, including retail, healthcare, transportation, and telecommunications. By studying the underlying principles of queueing theory and applying mathematical models, this project aims to identify bottlenecks, reduce waiting times, and enhance resource allocation within the system.
            </p>
        </div>

    )
}

export default Hero
