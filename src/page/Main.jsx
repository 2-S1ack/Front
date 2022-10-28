import Layout from "../components/Global/Layout";
import Header from "../components/Global/Header";
import ChatList from "../components/Chat/ChatList";
import ChatForm from "../components/Chat/ChatForm";

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
