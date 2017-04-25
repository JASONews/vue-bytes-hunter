<template>
  <div class="row">
    <div class="col">
      <h1 class="text-center my-auto">
        404 NotFound Path {{ path }}
      </h1>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      path: ""
    }
  },
  watch: {
    "$route" (from, to) {
      this.path = to.fullPath;
      console.log(from, to);
    }
  },

  mounted: function () {
    this.path = window.location.pathname;
  }
}
</script>

<style lang="css">
</style>
