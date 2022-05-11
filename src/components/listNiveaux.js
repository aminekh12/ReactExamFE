import React, { useState } from "react";
import styles from "./Homepage.module.css";
import { Button, Tooltip, Modal, message } from 'antd';
import { UserDeleteOutlined, PlusOutlined } from '@ant-design/icons';
import Niveaux from "./addNiveaux";

function ListNiveaux(props) {
  const success = (mess) => {
    message.success('Niveau' + mess + ' avec succès !');
  };
  const error = () => {
    message.error('Opération annuler');
  };
  const [visibleAdd, setVisibleAdd] = useState(false)


  const showModalAdd = () => {
    setVisibleAdd(true);
  };

  const handleOkAdd = () => {
    setVisibleAdd(false);
    success("'s Ajouter");
  };

  const handleCancel = () => {
    setVisibleAdd(false);
    error();
  };
  return (
    <div>
      <table>
        <tr>
          <th class={styles.id}>ID Niveau</th>
          <th >Nom Filiere</th>
          <th >Niveau</th>
          <th class={styles.action}>Actions</th>
        </tr>
        <tr>
          <td>1</td>
          <td>isi</td>
          <td>1</td>
          <td ><Tooltip title="Supprimer">
              <Button type="primary" shape="circle" icon={<UserDeleteOutlined />} />
            </Tooltip></td>
        </tr>
        <tr>
          <td>2</td>
          <td>isi</td>
          <td>2</td>
          <td ><Tooltip title="Supprimer">
              <Button type="primary" shape="circle" icon={<UserDeleteOutlined />} />
            </Tooltip></td>
        </tr>
        <tr>
          <td>3</td>
          <td>isi</td>
          <td>3</td>
          <td ><Tooltip title="Supprimer">
              <Button type="primary" shape="circle" icon={<UserDeleteOutlined />} />
            </Tooltip></td>
        </tr>
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
    </div >



  );
}

export default ListNiveaux;