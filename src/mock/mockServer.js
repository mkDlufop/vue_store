// 引入mockjs
import Mock from 'mockjs';

// 引入json文件
//      webpack默认对外暴露：图片、json文件
import banner from './banner.json';
import floor from './floor.json';

// 拦截ajax请求，返回模拟的数据
Mock.mock('/mock/banners',{code:200,data:banner});
Mock.mock('/mock/floors',{code:200,data:floor});