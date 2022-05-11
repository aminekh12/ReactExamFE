import React,{ useState,useEffect,useRef } from "react";
import axios from "axios";
import styles from "./Homepage.module.css";
import { Button, Tooltip, Modal, Form, Input, message, Select, Space } from 'antd';
import { EditOutlined, UserDeleteOutlined, PlusOutlined, MinusCircleOutlined } from '@ant-design/icons';
import Matieres from "./addMatieres";
import Niveaux from "./addNiveaux";

const ListMatieres=(props)=> {
   
        const [state, setState] = useState();
        
        const [selectedniveau,setSelectedNiveau] = useState([]);
        const [nommatiere,setSelectednommatiere] = useState([]);
        const [selectedtypesalle,setSelectedTypesalle] = useState([]);
        const [selectednomprofesseur,setSelectedNomProfesseur] = useState([]);
        const [idmatiere,setidmatiere] = useState([]);
        
    
    
        const [matieres, setmatiere] = useState([]);
        const [selectedsalle, setTypeSalle] = useState([]);
        const [selectnomniveau, setNomNiveau] = useState([]);
        const [niveaux, setNiveau] = useState([]);
        const [professeur, setProfesseur] = useState([]);
    
        const [isLoading, setIsLoading] = useState(false);
        const [isError, setIsError] = useState(false);
        const onFinish = values => {
            console.log('Received values of form:', values);
        };
        const fetchData=()=>{
            axios.get("http://127.0.0.1:8000/api/matiere/getAll")
            .then((response) => {
                setIsLoading(false);
                setmatiere(response.data);
              
              })
              .catch((error) => {
                setIsLoading(false);
                setIsError(true);
                console.log(error);
              });
              axios.get("http://127.0.0.1:8000/api/niveau/getAll")
                .then((response) => {
                    setIsLoading(false);
                    setNiveau(response.data);
                    //console.log(response.data)
                })
                .catch((error) => {
                    setIsLoading(false);
                    setIsError(true);
                    console.log(error);
                });
                axios.get("http://127.0.0.1:8000/api/salle/getAll")
                .then((response) => {
                    setIsLoading(false);
                    setTypeSalle(response.data);
                    //console.log(response.data)
                    })
                    .catch((error) => {
                    setIsLoading(false);
                    setIsError(true);
                    console.log(error);
                    });
                    axios.get("http://127.0.0.1:8000/api/professeur/getAll")
                .then((response) => {
                    setIsLoading(false);
                    setProfesseur(response.data);
                    //console.log(response.data)
                    })
                    .catch((error) => {
                    setIsLoading(false);
                    setIsError(true);
                    console.log(error);
                    });
            
        }
        useEffect(() => {
            fetchData();
           // console.log("Value of Selected filiere in State is: ", selectedFiliere.nomfiliere);
          }, [selectnomniveau,selectednomprofesseur,selectedtypesalle,nommatiere,state]);
          if (isLoading) {
            alert(selectedniveau)
          }
    
        function changehandlernomniveau(event){
            setSelectedNiveau({idniveau :event});
        }
        function changehandlernommatiere(event){

            setSelectednommatiere({matiere :event.currentTarget.value});
    
        }
        function changehandlertypesalle(event){
            setSelectedTypesalle({typesalle :event});
        }
        function changehandlernomprofesseur(event){
            setSelectedNomProfesseur({idprofesseur :event});
        }

        function updateelement(){
            console.log(idmatiere.id,nommatiere.matiere,selectedtypesalle.typesalle,selectednomprofesseur.idprofesseur,selectedniveau.idniveau)
            setState({id:idmatiere.id,matiere:nommatiere.matiere,typesalle:selectedtypesalle.typesalle,idprofesseur:selectednomprofesseur.idprofesseur,idniveau:selectedniveau.idniveau})
            console.log(state)
            axios.post("http://127.0.0.1:8000/api/matiere/update",state)
            .then((response) => {
                setIsLoading(false);
                console.log(response.data,state)
              })
              .catch((error) => {
                setIsLoading(false);
                setIsError(true);
                console.log(error,state);
              });
        
        
           
              //handleOkMod()
        
          }

        function deleteelement(idniveau){

            axios.post("http://127.0.0.1:8000/api/matiere/delete",{id:idniveau})
            .then((response) => {
                setIsLoading(false);
                console.log(response.data)
              })
              .catch((error) => {
                setIsLoading(false);
                setIsError(true);
                console.log(error);
              });
        
          }
        
          function handleclickdelete(event){
            console.log(event.currentTarget.value)
            setidmatiere({id :event.currentTarget.value})
            console.log(idmatiere)
            deleteelement()
            
           
          }
          function handelupdate(event){
            //console.log(event.target.value);
            setidmatiere({id :event.currentTarget.value})
            console.log(idmatiere)
            showModalMod()
           
          }
          
       
          function handletypesalle(event){
            
            
            console.log(event.target.value);
            setSelectedTypesalle({typesalle :event.currentTarget.value})
          
           
          }
        
   
        


    const success = (mess) => {
        message.success('Matiere ' + mess + ' avec succès !');
    };
    const error = () => {
        message.error('Opération annuler');
    };
    const [visibleAdd, setVisibleAdd] = useState(false)
    const [visibleMod, setVisibleMod] = useState(false)
    const showModalMod = () => {
        setVisibleMod(true);
    };
    const showModalAdd = () => {
        setVisibleAdd(true);
    };
    const handleOkMod = () => {
        setVisibleMod(false);
        success("Modifier");
    };
    const handleOkAdd = () => {
        setVisibleAdd(false);
        success("Ajouter");
    };

    const handleCancel = () => {
        setVisibleAdd(false);
        setVisibleMod(false);
        error();
    };
    return (
        <div>
            <Space style={{ display: "flex" }} align="baseline"  >
                <Select style={{ width: 100, marginBottom: 5 }} name="niveau" placeholder="Niveau">
                    <Select.Option value="3isi">3isi</Select.Option>
                    <Select.Option value="2isi">2isi</Select.Option>
                    <Select.Option value="4isi">4isi</Select.Option>
                </Select>
                <Select style={{ width: 150 }} name="professeur" placeholder="Professeur">
                    <Select.Option value="Outzoughit">Outzoughit</Select.Option>
                    <Select.Option value="Lahcen">Lahcen</Select.Option>
                    <Select.Option value="Safsouf">Safsouf</Select.Option>
                </Select>
                <Select name="type" placeholder="type de salle">
                    <Select.Option value="informatique">informatique</Select.Option>
                    <Select.Option value="electronique">electronique</Select.Option>
                    <Select.Option value="normale">normale</Select.Option>
                </Select>
            </Space>
            <table>
                <tr>
                    
                    <th>Nom Matiere</th>
                    <th>typesalle</th>
                    <th>id Professeur</th>
                    <th>idniveau</th>
                    <th class={styles.action}>Actions</th>
                </tr>
                { matieres.map((matiere)=>
            <tr >
            <td>{matiere.matiere}</td>
              <td>{matiere.typesalle}</td>
              <td>{matiere.idprofesseur}</td>
              <td>{matiere.idniveau}</td>
             
              <td ><Tooltip title="Modifier">
              <Button className={styles.icon1}  value={matiere.id} onClick={handelupdate} type="primary" shape="circle" icon={<EditOutlined />}  />
                 </Tooltip><Tooltip title="Supprimer">
                 <Button type="primary"   value={matiere.id} onClick={(e)=>{deleteelement(e.currentTarget.value)}} shape="circle" icon={<UserDeleteOutlined />}  />
                </Tooltip></td>
          </tr> )}
            </table>
            <Button type="dashed" icon={<PlusOutlined />} onClick={showModalAdd}>
                Ajouter Matieres
            </Button>
            <Modal
                visible={visibleAdd}
                title="Ajouter Matieres"
                onOk={handleOkAdd}
                onCancel={handleCancel}
                width={1000}
                footer={[
                    <Button key="back" onClick={handleCancel}>
                        Annuler
                    </Button>,
                    <Button key="submit" type="primary" onClick={handleOkAdd}>
                        Terminer
                    </Button>,

                ]}
            >
                <Matieres />
            </Modal>
            <Modal
                visible={visibleMod}
                title="Modifer Professeur"
                onOk={handleOkMod}
                onCancel={handleCancel}
                width={600}
                footer={[
                    <Button key="back" onClick={handleCancel}>
                        Annuler
                    </Button>,
                    <Button key="submit" type="primary" onClick={updateelement}>
                        Modifier
                    </Button>,

                ]}
            >
                <Form name="nest-messages" validateMessages={'Nom obligatoir'}>
                    <Form.Item label="niveau :" className={styles.inpu}>
                        <Select placeholder="Niveau " onChange={changehandlernomniveau}>
                            {niveaux.map((niveau)=><Select.Option selected={0} key={niveau.id} value={niveau.id}>{niveau.nomniveau}</Select.Option>)}
                            </Select>
                    </Form.Item>
                    
                        <Space style={{ display: 'flex', marginBottom: 8, margin: 'auto' }} align="baseline"  >
                            <Form.Item
                                
                                rules={[{ required: true, message: 'entrer le nom de la matière !' }]}
                            >
                                <Input name="Nommatiere" placeholder="nom de la matière"  onChange={changehandlernommatiere} onBlur={changehandlernommatiere}/>
                            </Form.Item>
                            <Form.Item >
                            <Select placeholder="nom professeur" onChange={changehandlernomprofesseur}>
                            {professeur.map((prof)=><Select.Option selected={0} key={prof.id} value={prof.id}>{prof.nom+ " "+prof.prenom}</Select.Option>)}
                            </Select>
                            </Form.Item>
                            <Form.Item >
                            <Select placeholder="type de salle" onChange={changehandlertypesalle}>
                            {selectedsalle.map((salle)=><Select.Option selected={0} key={salle.id} value={salle.id}>{salle.TypeSalle}</Select.Option>)}
                            </Select>
                            </Form.Item>
                        </Space>
                </Form>

            </Modal>
        </div>



    );
}

export default ListMatieres;