import React, { Component } from 'react';
import "./App.css"
import TitleBar from "./TitleBar/TitleBar";

class App extends Component {
    constructor(props) {
        super(props);
        this.book = [
            {title: "The Left Hand of God", author: "I forget at the moment"},
            {title: "The Alchemist", author: "Paulo Coelho (I think)"},
            {title: "The Richest Man in Babylon", author: "Seriously...I forget this too. I'm tired!"}
        ];
        this.state = {
            
        };
    }
    render() {
        return (
            <div className="container-fluid">
                <TitleBar />
                <div className="col-md-4">
                    {/*Button here to move to the previous book viewed */}
                    </div>
                    <div className="col-md-4">
                    {/*Display book with cover here*/
                    <h1>{this.books[this.state.bookNumer].title}</h1> 
    }
                    </div>   
                    <div className="col-md-4">
                    {/*Button here to move to the next book viewed */}
               </div>
            </div>
        )
    }
}
export default App;