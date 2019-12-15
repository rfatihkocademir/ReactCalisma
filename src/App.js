import React, {Component} from 'react';
import './App.css';
import Kurslar from "./components/Kurslar";
import {BrowserRouter,Route} from "react-router-dom";
import KursEkle from "./components/YeniKurs";

class App extends Component {


    render() {
        return(
                <div className="App">
                    <div className="col-md-6 offset-3">
                        <BrowserRouter>
                            <Route path="/" exact strict render={()=><Kurslar/>}/>
                            <Route path="/yeniekle" exact strict render={()=><KursEkle/>}/>
                        </BrowserRouter>
                    </div>
                </div>
            )
        }
}
export default App;
