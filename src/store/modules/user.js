import { getInfo } from '@/api/user'

const state = {
  name: '',
  userId: '',
  roleId: '',
  routes: []
}

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_USERID: (state, userId) => {
    state.userId = userId
  },
  SET_ROLES: (state, roles) => {
    state.roleId = roles
  },
  SET_ROUTES: (state, routes) => {
    state.routes = routes
  }
}

const actions = {

  // get user info
  getInfo({ commit, state }) {
    const params = process.env.NODE_ENV === 'development' ? { test: 'thh' } : {}
    return new Promise((resolve, reject) => {
      getInfo(params).then(response => {
        const { roleId, name, avatar, introduction, routes, userId } = response

        if (!roleId) {
          reject('没有角色，就没法操作')
        }

        commit('SET_ROLES', roleId)
        commit('SET_NAME', name)
        commit('SET_ROUTES', routes)
        commit('SET_USERID', userId)
        resolve(response)
      }).catch((error) => {
        reject(error)
      })
    })
  },


}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
