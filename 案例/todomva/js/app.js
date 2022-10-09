// 初始化vue
/*
1.初始化vue
2.列表渲染
3.删除
4.添加
5.修改
	5.1  双击lable出现修改框    dblclick
	5.2  editing 如果li有该类则隐藏div  如果没有则隐藏div同级的input
	5.3.1
		记录双击的任务的id 找到位置 并赋值
		给li 中的editing类添加判断   如果value.id ===获取的id  则添加该类
	5.4 修改完后回车  直接使定位的now_id变为-1 则 editing为false   input隐藏 

	6 控制底部的显示和隐藏
	 v-show  长度大于零就显示

	 6.1 统计未完成的数量
	 7 点击图片全选中 全取消 和任务全点则 图片选中
	   7.1 任务有没完成 图标就不选择
	8 清空按钮的显示 根据列表长度来显示
	9 点击清空 将已经完成任务清除
	10 全选  所有任务是true 则checked为true 使用 every
	11 任务列表切换  
	   11.1 先使用 change获取到数据库值来判断点击了哪里 并且显示效果
	   11.2  显示列表用 返回列表 不可直接对表进行修改
	12 数据持久化
	  服务器
	  浏览器：
		localStorage
		   只要修改things操作就存储 
	 12.1 使用监听属性
	*/
(function (window) {
	let things = JSON.parse(localStorage.getItem('todo')) || []
	//将缓存存入浏览器 但是如果清楚缓存 things则为null 必须加个 或
	const vue = new Vue({
		el: '.todoapp',
		data: {
			message: " ",
			things,
			now_id: -1,
			sign: 'all',
			//使用一个对三个进行判断 如果符合就显示   
			// 不使用三个进行判断 因为也不会同时显现俩个
		},
		methods:
		{
			//点击删除
			fnn(id) {
				const idx = this.things.findIndex(  //findIndex(函数) 返回符合条件的第一个元素的位置
					value => value.id === id
				)
				this.things.splice(idx, 1)//splice 删除(位置，数量)
			},
			//回车增加
			addTodo() {
				this.things.unshift({
					id: +new Date(),
					action: this.message,
					flag: false  //false 为未完成
				})
				this.message = ''
				// for(let i =1;i<=1;i++){
				// 	this.things.unshift(
				// 		{
				// 		id:i,
				// 		action:this.message,
				// 		flag:false}
				// 	)
				// }
				// this.message=''
			},
			//获取修改的id
			modify(id) {
				this.now_id = id
				//按回车之后id改变 不等于自身id 取消修改状态
			},
			Return() {
				this.now_id = -1
			},
			//点击 清空完成的
			clear() {
				//点击清空按钮，清除完成的，保留未完成的
				this.things = this.things.filter(value => !value.flag)
				//!value.flag 表示未完成
			},

			change(content) {
				console.log(content);
				this.sign = content
				/*
				if(content=='active'){
					// //this.things=this.things.filter(value=>!value.flag) 
					//不能修改things 否则  things本身就发生改变
				}else if(content=='completed'){
					this.things=this.things.forEach(value)
				}
				// else{
				// 	this.things=this.things.filter(value=>!value.flag)
				// }*/
			}
		},
		computed: {
			//全选之后图标改变，点击图标后选项全选
			selectAll: {
				get() { //所有都任务都勾选之后每一个flag都为true 则图标也为true
					return this.things.every(value => value.flag)
					//every()方法会遍历数组的每一项，如果有有一项不满足条件
					//则表达式返回false,剩余的项将不会再执行检测；
					//如果遍历完数组后，每一项都符合条，则返回true。
				},
				set(value) { //点击图标后 所有任务的选中状态和value相同
					console.log(value);
					this.things.forEach(Element => Element.flag = value)
				}
			},
			showList() {
				switch (this.sign) {
					case 'active': return this.things.filter(value => !value.flag);
						break;
					case 'completed': return this.things.filter(value => value.flag);
						break;
					default: return this.things;
				}
				// if(this.sign==='completed'){
				// 	return this.things.filter(value=>value.flag)
				// }else if (this.sign==='active'){
				// 	return this.things.filter(value=>!value.flag)
				// }else{
				// 	return this.things
				// }
			}
		},
		watch: {
			things: {
				deep: true,
				handler(value) {
					console.log('储存开始');
					localStorage.setItem('todo', JSON.stringify(value))
				}
			}
		}
	})
	window.vue = vue
})(window);
