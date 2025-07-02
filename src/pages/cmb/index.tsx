import { View, Text, Image } from '@tarojs/components'
import { useState } from 'react'
import { Book, BarChart, Link } from '@nutui/icons-react-taro'
import { TabPane, Tabs, Card } from '@nutui/nutui-react-taro'
import CMBAbout from '@/components/cmb/About'
import CMBLeaderBoard from '@/components/cmb/LeaderBoard'
import './index.less'

const CTCMB = () => {
  const [activeKey, setActiveKey] = useState('1')

  const handleTabChange = (key: string) => {
    setActiveKey(key)
  }

  const jumpGitHub = () => {
    window.open('https://github.com/TrustedGPT/CTCMB/tree/main')
  }

  return (
    <View className="cmb-page">
      {/* Header Section */}
      <View className="cmb-page-header">
        <View>
          <Text className="title">CTCMBenchmark</Text>
          <Text className="subtitle">
            "通用·信任"中医大模型评测系统 CTCMB (Comprehensive TCM Benchmark)
          </Text>
          <View className="badge">
            中山大学-招联数字金融联合研究中心发布
          </View>
        </View>
        <Image
          className="responsive-image"
          src={require('@/assets/images/cmb/header_icon.png')}
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
              <Text>关于CTCMB</Text>
            </View>
          } paneKey="1">
            <CMBAbout />
          </TabPane>
          <TabPane title={
            <View>
              <BarChart size={16} />
              <Text>排行榜单</Text>
            </View>
          } paneKey="2">
            <CMBLeaderBoard />
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

export default CTCMB