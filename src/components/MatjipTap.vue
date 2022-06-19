<template>
  <div
    class="wrapper"
    :style="{ top: positionY + 'px' }"
    v-if="choiceMatjip"
    @mousedown="down"
    @touchstart.stop="down"
    @mousemove="move"
    @touchmove.stop="move"
    @mouseup="end"
    @touchend.stop="end"
    @click="showRewardDesc"
    @touchcancel="cancel"
  >
    <div class="btn-box">
      <div class="btn" />
    </div>

    <div class="title-box">
      <div>
        <span>{{ choiceMatjip.name }}</span>
        <p>{{ choiceMatjip.description }}</p>
      </div>

      <div class="score">
        {{ Math.round(choiceMatjip.score * 10) / 10 }} / 5
      </div>
    </div>

    <div
      class="point-btn-box"
      @mousedown.stop=""
      @touchstart.stop=""
      @mousemove.stop=""
      @touchmove.stop=""
      @mouseup.stop=""
      @touchend.stop=""
      @touchcancel.stop=""
    >
      <button
        class="point-btn-false"
        @click.prevent="scoreUpDate"
        v-if="!choiceMatjip.is_scored"
      >
        <div class="shap">#</div>
        평점 주기
      </button>
      <button class="point-btn-true" v-else>이미 평점을 입력하였습니다.</button>
      <button class="plus-btn">...</button>
    </div>

    <div
      class="info-box"
      @mousedown.stop=""
      @touchstart.stop=""
      @mousemove.stop=""
      @touchmove.stop=""
      @mouseup.stop=""
      @touchend.stop=""
      @touchcancel.stop=""
    >
      <div>상세</div>
      <div class="info">
        <span>우리학교에서</span>
        <p>{{ choiceMatjip.distance }}m</p>
        <span>주소</span>
        <p>{{ choiceMatjip.address }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import { sendBridgeEvent } from '../utils/Bridge'
export default {
  data() {
    return {
      isUp: false,
      flags: false,
      now: null,
      close: 330,
      open: 110,
      position: window.screen.height - 110,
    }
  },
  mounted() {
    let vh = window.innerHeight * 0.01
    this.position = vh * 100 - this.open

    window.addEventListener('resize', () => {
      let vh = window.innerHeight * 0.01
      this.position = vh * 100 - this.open
    })

    const thisCopy = this
    window.updateScore = function (score) {
      thisCopy.matjipScore(score)
    }
  },
  computed: {
    ...mapState(['choiceMatjip']),
    positionY() {
      return this.position
    },
  },

  methods: {
    ...mapActions(['upDateMatjipScore']),
    scoreUpDate() {
      sendBridgeEvent('score', '')
    },

    matjipScore(score) {
      alert(score)
      this.upDateMatjipScore({
        matjip_id: this.choiceMatjip.matjibId,
        score: score,
      })
    },

    down(event) {
      this.flags = true
      var touch
      if (event.touches) {
        touch = event.touches[0]
      } else {
        touch = event
      }
      this.now = touch.clientY
    },

    move(event) {
      if (this.flags) {
        var touch
        if (event.touches) {
          touch = event.touches[0]
        } else {
          touch = event
        }

        if (
          touch.clientY > window.innerHeight - this.close &&
          touch.clientY < window.innerHeight - this.open + 20
        ) {
          console.log(touch.clientY)
          this.position = touch.clientY
        }

        document.addEventListener(
          'touchmove',
          function () {
            event.preventDefault()
          },
          false
        )
      }
    },

    end(event) {
      var touch
      if (event.touches) {
        touch = event.changedTouches[0]
      } else {
        touch = event
      }
      this.now < touch.clientY ? (this.isUp = false) : (this.isUp = true)
      this.isUp
        ? (this.position = window.innerHeight - this.close)
        : (this.position = window.innerHeight - this.open)
      this.flags = false
    },

    cancel() {
      this.flags = false
    },
  },
}
</script>

<style scoped>
.wrapper {
  width: 100%;
  height: 330px;
  padding: 11px;
  background-color: rgba(248, 248, 248, 0.9);
  position: fixed;
  touch-action: none;
  top: 100%;
  border-radius: 10px 10px 0 0;
  box-sizing: border-box;
  row-gap: 30px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  transition: all 0.1s linear;
}

.btn-box {
  width: 100%;
  display: flex;
  padding: 10px 0;
  justify-content: center;
  box-sizing: border-box;
}

.btn {
  width: 36px;
  height: 4px;
  border-radius: 2.5px;
  background-color: #c4c4c4;
}

.title-box {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.title-box span {
  font-size: 30px;
  font-weight: bold;
}

.title-box p {
  margin: 0;
  font-size: 10px;
}

.score {
  font-size: 17px;
  font-weight: bold;
  color: #34c557;
}

.point-btn-box {
  display: flex;
  align-items: center;
}

.shap {
  width: 27px;
  height: 27px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #34c557;
  background-color: white;
  margin-right: 6px;
  border-radius: 50%;
}

.point-btn-true {
  font-size: 17px;
  color: white;
  background-color: gray;
  border: none;
  width: 100%;
  height: 44px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.point-btn-false {
  font-size: 17px;
  color: white;
  background-color: #34c557;
  border: none;
  width: 100%;
  height: 44px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.plus-btn {
  margin-left: 11px;
  height: 44px;
  width: 44px;
  background-color: #e2e2e2;
  color: #34c557;
  border: none;
  border-radius: 10px;
  font-size: 30px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}

.info {
  width: 100%;
  background-color: white;
  padding: 7px 15px;
  border-radius: 10px;
  box-sizing: border-box;
  font-size: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.info span {
  color: #969696;
  margin: 5px;
}
.info p {
  color: #000000;
  margin: 5px;
}
</style>
