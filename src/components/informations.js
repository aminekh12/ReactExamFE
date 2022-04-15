import React from "react";


const Homepage = props => {
  return (
    <div >
                <div className="container w-50 mt-5 border shadow-sm p-3">
                
                <div className="text-center m-1 ">
                    <h3 className="fw-bold">Remplir les informations</h3>
                    <h6 className="text-secondary" >ici vous devez remplir les informations nécessaire pour avoir créer le planifications</h6>
                </div>

                <div className="container mb-3 p-5 border shadow-sm">
                    <h5 className="fw-normal ">Les informations</h5>
                    <h6 className="fw-lighter">Vous pouvez retourner au étape précedent pour éditer les filieres</h6>
                    <div className="row m-4 ">
                        <div className="col-4 ">
                            <button className="btn w-100  border rounded-5 shadow-sm p-3 fw-bold"><i className="fa-solid fa-address-book"> </i> Les professeurs</button>
                        </div>
                        <div className="col-4">
                            <button className="btn w-100 border shadow-sm p-3 fw-bold"><i className="fa-solid fa-book"></i> Les matieres</button>
                        </div>
                        <div className="col-4">
                            <button className="btn w-100  border shadow-sm p-3 fw-bold"><i className="fa-solid fa-building"></i> Les salles</button>
                        </div>



                        </div>


                    </div>
                    <form action="#" method="get">
                    <div className="row justify-content-center justify-content-between mt-5">
                        <button className="btn btn-primary col-2 ms-5">Précedent</button>
                        <input className="btn btn-primary col-2 me-5" type="submit" value="Suivant"/>
                    </div>

                    </form>
            </div>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>

    </div>


  );
};

export default Homepage;