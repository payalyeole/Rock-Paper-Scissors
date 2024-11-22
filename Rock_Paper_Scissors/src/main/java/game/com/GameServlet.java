package game.com;

import java.io.IOException;
import java.util.Random;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/GameServlet")
public class GameServlet extends HttpServlet {
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String userChoice = request.getParameter("choice");
        String[] options = {"rock", "paper", "scissors"};
        String computerChoice = options[new Random().nextInt(3)];
        String result;

        if (userChoice.equals(computerChoice)) {
            result = "It's a tie!";
        } else if ((userChoice.equals("rock") && computerChoice.equals("scissors")) ||
                   (userChoice.equals("scissors") && computerChoice.equals("paper")) ||
                   (userChoice.equals("paper") && computerChoice.equals("rock"))) {
            result = "You win!";
        } else {
            result = "You lose!";
        }

        String resultClass = result.contains("win") ? "win" : result.contains("lose") ? "lose" : "tie";

        request.setAttribute("userChoice", userChoice);
        request.setAttribute("computerChoice", computerChoice);
        request.setAttribute("result", result);
        request.setAttribute("resultClass", resultClass);

        request.getRequestDispatcher("result.jsp").forward(request, response);
    }
}
