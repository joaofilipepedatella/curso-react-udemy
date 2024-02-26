//components
import Footer from "./components/Footer";
import Header from "./components/Header";

//styles
import styles from "./App.module.css"

function App() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <h1>Conteudo...</h1>
      </main>
      <Footer />
    </>
  );
}

export default App;
