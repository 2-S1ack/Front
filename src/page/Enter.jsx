import EnterLayout from "../components/ui/EnterLayout";
import Footer from "../components/ui/Footer";
import EnterPage from "../components/EnterPage";
import LoginHeader from "../components/ui/LoginHeader";

function Enter() {
     return (
          <>
               <LoginHeader />
               <EnterLayout>
                    <EnterPage />
               </EnterLayout>
               <Footer />
          </>
     );
}

export default Enter;
