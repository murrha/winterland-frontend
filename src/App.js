import Navbar from './components/Navbar.js' 

import Contact from './pages/Contact'
import Donate from './pages/Donate'
import Home from './pages/Home'
import Receive from './pages/Receive'
import Billing from './pages/Billing'
import ThankYou from './pages/ThankYou'


import {Route, Routes} from 'react-router-dom'
import CartProvider from './CartContext.js'

function App() {

  console.log(window.location.pathname)

  return(
    <>
    <CartProvider>
    <Navbar/>

    <div className='container'>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/donate" element={<Donate/>} />
        <Route path="/receive" element={<Receive/>} />
        <Route path="/billing" element={<Billing/>}/>
        <Route path="/thank-you" element={<ThankYou/>}/>
      </Routes>
    </div>
    </CartProvider>
    </>
    )
}

export default App;
