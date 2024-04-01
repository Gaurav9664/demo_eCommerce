import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux';
import { store } from './redux/store.js'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Customer from './component/Customer.jsx';
<<<<<<< HEAD
import Chat from './component/Chat.jsx';
import GauravChat from './component/GauravChat.jsx';
=======
import Category from './component/Category.jsx';
>>>>>>> 4fb64c519e7f65058f0c70c36fc5c9d5213abc02


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Customer />} />
<<<<<<< HEAD
        <Route path="/chat" element={<Chat />} />
        <Route path="/gauravchat" element={<GauravChat />} />
=======
        <Route path="/category" element={<Category />} />
>>>>>>> 4fb64c519e7f65058f0c70c36fc5c9d5213abc02
      </Routes>
    </Provider>
  </BrowserRouter>
)
