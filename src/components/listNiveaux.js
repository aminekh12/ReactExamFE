import React,{ useState,useEffect,useRef } from "react";
import axios from "axios";
import styles from "./Homepage.module.css";
import { Button, Tooltip, Modal, Form,Select, Input,message } from 'antd';
import { EditOutlined, UserDeleteOutlined, PlusOutlined } from '@ant-design/icons';
import Niveaux from "./addNiveaux";

function ListNiveaux(props) {

  const [state, setState] = useState();
  const [selectedFiliere,setSelectedFiliere] = useState();
  const [nomfilieres, setNomfilieres] = useState([]);
  const [niveaux, setniveau] = useState([]);
  const [idniveau, setIdniveau] = useState();
  const [nomniveaus, setNomniveau] = useState();

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
    
  const fetchData=()=>{
    
    axios.get("http://127.0.0.1:8000/api/niveau/getAll")
    .then((response) => {
        setIsLoading(false);
        setniveau(response.data)
        
      })
      .catch((error) => {
        setIsLoading(false);
        setIsError(true);
        console.log(error);
      });

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
    fetchData()
  
   
   // console.log("Value of Selected filiere in State is: ", selectedFiliere.nomfiliere);
  }, [idniveau,state,nomniveaus]);
  if (isLoading) {
    

  }
  function updateelement(){
    console.log(idniveau.id,nomniveaus.nom,selectedFiliere.idfiliere)
    setState({id:idniveau.id,nomniveau:nomniveaus.nom,idfiliere:selectedFiliere.idfilliere})
    axios.post("http://127.0.0.1:8000/api/niveau/update",state)
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
  function deleteelement(idniveau){

    axios.post("http://127.0.0.1:8000/api/niveau/delete",{id:idniveau})
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
    setIdniveau({id :event.currentTarget.value})
    console.log(idniveau)
    deleteelement()
    
   
  }
  function handelupdate(event){
    //console.log(event.target.value);
    setIdniveau({id :event.currentTarget.value})
    console.log(idniveau)
    showModalMod()
   
  }
  
  function handlenonniveau(event){
    
    
    console.log(event.target.value);
    setNomniveau({nom :event.currentTarget.value})
  
   
  }

  function changehandlernomfiliere(event){
    setSelectedFiliere({idfilliere :event});
    console.log("Value  in State is: ", state );
    
    
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
          <th >Nom Niveau</th>
          <th >id Filiere</th>
          <th class={styles.action}>Actions</th>
        </tr>
        { niveaux.map((niveau)=>
          <tr value={niveau.id}>
              <td>{niveau.nomniveau}</td>
              <td>{niveau.idfiliere}</td>
             
              <td ><Tooltip title="Modifier">
              <Button className={styles.icon1}  value={niveau.id} onClick={handelupdate} type="primary" shape="circle" icon={<EditOutlined />}  />
                 </Tooltip><Tooltip title="Supprimer">
                 <Button type="primary"   value={niveau.id} onClick={(e)=>{deleteelement(e.currentTarget.value)}} shape="circle" icon={<UserDeleteOutlined />}  />
                </Tooltip></td>
          </tr> )}
      </table>
      <Button type="dashed" icon={<PlusOutlined />} onClick={showModalAdd}>
        Ajouter un Niveau
      </Button>
      
      <Modal
        visible={visibleAdd}
        title="Ajouter niveaux"
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
        <Niveaux />
      </Modal>
      <Modal
        visible={visibleMod}
        title="Modifer Niveau"
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
          <Form.Item name={"nomniveau"} label="Nom niveau" rules={[{ required: true }]}>
            <Input onBlur={handlenonniveau} onChange={handlenonniveau}/>
          </Form.Item>
          <Form.Item name={"idfiliere"} label="Nom filiere" rules={[{ required: true }]}>
          <Select   onChange={changehandlernomfiliere} >
                    {nomfilieres.map((nomfiliere)=><Select.Option selected={0} key={nomfiliere.id} value={nomfiliere.id}>{nomfiliere.nomfiliere}</Select.Option>)}
                    </Select>


          </Form.Item>
        </Form>

      </Modal>
    </div>



  );
}

export default ListNiveaux;