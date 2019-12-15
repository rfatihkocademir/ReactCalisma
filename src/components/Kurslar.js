import React,{Component} from "react";
import Kurs from "./Kurs";


import {
    BrowserRouter as Router,
    Link,
} from "react-router-dom";


export default class Kurslar extends Component{

    render() {
        return(
            <div>
            <table class="table table-hover table-dark table-striped border-dark border shadow-lg">
                <thead>
                <th>#id</th>
                <th>Kurs Adı</th>
                <th>İndirim Kodu</th>
                <th>Kurs Fiyatı</th>
                <th>İşlem</th>
                </thead>
                <tbody>
                        <Kurs/>

                </tbody>
            </table>
                <button className="btn btn-dark text-info float-right">
                    <Router>
                        <Link to="/yeniekle" />Yeni Ekle
                    </Router>
                </button>

            </div>

        )

    }
}
