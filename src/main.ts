// ts规定:导入ts文件不需要写后缀
// webpack规定: 处理未写后缀名的内容会:.js ==> .json 都没有报错
// 因此需要补充webpack配置, 未写后缀名时如何操作
import './main.css';

const listItem = document.querySelectorAll('#list li');

for (let i=0; i < listItem.length; i++) {
  listItem[i].addEventListener('click', () => {
    let url = (listItem[i] as HTMLElement).dataset.url;
    let title = (listItem[i] as HTMLElement).dataset.title;
    console.info(url, title);
  })
}