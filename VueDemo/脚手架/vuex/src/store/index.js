import Vue from 'vue'
import Vuex from 'vuex'

//1.安装插件
Vue.use(Vuex)
// Vue.use(Vuex)
const moudleA = {
  state: {

  },
  mutations: {
    updataName(state, value) {
      state.name = value
    }
  },
  getters: {
    changeNN(state, getters, rootState) {
      return state.name + rootState.counter
    }
  },
  actions: {
    updataNN(context) {
      setTimeout(() => {
        context.commit('updataName', 'wkk')
      }, 1000)
    }
  }
}
const moudleB = {
  state: {},
  mutations: {},
  actions: {},
  getters: {}
}

//2.创建对象
const store = new Vuex.Store({
  //参数
  state: {
    counter: 10,
    people: {
      //  name:'dxr',
      age: 19,
      action: '累了'
    },
    name: 'wgg',
    count: 5,
    count1: 1,
    count2: 2,
    count3: 3,
    count4: 4,
    count5: 5,
    personList: [{
      name: 'a1',
      age: 1
    }]
  },
  //方法
  mutations: {
    ADD_PERSON(state, value) {
      state.personList.push(value)


    },
    addMount(state) {
      state.counter++
    },

    dropMount(state) {
      state.counter--
    },
    expendN(state, receive) {
      state.counter *= receive
    },
    change(state) {
      //  state.people.name='戴新瑞'
      Vue.set(state.people, 'name', '戴新瑞')
      Vue.delete(state.people, 'age')
    }
  },
  //类似于 computed 对state中信息进行处理
  getters: {
    powerMount(state) {
      return state.counter * state.counter
    },
    threeMount(state, getters) {
      return getters.powerMount * state.counter
    },
    randomMount(state, getters) {
      return function (n) {
        return getters.threeMount * n
      }
    },
  },

  actions: {
    differentChange(context, value) {
      // setTimeout(()=>{
      //     context.commit('change')
      //     console.log(vlue);
      // },1000)
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          context.commit('change')
          console.log(value);
          resolve("传送then中的")
        }, 1000)
      })
    }

  },

  modules: {
    a: moudleA,
    b: moudleB
  }
})

export default store
