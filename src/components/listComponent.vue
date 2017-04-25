<template lang="html">
<div class="">
  <div class="text-center">
    <h4>{{title}}</h4>
  </div>
  <div class="list-group">

    <a href="#" v-for="opt in options" :class="['text-center', 'list-group-item', 'list-group-item-action',{'list-group-item-success': opt.active}]" @click="update(opt)">{{opt.name}}</a>
    <!-- <a href="#" class="list-group-item list-group-item-action active">All</span></a>
    <a href="#" class="list-group-item list-group-item-action">Normal<span class="badge">6</span></a>
    <a href="#" class="list-group-item list-group-item-action">Hard<span class="badge">3</span></a>
    <a href="#" class="list-group-item list-group-item-action">Insame<span class="badge">7</span></a> -->
  </div>
</div>
</template>

<script>
export default {
  props: ["options", "title"],

  methods: {
    update: function (el) {
      el.active = !el.active;
      this.$emit("selected", {
        title: this.title,
        opt: el
      });

      if (el.name == "ALL") {
        for (var i of this.options) {
          console.log(i);
          if (i.name != "ALL") {
            i.active = false;
            this.$emit("selected", {
              title: this.title,
              opt: i
            });
          }
        }
      } else {
        if (this.options[0].active) {
          this.options[0].active = false;
          this.$emit("selected", {
            title: this.title,
            opt: this.options[0]
          });
        }
      }
    }
  }
}
</script>

<style lang="css">
</style>
