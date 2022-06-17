<template>
  <div class="background">
    <div id="map" style="height: 100%"></div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'

export default {
  data() {
    return {
      Cupertino: null,
      dataa: {},
    }
  },
  computed: {
    ...mapGetters(['getMatjipList']),
  },
  methods: {
    ...mapMutations(['CHOICE_MATJIP']),
    ...mapActions(['fetchMatjipList']),

    mapFetch() {
      mapkit.init({
        authorizationCallback: function (done) {
          done(import.meta.env.VITE_MAPKIT_KEY)
        },
        language: 'kr',
      })

      const choiceDataFetch = (data) => {
        this.CHOICE_MATJIP(data)
        console.log('asdsdadasd')
      }

      var calloutDelegate = {
        calloutElementForAnnotation: function ({ landmark }) {
          choiceDataFetch(landmark)

          var element = document.createElement('div')
          element.className = 'review-callout'
          element.textContent = landmark.name

          element.style.padding = '5px'
          element.style.borderRadius = '10px'
          element.style.backgroundColor = 'white'
          return element
        },
      }

      const data = this.getMatjipList.map((i) => {
        return {
          coordinate: new mapkit.Coordinate(i.latitude, i.longitude),
          ...i,
        }
      })

      var annotations = data.map((landmark) => {
        var annotation = new mapkit.MarkerAnnotation(landmark.coordinate, {
          color: '#34C557',
          callout: calloutDelegate,
          glyphImage: {
            1: 'https://walkhub.s3.ap-northeast-2.amazonaws.com/walkhub/c60addb5-6149-4873-a9aa-62827bdbb1d2lotation.png',
          },
        })
        annotation.landmark = landmark
        return annotation
      })

      this.Cupertino = new mapkit.CoordinateRegion(
        new mapkit.Coordinate(36.39196, 127.351198),
        new mapkit.CoordinateSpan(0.015, 0.015)
      )
      var map = new mapkit.Map('map')

      map.showItems(annotations)
      map.region = this.Cupertino
    },
  },
  created() {
    this.fetchMatjipList()
  },
  mounted() {
    setTimeout(() => {
      this.mapFetch()
    }, 1000)
  },
}
</script>

<style>
.background {
  width: 100%;
  height: 100vh;
  touch-action: none;
  overflow: none;
  position: relative;
}
</style>
