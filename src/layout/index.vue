<template>
  <div>
    <app-main />
    <Tabbar v-model="active" @change="changeTab">
      <TabbarItem>
        <span>主页</span>
        <template #icon="props">
          <svg-icon
            style="width: 17px; height:17px;cursor:pointer;"
            :icon-class="props.active ? 'home-fill' : 'home'"
          />
        </template>
      </TabbarItem>
      <TabbarItem>
        <span>菜单</span>
        <template #icon="props">
          <svg-icon
            style="width: 18px; height:18px;cursor:pointer;"
            :icon-class="props.active ? 'menu-fill' : 'menu'"
          />
        </template>
      </TabbarItem>
      <TabbarItem>
        <span>我的</span>
        <template #icon="props">
          <svg-icon
            style="width: 17px; height:17px;cursor:pointer;"
            :icon-class="props.active ? 'mine-fill' : 'mine'"
          />
        </template>
      </TabbarItem>
    </Tabbar>
  </div>
</template>

<script>
import AppMain from './components/AppMain'
import { Tabbar, TabbarItem } from 'vant'
export default {
  components: {
    AppMain,
    Tabbar,
    TabbarItem
  },
  data() {
    return {
      active: 0
    }
  },
  methods: {
    changeTab(val) {
      switch (val) {
        case 0 :
          this.$router.push({
             name: 'Home'
          })
          break;
        case 1 :
          this.$router.push({
             name: 'Menu'
          })
          break;
        case 2 :
          this.$router.push({
             name: 'Mine'
          })
          break;

        default:;
      }
    }
  }
}
</script>

<style lang="less" scoped>
</style>
