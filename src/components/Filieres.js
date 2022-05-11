import React, { useState,useEffect,useRef } from "react";
import axios from "axios";
import styles from "./Homepage.module.css";

import { Form, Input, Button } from 'antd';
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
const Filieres=(props)=> {
    const [state, setState] = useState({ nomfiliere: "Michael"});
    const firstTimeRender = useRef(true);

    useEffect(() => {
    if (!firstTimeRender.current) {
        console.log(state);
    }
    }, [state])

    useEffect(() => { 
    firstTimeRender.current = false 
    }, [])
    function changehandler(e){
        setState({nomfiliere :e});
    
    }
    function insert(){
        axios.post("http://127.0.0.1:8000/api/filiere/insert",  state)
        .then(response=>{
            console.log(response,state);
        }).catch(error=>{
            console.log(error);
        })
    }
    const onFinish = values => {
        console.log('Received values of form:', values);
    };
    return (

        <div className={styles.container}>
            <div className="display-5 text-center  text-secondary">Menu des filières</div>
            <div >
                    <Form name="dynamic_form_item" {...formItemLayoutWithOutLabel} onFinish={onFinish}>
                        <Form.List
                            name="names"
                        >
                            
                            {(fields, { add, remove }, { errors }) => (
                                <>
                                    {fields.map((field, index) => (
                                        <Form.Item
                                            {...(index === 0 ? formItemLayout : formItemLayout)}
                                            required={true}
                                            key={field.key}
                                        >
                                            <Form.Item
                                                {...field}
                                                validateTrigger={['onChange', 'onBlur']}
                                                rules={[
                                                    {
                                                        required: true,
                                                        whitespace: true,
                                                        message: "Ajouter un filière !",
                                                    },
                                                ]}
                                                noStyle
                                            >
                                                <Input name="nom" placeholder="Nom de filière ici" className={styles.inpu} onChange={(e) => { changehandler(e.target.value); }} onBlur={(e) => { changehandler(e.target.value); }} />
                                            </Form.Item>
                                            {fields.length > 1 ? (
                                                <MinusCircleOutlined
                                                    className={styles.dynamic_delete_button}
                                                    onClick={() => remove(field.name)}
                                                />
                                            ) : null}
                                        </Form.Item>
                                    ))}
                                    <Form.Item>
                                        <Button
                                            type="dashed"
                                            onClick={() => add()}
                                            className={styles.inputt}
                                            icon={<PlusOutlined />}
                                        >
                                            Ajouter filière
                                        </Button>

                                        <Form.ErrorList errors={errors} />
                                    </Form.Item>
                                </>
                            )}
                        </Form.List>
                        <Form.Item>
                            <Button className={styles.inputt}  type="primary" htmlType="submit" onClick={insert}>
                            Insérer
                            </Button>
                        </Form.Item>
                    </Form>
            </div>


            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
        </div>
    );
}

export default Filieres;