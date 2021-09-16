import { UserOutlined } from '@ant-design/icons'
import { Avatar, Button, Col, Row, Tabs } from 'antd'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { BasicLayout } from '@ant-design/pro-layout'

type Props = {
  time: Date
}

const Home: NextPage<Props> = ({ time }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta
          name="description"
          content="Generated by create next app"
        />
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>

      <BasicLayout
        title="Autobank"
        navTheme="light"
        logo={<span />}
        rightContentRender={() => (
          <div>
            <Avatar
              shape="square"
              size="small"
              icon={<UserOutlined />}
            />
          </div>
        )}
        footerRender={() => (
          <div style={{ margin: '0 auto' }}>
            Copyright (c) 2021 by CIO
          </div>
        )}
      >
        <Row>
          <Col span={24}>
            <Button>Hello</Button>
            <Tabs defaultActiveKey="1">
              <Tabs.TabPane
                tab="Tab 1"
                key="1"
              >
                Content of Tab Pane 1
                time: {time.toString()}
              </Tabs.TabPane>
              <Tabs.TabPane
                tab="Tab 2"
                key="2"
              >
                Content of Tab Pane 2
              </Tabs.TabPane>
              <Tabs.TabPane
                tab="Tab 3"
                key="3"
              >
                Content of Tab Pane 3
              </Tabs.TabPane>
            </Tabs>
          </Col>
        </Row>
      </BasicLayout>
    </div>
  )
}

Home.getInitialProps = ctx => {

  return {
    time: new Date(),
  }
}

export default Home
