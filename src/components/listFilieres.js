import React,{ useState,useEffect,useRef } from "react";
import axios from "axios";
import styles from "./Homepage.module.css";
import { Button, Tooltip, Modal, Form, Input,message } from 'antd';
import { EditOutlined, UserDeleteOutlined, PlusOutlined } from '@ant-design/icons';
import Filieres from "./addFilieres";

const ListFilieres=(props)=> {

  const [state, setState] = useState();
 
  const [fillieres, setFiliere] = useState([]);
  const [idFiliere, setidFiliere] = useState();
  const [nomFiliere, setNomfiliere] = useState();

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
    
  const fetchData=()=>{
    
    axios.get("http://127.0.0.1:8000/api/filiere/getAll")
    .then((response) => {
        setIsLoading(false);
        setFiliere(response.data)
        
      })
      .catch((error) => {
        setIsLoading(false);
        setIsError(true);
        console.log(error);
      });

  }
  
  useEffect(() => {
    fetchData()
  
   
   // console.log("Value of Selected filiere in State is: ", selectedFiliere.nomfiliere);
  }, [idFiliere,state,nomFiliere,setidFiliere]);
  if (isLoading) {
    

  }
  function updateelement(){
    setState({id:idFiliere.id,nomfiliere:nomFiliere.nomfiliere})
    axios.post("http://127.0.0.1:8000/api/filiere/update",state)
    .then((response) => {
        setIsLoading(false);
        console.log(response.data)
      })
      .catch((error) => {
        setIsLoading(false);
        setIsError(true);
        console.log(error);
      });
      //handleOkMod()

  }
  function deleteelement(idprof){

    axios.post("http://127.0.0.1:8000/api/filiere/delete",{id:idFiliere})
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
    setidFiliere({id :event.currentTarget.value})
    console.log(idFiliere)
    deleteelement()
    
   
  }
  function handelupdate(event){
    
    
    console.log(event.target.value);
    setidFiliere({id :event.currentTarget.value})
    console.log(idFiliere)
    showModalMod()
   
  }
  
  function handlenomfiliere(event){
    
    
    console.log(event.target.value);
    setNomfiliere({nom :event.currentTarget.value})
  
   
  }


  const success = (mess) => {
    message.success('Filiere ' + mess + ' avec succès !');
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
      <table>
        <tr>
       
          <th class={styles.name}>Nom filière</th>
          <th class={styles.action}>Actions</th>
        </tr>
        { fillieres.map((filiere)=>
          <tr value={filiere.id}>
              <td>{filiere.nomfiliere}</td>
             
              <td ><Tooltip title="Modifier">
              <Button className={styles.icon1}  value={filiere.id} onClick={handelupdate} type="primary" shape="circle" icon={<EditOutlined />}  />
                 </Tooltip><Tooltip title="Supprimer">
                 <Button type="primary"   value={filiere.id} onClick={(e)=>{deleteelement(e.currentTarget.value)}} shape="circle" icon={<UserDeleteOutlined />}  />
                </Tooltip></td>
          </tr> )}
      </table>
      <Button type="dashed" icon={<PlusOutlined />} onClick={showModalAdd}>
        Ajouter un filière
      </Button>
      <Modal
        visible={visibleAdd}
        title="Ajouter filières"
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
        <Filieres />
      </Modal>
      <Modal
        visible={visibleMod}
        title="Modifer filière"
        onOk={handleOkMod}
        onCancel={handleCancel}
        width={550}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Annuler
          </Button>,
          <Button key="submit" type="primary" onClick={updateelement}>
            Modifier
          </Button>,

        ]}
      >
        <Form name="nest-messages" validateMessages={'Nom obligatoire'}>
          <Form.Item name={"nomfiliere"} label="Nom filière" rules={[{ required: true }]}>
            <Input onBlur={handlenomfiliere}/>
          </Form.Item>
        </Form>

      </Modal>
    </div>



  );
}

export default ListFilieres;