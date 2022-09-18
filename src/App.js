/* eslint-disable jsx-a11y/anchor-is-valid */
import './App.css'
import React from "react";
import Footer from "./Component/Footer"
import Header from "./Component/Header"
import TopSlider from "./Component/Slider"
import SubSlider from "./Component/SubSlider";
import OurClients from "./Component/OurClients";
import Weprovide from "./Component/Weprovide";
import Innovations from "./Component/Innovations";
import EngagementModels from "./Component/EngagementModels";
import CustomerTestimonials from "./Component/CustomerTestimonials";
import AsRecognizedBy from "./Component/AsRecognizedBy";
import LatestJobs from "./Component/LatestJobs";
import Blogs from "./Component/Blogs";
import FooterTop from './Component/FooterTop'
import LoginModal from './pages/login'


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
   
      renderPage: ''
    }

    this.renderLogin = this.renderLogin.bind(this)
    this.handleCloseModal = this.handleCloseModal.bind(this)
  }

  renderLogin () {
    this.setState({ renderPage: 'login' })
  }

  handleCloseModal () {
    this.setState({ renderPage: '' })
  }


  render() {
    let { renderPage } = this.state
    return (
      <div>
        <Header renderLogin={this.renderLogin}/>
        <TopSlider/>
        <Weprovide />
        <SubSlider />
        <Innovations />
        <EngagementModels />
        <OurClients />
        <CustomerTestimonials />
        <AsRecognizedBy />
        <LatestJobs />
        <Blogs />
        <FooterTop />
        <LoginModal renderLogin={renderPage === 'login'} handleCloseModal={this.handleCloseModal} />
        <Footer />
      </div>
    );
  }
}
export default App;
