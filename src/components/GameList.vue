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
						<a href="#" class="list-group-item">All<span class="badge">20</span></a>
						<a href="#" class="list-group-item">Normal<span class="badge">6</span></a>
						<a href="#" class="list-group-item">Hard<span class="badge">3</span></a>
						<a href="#" class="list-group-item">Insame<span class="badge">7</span></a>
					</div>
				</div>

				<div class="row">
					<!-- Category -->
					<h3>Category</h3>
					<div class="list-group">
						<a href="#" class="list-group-item">All<span class="badge">20</span></a>
						<a href="#" class="list-group-item">Types<span class="badge">6</span></a>
						<a href="#" class="list-group-item">Data Structures<span class="badge">4</span></a>
						<a href="#" class="list-group-item">Algorithms<span class="badge">3</span></a>
						<a href="#" class="list-group-item">Logics<span class="badge">7</span></a>
						<a href="#" class="list-group-item">Theory<span class="badge">2</span></a>
					</div>
				</div>
			</div>


			<div class="col-sm-10">
				<!-- Display thumbnails of games -->
				<h2>Games</h2>
				<h5>Choose a Category</h5>
				<div class="row text-center">
					<div class="col-sm-4">
						<div class="thumbnail">
							<router-link to="/game">
								<a>
									<img src="https://storage.googleapis.com/bytehunter_images/flood-fill.jpg" alt="flood-fill">
									<p>Flood Fill</p>
								</a>
							</router-link>
						</div>
					</div>
					<div class="col-sm-4">
						<div class="thumbnail">
							<img src="https://storage.googleapis.com/bytehunter_images/02-click-on-an-image.jpg" alt="click image">
							<p>Click Image</p>
						</div>
					</div>
					<div class="col-sm-4">
						<div class="thumbnail">
							<img src="https://storage.googleapis.com/bytehunter_images/fire-rate.jpg" alt="Fire Rate">
							<p>Fire Rate</p>
						</div>
					</div>
				</div>

				<div class="row text-center">
					<div class="col-sm-4">
						<div class="thumbnail">
							<img src="https://storage.googleapis.com/bytehunter_images/protracker.jpg" alt="protracker">
							<p>Protracker</p>
						</div>
					</div>
					<div class="col-sm-4">
						<div class="thumbnail">
							<img src="https://storage.googleapis.com/bytehunter_images/gen-paint.jpg" alt="create">
							<p>Create</p>
						</div>
					</div>
					<div class="col-sm-4">
						<div class="thumbnail">
							<img src="https://storage.googleapis.com/bytehunter_images/spiral-galaxy.jpg" alt="filters">
							<p>Filters</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
