import React,{Component} from "react";
import Kurs from "./Kurs";
import Button from "react-bootstrap/Button";

import {BrowserRouter as Router, Link} from "react-router-dom";



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
                <Button className="btn btn-dark text-info border-info float-right">
                    Yeni Ekle
                </Button>

            </div>

        )

    }
}
