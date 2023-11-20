// ts规定:导入ts文件不需要写后缀
// webpack规定: 处理未写后缀名的内容会:.js ==> .json 都没有报错
// 因此需要补充webpack配置, 未写后缀名时如何操作
import a from './a';
import './a.css';

// let a: string = 'hello';
console.info(a);