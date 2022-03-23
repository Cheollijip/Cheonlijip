<template>
  <div class="wrapper">
    <div class="title">
      <div>천리집</div>
      <div>우리 학교 주변 맛집</div>
    </div>
    <div class="Mock-up">
      <transition name="left-image" appear>
        <img src="../assets/LeftIOS.png" class="left" />
      </transition>
      <transition name="right-image" appear>
        <img src="../assets/RightIOS.png" class="right" />
      </transition>
    </div>
  </div>
</template>

<script></script>

<style scoped>
@keyframes bound {
  0% {
    transform: translateY(-10px);
  }
  50% {
    transform: translateY(10px);
  }
  100% {
    transform: translateY(-10px);
  }
}

.wrapper {
  display: flex;
  flex-direction: column;
}

.title {
  padding: 16px;
}
.title div:nth-child(1) {
  font-size: 34px;
  font-weight: bold;
}
.title div:nth-child(2) {
  font-size: 17px;
}

.Mock-up {
  display: flex;
  justify-content: center;
  align-items: center;
}

img {
  width: 170px;
  height: 369px;
}
.left {
  position: relative;
  top: 130px;
  left: 35px;
  animation: bound 4s infinite;
}
.right {
  position: relative;
  top: 200px;
  left: -40px;
  z-index: 2;
  animation: bound 4.1s infinite;
}
</style>
