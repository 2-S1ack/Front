import Layout from "../components/ui/Layout";
import Footer from "../components/ui/Footer";
import RegisterForm from "../components/login/RegisterForm";

function Register() {
     return (
          <>
               <Layout>
                    <RegisterForm />
               </Layout>
               <Footer />
          </>
     );
}

export default Register;
