import LoginLayout from "../components/ui/LoginLayout";
import Footer from "../components/ui/Footer";
import LoginForm from "../components/login/LoginForm";
import LoginHeader from "../components/ui/LoginHeader";

function Login() {
     return (
          <>
               <LoginHeader />
               <LoginLayout>
                    <LoginForm />
               </LoginLayout>
               <Footer />
          </>
     );
}
export default Login;
