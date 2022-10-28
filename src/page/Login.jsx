import Layout from "../components/ui/Layout";
import Footer from "../components/ui/Footer";
import LoginForm from "../components/login/LoginForm";

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
