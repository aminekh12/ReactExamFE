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
<<<<<<< HEAD
const formItemLayoutWithOutLabel = {
  wrapperCol: {
    xs: { span: 24, offset: 0 },
    sm: { span: 20, offset: 4 },
  },
};
const Salles=(props)=> {
  const [state, setState] = useState();
 
  const [selectednomsalle,setSelectednomesalle] = useState([]);
  const [selectedetagesalle,setSelectedetagesalle] = useState([]);
  const [selectednombreplaces,setSelectednombreplaces] = useState([]);

  const [selectedtypesallesalle, setselectedTypeSalle] = useState([]);
  const [salle, setTypeSalle] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const fetchData=()=>{
      
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
      
  }
  useEffect(() => {
      fetchData();
     // console.log("Value of Selected filiere in State is: ", selectedFiliere.nomfiliere);
    }, []);
    if (isLoading) {

    }

  function changehandlernomsalle(event){
    setSelectednomesalle({nomsalle :event.target.value});
  }
  function changehandlernombreplace(event){
      setSelectednombreplaces({nombreplace :event.target.value});

  }
  function changehandlertypesalle(event){
    setselectedTypeSalle({typesalle :event});
  }
  function changehandleretage(event){
      setSelectedetagesalle({etagesalle :event.target.value});
  }

  function insert(){
      setState({ nomsalle:selectednomsalle.nomsalle, typesalle:selectedtypesallesalle.typesalle, etagesalle:selectedetagesalle.etagesalle, nombreplaces:selectednombreplaces.nombreplace})
      axios.post("http://127.0.0.1:8000/api/salle/insert", state)
      .then(response=>{
          console.log(response,state);
      }).catch(error=>{
          console.log(error,state);
      })
      console.log('Received values of form:------------', state);
  }
=======

function Salles(props) {
>>>>>>> origin/master
  const onFinish = values => {
    console.log('Received values of form:', values);
  };
  return (

    <div className={styles.container}>
      <div className="display-5 text-center  text-secondary" >Menu des salles</div>

      <Form name="dynamic_form_nest_item" onFinish={onFinish} autoComplete="off">
        <Form.List name="users">
          {(fields, { add, remove }) => (
            <>
              {fields.map(({ key, name, ...restField }) => (
                <Space key={key} style={{ display: 'flex', marginBottom: 8, margin: 'auto' }} align="baseline"  >
                  <Form.Item
                    className={styles.space11}
                    {...restField}
                    name="Nomsalle"
                    rules={[{ required: true, message: 'entrer le nom de la salle !' }]}
                  >
<<<<<<< HEAD
                    <Input placeholder="nom de salle"  onChange={changehandlernomsalle} onBlur={changehandlernomsalle}/>
                  </Form.Item>
                  <Form.Item  {...restField} className={styles.space3}>
                  <Select placeholder="type de salle" onChange={changehandlertypesalle}>
                    {salle.map((salle)=><Select.Option selected={0} key={salle.id} value={salle.id}>{salle.TypeSalle}</Select.Option>)}
=======
                    <Input placeholder="nom de salle" />
                  </Form.Item>
                  <Form.Item  {...restField} className={styles.space3}>
                    <Select name="Typesalle" placeholder="type de salle">
                      <Select.Option value="informatique">informatique</Select.Option>
                      <Select.Option value="electronique">electronique</Select.Option>
                      <Select.Option value="normale">normale</Select.Option>
>>>>>>> origin/master
                    </Select>
                  </Form.Item>
                  <Form.Item
                    {...formItemLayout}
                  >
<<<<<<< HEAD
                    <Input name="places" placeholder="places" min={1}  onChange={changehandlernombreplace} onBlur={changehandlernombreplace}/>
=======
                    <InputNumber name="places" placeholder="places" min={1} />
>>>>>>> origin/master
                  </Form.Item>
                  <Form.Item
                    {...formItemLayout}
                  >
<<<<<<< HEAD
                    <Input name="etage" placeholder="etage" min={1} onChange={changehandleretage} onBlur={changehandleretage} />
=======
                    <InputNumber name="etage" placeholder="etage" min={1} />
>>>>>>> origin/master
                  </Form.Item>

                  <MinusCircleOutlined onClick={() => remove(name)} className={styles.dynamic_delete_button} />
                </Space>
              ))}
              <Form.Item>
                <Button className={styles.inp} type="dashed" onClick={() => add()} icon={<PlusOutlined />}>
                  Ajouter un salle
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
export default Salles;



=======
export default Salles;
>>>>>>> origin/master
