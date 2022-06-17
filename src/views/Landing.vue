<template>
  <div class="wrapper">
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

.Mock-up {
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

img {
  width: 170px;
  height: 369px;
}

.left {
  position: relative;
  left: 35px;
  top: -30px;
  animation: bound 4s infinite;
}

.right {
  position: relative;
  top: 40px;
  left: -20px;
  z-index: 2;
  animation: bound 4.1s infinite;
}
</style>
