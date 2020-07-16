import { getEnumSku, getEnumMarket, getProductSkuTypes } from '@/api/common'

const state = {
  enumSku: null, // 工单枚举
  enumMarket: null, // 推广部日志枚举
  productSkuList: []
}

const mutations = {
  SET_ENUM: (state, list) => {
    state.enumSku = list
  },
  SET_ENUM_MARKET: (state, list) => {
    state.enumMarket = list
  },
  SET_PRODUCT_SKU_LIST: (state, list) => {
    state.productSkuList = list
  }
}

const actions = {
  getEnumSku({ commit, state }) {
    if (state.enumSku) {
      return
    }
    return getEnumSku().then(res => {
      commit('SET_ENUM', res)
    })
  },
  getEnumMarketList({ commit, state }) {
    if (state.enumMarket) {
      return
    }
    return getEnumMarket().then(res => {
      commit('SET_ENUM_MARKET', res)
    })
  },
  getProductSkuList({ commit, state }, params = {}) {
    if (params.status) {
      return getProductSkuTypes(params).then(res => {
        commit('SET_PRODUCT_SKU_LIST', res.list)
      })
    }
    if (state.productSkuList && state.productSkuList.length) {
      return
    }
    return getProductSkuTypes(params).then(res => {
      commit('SET_PRODUCT_SKU_LIST', res.list)
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
