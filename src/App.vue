<template>
  <div id="wrapper">
    <nav class="navbar navbar-inverse navbar-fixed-top">
      <div class="container">
        <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="/">Bytes Hunter</a>
        </div>
        <div class="collapse navbar-collapse" id="myNavbar">
            <ul class="nav navbar-nav navbar-left">
                <router-link tag="li" to="/about"><a>ABOUT</a></router-link>
                <router-link tag="li" to="/game-list"><a>GAMES</a></router-link>
                <router-link tag="li" to="/ranking"><a>RANKING</a></router-link>
            </ul>
            <form class="navbar-form navbar-left">
                <div class="form-group">
                    <input type="text" class="form-control" placeholder="Search"/>
                </div>
                <button type="submit" class="btn btn-default">Search</button>
            </form>
            <ul class="nav navbar-nav navbar-right">
                <router-link tag="li" to="/signup"><a>Sign Up</a></router-link>
                <router-link tag="li" to="/login"><a>Login</a></router-link>
                <router-link tag="li" to="/user-page"><a><span class="glyphicon glyphicon-user"></span></a></router-link>
            </ul>
        </div>
      </div>
    </nav>
    <div class="container">
      <div>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style>
body { 
  padding-top: 50px; 
}
</style>
