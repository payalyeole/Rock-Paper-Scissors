<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
    <title>Game Result</title>
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/result.css">
</head>
<body>
    <header>
        <h1>Game Result</h1>
    </header>

    <div class="result <%= request.getAttribute("resultClass") %>">
        <p>
            You chose: <strong><%= request.getAttribute("userChoice") %></strong>
        </p>
        <p>
            Computer chose: <strong><%= request.getAttribute("computerChoice") %></strong>
        </p>
        <p><%= request.getAttribute("result") %></p>
    </div>

    <form action="index.jsp">
    <button class="play-again">Play Again</button>
</form>

</body>
</html>
