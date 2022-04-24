import React from "react";
import styles from "./Homepage.module.css";

import { Form, Input, Button, Cascader } from 'antd';

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

function Professeurs(props) {

    const onChange = value => {
        console.log(value);
    };
    return (

        <div className={styles.container}>
            <div className="display-5 text-center  text-secondary" >Menu des Professeurs</div>
            <Form.Item >
                <Input placeholder="nom de professeurs " style={{ width: '50%' }}></Input> 
            </Form.Item>
            <Form>
                <Form.Item >
                    <Cascader

                        placeholder="ces matiéres "
                        style={{ width: '90%' }}
                        options={options}
                        onChange={onChange}
                        multiple
                        maxTagCount="responsive"
                        size="large"

                    />
                </Form.Item>
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

export default Professeurs;