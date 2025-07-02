import Taro from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import { Card } from '@nutui/nutui-react-taro'
import cmbImage from '@/assets/images/cmb/CMB.png'
import './About.less'

const About = () => {
  const githubDataLink = 'https://github.com/Wayyuanyuan/CTCMB/blob/main/data'
  const githubIssueLink = 'https://github.com/Wayyuanyuan/CTCMB/issues'

  return (
    <View className="page-container">
      <Card>
        <View className="section">
          <Text className="section-title">中医综合评估基准 CTCMBenchmark</Text>
          <Text>
            CTCMB是一个全面评估模型在中医药领域表现的基准测试集。它包含中医知识问答、医学语言生成、中医推理、中医语言理解和中医诊断五个类别，涉及广泛的中医专业知识。该平台旨在全面评估模型对中医知识的掌握、理解和运用的能力。通过这一多层次、多维度的评估体系，CTCMB致力于推动中医药领域中人工智能技术的发展与进步。具体组成如下。
            你可在
            <Text 
              className="link" 
              onClick={() => Taro.navigateTo({
                url: `/pages/webview?url=${encodeURIComponent(githubDataLink)}`
              })}
            >
              GitHub
            </Text>
            上查看和下载我们的数据集。
          </Text>
          <View className="image-container">
            <Image src={cmbImage} mode="widthFix" />
          </View>
        </View>

        <View className="section">
          <Text className="section-title">数据</Text>
          <Text>
            我们的数据可以直接从
            <Text 
              className="link" 
              onClick={() => Taro.navigateTo({
                url: `/pages/webview?url=${encodeURIComponent(githubDataLink)}`
              })}
            >
              GitHub
            </Text>
            下载。请参考我们的GitHub，了解如何访问和利用这些数据。
          </Text>
        </View>

        <View className="section">
          <Text className="section-title">引用</Text>
          <View className="code-block">
            {`@misc{cmedbenchmark,
  title={CTCMB:A comprehensive evaluation benchmark of Traditional Chinese Medicine},
  author={},
  note={},
  year = {2024},
  publisher = {GitHub},
  journal = {GitHub repository},
  howpublished = {\\\\url{https://github.com/TrustedGPT/CTCMB/tree/main}},
}`}
          </View>
        </View>

        <View className="section">
          <Text className="section-title">联系我们</Text>
          <Text>
            有关CTCMB的问题，请在
            <Text 
              className="link" 
              onClick={() => Taro.navigateTo({
                url: `/pages/webview?url=${encodeURIComponent(githubIssueLink)}`
              })}
            >
              GitHub
            </Text>
            上创建一个问题。如果你对潜在的合作感兴趣，请联系weiyy53@mail2.sysu.edu.cn。
          </Text>
        </View>
      </Card>
    </View>
  )
}

export default About