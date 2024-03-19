import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux';
import { store } from './redux/store.js'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Customer from './component/Customer.jsx';
import Category from './component/Category.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Customer />} />
        <Route path="/category" element={<Category />} />
      </Routes>
    </Provider>
  </BrowserRouter>
)
