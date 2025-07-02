import { View, Text, Image } from '@tarojs/components'
import { useState } from 'react'
import { Book, BarChart, Link } from '@nutui/icons-react-taro'
import { TabPane, Tabs, Card } from '@nutui/nutui-react-taro'
import FINAbout from '@/components/fin/About'
import FINLeaderBoard from '@/components/fin/LeaderBoard'
import './index.less'

const FIN = () => {
  const [activeKey, setActiveKey] = useState('1')

  const handleTabChange = (key: string) => {
    setActiveKey(key)
  }

  const jumpGitHub = () => {
    Taro.navigateTo({
      url: '/pages/webview/index?url=https://github.com/TrustedGPT/FINBenchmark'
    })
  }

  return (
    <View className="fin-page">
      {/* Header Section */}
      <View className="fin-page-header">
        <View>
          <Text className="title">FIN Benchmark</Text>
          <Text className="subtitle">
            “通用·信任”金融大模型评测系统 FIN Benchmark
          </Text>
          <View className="badge">
            中山大学-招联金融人工智能研究中心
          </View>
        </View>
        <Image
          className="responsive-image"
          src={require('@/assets/images/fin/header_icon.png')}
          mode="aspectFit"
        />
      </View>

      {/* Tabs Section */}
      <Card className="tab-content">
        <Tabs
          value={activeKey}
          onChange={handleTabChange}
          activeType="smile"
        >
          <TabPane title={
            <View>
              <Book size={16} />
              <Text>关于FIN</Text>
            </View>
          } paneKey="1">
            <FINAbout />
          </TabPane>
          <TabPane title={
            <View>
              <BarChart size={16} />
              <Text>排行榜单</Text>
            </View>
          } paneKey="2">
            <FINLeaderBoard />
          </TabPane>
          <TabPane title={
            <View onClick={jumpGitHub} style={{ cursor: 'pointer' }}>
              <Link size={16} />
              <Text>GitHub</Text>
            </View>
          } paneKey="5" disabled />
        </Tabs>
      </Card>
    </View>
  )
}

export default FIN