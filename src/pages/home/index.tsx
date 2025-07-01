// src/pages/home/index.tsx
import { ArrowRightOutlined, ClockCircleOutlined } from '@ant-design/icons';
import Taro from '@tarojs/taro';
import React, { useEffect, useState } from 'react';
import { View, Text, Image, Button } from '@tarojs/components';
import './index.less';

interface IntroduceItem {
  img: string;
  title: string;
  desc: string;
  text: string;
}

interface RankItem {
  img: string;
  text: string;
  desc: string;
  time: string;
  path: string;
}

const Home: React.FC = () => {
  // State for dynamic data
  const [introduceList, setIntroduceList] = useState<IntroduceItem[]>([
    {
      img: require('../../assets/images/home/introduce_img1.png'),
      title: '主流大模型',
      desc: '覆盖国内外主流闭源大模型和开源大模型',
      text: '',
    },
    {
      img: require('../../assets/images/home/introduce_img2.png'),
      title: '评测维度',
      desc: '覆盖大模型可信能力有关的全面的细分维度',
      text: '',
    },
    {
      img: require('../../assets/images/home/introduce_img3.png'),
      title: '评测数据集',
      desc: '来源多样、任务类型丰富、评价指标各异的上百个评测数据集',
      text: '',
    },
    {
      img: require('../../assets/images/home/introduce_img4.png'),
      title: '评测数据',
      desc: '包含高质量的人工创建或自动收集的评测数据',
      text: '',
    },
    {
      img: require('../../assets/images/home/introduce_img5.png'),
      title: '评测维度',
      desc: '对中文能力和英文能力同时进行评测',
      text: '中英双语',
    },
  ]);

  // Static data
  const model_number = '21';
  const demension_number = '52';
  const dataset_number = '118';
  const test_data_number = '320万';

  // Update introduceList with dynamic data
  useEffect(() => {
    setIntroduceList((prevList) =>
      prevList.map((item, index) => {
        if (index === 0) item.text = model_number;
        if (index === 1) item.text = demension_number;
        if (index === 2) item.text = dataset_number;
        if (index === 3) item.text = test_data_number;
        return item;
      }),
    );
  }, [model_number, demension_number, dataset_number, test_data_number]);

  // Rank list data
  const rankList: RankItem[] = [
    {
      img: require('../../assets/images/home/rank_6.png'),
      text: '中医排行榜(CTCMB)',
      desc: '中医排行榜通过专业的评测维度，评估模型在中医知识理解和应用方面的能力。',
      time: '2024-09-25',
      path: 'ctcmb',
    },
    {
      img: require('../../assets/images/home/rank_3.png'),
      text: '金融排行榜(Finance)',
      desc: '金融排行榜专注于金融领域的大模型评测，从风险评估到市场分析，我们力求让评测维度全面覆盖金融行业的各个方面。',
      time: '2024-09-25',
      path: 'finance',
    },
  ];

  // Handle click for ranking details
  const jumpDetail = (item: RankItem) => {
    Taro.navigateTo({
      url: `/pages/${item.path}/index`,
    });
  };

  return (
    <View className="home-container">
      {/* Banner Section */}
      <View
        className="banner"
        style={{ backgroundImage: `url(${require('../../assets/images/home/head.png')})` }}
      >
        <View className="main-title">
          Trusted<Text className="highlight">GPT</Text>
        </View>
        <Text className="subtitle">大模型可信性评测平台</Text>
        <Text className="description">大湾区生成式人工智能安全发展联合实验室</Text>
        <Button
          className="action-button"
          onClick={() => Taro.navigateTo({ url: '/pages/leaderboard/index' })}
        >
          查 看 榜 单
        </Button>
      </View>

      {/* Latest News Section */}
      <View className="section">
        <Image
          className="news-icon"
          src={require('../../assets/images/home/icon_1.png')}
          mode="aspectFit"
        />
        <Text className="section-title">最新动态：</Text>
        <Text className="section-text">2月通用领域大模型测评榜单更新</Text>
      </View>

      {/* About TrustedGPT Section */}
      <View className="section">
        <Text className="section-title">关于 TrustedGPT</Text>
        <Text className="section-text">
          TrustedGPT
          是一个专注于大模型可信性评测的平台，旨在评估大模型在通用领域以及垂直领域的可信能力。
          平台支持包括 ChatGPT、Qwen、智谱AI 和 Gemini 等主流大模型，通过多维度评测体系，
          从可靠性、安全性、公平性等方面进行全面评估。通过不断更新的评测数据和标准， TrustedGPT
          致力于推动生成式人工智能技术的安全、可靠应用。
        </Text>
      </View>

      {/* Statistics Section */}
      <View className="stats-section">
        {introduceList.map((item, index) => (
          <View key={index} className="stat-card">
            <Image className="stat-image" src={item.img} mode="aspectFit" />
            <Text className="card-title">{item.title}</Text>
            <Text className="card-value">{item.text}</Text>
            <Text className="card-desc">{item.desc}</Text>
          </View>
        ))}
      </View>

      {/* Rank List */}
      <View className="section">
        <Text className="section-title">垂直领域榜单</Text>
        <Text className="section-text">
          针对垂直领域大模型的独特可信性需求，我们构建了专门的评测体系和数据集，全面评估大模型表现。
        </Text>

        <View className="rank-list">
          {rankList.map((item, index) => (
            <View key={index} className="rank-card" onClick={() => jumpDetail(item)}>
              <Image className="rank-image" src={item.img} mode="widthFix" />
              <View className="card-content">
                <Text className="rank-title">{item.text}</Text>
                <Text className="rank-desc">{item.desc}</Text>
                <View className="rank-footer">
                  <Text className="detail-link">查看详情</Text>
                  <View className="time-info">
                    <ClockCircleOutlined className="time-icon" />
                    <Text className="time-text">{item.time}</Text>
                  </View>
                </View>
              </View>
            </View>
          ))}
        </View>
      </View>

      {/* Banner Image */}
      <View className="section">
        <Image
          className="banner-image"
          src={require('../../assets/images/home/box_banner1.png')}
          mode="widthFix"
        />
      </View>

      {/* Evaluation Framework */}
      <View className="section">
        <Text className="section-title">评测框架</Text>
        <Text className="section-text">
          TrustedGPT的评测框架涵盖数据管理、模型部署与推理、输出评估工具等基础支撑，
          通过多维度评测标准（如可靠性、安全性、可信输出等）对大模型进行全面评估，
          并通过榜单和报告等形式直观呈现评测结果。
        </Text>
        <Image
          className="banner-image"
          src={require('../../assets/images/home/box_banner2.png')}
          mode="widthFix"
        />
      </View>

      {/* Evaluation Datasets */}
      <View className="feature-card">
        <View className="feature-row">
          <Image
            className="feature-image"
            src={require('../../assets/images/home/dataSet.png')}
            mode="widthFix"
          />
          <View className="feature-content">
            <Text className="feature-title">评测数据集</Text>
            <Text className="feature-desc">
              平台汇总了来自开源社区的高质量大模型可信性评测数据集，并结合自建数据集，
              涵盖多种类型和任务场景。这些数据集为大模型可信性评测提供了全面支持，
              同时为研究者和开发者提供便捷的参考与复用基础。
            </Text>
            <Button
              className="action-button"
              onClick={() => Taro.navigateTo({ url: '/pages/dataset/index' })}
            >
              <ArrowRightOutlined className="button-icon" />
              查看详情
            </Button>
          </View>
        </View>
      </View>

      {/* Model Introduction */}
      <View className="feature-card">
        <View className="feature-row reverse">
          <View className="feature-content">
            <Text className="feature-title">评测模型</Text>
            <Text className="feature-desc">
              平台支持多种主流大模型的接入与评测，包括通用领域模型和垂直领域模型。
              通过统一的评测框架和细粒度的评测标准，全面分析模型在可靠性、安全性、
              输出可信性等方面的表现，为用户提供科学、客观的模型评估结果。
            </Text>
            <Button
              className="action-button"
              onClick={() => Taro.navigateTo({ url: '/pages/model/index' })}
            >
              <ArrowRightOutlined className="button-icon" />
              查看详情
            </Button>
          </View>
          <Image
            className="feature-image"
            src={require('../../assets/images/home/model_img.png')}
            mode="widthFix"
          />
        </View>
      </View>

      {/* Footer */}
      <View className="footer">
        <View className="footer-content">
          <Image className="logo" src={require('../../assets/images/logo.png')} mode="aspectFit" />
          <View className="footer-info">
            <Text className="footer-title">大模型可信性评测平台</Text>
            <Text className="footer-desc">专注于大模型可信性评估，助力安全可信发展。</Text>
          </View>
        </View>
        <Text className="contact-info">联系邮箱：TrustedGPT@mail.sysu.edu.cn</Text>
        <Text className="links">
          快速链接：
          <Text
            className="link"
            onClick={() => Taro.navigateTo({ url: 'https://sse.sysu.edu.cn/' })}
          >
            中山大学软件工程学院
          </Text>
          &nbsp;|&nbsp;
          <Text
            className="link"
            onClick={() => Taro.navigateTo({ url: 'https://www.cagd.gov.cn/v/2024/09/5762.html' })}
          >
            大湾区生成式人工智能安全发展联合实验室
          </Text>
        </Text>
        <View className="qrcode">
          <Text className="qrcode-title">微信公众号</Text>
          <Image className="qrcode-image" src={require('../../assets/qrcode.jpg')} mode="aspectFit" />
        </View>
      </View>
    </View>
  );
};

export default Home;
