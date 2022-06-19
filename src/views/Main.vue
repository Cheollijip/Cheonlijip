<template>
  <Mapkit />
  <matjip-tap></matjip-tap>
  <score-input-modal></score-input-modal>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Mapkit from '../components/MapKit.vue'
import MatjipTap from '../components/MatjipTap.vue'
import ScoreInputModal from '../components/ScoreInputModal.vue'

export default {
  components: { Mapkit, MatjipTap, ScoreInputModal },
  methods: {
    ...mapActions(['fetchMatjipList']),
  },
  created() {
    this.fetchMatjipList(this.$route.params.token)
  },
}
</script>

<style scoped></style>
