import { View, Text, Image } from '@tarojs/components'
import { Card, Tag } from '@nutui/nutui-react-taro'
import './index.less'

const capabilities = [
  '建设一套本地化"生成式人工智能安全测评系统"',
  '形成一套属地"生成式人工智能安全发展标准"',
  '训练一套大模型安全智能测评引擎',
  '运行一套"平台自动化+专家团队复核"的运营方式',
  '研究一套"安全可信+量化评级"的服务行业框架',
  '探索一套"共建共享+双向赋能"的促进发展支撑监管新模式',
]

const AboutPage = () => {
  return (
    <View className="about-page">
      {/* Banner区域 */}
      <View className="about-page_banner">
        <Text className="title">大湾区生成式人工智能安全发展联合实验室</Text>
      </View>

      <View className="container">
        <Card>
          <Card title="实验室介绍">
            <Text className="paragraph">
              2024年9月11日，在2024年国家网络安全宣传周粤港澳大湾区安全技术创新座谈会上，由中共广东省委网信办和国家互联网应急中心广东分中心联合发起组织筹建的"大湾区生成式人工智能安全发展联合实验室"正式成立。华为公司、腾讯公司、中山大学等单位共同参与"联合实验室"建设。
            </Text>
            <Image
              src={require('../../assets/images/home/intro_content.jpg')}
              mode="widthFix"
              className="about-image"
            />
            <Text className="paragraph">
              "联合实验室"将在省委网信办的直接领导下，紧紧依托国家互联网应急中心的全面赋能，由国家互联网应急中心广东分中心牵头实体化运行，属地网信等相关部门大力支持，充分发挥华为公司、腾讯公司在人工智能方面的核心引擎和辐射带头作用，以及中山大学在安全可信、量化评级方面的深厚科研积累。
            </Text>
          </Card>

          <Card title="能力建设">
            {capabilities.map((item, index) => (
              <View key={index} className="capability-item">
                <Tag type="primary">{index + 1}</Tag>
                <Text>{item}</Text>
              </View>
            ))}
          </Card>

          <Card title="发展愿景">
            <Text className="paragraph">
              各参建单位将秉持"共建共享、开放包容、双向赋能"的原则，全力将"联合实验室"打造成为助力人工智能安全发展的权威机构，积极服务生成式人工智能创新发展，有力支撑人工智能时代的网络综合治理体系建设，共同促进人工智能"以人为本、智能向善"，积极探索以高水平的安全促进数字经济更高质量发展。
            </Text>
          </Card>

          <Card title="中山大学软件工程学院介绍">
            <Text className="paragraph">
              2020年6月，中山大学在珠海校区整建制成立软件工程学院。学院积极构建学科发展框架、不断优化人才培养体系、营造学院良好文化氛围，形成鲜明的研究型、复合型、创新型的高素质人才培养特色。
            </Text>
            <Text className="paragraph">
              学院现有教职员工50余人，海外引进优秀人才占比70%。软件工程专业是国家一流本科专业建设点，在2024年度CSRanking（世界大学计算机科学专业排名）上的国际排名为全球第1名。学院围绕软件可靠性核心理论，形成包括可信大模型、区块链、物联网、软件安全、智能软件、特色领域软件等方向的学科特色。
            </Text>
            <Text className="paragraph">
              学院始终围绕"以学生成长为中心"的培养理念，致力于培养具有探究性学习能力、创新性思维能力、跨领域实践能力的高层次软件工程师，具备本、硕、博完整人才培养体系，实行全程导师制，并聘请数十位职业导师，实现科教融汇、产学融合；开设十余门专业特色课程，建立软件工程三级实训课程体系，通过优化课程设置、改革教学方法、第二课堂支撑等方式，培养学生形成良好的学习力、思考力和行动力。
            </Text>
            <Text className="paragraph">
              学院将不断努力开拓创新，紧跟学校步伐走"高质量"和"内涵式"路线，为国家人才培养事业和创新高地建设发挥软工力量，作出软工贡献。
            </Text>
          </Card>
        </Card>
      </View>
    </View>
  )
}

export default AboutPage