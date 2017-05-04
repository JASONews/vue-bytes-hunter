<template lang="html">
<div class="">
  <div class="text-center mt-5 mb-2">
    <h4>{{title}}</h4>
  </div>
  <div class="list-group">
    <a href="#" v-for="opt in options" :class="['text-center', 'list-group-item', 'list-group-item-action', {'list-group-item-success': opt.active}]" @click="update(opt)">{{opt.name}}</a>
  </div>
</div>
</template>

<script>
export default {
  props: ["options", "title", "single"],

  methods: {
    update: function (el) {
      el.active = !el.active;
      this.$emit("selected", {
        title: this.title,
        opt: el
      });

      if (this.single) {
        for (var i of this.options) {
          if (i.name != el.name) {
            i.active = false;
            this.$emit("selected", {
              title: this.title,
              opt: i
            });
          }
        }
        return;
      }

      if (el.name == "ALL") {
        for (var i of this.options) {
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
