import Header from"./Header";
import Main from "./Main";
import Footer from"./Footer";
import { useEffect } from "react";
function App() {
  useEffect(() => {
    new URLSearchParams(window.location.search).has("author") && alert("Mohd Ibrahim Irfan Shah");
  }, []);
  return (
    <>
    <Header/>
    <Main/>
    <Footer/>
    </>
  );
}
export default App;