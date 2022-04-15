import React from "react";

import styles from "./Homepage.module.css";

const Homepage = props => {
  return (
    <div >
      <div className="container w-50 fs-6 border shadow-sm mt-5">
        <div className="display-5 text-center  text-secondary">Menu de filiere</div>
        <div className="container w-25 p-3">
            <select className="form-select  border-2" name="options" id="" >
                <option value="test">Management</option>
                <option value="test">test</option>
                <option value="test">test</option>
            </select>
        </div>
        
        <form action="#" method="post" className="   p-2">
            <div className="container w-100 text-center border">
                    <h3 className="display-6 text-primary">APPBAR</h3>
                    <div className="row pb-3">
                        <span className="col-3 ">Nom de matiere</span>
                        <div className="col-6">
                            <input type="text" className="form-control w-100"/>
                        </div>
                        <div className="col-1">
                            <button className="btn"><i className="fa fa-plus"></i></button>
                        </div>
                    </div>
                    <div className="row pb-5">
                        <span className="col-3 ">Nom de matiere</span>
                        <div className="col-6">
                            <input type="text" className="form-control w-100"/>
                        </div>
                        <div className="col-1">
                            <button className="btn"><i className="fa fa-plus"></i></button>
                        </div>
                    </div>
                  
                    
                    
                
            </div>
            <div className="row justify-content-center justify-content-between mt-5">
                <button className="btn btn-primary col-2 ms-5">Annuler</button>
                <input className="btn btn-primary col-2 me-5" type="submit" value="Suivant"/>


            </div>
        </form>
                




    </div>
    
    
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
    </div>
  );
};

export default Homepage;