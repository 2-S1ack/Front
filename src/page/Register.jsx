import Layout from "../components/ui/Layout";
import Footer from "../components/ui/Footer";
import RegisterForm from "../components/login/RegisterForm";
import LoginHeader from "../components/ui/LoginHeader";

function Register() {
     return (
          <>
               <LoginHeader />
               <Layout>
                    <RegisterForm />
               </Layout>
               <Footer />
          </>
     );
}

export default Register;
