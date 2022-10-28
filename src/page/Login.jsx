import Layout from "../components/Global/Layout";
import Footer from "../components/Global/Footer";
import LoginForm from "../components/Login/LoginForm";

function Login() {
     return (
          <>
               <Layout>
                    <LoginForm />
               </Layout>
               <Footer />
          </>
     );
}
export default Login;
