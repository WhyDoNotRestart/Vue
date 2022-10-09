
//所有的导入后   必须在html文件 script标签中加入  type="module"
    //import命令输入的变量都是只读的，因为它的本质是输入接口。
        //也就是说，不允许在加载模块的脚本里面，改写接口。


import { sum } from "./bbb.js";
var ss=sun(10,20);
console.log(ss);



//default的使用
    //直接省略{}
import add from "./bbb.js";
console.log(add);

//导入所有
import * as aaa from "./bbb.js"
console.log(name1);





const {} =require("./bbb.js")