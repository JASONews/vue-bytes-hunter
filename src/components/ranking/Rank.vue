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
                        <router-link tag="a" class="list-group-item" to="/ranking/normal">Normal</router-link>
                        <router-link tag="a" class="list-group-item" to="/ranking/hard">Hard</router-link>
                        <router-link tag="a" class="list-group-item" to="/ranking/insame">Insame</router-link>
                    </div>
                </div>
            </div>


            <div class="col-sm-10">
                <!-- Display rankings -->
                <div>
                  <router-view></router-view>
                </div>
            </div>
        </div>
    </div>
</template>
