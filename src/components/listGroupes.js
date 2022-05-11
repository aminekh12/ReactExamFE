import React, { useState } from "react";
import styles from "./Homepage.module.css";
import { Button, Tooltip, Modal, Form, Input, message, Select, Space } from 'antd';
import { EditOutlined, UserDeleteOutlined, PlusOutlined, MinusCircleOutlined } from '@ant-design/icons';
import Groupes from "./addGroupes";

function ListGroupes(props) {
    const success = (mess) => {
        message.success('Groupe ' + mess + ' avec succès !');
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
            <Space style={{ display: "flex" }} align="baseline"  >
                <Select style={{ width: 100, marginBottom: 5 }} name="Filiére" placeholder="Filiére">
                    <Select.Option value="isi">3isi</Select.Option>
                    <Select.Option value="ise">2ise</Select.Option>
                    <Select.Option value="Filiére3">Filiére3</Select.Option>
                </Select>
                <Select style={{ width: 150 }} name="Niveau" placeholder="Niveau">
                <Select.Option value="3isi">3isi</Select.Option>
                    <Select.Option value="2isi">2isi</Select.Option>
                    <Select.Option value="4isi">4isi</Select.Option>
                </Select>

            </Space>
            <table>
                <tr>
                    <th class={styles.id}>ID Groupe</th>
                    <th>Nom Groupe</th>
                    <th>Nombre d'étudiants</th>
                    <th>Filiére</th>
                    <th>Niveau</th>
                    <th class={styles.action}>Actions</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>1</td>
                    <td>30</td>
                    <td>ISI</td>
                    <td>3isi</td>
                    <td ><Tooltip title="Modifier" >
                        <Button class={styles.icon1} onClick={showModalMod} type="primary" shape="circle" icon={<EditOutlined />} />
                    </Tooltip><Tooltip title="Supprimer">
                            <Button type="primary" shape="circle" icon={<UserDeleteOutlined />} />
                        </Tooltip></td>
                </tr>
                <tr>
                <td>2</td>
                    <td>2</td>
                    <td>25</td>
                    <td>ISI</td>
                    <td>3isi</td>
                    <td ><Tooltip title="Modifier" >
                        <Button class={styles.icon1} onClick={showModalMod} type="primary" shape="circle" icon={<EditOutlined />} />
                    </Tooltip><Tooltip title="Supprimer">
                            <Button type="primary" shape="circle" icon={<UserDeleteOutlined />} />
                        </Tooltip></td>
                </tr>
                <tr>
                <td>3</td>
                    <td>3</td>
                    <td>30</td>
                    <td>ISI</td>
                    <td>3isi</td>
                    <td ><Tooltip title="Modifier" >
                        <Button class={styles.icon1} onClick={showModalMod} type="primary" shape="circle" icon={<EditOutlined />} />
                    </Tooltip><Tooltip title="Supprimer">
                            <Button type="primary" shape="circle" icon={<UserDeleteOutlined />} />
                        </Tooltip></td>
                </tr>
            </table>
            <Button type="dashed" icon={<PlusOutlined />} onClick={showModalAdd}>
                Ajouter Matieres
            </Button>
            <Modal
                visible={visibleAdd}
                title="Ajouter Matieres"
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
                <Groupes />
            </Modal>
            <Modal
                visible={visibleMod}
                title="Modifer Professeur"
                onOk={handleOkMod}
                onCancel={handleCancel}
                width={450}
                footer={[
                    <Button key="back" onClick={handleCancel}>
                        Annuler
                    </Button>,
                    <Button key="submit" type="primary" onClick={handleOkMod}>
                        Modifier
                    </Button>,

                ]}
            >
                

            </Modal>
        </div >



    );
}

export default ListGroupes;