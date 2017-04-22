<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-2">
        <!-- lists -->
        <br>
        <br>
        <div class="row">
<!-- <<<<<<< HEAD
          <! Level of difficulty-->
          <!-- <h3>Level</h3>
          <div class="list-group">
            <a href="#" id="normalMode" class="list-group-item">Normal<span class="badge"></span></a>
            <a href="#" id="hardMode" class="list-group-item">Hard<span class="badge">3</span></a>
            <a href="#" id="insaneMode" class="list-group-item">Insame<span class="badge">7</span></a>
          </div>
        </div> -->

        <!-- <div class="row"> -->
          <!-- Category -->
          <!-- <h3>Category</h3>
          <div class="list-group">
            <a href="#" class="list-group-item">Types<span class="badge">6</span></a>
            <a href="#" class="list-group-item">Data Structures<span class="badge">4</span></a>
            <a href="#" class="list-group-item">Algorithms<span class="badge">3</span></a>
            <a href="#" class="list-group-item">Logics<span class="badge">7</span></a>
            <a href="#" class="list-group-item">Memory<span class="badge">2</span></a>
          </div>
        </div> -->
      <!-- </div>

      <div class="col-sm-10">
        <!<div class="rank-list">
          <div class="row text-center">
            <h2>Total Ranking</h2>
            <h5>Normal Mode</h5>

            <table class="table table-hover">
              <thead>
                <tr>
                  <th>Rank</th>
                  <th>User</th>
                  <th>Bytes</th>
                </tr>
              </thead>

              <tbody>
                <tr v-for="(item, index) in items">
                  <td>{{index + 1}}</td>
                  <td>{{item.name}}</td>
                  <td>{{item.score}}</td>
                </tr>
              </tbody>

            </table>
          </div>  -->
<!-- ======= -->
            <div class="col-sm-2">
                <!-- lists -->
                <br>
                <br>
                <div class="row">
                    <!-- Level of difficulty-->
                    <h3>Level</h3>
                    <div class="list-group">
                        <a href="#" id="normalMode" class="list-group-item">Normal</a>
                        <a href="#" id="hardMode" class="list-group-item">Hard</a>
                        <a href="#" id="insaneMode" class="list-group-item">Insame</a>
                    </div>
                </div>
            </div>


            <div class="col-sm-10">
                <!-- Display rankings -->
                <div class="rank-list">
                    <div class="row text-center">
                        <h2>Total Ranking</h2>
                        <h5>Normal Mode</h5>

                        <table class="table table-hover">
                            <thead>
                            <tr>
                                <th>Rank</th>
                                <th>User</th>
                                <th>Bytes</th>
                            </tr>
                            </thead>

                            <tbody>
                            <tr v-for="(item, index) in items" v-if="index === 0" class="success">
                                <td>{{index + 1}}</td>
                                <td>{{item.name}}</td>
                                <td>{{item.score}}</td>
                            </tr>
                            <tr v-for="(item, index) in items" v-if="index === 1" class="danger">
                                <td>{{index + 1}}</td>
                                <td>{{item.name}}</td>
                                <td>{{item.score}}</td>
                            </tr>
                            <tr v-for="(item, index) in items" v-if="index === 2" class="info">
                                <td>{{index + 1}}</td>
                                <td>{{item.name}}</td>
                                <td>{{item.score}}</td>
                            </tr>
                            <tr v-for="(item, index) in items" v-if="index > 2">
                                <td>{{index + 1}}</td>
                                <td>{{item.name}}</td>
                                <td>{{item.score}}</td>
                            </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
<!-- >>>>>>> 3d5886b8b76c62d78b0909c4ceecc37cf3eb46ee -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      rankType: '',
      items: [
        {
            name: '',
            score: 0
        }
      ]
    }
  },
  mounted: function() {
      this.$http.get('https://storage.googleapis.com/bytehunter_images/rank-normal.json').then(response => {
        return response.json();
      }).then(json => {
        this.rankType = json.for;
        this.items = json.list;
      })
  }
}
</script>

<style lang="css">
.rank-list {
    padding-left: 15px;
    text-align: center;
}

.table th {
    text-align: center;
}

.icon {
  margin: 10px;

</style>
