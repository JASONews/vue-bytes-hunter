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
                        <a href="#" class="list-group-item">Normal<span class="badge">6</span></a>
                        <a href="#" class="list-group-item">Medium<span class="badge">4</span></a>
                        <a href="#" class="list-group-item">Hard<span class="badge">3</span></a>
                        <a href="#" class="list-group-item">Insame<span class="badge">7</span></a>
                    </div>
                </div>

                <div class="row">
                    <!-- Category -->
                    <h3>Category</h3>
                    <div class="list-group">
                        <a href="#" class="list-group-item">Types<span class="badge">6</span></a>
                        <a href="#" class="list-group-item">Data Structures<span class="badge">4</span></a>
                        <a href="#" class="list-group-item">Algorithms<span class="badge">3</span></a>
                        <a href="#" class="list-group-item">Logics<span class="badge">7</span></a>
                        <a href="#" class="list-group-item">Memory<span class="badge">2</span></a>
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
                            <tr class="success">
                                <td>1</td>
                                <td>John Doe</td>
                                <td>124322</td>
                            </tr>
                            <tr class="danger">
                                <td>2</td>
                                <td>John Doe</td>
                                <td>114245</td>
                            </tr>
                            <tr class="info">
                                <td>3</td>
                                <td>John Doe</td>
                                <td>102244</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>John Doe</td>
                                <td>124322</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>John Doe</td>
                                <td>114245</td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>John Doe</td>
                                <td>102244</td>
                            </tr>
                            <tr>
                                <td>7</td>
                                <td>John Doe</td>
                                <td>124322</td>
                            </tr>
                            <tr>
                                <td>8</td>
                                <td>John Doe</td>
                                <td>114245</td>
                            </tr>
                            <tr>
                                <td>9</td>
                                <td>John Doe</td>
                                <td>102244</td>
                            </tr>
                            <tr>
                                <td>10</td>
                                <td>John Doe</td>
                                <td>124322</td>
                            </tr>
                            <tr>
                                <td>11</td>
                                <td>John Doe</td>
                                <td>114245</td>
                            </tr>
                            <tr>
                                <td>12</td>
                                <td>John Doe</td>
                                <td>102244</td>
                            </tr>
                            <tr>
                                <td>13</td>
                                <td>John Doe</td>
                                <td>124322</td>
                            </tr>
                            <tr>
                                <td>14</td>
                                <td>John Doe</td>
                                <td>114245</td>
                            </tr>
                            <tr>
                                <td>15</td>
                                <td>John Doe</td>
                                <td>102244</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
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

.rank-list {
    padding-left: 15px;
    text-align: center;
}

.table th {
    text-align: center;
}
</style>
