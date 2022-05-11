import React,{ useState,useEffect,useRef } from "react";
import styles from "./Homepage.module.css";
import axios from "axios";

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
const Groupe=(props)=> {
    const [state, setState] = useState();
    
    const [selectedniveau,setSelectedNiveau] = useState([]);
    const [selectednomgroupe,setSelectednomgroupe] = useState([]);
    const [selectednombreetudiant,setSelectednombreetudiant] = useState([]);

    const [niveau, setNiveau] = useState([]);

    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const onFinish = values => {
        console.log('Received values of form:', values);
    };
    const fetchData=()=>{
        axios.get("http://127.0.0.1:8000/api/niveau/getAll")
        .then((response) => {
            setIsLoading(false);
            setNiveau(response.data);
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
    function changehandlernomgroupe(event){
        setSelectednomgroupe({nomgroupe :event.target.value});

    }
    function changehandlernombreetudiant(event){
        setSelectednombreetudiant({nombreetudiant :event.target.value });
    }
 
    function insert(){
        setState({ nomgroupe:selectednomgroupe.nomgroupe, nombreetudiant:selectednombreetudiant.nombreetudiant, idniveau:selectedniveau.idniveau})

        axios.post("http://127.0.0.1:8000/api/groupe/insert", state)
        .then(response=>{
            console.log(response,state);
        }).catch(error=>{
            console.log(state,error);
        })
        console.log('Received values of form:------------', state);
    }
    return (

        <div className={styles.container}>
            <div className="display-5 text-center  text-secondary" >Menu des Groupes</div>

            <Form name="dynamic_form_nest_item" onFinish={onFinish} autoComplete="off">
                
                <Form.List name="users">
                    {(fields, { add, remove }) => (
                        <>
                            {fields.map(({ key, name, ...restField }) => (
                                <Space key={key} style={{ display: 'flex', marginBottom: 8, margin: 'auto' }} align="baseline"  >
                                    <Form.Item
                                        className={styles.space1}
                                        {...restField}
                                        rules={[{ required: true, message: 'entrer le nom de la Groupe !' }]}
                                    >
                                        <Input name="Nomgroupe" placeholder="nom de la Groupe"  onChange={changehandlernomgroupe} onBlur={changehandlernomgroupe} />
                                    </Form.Item>
                                    <Form.Item   className={styles.space3}>
                                    <Input name="nombreetudiant" placeholder="nombre" min={1}  onChange={changehandlernombreetudiant} onBlur={changehandlernombreetudiant}/>
                                    </Form.Item>
                                    <Form.Item className={styles.dropboxprof}>
                                        <Select onSelect={changehandlernomniveau} >
                                             {niveau.map((niveau)=><Select.Option  key={niveau.id} value={niveau.id}>{niveau.nomniveau}</Select.Option>)}
                                        </Select>
                                    </Form.Item>

                                    <MinusCircleOutlined onClick={() => remove(name)} className={styles.dynamic_delete_button} />
                                </Space>
                            ))}
                            <Form.Item>
                                <Button className={styles.inp} type="dashed" onClick={() => add()} icon={<PlusOutlined />}>
                                    Ajouter un Groupe
                                </Button>
                            </Form.Item>
                        </>
                    )}
                </Form.List>
                <Form.Item>
                    <Button type="primary" htmlType="submit" onClick={insert}>
                        Insérer
                    </Button>
                </Form.Item>
            </Form>


            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
        </div>
    );
}

export default Groupe;