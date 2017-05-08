<template lang="html">
  <div class="profile-right">
    <div class="row mb-3 text-center">
        <!-- <h1 id="timeline-text">Your Journey as A Bytes Hunter</h1> -->
    </div>

    <div class="row p-2" id="profileHeader">
      <ul class="nav justify-content-center nav-pills nav-justified w-100">
        <li class="nav-item">
          <a :class="['nav-link', {'active': currentView == 'Timeline'}]" @click="swithTab('Timeline')" href="#">Timelime</a>
        </li>
        <li class="nav-item">
          <a :class="['nav-link', {'active': currentView == 'Settings'}]" @click="swithTab('Settings')" href="#">Settings</a>
        </li>
        <li class="nav-item">
          <a :class="['nav-link', {'active': currentView == 'Awards'}]" @click="swithTab('Awards')" href="#">Awards</a>
        </li>
        <li class="nav-item">
          <a :class="['nav-link', {'active': currentView == 'Activities'}]" @click="swithTab('Activities')" href="#">Activities</a>
        </li>
      </ul>
    </div>

    <br/>
    <div class="row profile-content">
      <div v-if="currentView == 'Timeline'" class="w-100 pt-3 pr-1">
        <timeline></timeline>
      </div>
      <div v-else-if="currentView == 'Settings'" class="w-100">
        <setting-view></setting-view>
      </div>
      <div v-else-if="currentView == 'Awards'" class="w-100">
        <award-view></award-view>
      </div>
      <div v-else-if="currentView == 'Activities'" class="w-100">
        <activity-view></activity-view>
      </div>
      <div v-else class="w-100">
        <h2>Error: No such tab</h2>
      </div>
    </div>

  </div>

</template>

<script>

import timeline from "./timeline/timelineComponent"
import awardView from "./award/awardView"
import activityView from "./activity/activityView"
import settingView from "./settings/settingView"

module.exports = {

  components: {
    timeline,
    awardView,
    activityView,
    settingView
  },

  data: function () {
    return {
      currentView: "Timeline"
    }
  },

  mounted: function() {

  },

  methods: {
    swithTab: function (tab) {
      this.currentView = tab;
    }
  }
};
</script>

<style lang="css">
.profile-content {
  /*overflow-y: scroll;*/
  /*border-left: 2px solid lightyellow;
  border-right: 2px solid lightblue;
  border-bottom: 2px solid lightblue;*/
  box-shadow: 2px 2px 10px grey;
  background: white;
}

.profile-right {
  top: 0px;
}

#profileHeader {
  border-radius: 2px;
  background: white;
  /*border-bottom: 5px solid lightyellow;
  border-top: 2px solid lightyellow;*/
  /*background: linear-gradient(to bottom right, rgb(255,255,0), rgb(255, 243, 82));*/
  box-shadow: 1px 0px 10px rgba(0,0,0,0.3);
}
</style>
