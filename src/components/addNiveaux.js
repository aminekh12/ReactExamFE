import React,{ useState,useEffect,useRef } from "react";
import styles from "./Homepage.module.css";
import axios from "axios";
import { Form, Input, Button, Select, Space } from 'antd';
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
const Niveaux=(props)=> {
    const [state, setState] = useState({nomniveau:"",idfiliere:""});
    const [selectedFiliere,setSelectedFiliere] = useState(["0"]);
    const [nomfilieres, setNomfilieres] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    
    const fetchData=()=>{
        axios.get("http://127.0.0.1:8000/api/filiere/getAll")
        .then((response) => {
            setIsLoading(false);
            setNomfilieres(response.data);
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
      }, [selectedFiliere]);
      if (isLoading) {
        alert(nomfilieres)
      }
    function changehandlernomfiliere(event){
        setSelectedFiliere({idfilliere :event});
        setState({nomniveau :state.nomniveau,idfiliere:selectedFiliere.idfilliere});
        console.log("Value  in State is: ", state );
        
        
    }
    function changehandlernomniveau(e){
        setState({nomniveau :e.target.value,idfiliere:selectedFiliere.idfilliere});
        
        console.log("Value of nomniveau in State is: ", state );
    
    }
 
    function insert(){
        console.log(state)
        axios.post("http://127.0.0.1:8000/api/niveau/insert", state)
        .then(response=>{
            console.log(response,state);
        }).catch(error=>{
            console.log(error);
        })
        console.log('Received values of form:', state);
    }
    const onFinish = values => {
        console.log('Received values of form:', values);
    };
    return (

        <div className={styles.container}>
            <div className="display-5 text-center  text-secondary" >Menu des niveaux</div>

            <Form name="dynamic_form_nest_item" onFinish={onFinish} autoComplete="off">
                <Form.Item label="Filiére :" className={styles.inpu}>
                    <Select   onChange={changehandlernomfiliere} >
                    {nomfilieres.map((nomfiliere)=><Select.Option selected={0} key={nomfiliere.id} value={nomfiliere.id}>{nomfiliere.nomfiliere}</Select.Option>)}
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
                                        name="nom"
                                        rules={[{ required: true, message: 'entrer le nom de niveau !' }]}
                                    >
                                        <Input placeholder="nom de niveau"  onBlur={changehandlernomniveau} onInput={changehandlernomniveau} />
                                    </Form.Item>

                                    <MinusCircleOutlined onClick={() => remove(name)} className={styles.dynamic_delete_button} />
                                </Space>
                            ))}
                            <Form.Item>
                                <Button className={styles.inp} type="dashed" onClick={() => add()} icon={<PlusOutlined />}>
                                    Ajouter un niveau
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

export default Niveaux;