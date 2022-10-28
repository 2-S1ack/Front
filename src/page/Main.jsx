import Layout from "../components/ui/Layout";
import Header from "../components/ui/Header";
import ChatList from "../components/chat/ChatList";
import ChatForm from "../components/chat/ChatForm";

function Main() {
     return (
          <>
               <Header />
               <Layout>
                    <ChatList />
                    <ChatForm />
               </Layout>
          </>
     );
}

export default Main;
