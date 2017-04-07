<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-2">
        <!-- lists -->
        <br>
        <br>
        <div class="row">
          <!-- Level of difficulty-->
          <h3>Level</h3>
          <div class="list-group">
            <a href="#" id="normalMode" class="list-group-item">Normal<span class="badge"></span></a>
            <a href="#" id="hardMode" class="list-group-item">Hard<span class="badge">3</span></a>
            <a href="#" id="insaneMode" class="list-group-item">Insame<span class="badge">7</span></a>
          </div>
        </div>

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
                <tr v-for="(item, index) in items">
                  <td>{{index + 1}}</td>
                  <td>{{item.name}}</td>
                  <td>{{item.score}}</td>
                </tr>
              </tbody>

            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript" src="../ranking.js" ></script>
