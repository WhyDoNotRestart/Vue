

/*
正常是在官网下载 在script 中引用

模块化方式：  以特殊方式来组织vue 组件
通过 npm install vue --save   安装vue 到 node_moudules 里面
把整个vue 当成一个模块    
        其他js文件中  ：
                improtant Vue form '../node_modules/vue/dist/vue'  引用 
               
 runtime-only  代码中不可以有template    vue 实例中 el的    默认为template
 runtime-compiler   可以有template
 在webpack.config.js 中的 module。exprorts 
            指定 resolve：{alias：{'vue$':'vue/dist/vue.esc.js'}}
*/



/*
在开发中 index 很少放东西
    在Vue的实例中 当在index使用 会用template 替换 el绑定的div 
    但是 template 写在实例中 不符合规范  在外部生成组件 直接引用

    在之前练习 的 族健脑注册后 都是在 el绑定的div中使用 
    现在直接放在实例中的template中  在页面中使用会直接替换el绑定的div


    再次精简：
        直接组件的内容 份文件分块放入 依次导出
        export default{
    template:
        `<div>{{message}}
        <button></button>
        </div>`,
    data() {
        return {
            message:'你好'
        }
    },
    methods: {
        
    },
}
*/ 


/*  模板未和 js代码分离再次精简：  创建vue文件 
    打包： npm install --save-dev vue-loader vue-template-compiler*/ 
