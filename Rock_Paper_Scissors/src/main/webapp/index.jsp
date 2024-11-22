<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<title>Rock, Paper, Scissors Game</title>
<link rel="stylesheet" href="css/style.css">
</head>
<body>
	<header>
		<h1>Rock, Paper, Scissors</h1>
	</header>

	<main>
		<p class="subtitle">Choose your move and try to beat the computer!</p>


		<!-- Game Area -->
		<form action="GameServlet" method="post" class="choices"
			id="computerModeForm">
			<div id="gameArea">
				<div id="player1Area">
					<button onclick="playerChoice('rock')" type="submit" name="choice"
						value="rock">
						<img src="images/Rock.png" alt="Rock"> <span>Rock</span>
					</button>
					<button onclick="playerChoice('paper')" type="submit" name="choice"
						value="paper">
						<img src="images/paper.png" alt="Paper"> <span>Paper</span>
					</button>
					<button onclick="playerChoice('scissors')" type="submit"
						name="choice" value="scissors">
						<img src="images/scissors.png" alt="Scissors"> <span>Scissors</span>
					</button>
					<div id="player1Choice"></div>
				</div>

			</div>

		</form>
		
		<form action="home.jsp">
			<button class="play-again">Restart Game</button>
		</form>
		
	</main>

	<script src="js/script.js"></script>
</body>
</html>
