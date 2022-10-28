import Layout from "../components/Global/Layout";
import Footer from "../components/Global/Footer";
import RegisterForm from "../components/Login/RegisterForm";

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
