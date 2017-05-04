<template lang="html">
  <div class="h-100">
    <div class="row m-3 text-center">
        <!-- <h1 id="timeline-text">Your Journey as A Bytes Hunter</h1> -->
    </div>

    <div class="row p-2">
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

    <div class="row profile-content">
      <div v-if="currentView == 'Timeline'" class="w-100 pt-3 pr-1">
        <timeline></timeline>
      </div>
      <div v-else-if="currentView == 'Settings'" class="w-100">
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

module.exports = {

  components: {
    timeline,
    awardView,
    activityView
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
  overflow-y: scroll;
  height: 90%;
}
</style>
