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

function Salles(props) {
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
                    <Input placeholder="nom de salle" />
                  </Form.Item>
                  <Form.Item  {...restField} className={styles.space3}>
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
          <Button type="primary" htmlType="submit">
            Insérer
          </Button>
        </Form.Item>
      </Form>


      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
    </div>
  );
}

export default Salles;