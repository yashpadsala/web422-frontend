import Header from "../components/Header";
import Footer from "../components/Footer";
import RegistrationForm from "../components/RegistrationForm"

const RegistrationPage = () => {
    return (
    <div className="container">  
        <Header/>
        <main>
            <RegistrationForm/>
        </main>
        <Footer/>
    </div>
    )
}

export default RegistrationPage