import React, {Component} from 'react'

import {Swiper, SwiperSlide} from 'framework7-react';

export default class SwiperComponent extends Component{
    constructor(){
        super();

        this.swiperRef = React.createRef()
    }
    render(){
        if(this.props.layout == 'collections'){
            return(
                <Swiper className="collections" ref={this.swiperRef} params={{slidesPerView: this.props.slides, spaceBetween: 20}}>
                    {this.props.content.map(item => (
                        <SwiperSlide key={item.collection.collection_id}>
                            <button className="button button--green"><a>Find the restaurants</a></button>
                            <div className="swiper-content">
                                <h3>{item.collection.title}</h3>
                                <p>{item.collection.description}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            )     
        }else if(this.props.layout == 'nearRestaurant'){
            return(
                <Swiper className="nearRestaurant" ref={this.swiperRef} params={{slidesPerView: this.props.slides, spaceBetween: 10}}>
                    {this.props.content.map(item => (
                        <SwiperSlide key={item.restaurant.id}>
                            <img src={item.restaurant.thumb} alt=""/>
                            <div className="swiper-content">
                                <p>{item.restaurant.name}</p>
                                <p className="sm">{item.restaurant.location.locality_verbose}</p>
                            </div>    
                        </SwiperSlide>
                    ))}
                </Swiper>
            )   
        }
    }
    componentDidMount(){
        this.$f7ready(() => {
            const swiper = this.swiperRef.current.swiper
            setTimeout(() => {
                swiper.update()
            }, 1000);
        });
    }
}