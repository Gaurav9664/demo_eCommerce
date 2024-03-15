import { useEffect, useState } from 'react';
import './App.css'
import axios from 'axios';

function App() {

  const [customer, setCustomer] = useState([])
  const [cname, setCname] = useState()
  const [city, setCity] = useState()
  const [rating, setRating] = useState()
  const [snum, setSnum] = useState()
  const [data, setData] = useState({})

  // const customerAPI = () => {
  //   fetchgetCustomer()
  //     .then((res) => console.log(res.data))
  //     .catch((error) => console.log(error.message))
  // }




  useEffect(() => {
    axios
      .get("http://localhost:5000/api/v1/customer/get-customer")
      .then((res) => setCustomer(res.data.data[0]))
      .catch((error) => error.message)
  }, [])

  const btnSubmit = () => {
    setData({
      CNAE: cname,
      CITY: city,
      RATING: rating,
      SNUM: snum
    })

    axios
      .post("http://localhost:5000/api/v1/customer/create-customer", data)
      

    if (data) {
      console.log("GGG", data);
    }

    console.log(cname, city, rating, snum);



    event.preventDefault();
  }

  // console.log(customer);

  return (
    <>
      <form onSubmit={btnSubmit}>
        <input type="text" name='CNAME' onChange={(e) => setCname(e.target.value)} placeholder='Customer Name' />
        <input type="text" name='CITY' onChange={(e) => setCity(e.target.value)} placeholder='Customer CITY' />
        <input type="text" name='RATING' onChange={(e) => setRating(e.target.value)} placeholder='Salespeople Rating' />
        <input type="text" name='SNUM' onChange={(e) => setSnum(e.target.value)} placeholder='Salespeople Name' />

        <input type="submit" />
      </form>
      <div>
        <table>
          <tr>
            <th>CNUM</th>
            <th>CNAME</th>
            <th>CITY</th>
            <th>RATING</th>
            <th>SNUM</th>
          </tr>
          {
            customer.map((v, i) => (
              <tr>
                <td>{v.CNUM}</td>
                <td>{v.CNAME}</td>
                <td>{v.CITY}</td>
                <td>{v.RATING}</td>
                <td>{v.SNUM}</td>
              </tr>


            ))
          }
        </table>
      </div>
    </>
  )
}

export default App
