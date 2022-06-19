<template>
  <transition>
    <div v-if="isOpenModal" class="modal">
      <div class="title">평점</div>
      <div class="number-list">
        <div v-for="i in [1, 2, 3, 4, 5]" :key="i">
          <div
            @click="score = i"
            :class="score === i ? 'number-choice' : 'number'"
          >
            {{ i }}
          </div>
        </div>
      </div>
      <div class="btn-box">
        <div class="cancel-btn" @click="IS_OPEN_MODAL(false)">Cancel</div>
        <div class="okay-btn" @click="scoreUpdate">OK</div>
      </div>
    </div>
  </transition>
</template>

<script>
import { mapMutations, mapState, mapActions } from 'vuex'
export default {
  data() {
    return {
      score: 3,
    }
  },
  computed: {
    ...mapState(['isOpenModal', 'choiceMatjip']),
  },
  methods: {
    ...mapMutations(['IS_OPEN_MODAL']),
    ...mapActions(['upDateMatjipScore']),
    scoreUpdate() {
      this.IS_OPEN_MODAL(false)
      this.upDateMatjipScore({
        matjip_id: this.choiceMatjip.matjib_id,
        score: this.score,
        token: this.$route.params.token,
      })
    },
  },
}
</script>

<style scoped>
.modal {
  width: 250px;
  height: 150px;
  border-radius: 10px;
  background: #f2f2f2;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.title {
  width: 100%;
  text-align: center;
  padding: 20px 0;
}

.number-list {
  background-color: #d9d9d9;
  display: flex;
  align-items: center;
  width: 200px;
  height: 33px;
  font-size: 15px;
  margin: 0 auto;
  border-radius: 9px;
}

.number {
  width: 40px;
  height: 28px;
  border-radius: 7px;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
}

.number-choice {
  width: 38px;
  height: 30px;
  background-color: white;
  border-radius: 7px;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  box-shadow: 0px 0px 3px grey;
}

.btn-box {
  margin-top: 13px;
  display: flex;
  border-top: 1px solid #a9a9ab;
}

.cancel-btn {
  width: 125px;
  height: 40px;
  border-right: 1px solid #a9a9ab;
  display: flex;
  align-items: center;
  justify-content: center;
}

.okay-btn {
  width: 125px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
