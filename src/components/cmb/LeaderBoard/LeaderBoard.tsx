import Taro from '@tarojs/taro'
import { useState, useEffect } from 'react'
import { View, Text } from '@tarojs/components'
import { Tabs, TabPane, Table } from '@nutui/nutui-react-taro'
import DimensionList from '@/assets/data/dimension/dimension.json'
import LeaderboardList from '@/assets/data/leaderboard/leaderboard.json'
import type { TabsProps } from '@nutui/nutui-react-taro';
import './LeaderBoard.less'


interface ScoreItem {
  rank: number
  model: string
  company: string
  open_source: string
  score: number
}

type TabDirection = TabsProps['direction'];

const LeaderBoard = () => {
  const [activeKey, setActiveKey] = useState('中医综合能力')
  const [tableData, setTableData] = useState<ScoreItem[]>([])
  const [tabDirection, setTabDirection] = useState<TabsProps['direction']>('vertical')
  const [dimensionIndex, setDimensionIndex] = useState(0)
  //const [tabPosition, setTabPosition] = useState<'left' | 'top'>('left')



  const columns = [
    { title: '排名', key: 'rank', render: (item: ScoreItem) => <Text>{item.rank}</Text> },
    { title: '模型名', key: 'model', render: (item: ScoreItem) => <Text>{item.model}</Text> },
    { title: '公司名', key: 'company', render: (item: ScoreItem) => <Text>{item.company}</Text> },
    { title: '开源/闭源', key: 'open_source', render: (item: ScoreItem) => <Text>{item.open_source}</Text> },
    { title: '分数', key: 'score', render: (item: ScoreItem) => <Text>{item.score}</Text> },
  ]

  const updateTableData = () => {
    const currentDimension = DimensionList.CTCMB[dimensionIndex]
    const target = LeaderboardList.CTCMB.find(
      (item) => item.dimension === currentDimension.ChineseName
    )

    if (target) {
      const currentLangData = target.score_lists.find((item: any) => item.lang === '中文')
      setTableData(currentLangData?.list || [])
    }
  }

  /*useEffect(() => {
    updateTableData()
    const handleResize = () => {
      if (window.innerWidth < 800) {
        setTabPosition('top')
      } else {
        setTabPosition('left')
      }
    }
    window.addEventListener('resize', handleResize)
    handleResize()
    return () => window.removeEventListener('resize', handleResize)
  }, [dimensionIndex])*/
  
  useEffect(() => {
    updateTableData(); 
  }, [dimensionIndex]);

  useEffect(() => {
    const updateDirection = () => {
      const systemInfo = Taro.getSystemInfoSync();
      setTabDirection(systemInfo.windowWidth < 800 ? 'horizontal' : 'vertical');
    };
    Taro.onWindowResize(updateDirection);
    return () => {
      Taro.offWindowResize(updateDirection);
    };
  }, []);

  const handleTabChange = (key: string | number) => {
    const keyStr = String(key); // 确保转为字符串
    const index = DimensionList.CTCMB.findIndex(
      (item) => item.ChineseName === keyStr
    );
    setDimensionIndex(index);
    setActiveKey(keyStr);
  };

  return (
    <View className="page-container">
      <Tabs
        value={activeKey}
        onChange={handleTabChange}
        direction={tabDirection}
        className="tabs-container"
      >
        {DimensionList.CTCMB.map((item) => (
          <TabPane title={item.ChineseName} key={item.ChineseName}>
            <View className="tab-header">
              <Text className="title">中医模型榜单</Text>
            </View>
            <Table
              columns={columns}
              data={tableData}
              bordered
            />
          </TabPane>
        ))}
      </Tabs>
    </View>
  )
}

export default LeaderBoard