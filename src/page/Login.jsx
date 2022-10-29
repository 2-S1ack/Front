import EnterLayout from "../components/ui/EnterLayout";
import Footer from "../components/ui/Footer";
import LoginForm from "../components/login/LoginForm";
import LoginHeader from "../components/ui/LoginHeader";

function Login() {
     return (
          <>
               <LoginHeader />
               <EnterLayout>
                    <LoginForm />
               </EnterLayout>
               <Footer />
          </>
     );
}
export default Login;
