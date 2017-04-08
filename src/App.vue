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
            <router-link tag="a" to="/" class="navbar-brand">Bytes Hunter</router-link>
        </div>
        <div class="collapse navbar-collapse" id="myNavbar">
            <ul class="nav navbar-nav navbar-left">
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
                <li><a href="#" data-toggle="modal" data-target="#loginModal"><i class="fa fa-google-plus-square icon" aria-hidden="true"></i>Google login</a></li>
                <li class="dropdown"><a class="dropdown-toggle" data-toggle="dropdown" href="#"><span class="glyphicon glyphicon-user"></span> <span class="caret"></span></a>
                    <ul class="dropdown-menu">
                        <router-link tag="li" to="/user-profile"><a>Profile</a></router-link>
                        <router-link tag="li" to="/user-page"><a>Help</a></router-link>
                        <router-link tag="li" to="/user-settings"><a>Settings</a></router-link>
                        <li class="divider"></li>
                        <li><a data-toggle="modal" data-target="#loginModal">Log In</a></li>
                        <li><a data-toggle="modal" data-target="#signoutModal">Sign Out</a></li>
                    </ul>
                </li>
            </ul>
        </div>
      </div>
    </nav>
    <div class="container">
      <div>
        <router-view></router-view>
      </div>
    </div>

    <!-- Modal -->
    <div id="signupModal" class="modal fade" role="dialog">
      <div class="modal-dialog">

        <!-- Modal content-->
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">&times;</button>
            <h4 class="modal-title">Sign Up</h4>
          </div>
          <div class="modal-body">
            <div class="g-signin2 googlelogin" data-onsuccess="onSignIn"></div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">Sign Up</button>
            <button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <div id="loginModal" class="modal fade" role="dialog">
      <div class="modal-dialog">

        <!-- Modal content-->
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">&times;</button>
            <h4 class="modal-title">Login</h4>
          </div>
          <div class="modal-body">
            <div class="g-signin2 googlelogin" data-onsuccess="onSignIn"></div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" onclick="login()">Login</button>
            <button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <div id="signoutModal" class="modal fade" role="dialog">
      <div class="modal-dialog">

        <!-- Modal content-->
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">&times;</button>
            <h4 class="modal-title">Sign Out</h4>
          </div>
          <div class="modal-body">
            <p>Are you sure to sign out Bytes Hunter?</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">Sign Out</button>
            <button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script></script>
