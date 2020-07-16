<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
export default {
  name: 'App',
  data () {
    return {}
  },
  components: {
  },
  computed: {
  },
  watch: {
    $route() {
      this.addTags()
    }
  },
  created () {
  },
  mounted () {
  },
  methods: {
    addTags() {
      const { name } = this.$route
      if (name) {
        this.$store.dispatch('tagsView/addView', this.$route)
      }
      return false
    }
  }
}
</script>

