import React,{Component} from "react";

class KursEkle extends Component{
    render() {
        return(
            <div className="col-md-6 offset-3">
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
                    <button>Ekle</button>
                </form>
            </div>
        );


    }
}
export default KursEkle;
