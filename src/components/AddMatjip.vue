<template>
  <div class="background">
    <div id="map" style="height: 100%"></div>
    <img src="../assets/location.svg" />
  </div>
</template>

<script>
import { sendBridgeEvent } from '../utils/Bridge'
import VueCookies from 'vue-cookies'

export default {
  data() {
    return {
      Cupertino: null,
      center: null,
    }
  },
  created() {
    const thisCopy = this
    window.getCenter = function () {
      thisCopy.matjipPosition()
    }
  },
  mounted() {
    window.addEventListener('message', this.matjipPosition, false)

    const thisCopy = this

    mapkit.init({
      authorizationCallback: function (done) {
        done(import.meta.env.VITE_MAPKIT_KEY)
      },
      language: 'kr',
    })

    this.Cupertino = new mapkit.CoordinateRegion(
      new mapkit.Coordinate(36.391876, 127.351133),
      new mapkit.CoordinateSpan(0.167647972, 0.354985255)
    )
    var map = new mapkit.Map('map')

    map.addEventListener('region-change-end', function () {
      console.log(map.center)
      thisCopy.center = {
        lat: map.center.latitude,
        lng: map.center.longitude,
      }
      VueCookies.set('lat', map.center.latitude)
      VueCookies.set('lng', map.center.longitude)
    })

    map.region = this.Cupertino
  },
  beforeDestroy() {
    window.addEventListener('getCenter', this.matjipPosition, false)
  },
  methods: {
    asd() {
      console.log(VueCookies.get('center'))
    },

    matjipPosition() {
      // sendBridgeEvent('position', this.center)
      alert(this.center)
      return this.center
    },
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
