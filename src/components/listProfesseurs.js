import React, { useState } from "react";
import styles from "./Homepage.module.css";
import { Button, Tooltip, Modal, Form, Input,message } from 'antd';
import { EditOutlined, UserDeleteOutlined, PlusOutlined } from '@ant-design/icons';
import Professeurs from "./addProfesseurs";

function ListProfesseurs(props) {
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
        <tr>
          <td>1</td>
          <td>Maria Anders</td>
          <td ><Tooltip title="Modifier" >
            <Button class={styles.icon1} onClick={showModalMod} type="primary" shape="circle" icon={<EditOutlined />} />
          </Tooltip><Tooltip title="Supprimer">
              <Button type="primary" shape="circle" icon={<UserDeleteOutlined />} />
            </Tooltip></td>
        </tr>
        <tr>
          <td>2</td>
          <td>Francisco Chang</td>
          <td ><Tooltip title="Modifier" >
            <Button class={styles.icon1} onClick={showModalMod} type="primary" shape="circle" icon={<EditOutlined />} />
          </Tooltip><Tooltip title="Supprimer">
              <Button type="primary" shape="circle" icon={<UserDeleteOutlined />} />
            </Tooltip></td>
        </tr>
        <tr>
          <td>3</td>
          <td>Roland Mendel</td>
          <td ><Tooltip title="Modifier" >
            <Button class={styles.icon1} onClick={showModalMod} type="primary" shape="circle" icon={<EditOutlined />} />
          </Tooltip><Tooltip title="Supprimer">
              <Button type="primary" shape="circle" icon={<UserDeleteOutlined />} />
            </Tooltip></td>
        </tr>
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
    </div >



  );
}

export default ListProfesseurs;