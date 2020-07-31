<template>
  <div class="content-head">
    <div>
      <h1>
        <slot name="title" />
      </h1>
      <h1>
        <slot name="desc" />
      </h1>
    </div>
    <div>
      <h6>
        <slot name="calc" />
      </h6>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.content-head {
  width: 100%;
  height: 20vh;
  color: white;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
}

.content-head > div {
  display: flex;
  align-content: center;
  justify-content: center;
}

.content-head > div > h1:nth-child(2) {
  margin-left: 10px;
  color: rgb(6, 255, 247);
}
</style>