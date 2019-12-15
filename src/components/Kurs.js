import React, {Component} from "react";
import "../App.css"
import Button from "react-bootstrap/Button";
export default class Kurs extends Component{
    constructor(props) {
        super(props);
        this.state = {
            items:[],
            isLoaded:false,
        }
    }
    componentDidMount() {
        fetch("http://localhost/ProjeCI/api/get_all_data")
            .then(res=>res.json())
            .then(json=>{
                this.setState({
                    isLoaded:true,
                    items:json,
                })
            })
    }

    render() {
        var {isLoaded,items} = this.state;
        if (!isLoaded){
            return (
                <div className="lds-ring">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            )
        }
        else
        {return( items.map((item)=>{
            return(
                <tr className="mt-7">
                    <td className="text-danger mt-2">#{item.id}</td>
                    <td className="text-info mt-2">{item.title}</td>
                    <td className="text-success mt-2">{item.couponCode}</td>
                    <td className="text-warning mt-2"> {item.price}</td>
                    <td>
                        <Button className="btn btn-sm btn-danger mt-2">Sil</Button>
                    </td>
                    <td>
                        <Button className="btn btn-sm btn-success mt-2 ">Düzenle</Button>
                    </td>
                </tr>
            )

            })
        )}
    }


}
