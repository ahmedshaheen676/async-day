import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@WebServlet(name = "ValidateUsername",urlPatterns = "/validateUsername")
public class ValidateUsername extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

        String username = req.getParameter("username");
        if(!username.isBlank() && username.equals("Ahmed")){
            resp.getWriter().println("valid username");
        }else{
            resp.getWriter().println("invalid username");
        }
    }
}