<template>
  <div class="wrapper">
    <div class="btn-box"><div class="btn" /></div>

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
        <div>
          <span>우리학교에서</span>
          <p>50m</p>
        </div>
        <div>
          <span>주소</span>
          <p>주소주소주소주소</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.wrapper {
  width: 100%;
  padding: 11px;
  background-color: rgba(248, 248, 248, 0.9);
  position: absolute;
  bottom: -260px;
  border-radius: 10px 10px 0 0;
  box-sizing: border-box;
  row-gap: 30px;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.btn-box {
  width: 100%;
  display: flex;
  justify-content: center;
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
}
</style>
