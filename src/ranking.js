export default {
  data () {
    return {
      rankType: '',
      items: [
        {
            name: 'u1',
            score: 1231
        },
        {
            name: 'u2',
            score: 32
        },
        {
            name: 'u3',
            score: 1
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
