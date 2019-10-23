import React, {Component} from "react";
import axios from "axios";

export default class Home extends Component{
    constructor() {
        super();

        this.state = {
            collections: []
        }
    }

    componentDidMount(){
        axios.get("https://developers.zomato.com/api/v2.1/collections?city_id=74&count=5", {headers: {'user-key': 'b35aa1fe430b85914c5cf03369d365f3'}})
        .then(res => {
            const collections = res.data.collections
            this.setState(() => {
                return { collections }
            })
        })
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
                    <ul>
                        {this.state.collections.map(item => (
                            <li key={item.collection.collection_id}>{item.collection.title}</li>
                        ))}
                    </ul>
                </div>
            </main>
        )
    }
}