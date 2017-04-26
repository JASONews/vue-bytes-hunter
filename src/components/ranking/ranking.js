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
      // this.$http.get('https://storage.googleapis.com/bytehunter_images/rank-normal.json').then(response => {
      //   return response.json();
      // }).then(json => {
      //   this.rankType = json.for;
      //   this.items = json.list;
      // })
  }
}
