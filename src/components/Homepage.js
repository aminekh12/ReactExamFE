
import styles from './Navbar.module.css'
import React, { useState } from "react";
import Filieres from "./listFilieres";
import Niveaux from "./listNiveaux";
import Matieres from "./listMatieres";
import Professeurs from "./listProfesseurs";
import Salles from "./listSalles";
import Groupes from "./listGroupes";
import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  CalendarOutlined,
  TeamOutlined,
  UnorderedListOutlined,
  OrderedListOutlined,
  GroupOutlined,
  BookOutlined,
  BankOutlined,
} from '@ant-design/icons';
import Item from 'antd/lib/list/Item';



const { Header, Sider, Content } = Layout;
function SiderDemo(props) {

  const state = {
    collapsed: false,

  };
  const [collapsed, setcollapsed] = useState(0)
  const toggle = () => {
    setcollapsed(!collapsed);
  };
  const [selectedMenuItem, setSelectedMenuItem] = useState(2);
  const PageDisplay = () => {
    if (selectedMenuItem === 2) {
      return <Professeurs />;
    } else if (selectedMenuItem === 3) {
      return <Filieres />;
    } else if (selectedMenuItem === 4) {
      return <Niveaux />;
    } else if (selectedMenuItem === 5) {
      return <Groupes />;
    } else if (selectedMenuItem === 6) {
      return <Matieres />;
    } else if (selectedMenuItem === 7) {
      return <Salles />;
    }
  };
  const setSelected = (curr) => {
    setSelectedMenuItem(curr);
  };


  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>

        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['2']}

        >
          <Menu.Item key="1" icon={<CalendarOutlined />} onClick={() => setSelected(1)} >Generer exam</Menu.Item>
          <Menu.Item key="2" icon={<TeamOutlined />} onClick={() => setSelected(2)}>Professeurs</Menu.Item>
          <Menu.Item key="3" icon={<UnorderedListOutlined />} onClick={() => setSelected(3)}>Filliers</Menu.Item>
          <Menu.Item key="4" icon={<OrderedListOutlined />} onClick={() => setSelected(4)}>Niveaux</Menu.Item>
          <Menu.Item key="5" icon={<GroupOutlined />} onClick={() => setSelected(5)}>Groupes</Menu.Item>
          <Menu.Item key="6" icon={<BookOutlined />} onClick={() => setSelected(6)}>Matiers</Menu.Item>
          <Menu.Item key="7" icon={<BankOutlined />} onClick={() => setSelected(7)} >Salles</Menu.Item>


        </Menu>
      </Sider>
      <Layout className={styles.sitelayout}>
        <Header className={styles.sitelayoutbackground} >

          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'styles.trigger',
            onClick: toggle,
            style:{height:50},
          })
          }
          <img className={styles.logo} src="logo2.png" alt="logo-ISGA" />
        </Header>
        <Content
          className={styles.sitelayoutbackground}
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}
        >
          <div>{PageDisplay()}</div>
        </Content>
      </Layout>
    </Layout>
  );

}

export default () => <SiderDemo />;
