import React, { useState } from 'react'
import ProfileCard from './components/profileCard'
import ProductCard from './components/productCard'
import Counter from './components/counter'
import Likes from './components/likes'
import Status from './components/status'
import Toggle from './components/toggle'
import ProductList from './components/productList'
import Child from './components/child'
import Form from './components/form'
import Users from './components/user'
import TodoList from './components/todo'
import LoginStatus from './components/loginToggle'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import ParentComponent from './components/parent'
import ThemeToggle from './components/themeToggle'
import ThemeContext from './components/theme'
import Effect from './components/effect'


function App({ value }) {

  const [theme, setTheme] = useState("light");

  return (
    <>
      {/* <ProfileCard />
      <div className="flex flex-wrap gap-2">
        <ProductCard
          image="https://redtape.com/cdn/shop/files/RSO4034_1_40cd841c-11dc-4c78-ab85-bfad034e31fe.jpg?v=1741350219"
          brand="red tape"
          name="Men’s Athleisure Shoes"
          price="2000"
          discountprice={1800}
        />
        <ProductCard
          image="https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/849566c0-f04e-4742-96f1-8f6ca677f246/AIR+JORDAN+1+RETRO+HIGH+OG.png"
          brand="nike"
          name="Air Jordan 1 Retro High OG 'Black and Gold"
          price={19786}
          discountprice={16995}
        />
      </div>
      <Counter />
      <Likes />
      <Status status="active" />
      <Status status="inactive" />
      <Status status="banned" />
      <Toggle />
      <ProductList/> */}
      {/* <div className="p-6  inline-flex items-center">
        <h1>{message}</h1>
        <Child handleClick={updateMessage} />
      </div>
      <Form />
      <Users />
      <TodoList />
      <LoginStatus /> */}
      <Effect/>
      {/* <BrowserRouter>
        <ThemeContext.Provider value={{ theme, setTheme }}>
          <div className={`p-4 ${theme === "dark" ? "bg-black text-white" : "bg-white text-black"}`}>
            <h1 className="text-2xl mb-4">Context API Example</h1>
            <ThemeToggle/>
            <div className="p-6">
              <h1 className="text-2xl font-bold mb-4">React Router Example</h1>
              <ParentComponent />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </div>
          </div>
        </ThemeContext.Provider>

      </BrowserRouter> */}
    </>
  )
}

export default App
