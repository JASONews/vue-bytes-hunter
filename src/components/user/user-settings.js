export default {
  data () {
    return {
      googleid: '',
      email: "",
      preferredName: "",
      lastTimeLogin: "",
      score: 0
    }
  },
  mounted: function() {
      this.$http.get('https://storage.googleapis.com/bytehunter_images/userinfo.json').then(response => {
        return response.json();
      }).then(json => {
        this.googleid = json.googleid;
        this.email = json.email;
        this.preferredName = json.preferredName;
        this.lastTimeLogin = json.lastTimeLogin;
        this.score = json.score;
      })
  }
}