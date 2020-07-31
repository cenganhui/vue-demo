<template>
  <div class="default container">
    <div class="row">
      <button class="col btn btn-light rounded border-0" @click="toPage('About')">
        <my-icon id="icon-yonghu1" color="text-danger" size="45"></my-icon>
        <h3>About me</h3>
      </button>
      <button class="col btn btn-light rounded border-0" @click="toPage('Resume')">
        <my-icon id="icon-yonghu1" color="text-warning" size="45"></my-icon>
        <h3>Resume</h3>
      </button>
    </div>
    <div class="row">
      <button class="col btn btn-light rounded border-0" @click="toPage('Protfolio')">
        <my-icon id="icon-yonghu1" color="text-success" size="45"></my-icon>
        <h3>Protfolio</h3>
      </button>
    </div>
  </div>
</template>

<script>
import { routerJump } from "../lib/router-lib.js";
export default {
  setup() {
    const { toPage } = routerJump();
    return {
      toPage,
    };
  },
};
</script>

<style scoped>
.row {
  height: 30vh;
}
.col {
  color: white;
  margin: 10px 10px;
  background-color: rgba(255, 255, 255, 0.1);
}
</style>