import React, {Component} from "react";
import axios from "axios";
import SwiperComponent from "../components/SwiperComponent.jsx" 
import {Preloader} from 'framework7-react';
import { connect } from "react-redux";
import { addFavorites } from "../store/actions/index.js"

const mapStateToProps = (state) => {
    return{ 
        favorites : state.favorites
     }
}

const mapDispatchToProps = (dispatch) => {
    return{ 
        dispatchFavorites : favorites => { dispatch(addFavorites(favorites)) }
     }
}

class Home extends Component{
    constructor(props) {
        super(props);

        this.state = {
            latitude: '',
            longitude: '',
            collections: [],
            currentLocation: '',
            nearRestaurants: [],
            setFavorites: props.favorites
        }
    }

    doAddFavorites(){
        this.props.dispatchFavorites('lagi')
        console.log(this.props.favorites)
        this.setState({
            favorites: this.props.favorites
        })
    }

    render(){
        return(
            <main className="home">
                <div className="home--left">
                        <h2>Tired of Waiting for Your Meal?</h2>
                        {this.state.setFavorites.map(item => (
                            <p>{item}</p>
                        ))}
                        <p>Mealwise lets you get the food by the best chefs without waiting. Eat what you love and save your time for something cool!</p>
                        <button onClick={this.doAddFavorites.bind(this)} className="button button--orange button__radius"><a>Find the restaurant</a></button>
                        <div>
                            <h4>Best Restaurants Near <Preloader id='loader'></Preloader> {this.state.currentLocation} :</h4>
                            <SwiperComponent layout="nearRestaurant" content={this.state.nearRestaurants} slides="auto" />
                        </div>
                </div>
                <div className="home--right">
                    <SwiperComponent layout="collections" content={this.state.collections} slides="auto" />
                </div>
            </main>
        )
    }

    componentDidMount(){
        this.getCollections()
        this.getLocation()
    }

    getCollections(){
        axios.get("https://developers.zomato.com/api/v2.1/collections?city_id=74&count=5", {headers: {'user-key': 'b35aa1fe430b85914c5cf03369d365f3'}})
        .then(res => {
            const collections = res.data.collections
            this.setState(() => {
                return { collections }
            })
        })
    }

    getNearRestaurants(){
        axios.get(`https://developers.zomato.com/api/v2.1/geocode?lat=${this.state.latitude}&lon=${this.state.longitude}`, {headers: {'user-key': 'b35aa1fe430b85914c5cf03369d365f3'}})
        .then(res => {
            const currentLocation = res.data.location.title
            const nearRestaurants = res.data.nearby_restaurants
            this.setState(() => {
                return { currentLocation, nearRestaurants }
            })
            document.getElementById('loader').remove()
        })
    }

    getLocation(){
        const success = (position) => {
            const latitude = position.coords.latitude
            const longitude = position.coords.longitude
            this.setState(() => {
                return { latitude, longitude}
            })
            this.getNearRestaurants()
        }
        const error = () => {
            console.log('location not found')
        }
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(success, error)
        }else{
            const latitude = -6.1847292
            const longitude = 106.8316936
            this.setState(() => {
                return { latitude, longitude}
            })
        }
    }
}

let List = connect(mapStateToProps, mapDispatchToProps, null)(Home)
export default List