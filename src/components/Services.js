import React, { Component } from 'react'
import Title from './Title'
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa'


export default class Services extends Component {
    state = {
        Services: [
            {
                icon: <FaCocktail />,
                title: "Free Cocktails",
                info: "Girls often prefer cocktails over, Ahem I guess u already know it."
            },

            {
                icon: <FaHiking />,
                title: "End-Less Hikings",
                info: "“Jobs fill your pockets, but adventures fill your soul.” "
            },

            {
                icon: <FaShuttleVan />,
                title: "Near To Transport",
                info: "“The beautiful journey of today can only begin when we learn to let go of yesterday.”"
            },

            {
                icon: <FaBeer />,
                title: " Beers",
                info: "You can’t buy happiness, but you can buy beer and that’s kind of the same thing."
            }
        ]
    }
    render() {
        return (
            <section className='services'>
                <Title title={"Services Offered"} />
                <div className='services-center'>
                    {this.state.Services.map((item, index) => {
                        return <article key={index} className='service'>
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    })}
                </div>
            </section>
        )
    }
}
