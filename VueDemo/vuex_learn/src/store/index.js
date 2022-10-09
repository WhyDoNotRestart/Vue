import {
  createStore
} from 'vuex'

export default createStore({
  //相当于data
  state: {
    counter: 1,
    message: 'action使用的数据',
    list: [1, 2, 3, 4, 5, 6, 7, 8, 10]
  },
  //相当于computed
  //只有俩个参数 如果接收外部传来的参数 需要再里面返回一个函数
  getters: {
    compValue(state) {
      return state.counter * state.counter
    },
    useExtra(state) {
      return state.list.map(value => value * state.counter)
    },
    //以 getter中的内容化为参数  访问到已经 写好的数据
    threeAgain(state, getters) {
      return getters.compValue * state.counter
    },
    //实质上是返回一个函数  d
    //  $stor.getters.custom(12)   custom(12) 就是使用返回的一个函数  显示的是这个函数返回的结果
    custom(state, getters) {
      return function (n) {
        return state.counter * n * getters.compValue
      }
    }

  },

  //相当于methods
  mutations: {
    upEvent(state) {
      state.counter++
    },
    downEvent(state) {
      state.counter--
    },
    nullVlaue(state) {
      state.counter = 0
    },
    aaddEvent(state, receiveValuye) {
      console.log(receiveValuye);
      //state.counter += receiveValuye
      state.counter += receiveValuye.value
    },
    updataInfor(state, receiveValuye) {
      console.log('传送的数据先经过aciton 再从 action传给mustations' + ':' + receiveValuye);
      state.message = receiveValuye
    },
    useObj(state, receive_obj) {
      receive_obj.Fn()
      console.log(receive_obj.name);

    }



  },
  actions: {
    updata_action(context, receive_value) {
      setTimeout(() => {
        context.commit('updataInfor', receive_value) //调用mutations中方法
        console.log("接受的数据：" + receive_value);
      }, 2000);
    },
    transObj(context, receive_obj) {
      return new Promise((resolve, reject) => {
        console.log('定时开始');
        setTimeout(() => {
          context.commit('useObj', receive_obj)
          resolve(receive_obj.name)
          console.log(receive_obj);
        }, 2000);
      })
    }
  },
  modules: {}
})