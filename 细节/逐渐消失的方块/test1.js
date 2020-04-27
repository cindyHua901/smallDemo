// 抽象过程 考虑数据的抽象
// 抽象一个 once高阶函数,返回函数

function once(fn){
  return function(...args){
    if(fn){
      let ret = fn.apply(this, args);
      fn = null;
      return ret;
    }
  }
}

block.onclick = once(function(evt){
  console.log('hide');
  evt.target.className = 'hide';
  setTimeout(function(){
    document.body.removeChild(block);
  }, 2000);
})
// click事件可以响应多次。限制响应函数只能执行一次
// 第一次修改
// block.onclick = function(evt){
//   console.log('hide');
//   block.onclick = null;
//   evt.target.className = 'hide';
//   setTimeout(function(){
//     document.body.removeChild(block);
//   }, 2000);
// };
// 最新浏览器可以这样写,保证只点击一次,ie比较老的版本可能会不支持
// block.addEventListener('click',()=>{
//   // do something
// },{once: true})

// 异步请求获取数据,只能点一次提交
// const api = 'https://test.h5jun.com/index/gaobai?text=';

// submitBtn.onclick = async function(evt){
//   evt.preventDefault();
  
//   let {data} = await axios.get(api + t.value);
//   gaobai.src = 'data:image/jpeg;base64,' + data.data;
//   console.log('data:image/jpeg;base64,' + data.data)
// }



