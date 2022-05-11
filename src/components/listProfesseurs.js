import React,{ useState,useEffect,useRef } from "react";
import styles from "./Homepage.module.css";
import axios from "axios";
import { Button, Tooltip, Modal, Form, Input,message } from 'antd';
import { EditOutlined, UserDeleteOutlined, PlusOutlined } from '@ant-design/icons';
import Professeurs from "./addProfesseurs";
 

const ListProfesseurs=(props)=> {

 
  const [state, setState] = useState([]);
 
    const [professeur, setProfesseur] = useState([]);
    const [idprofesseur, setidprofesseur] = useState([]);

    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
      
    const fetchData=()=>{
      
      
      axios.get("http://127.0.0.1:8000/api/professeur/getAll")
      .then((response) => {
          setIsLoading(false);
          setProfesseur(response.data);
          console.log(response.data)
          console.log(professeur)
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
    function deleteelement(){
      
      axios.post("http://127.0.0.1:8000/api/professeur/delete",state)
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

    function handleclickdelete(event){

      setidprofesseur({id :event.target.value})
      console.log(idprofesseur)
     
    }

  const success = (mess) => {
    message.success('Professeur ' + mess + ' avec succès !');
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
              <th class={styles.id}>ID Professeur</th>
              <th class={styles.name}>Nom Complete</th>
              <th class={styles.action}>Actions</th>
            </tr>
           { professeur.map((professeur)=>
          <tr>
          <td>{professeur.nom}</td>
          <td>{professeur.prenom}</td>
          <td ><Tooltip title="Modifier">
                <Button class={styles.icon1} onClick={showModalMod} type="primary" shape="circle" icon={<EditOutlined />} />
              </Tooltip><Tooltip title="Supprimer">
                  <Button type="primary"   value={professeur.id} onClick={(event)=>{}} shape="circle" icon={<UserDeleteOutlined />}  />
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
            <Button key="submit" type="primary" onClick={handleOkMod}>
              Modifier
            </Button>,

          ]}
        >
          <Form name="nest-messages" validateMessages={'Nom obligatoir'}>
            <Form.Item name={"nomProfesseur"} label="Nom professeur" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
          </Form>

        </Modal>
    </div>




  );
}


export default ListProfesseurs;