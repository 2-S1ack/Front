import Layout from "../components/ui/Layout";
import Footer from "../components/ui/Footer";
import EnterPage from "../components/EnterPage";
import LoginHeader from "../components/ui/LoginHeader";

function Enter() {
     return (
          <>
               <LoginHeader />
               <Layout>
                    <EnterPage />
               </Layout>
               <Footer />
          </>
     );
}

export default Enter;
