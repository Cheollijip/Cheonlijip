<template>
  <div class="wrapper" :style="{ top: positionY + 'px' }">
    <div
      class="btn-box"
      @mousedown="down"
      @touchstart.stop="down"
      @mousemove="move"
      @touchmove.stop="move"
      @mouseup="end"
      @touchend.stop="end"
      @click="showRewardDesc"
    >
      <div class="btn" />
    </div>

    <div class="title-box">
      <div>
        <span>천리집</span>
        <p>개쩌는 국밥집</p>
      </div>

      <div class="score">4.9 / 5</div>
    </div>

    <div class="point-btn-box">
      <button class="point-btn">평점 등록하기</button>
      <button class="plus-btn">...</button>
    </div>

    <div class="info-box">
      <div>상세</div>
      <div class="info">
        <span>우리학교에서</span>
        <p>50m</p>
        <span>주소</span>
        <p>주소주소주소주소</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isUp: false,
      flags: false,
      now: null,
      position: window.screen.height - 110,
    }
  },

  computed: {
    positionY() {
      return this.position
    },
  },

  methods: {
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

    move() {
      if (this.flags) {
        var touch
        if (event.touches) {
          touch = event.touches[0]
        } else {
          touch = event
        }

        if (
          touch.clientY > window.screen.height - 310 &&
          touch.clientY < window.screen.height - 110
        ) {
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
        ? (this.position = window.screen.height - 310)
        : (this.position = window.screen.height - 110)
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

.point-btn {
  font-size: 17px;
  color: white;
  background-color: #34c557;
  border: none;
  max-width: 400px;
  width: 100%;
  height: 44px;
  border-radius: 10px;
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
}

.info {
  max-width: 400px;
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
