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
                        <a href="#" id="normalMode" class="list-group-item">Normal</a>
                        <a href="#" id="hardMode" class="list-group-item">Hard</a>
                        <a href="#" id="insaneMode" class="list-group-item">Insame</a>
                    </div>
                </div>
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
                            <tr v-for="(item, index) in items" v-if="index === 0" class="success">
                                <td>{{index + 1}}</td>
                                <td>{{item.name}}</td>
                                <td>{{item.score}}</td>
                            </tr>
                            <tr v-for="(item, index) in items" v-if="index === 1" class="danger">
                                <td>{{index + 1}}</td>
                                <td>{{item.name}}</td>
                                <td>{{item.score}}</td>
                            </tr>
                            <tr v-for="(item, index) in items" v-if="index === 2" class="info">
                                <td>{{index + 1}}</td>
                                <td>{{item.name}}</td>
                                <td>{{item.score}}</td>
                            </tr>
                            <tr v-for="(item, index) in items" v-if="index > 2">
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

<script src="../js/ranking.js"></script>
