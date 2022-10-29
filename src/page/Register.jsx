import EnterLayout from "../components/ui/EnterLayout";
import Footer from "../components/ui/Footer";
import RegisterForm from "../components/login/RegisterForm";
import LoginHeader from "../components/ui/LoginHeader";

function Register() {
     return (
          <>
               <LoginHeader />
               <EnterLayout>
                    <RegisterForm />
               </EnterLayout>
               <Footer />
          </>
     );
}

export default Register;
