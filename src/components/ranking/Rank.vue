<template lang="html">
    <div class="container">
        <div class="row">
            <div class="col-3">
                <!-- lists -->
                <br>
                <br>
                    <!-- Level of difficulty-->
                    <list-component :options="difficultyOptions" single="true" @selected="select" title="Difficulty"></list-component>
            </div>

            <div class="col-8">
                <!-- Display rankings -->
                <rank-table :users="rankUsers" :modes="selectedModes" :modeName="formatSelectedModeName"></rank-table>
                <div>
                </div>
            </div>
        </div>
    </div>
</template>

<script type="text/javascript">

  import listComponent from "../search/listComponent"
  import rankTable from "./rankTable"

  module.exports = {

    components: {
      listComponent,
      rankTable
    },

    data: function () {
      return {
        rankUsers: [],
        selectedModes: ["0"],
        difficultyOptions: [
          {
            name: "ALL",
            active: true
          },
          {
            name: "NORMAL",
            active: false
          },
          {
            name: "HARD",
            active: false
          },
          {
            name: "INSANE",
            active: false
          },
        ]
      }
    },

    computed: {
      formatSelectedModeName: function() {
        var name = "";
        for ( var i in this.difficultyOptions) {
          if (this.selectedModes.includes(i)) {
            name += this.difficultyOptions[i].name + "-"
          }
        }
        if (name == "")
          name = "No rank selected ";
        return name.slice(0,-1);
      }
    },

    methods: {
      select: function (el) {
        this.selectedModes = [];
        for (var i in this.difficultyOptions) {
          var item = this.difficultyOptions[i];
          if (item.name == el.opt.name) {
            item.active = el.opt.active;
          }
          if (item.active)
            this.selectedModes.push(i);
        }
      }
    },

    mounted: function () {
      if (DEV) {

        this.rankUsers = [
          [{
            name: "Joe",
            score: 2000
          },
          {
            name: "Mike",
            score: 200
          }],
          [{
            name: "Joe",
            score: 1000
          },
          {
            name: "Mike",
            score: 100
          }],
          [{
            name: "Joe",
            score: 1010
          },
          {
            name: "Mike",
            score: 100
          }],
          [{
            name: "Joe",
            score: 1020
          },
          {
            name: "Mike",
            score: 100
          }]
        ]
      }
    }
  };
</script>
