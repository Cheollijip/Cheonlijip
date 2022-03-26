<template>
  <div class="background">
    <div id="map" style="height: 100%"></div>
    <img src="../assets/location.svg" />
    <matjip-tap />
  </div>
</template>
<script>
import MatjipTap from './MatjipTap.vue'

export default {
  components: { MatjipTap },
  data() {
    return {
      Cupertino: null,
    }
  },
  mounted() {
    mapkit.init({
      authorizationCallback: function (done) {
        done(import.meta.env.VITE_MAPKIT_KEY)
      },
      language: 'kr',
    })

    var MarkerAnnotation = mapkit.MarkerAnnotation
    var myMarker = new mapkit.Coordinate(36.391876, 127.351133)
    var myAnnotation = new MarkerAnnotation(myMarker, {
      color: '#34C557',
      title: '천리집',
    })

    this.Cupertino = new mapkit.CoordinateRegion(
      new mapkit.Coordinate(36.391876, 127.351133),
      new mapkit.CoordinateSpan(0.167647972, 0.354985255)
    )
    var map = new mapkit.Map('map')

    map.addEventListener('region-change-end', function () {
      console.log(map.center)
    })

    map.showItems([myAnnotation])
    map.region = this.Cupertino
  },
}
</script>

<style>
.background {
  width: 100%;
  height: 100vh;
  touch-action: none;
  overflow: none;
}

img {
  position: absolute;
  z-index: 2;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
