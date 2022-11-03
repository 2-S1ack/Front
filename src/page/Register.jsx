import LoginLayout from "../components/ui/LoginLayout";
import Footer from "../components/ui/Footer";
import RegisterForm from "../components/login/RegisterForm";
import LoginHeader from "../components/ui/LoginHeader";

function Register() {
     return (
          <>
               <LoginHeader />
               <LoginLayout>
                    <RegisterForm />
               </LoginLayout>
               <Footer />
          </>
     );
}

export default Register;
