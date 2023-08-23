import {reqGoodsInfo} from '@/api'
const state = {
    goodInfo:{}
}
const actions = {
    async getGoodInfo({commit},skuid){
       let result = await reqGoodsInfo(skuid)
       if(result.code == 200){
            commit('GETGOODINFO',result.data)
       }
    }
}
const mutations = {
    GETGOODINFO(state,goodInfo){
        state.goodInfo = goodInfo
    }
}
const getters = {
    categoryView(state){
        return state.goodInfo.categoryView
    }
}
export default {
    state, 
    actions, 
    mutations, 
    getters

}