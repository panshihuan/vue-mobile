import { getEnumOrg, getEnumRenewList } from '@/api/common'
import { geEnumtHardWareList, getProductSaleEnum, getEnumExpectedProject } from '@/api/organization'

const state = {
  enumOrg: null, // 机构信息枚举
  enumEnumRenew: null, // 业务需求--枚举接口--机构管理下
  enumHardWare: null, // 【试用转正】-枚举
  enumSale: null, // 【产品销售】-枚举
  enumExpect: null, // 【项目管理】枚举接口
}

const mutations = {
  SET_ENUM: (state, list) => {
    state.enumOrg = list
  },
  SET_ENUM_RENEW: (state, list) => {
    state.enumEnumRenew = list
  },
  SET_ENUM_RENEW_3: (state, list) => {
    state.enumHardWare = list
  },
  SET_ENUM_RENEW_5: (state, list) => {
    state.enumSale = list
  },
  SET_ENUM_RENEW_4: (state, list) => {
    state.enumExpect = list
  }
}

const actions = {
  getEnumOrg({ commit, state }) {
    if (state.enumOrg) {
      return
    }
    return getEnumOrg().then(res => {
      commit('SET_ENUM', res)
    })
  },
  getEnumRenew({ commit, state }) {
    if (state.enumEnumRenew) {
      return
    }
    return getEnumRenewList().then(res => {
      commit('SET_ENUM_RENEW', res)
    })
  },
  geEnumtHardWareList({ commit, state }) {
    if (state.enumHardWare) {
      return
    }
    return geEnumtHardWareList().then(res => {
      commit('SET_ENUM_RENEW_3', res)
    })
  },
  getProductSaleEnum({ commit, state }) {
    if (state.enumSale) {
      return
    }
    return getProductSaleEnum().then(res => {
      commit('SET_ENUM_RENEW_5', res)
    })
  },
  getEnumExpectedProject({ commit, state }) {
    if (state.enumExpect) {
      return
    }
    return getEnumExpectedProject().then(res => {
      commit('SET_ENUM_RENEW_4', res)
    })
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
