import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Navbar, Works, StarsCanvas, Footer } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='relative z-0'>
          <StarsCanvas />
          <Contact />
        </div>
        <Navbar />
        <About />
        <Experience />
        <Works />
        {/* <Feedbacks /> */}
        <hr className="blur-sm" />
        {/* <Footer /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
