<template>
  <Mapkit />
  <matjip-tap></matjip-tap>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Mapkit from '../components/MapKit.vue'
import MatjipTap from '../components/MatjipTap.vue'

export default {
  components: { Mapkit, MatjipTap },
  methods: {
    ...mapActions(['fetchMatjipList']),
  },
  created() {
    this.fetchMatjipList(this.$route.params.token)
  },
}
</script>

<style scoped></style>
