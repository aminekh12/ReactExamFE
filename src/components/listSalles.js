import React, { useState } from "react";
import styles from "./Homepage.module.css";
import { Button, Tooltip, Modal } from 'antd';
import { EditOutlined, UserDeleteOutlined, PlusOutlined,  } from '@ant-design/icons';
import { Form, Input, Select, Space, InputNumber,message } from 'antd';
import Salles from "./addSalles";
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
function ListSalles(props) {

    const success = (mess) => {
        message.success('Salle '+mess+' avec succès !');
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
                    <th class={styles.id}>ID salle</th>
                    <th >Etage</th>
                    <th >Nom</th>
                    <th >Type</th>
                    <th class={styles.action}>Actions</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>1</td>
                    <td>C</td>
                    <td>Informatique</td>
                    <td ><Tooltip title="Modifier" >
                        <Button onClick={showModalMod} class={styles.icon1} type="primary" shape="circle" icon={<EditOutlined />} />
                    </Tooltip><Tooltip title="Supprimer">
                            <Button  type="primary" shape="circle" icon={<UserDeleteOutlined />} />
                        </Tooltip></td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>1</td>
                    <td>B</td>
                    <td>Normale</td>
                    <td ><Tooltip title="Modifier" >
                        <Button onClick={showModalMod} class={styles.icon1} type="primary" shape="circle" icon={<EditOutlined />} />
                    </Tooltip><Tooltip title="Supprimer">
                            <Button type="primary" shape="circle" icon={<UserDeleteOutlined />} />
                        </Tooltip></td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>2</td>
                    <td>A</td>
                    <td>electronique</td>
                    <td ><Tooltip title="Modifier" >
                        <Button onClick={showModalMod} class={styles.icon1} type="primary" shape="circle" icon={<EditOutlined />} />
                    </Tooltip><Tooltip title="Supprimer">
                            <Button type="primary" shape="circle" icon={<UserDeleteOutlined />} />
                        </Tooltip></td>
                </tr>

            </table>
            <Button type="dashed" icon={<PlusOutlined />} onClick={showModalAdd}>
                Ajouter un salle
            </Button>
            <Modal
                visible={visibleAdd}
                title="Ajouter salle"
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
                <Salles />
            </Modal>
            <Modal
                visible={visibleMod}
                title="Modifer salle"
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
                <Form name="complex-form" >
                    <Space   >
                        <Form.Item

                            name="Nomsalle"
                            rules={[{ required: true, message: 'entrer le nom de la salle !' }]}
                        >
                            <Input placeholder="nom de salle" />
                        </Form.Item>
                        <Form.Item className={styles.space3}>
                            <Select name="Typesalle" placeholder="type de salle">
                                <Select.Option value="informatique">informatique</Select.Option>
                                <Select.Option value="electronique">electronique</Select.Option>
                                <Select.Option value="normale">normale</Select.Option>
                            </Select>
                        </Form.Item>
                        <Form.Item
                            {...formItemLayout}
                        >
                            <InputNumber name="places" placeholder="places" min={1} />
                        </Form.Item>
                        <Form.Item
                            {...formItemLayout}
                        >
                            <InputNumber name="etage" placeholder="etage" min={1} />
                        </Form.Item>

                    </Space>
                </Form>

            </Modal>

        </div>



    );
}

export default ListSalles;