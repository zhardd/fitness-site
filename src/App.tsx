import styles from './style';
import {Navbar, Hero, Stats, Business, Billing, CardDeal, Testimonials, Clients, CTA, Footer} from './components';
import { Route, Routes, } from 'react-router-dom';
import Account from './components/Account';
import Signup from './components/Signup';
import Signin from './components/Signin';
import { AuthProvider } from './context/AuthContext';

const App = () => {
  return (
    <div>
           <AuthProvider>
       <div className="bg-primary w-full overflow-hidden">
       <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
           <Navbar />
        </div>
      </div>
    </div>
       <div className={`bg-primary ${styles.flexStart}`}>
         <div className={`${styles.boxWidth}`}>
    
        <Routes>
              <Route path='/fitness-site/' element={<Hero/>} />
              <Route path='/fitness-site/account' element={<Account/>} />
              <Route path='/fitness-site/signup' element={<Signup/>} />
              <Route path='/fitness-site/signin' element={<Signin/>} />   
        </Routes> 
         </div>
       </div>
        </AuthProvider>



    </div>
    // <div className="bg-primary w-full overflow-hidden">
    //   <div className={`${styles.paddingX} ${styles.flexCenter}`}>
    //     <div className={`${styles.boxWidth}`}>
    //       <Navbar />
    //     </div>
    //   </div>

    //   <div className={`bg-primary ${styles.flexStart}`}>
    //     <div className={`${styles.boxWidth}`}>
    //       <Hero />
    //     </div>
    //   </div>

    //   <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
    //     <div className={`${styles.boxWidth}`}>
    //     <div>
    //     </div>
    //       <Stats />
    //       <Business />
    //       <Billing />
    //       <CardDeal />
    //       <Testimonials />
    //       <Clients />
    //       <CTA />
    //       <Footer />
    //     </div>
    //   </div>

    // </div>
  )
}

export default App