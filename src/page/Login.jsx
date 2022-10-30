import Layout from "../components/ui/Layout";
import Footer from "../components/ui/Footer";
import LoginForm from "../components/login/LoginForm";
import LoginHeader from "../components/ui/LoginHeader";

function Login() {
     return (
          <>
               <LoginHeader />
               <Layout>
                    <LoginForm />
               </Layout>
               <Footer />
          </>
     );
}
export default Login;
