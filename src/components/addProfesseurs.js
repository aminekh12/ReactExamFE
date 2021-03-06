import React,{ useState,useEffect,useRef } from "react";
import axios from "axios";
import styles from "./Homepage.module.css";

import { Form, Input, Button} from 'antd';
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
const options = [
    {
        label: '4isi',
        value: '4isi',
        children: [
            {
                label: 'python 4isi',
                value: 'python',

            },
            {
                label: 'php',
                value: 'php',

            },
            {
                label: 'java',
                value: 'java',

            },
        ],
    },
    {
        label: '3isi',
        value: '3isi',
        children: [
            {
                label: 'python 3isi',
                value: 'python',

            },
            {
                label: 'c++',
                value: 'cpp',

            },
            {
                label: '.net',
                value: 'dotnet',

            },
        ],
    },
];

const Professeurs=(props)=> {
    const [state, setState] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    function changehandler(e){
        setState({nom :e.target.value,prenom :e.target.value});
        console.log("Value of nomniveau in State is: ", state );
    
    }
 
    function insert(){
        console.log(state)
        axios.post("http://127.0.0.1:8000/api/professeur/insert", state)
        .then(response=>{
            console.log(response,state);
        }).catch(error=>{
            console.log(error);
        })
        console.log('Received values of form:', state);
    }


    const onChange = value => {
        console.log(value);
    };
    return (

        <div className={styles.container}>
            <div className="display-5 text-center  text-secondary" >Menu des Professeurs</div>
            <div >
               
                    <Form name="dynamic_form_item" {...formItemLayoutWithOutLabel} >
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
                                                        message: "Ajouter un professeur !",
                                                    },
                                                ]}
                                                noStyle
                                            >
                                                <Input placeholder="Nom de professeur ici" name="nom" className={styles.inpu} onChange={changehandler} onBlur={changehandler} />
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
                                            Ajouter professeur
                                        </Button>

                                        <Form.ErrorList errors={errors} />
                                    </Form.Item>
                                </>
                            )}
                        </Form.List>
                        <Form.Item>
                            <Button className={styles.inputt}  type="primary" htmlType="submit" onClick={insert}>
                            Ins??rer
                            </Button>
                        </Form.Item>
                    </Form>
            </div>

            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
        </div>
    );
}

export default Professeurs;