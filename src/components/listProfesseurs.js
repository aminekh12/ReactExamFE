import React,{ useState,useEffect,useRef } from "react";
import styles from "./Homepage.module.css";
import axios from "axios";
import { Button, Tooltip, Modal, Form, Input,message } from 'antd';
import { EditOutlined, UserDeleteOutlined, PlusOutlined } from '@ant-design/icons';
import Professeurs from "./addProfesseurs";
 

const ListProfesseurs=(props)=> {
 
  const [state, setState] = useState();
 
    const [professeur, setProfesseur] = useState([]);
    const [idprofesseur, setIdprofesseur] = useState();
    const [nomprofesseur, setNomprofesseur] = useState();

    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
      
    const fetchData=()=>{
      
      axios.get("http://127.0.0.1:8000/api/professeur/getAll")
      .then((response) => {
          setIsLoading(false);
          setProfesseur(response.data)
          
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
    }, [idprofesseur,state,nomprofesseur,setIdprofesseur]);
    if (isLoading) {
      

    }
    function updateelement(){
      setState({id:idprofesseur.id,nom:nomprofesseur.nom,prenom:nomprofesseur.prenom})
      axios.post("http://127.0.0.1:8000/api/professeur/update",state)
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
 
      axios.post("http://127.0.0.1:8000/api/professeur/delete",{id:idprof})
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
      setIdprofesseur({id :event.currentTarget.value})
      console.log(idprofesseur)
      deleteelement()
      
     
    }
    function handelupdate(event){
      
      
      console.log(event.target.value);
      setIdprofesseur({id :event.currentTarget.value})
      console.log(idprofesseur)
      showModalMod()
     
    }
    
    function handlenomprof(event){
      
      
      console.log(event.target.value);
      setNomprofesseur({nom :event.currentTarget.value,prenom:event.currentTarget.value})
    
     
    }

  const success = (mess) => {
    message.success('Professeur ' + mess + ' avec succ??s !');
  };
  const error = () => {
    message.error('Op??ration annuler');
  };
  const [visibleAdd, setVisibleAdd] = useState(false)
  const [visibleMod, setVisibleMod] = useState(false)
  const showModalMod = (ids) => {
    setVisibleMod(true,{id:ids});
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
              <th class={styles.id}>ID Professeur</th>
              <th class={styles.name}>Nom Complete</th>
              <th class={styles.action}>id</th>
              <th class={styles.action}>Actions</th>
            </tr>
           { professeur.map((prof)=>
          <tr value={prof.id}>
              <td>{prof.nom}</td>
              <td>{prof.prenom}</td>
             
              <td ><Tooltip title="Modifier">
              <Button className={styles.icon1}  value={prof.id} onClick={handelupdate} type="primary" shape="circle" icon={<EditOutlined />}  />
                 </Tooltip><Tooltip title="Supprimer">
                 <Button type="primary"   value={prof.id} onClick={(e)=>{deleteelement(e.currentTarget.value)}} shape="circle" icon={<UserDeleteOutlined />}  />
                </Tooltip></td>
          </tr> )}
          
        </table>
        <Button type="dashed" icon={<PlusOutlined />} onClick={showModalAdd}>
          Ajouter un professeur
        </Button>
        <Modal
          visible={visibleAdd}
          title="Ajouter Professeurs"
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
          <Professeurs />
        </Modal>
        <Modal
          visible={visibleMod}
          title="Modifer Professeur"
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
            <Form.Item name={"nomProfesseur"} label="Nom professeur" rules={[{ required: true }]}>
              <Input onBlur={handlenomprof} />
            </Form.Item>
          </Form>

        </Modal>
    </div>




  );
}

export default ListProfesseurs;