/*
* JS 运行组件
*/ 
var JsRunComponent = san.defineComponent({
    template: `<div>
        <textarea id="jsCode" style="width:319px;height:127px;">
        layer.open({
            title: '在线调试',
            content: '可以填写任意的layer代码'
          });
        </textarea></div>
    `
});