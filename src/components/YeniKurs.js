import React,{Component} from "react";
import Button from 'react-bootstrap/Button';
class KursEkle extends Component{
    render() {
        return(
            <div>
                <form action="" className="card mt-5 p-3 border border-dark bg-dark shadow-lg">
                    <div className="form-group">
                        <label htmlFor="" className="text-light">Kurs Adı</label>
                        <input type="text" className="form-control text-info border border-info shadow-lg"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="" className="text-light">Kurs Adı</label>
                        <input type="text" className="form-control text-info border border-info shadow-lg"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="" className="text-light">Kurs Adı</label>
                        <input type="text" className="form-control text-info border border-info shadow-lg"/>
                    </div>
                    <Button className="btn btn-danger shadow-lg border border-info " href="/">
                           İptal
                    </Button>
                    <Button className="btn btn-success shadow-lg border border-info mt-2">Ekle</Button>

                </form>

            </div>
        );


    }
}
export default KursEkle;
