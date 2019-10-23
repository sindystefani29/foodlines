import React, {Component} from "react";
import axios from "axios";

// Import F7 Bundle
import Framework7 from 'framework7/framework7-lite.esm.bundle.js';

// Import F7-React Plugin
import Framework7React from 'framework7-react';

// Init F7-React Plugin
Framework7.use(Framework7React);

import {App, Swiper, SwiperSlide} from 'framework7-react';
    

export default class Home extends Component{
    constructor() {
        super();

        this.state = {
            collections: []
        }

        this.swiperRef = React.createRef()
    }

    render(){
        return(
            <main className="home">
                <div className="home--left">
                        <h2>Tired of Waiting for Your Meal?</h2>
                        <p>Mealwise lets you get the food by the best chefs without waiting. Eat what you love and save your time for something cool!</p>
                        <button><a className="button">Find the restaurant</a></button>
                </div>
                <div className="home--right">
                    <App>
                        <Swiper ref={this.swiperRef} params={{slidesPerView: 'auto', spaceBetween: 20}}>
                            {this.state.collections.map(item => (
                                <SwiperSlide key={item.collection.collection_id}>{item.collection.title}</SwiperSlide>
                            ))}
                        </Swiper>
                    </App>
                </div>
            </main>
        )
    }

    componentDidMount(){
        axios.get("https://developers.zomato.com/api/v2.1/collections?city_id=74&count=5", {headers: {'user-key': 'b35aa1fe430b85914c5cf03369d365f3'}})
        .then(res => {
            const collections = res.data.collections
            this.setState(() => {
                return { collections }
            })
        })

        this.$f7ready((f7) => {
            const swiper = this.swiperRef.current.swiper
            setTimeout(() => {
                swiper.update()
            }, 500);
        });
    }
}