<<<<<<< HEAD
import React,{ useState,useEffect,useRef } from "react";
import styles from "./Homepage.module.css";
import axios from "axios";
=======
import React from "react";
import styles from "./Homepage.module.css";
>>>>>>> origin/master

import { Form, Input, Button, Select, Space, InputNumber } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 4 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 20 },
    },
};
const formItemLayoutWithOutLabel = {
    wrapperCol: {
        xs: { span: 24, offset: 0 },
        sm: { span: 20, offset: 4 },
    },
};
<<<<<<< HEAD
const Matiere=(props)=> {
    const [state, setState] = useState();
    
    const [selectedniveau,setSelectedNiveau] = useState([]);
    const [nommatiere,setSelectednommatiere] = useState([]);
    const [selectedtypesalle,setSelectedTypesalle] = useState([]);
    const [selectednomprofesseur,setSelectedNomProfesseur] = useState([]);

    const [niveau, setNomNiveau] = useState([]);
    const [salle, setTypeSalle] = useState([]);
    const [professeur, setProfesseur] = useState([]);

    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const onFinish = values => {
        console.log('Received values of form:', values);
    };
    const fetchData=()=>{
        axios.get("http://127.0.0.1:8000/api/niveau/getAll")
        .then((response) => {
            setIsLoading(false);
            setNomNiveau(response.data);
            console.log(response.data)
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
              console.log(response.data)
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
              console.log(response.data)
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
      }, [selectedniveau]);
      if (isLoading) {
        alert(selectedniveau)
      }

    function changehandlernomniveau(event){
        setSelectedNiveau({idniveau :event});
    }
    function changehandlernommatiere(event){
        setSelectednommatiere({matiere :event.target.value});

    }
    function changehandlertypesalle(event){
        setSelectedTypesalle({typesalle :event});
    }
    function changehandlernomprofesseur(event){
        setSelectedNomProfesseur({idprofesseur :event});
    }
 
    function insert(){
        setState({ matiere:nommatiere.nommatiere, typesalle:selectedtypesalle.typesalle, idprofesseur:selectednomprofesseur.idprofesseur, idniveau:selectedniveau.idniveau})
        axios.post("http://127.0.0.1:8000/api/matiere/insert", state)
        .then(response=>{
            console.log(response,state);
        }).catch(error=>{
            console.log(error);
        })
        console.log('Received values of form:------------', state);
    }
=======
function Matiers(props) {
    const onFinish = values => {
        console.log('Received values of form:', values);
    };
>>>>>>> origin/master
    return (

        <div className={styles.container}>
            <div className="display-5 text-center  text-secondary" >Menu des matières</div>

            <Form name="dynamic_form_nest_item" onFinish={onFinish} autoComplete="off">
                <Form.Item label="niveau :" className={styles.inpu}>
<<<<<<< HEAD
                    <Select onSelect={changehandlernomniveau} >
                    {niveau.map((niveau)=><Select.Option  key={niveau.id} value={niveau.id}>{niveau.nomniveau}</Select.Option>)}
=======
                    <Select name ="niveau">
                        <Select.Option value="niveau12">niveau 12</Select.Option>
>>>>>>> origin/master
                    </Select>
                </Form.Item>
                <Form.List name="users">
                    {(fields, { add, remove }) => (
                        <>
                            {fields.map(({ key, name, ...restField }) => (
                                <Space key={key} style={{ display: 'flex', marginBottom: 8, margin: 'auto' }} align="baseline"  >
                                    <Form.Item
                                        className={styles.space1}
                                        {...restField}
                                        rules={[{ required: true, message: 'entrer le nom de la matière !' }]}
                                    >
<<<<<<< HEAD
                                        <Input name="Nommatiere" placeholder="nom de la matière"  onChange={changehandlernommatiere} onBlur={changehandlernommatiere} />
                                    </Form.Item>
                                    <Form.Item   className={styles.space3}>
                                        <Select placeholder="type de salle" onChange={changehandlertypesalle}>
                                             {salle.map((salle)=><Select.Option selected={0} key={salle.id} value={salle.id}>{salle.TypeSalle}</Select.Option>)}
                                        </Select>
                                    </Form.Item>
                                    <Form.Item className={styles.dropboxprof}>
                                        <Select placeholder="Professeur :"  onChange={changehandlernomprofesseur} >
                                            {professeur.map((professeur)=><Select.Option selected={0} key={professeur.id} value={professeur.id}>{professeur.nom+" "+professeur.prenom}</Select.Option>)}
=======
                                        <Input name="Nommatiere" placeholder="nom de la matière" />
                                    </Form.Item>
                                    <Form.Item   className={styles.space3}>
                                        <Select name="type" placeholder="type de salle">
                                            <Select.Option value="informatique">informatique</Select.Option>
                                            <Select.Option value="electronique">electronique</Select.Option>
                                            <Select.Option value="normale">normale</Select.Option>
                                        </Select>
                                    </Form.Item>
                                    <Form.Item className={styles.dropboxprof}>
                                        <Select name="Nomprofesseur" placeholder="Professeur">
                                            <Select.Option value="prof1">prof 1</Select.Option>
>>>>>>> origin/master
                                        </Select>
                                    </Form.Item>

                                    <MinusCircleOutlined onClick={() => remove(name)} className={styles.dynamic_delete_button} />
                                </Space>
                            ))}
                            <Form.Item>
                                <Button className={styles.inp} type="dashed" onClick={() => add()} icon={<PlusOutlined />}>
                                    Ajouter un matière
                                </Button>
                            </Form.Item>
                        </>
                    )}
                </Form.List>
                <Form.Item>
<<<<<<< HEAD
                    <Button type="primary" htmlType="submit" onClick={insert}>
=======
                    <Button type="primary" htmlType="submit">
>>>>>>> origin/master
                        Insérer
                    </Button>
                </Form.Item>
            </Form>


            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
        </div>
    );
}

<<<<<<< HEAD
export default Matiere;
=======
export default Matiers;
>>>>>>> origin/master
