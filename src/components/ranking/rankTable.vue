<template lang="html">
  <div class="">
    <br/>
    <br/>

      <h5 class="m-2">{{modeName}}</h5>

      <table class="table table-hover table-bordered">
          <thead>
          <tr>
              <th>Rank</th>
              <th>User</th>
              <th>Bytes</th>
          </tr>
          </thead>

          <tbody>
          <tr v-for="(user, index) in rankUsers" v-if="users.length>0" :class="">
              <th scope="row">{{index + 1}}</th>
              <td>{{user.name}}</td>
              <td>{{user.score}}</td>
          </tr>
          </tbody>
      </table>
  </div>
</template>

<script>
export default {
  props: ["users", "modes", "modeName"],
  data: function () {

    return {
    }
  },
  computed: {
    rankUsers: function () {
      return this.users[this.modes[0]];
    }
  }
}
</script>

<style lang="css">
</style>
