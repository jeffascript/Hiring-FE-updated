import React, { Component } from 'react';
import backgroundImg from "../assets/pics/entrepreneur-working-on-his-macbook-2-picjumbo-com.jpg";
import { Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;

class LandingPage extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            // <div className="cont">
            // <div id="jumbo"><img src={backgroundImg} alt="no" ></img></div>
            // <div id="main">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis, sit neque adipisci eos dolorem quis deserunt dolores, hic eligendi dignissimos corporis tempora unde vitae consectetur cum ratione rerum quibusdam quaerat?</div>
            // </div>    

            <div>
                <Layout>
                    <Header>Header</Header>
                    <Layout>
                        <Sider>Sider</Sider>
                        <Content>Content</Content>
                    </Layout>
                    <Footer>Footer</Footer>
                </Layout>
            </div>
        );
    }
}


export default LandingPage;