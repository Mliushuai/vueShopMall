//引入mockjs
const Mock = require('mockjs');
import navData from '@/common/data/data'
//使用mockjs模拟数据
Mock.mock('/api/data', (req, res) => {
  return {
    data: navData
  }
});
Mock.mock('/api/post', (req, res) => {
  return {
    data: ['a','b']
  }
});
