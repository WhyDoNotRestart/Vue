var name='1';
var age=12;

function sum(a,b){
    return a+b
}
function aciton(){
    var s1='你好'
    return  s1
}


//导出方式一:以对象方式
export{
    sum, action
};

//导出方式二
    //导出函数
    //导出变量
    //导出类
export var name1="戴新瑞"
export function nulll(){}
export class person{
    student(name,age){
        this.name=name
        this.age=age;
    }
}



//导入的数据的使用必须是导数数据的名字
    //使用default改变  但是只能使用一次
    const address="连云港"
  //  export default address

    
    export default function capacity (){}


//导入后对模块内变量名的改写
  //重命名后，这些变量与函数可以用不同的名字输出两次。
    export{
        name as his_name
    }
  


     module.exports={
         }//相当于  exprots={}