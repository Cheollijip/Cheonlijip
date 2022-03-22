<template>
  <div id="map" style="height: 100%"></div>
</template>
<script>
export default {
  mounted() {
    mapkit.init({
      authorizationCallback: function (done) {
        done(import.meta.env.VITE_MAPKIT_KEY)
      },
      language: 'kr',
    })

    var Cupertino = new mapkit.CoordinateRegion(
      new mapkit.Coordinate(36.391876, 127.351133),
      new mapkit.CoordinateSpan(0.167647972, 0.354985255)
    )
    var map = new mapkit.Map('map')
    map.region = Cupertino
  },
}
</script>
