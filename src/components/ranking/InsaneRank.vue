<template>
    <div class="rank-list">
        <div class="row text-center">
            <h2>Total Ranking</h2>
            <h5>Insame Mode</h5>

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
</template>
