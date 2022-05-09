import React from "react";
import styles from "./Homepage.module.css";

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
const formItemLayoutWithOutLabel = {
    wrapperCol: {
        xs: { span: 24, offset: 0 },
        sm: { span: 20, offset: 4 },
    },
};
function Matiers(props) {
    const onFinish = values => {
        console.log('Received values of form:', values);
    };
    return (

        <div className={styles.container}>
            <div className="display-5 text-center  text-secondary" >Menu des matières</div>

            <Form name="dynamic_form_nest_item" onFinish={onFinish} autoComplete="off">
                <Form.Item label="niveau :" className={styles.inpu}>
                    <Select name ="niveau">
                        <Select.Option value="niveau12">niveau 12</Select.Option>
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
                                        rules={[{ required: true, message: 'entrer le nom de la matière !' }]}
                                    >
                                        <Input name="Nommatiere" placeholder="nom de la matière" />
                                    </Form.Item>
                                    <Form.Item   className={styles.space3}>
                                        <Select name="type" placeholder="type de salle">
                                            <Select.Option value="informatique">informatique</Select.Option>
                                            <Select.Option value="electronique">electronique</Select.Option>
                                            <Select.Option value="normale">normale</Select.Option>
                                        </Select>
                                    </Form.Item>
                                    <Form.Item className={styles.dropboxprof}>
                                        <Select name="Nomprofesseur" placeholder="Professeur">
                                            <Select.Option value="prof1">prof 1</Select.Option>
                                        </Select>
                                    </Form.Item>

                                    <MinusCircleOutlined onClick={() => remove(name)} className={styles.dynamic_delete_button} />
                                </Space>
                            ))}
                            <Form.Item>
                                <Button className={styles.inp} type="dashed" onClick={() => add()} icon={<PlusOutlined />}>
                                    Ajouter un matière
                                </Button>
                            </Form.Item>
                        </>
                    )}
                </Form.List>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Insérer
                    </Button>
                </Form.Item>
            </Form>


            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
        </div>
    );
}

export default Matiers;