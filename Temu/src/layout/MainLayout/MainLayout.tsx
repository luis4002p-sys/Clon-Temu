  import TopBar from "../Header/TopBar";
  import Header from "../Header/Header";
  import SecurityBar from "../Header/SecurityBar";
  import Footer from '../Footer/Footer';
  const MainLayout = ({ children }: { children: React.ReactNode }) => {
    return (
      <>
        <TopBar />
        <Header />
        <SecurityBar />
        <main>{children}</main>
             <Footer />
      </>
    );
  };

  export default MainLayout;
