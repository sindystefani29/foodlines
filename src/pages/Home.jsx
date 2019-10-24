import React, {Component} from "react";
import axios from "axios";
import SwiperComponent from "../components/SwiperComponent.jsx" 

export default class Home extends Component{
    constructor() {
        super();

        this.state = {
            latitude: '',
            longitude: '',
            collections: [],
            currentLocation: '',
            nearRestaurants: []
        }
    }

    render(){
        return(
            <main className="home">
                <div className="home--left">
                        <h2>Tired of Waiting for Your Meal?</h2>
                        <p>Mealwise lets you get the food by the best chefs without waiting. Eat what you love and save your time for something cool!</p>
                        <button className="button button--orange button__radius"><a>Find the restaurant</a></button>
                        <div>
                            <h4>Best Restaurants Near {this.state.currentLocation} :</h4>
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
        })
    }

    getLocation(){
        const success = (position) => {
            const latitude = position.coords.latitude
            const longitude = position.coords.longitude
            this.setState(() => {
                return { latitude, longitude}
            })
            console.log(this.state.latitude, this.state.longitude)
            this.getNearRestaurants()
        }
        const error = () => {
            console.log('location not found')
        }
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(success, error)
        }
    }
}