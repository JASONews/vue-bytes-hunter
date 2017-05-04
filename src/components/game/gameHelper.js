
function save(score) {
  window.vue.bus.$emit("gameFinish", score);
}
