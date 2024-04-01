import { useEffect, useState } from 'react';
import * as yup from "yup";
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCustomer, getCustomer, postCustomer, updateCustomer } from '../redux/action/customer.action';
import { Container, Card, Col, Row, Table, Form } from 'react-bootstrap';
import { useFormik } from 'formik';
import { Link } from 'react-router-dom';

function Customer() {

  const dispatch = useDispatch();

  const [update, setupdate] = useState(null);
  const [cname, setCname] = useState()
  const [city, setCity] = useState()
  const [rating, setRating] = useState()
  const [snum, setSnum] = useState()
  const [data, setData] = useState({})
  const customerData = useSelector((state) => state.customer);

  // console.log(customerData);
  useEffect(() => {
    dispatch(getCustomer())

    if (update) {
      formik.setValues(update)
    }

  }, [update])

  let masterLear = yup.object().shape({
    CNAME: yup.string().required("This is a required question"),
    CITY: yup.string().required("This is a required question"),
    RATING: yup.number().required("This is a required question"),
    SNUM: yup.number().required("This is a required question"),
  });

  const formik = useFormik({
    initialValues: {
      CNAME: '',
      CITY: '',
      RATING: '',
      SNUM: ''
    },

    validationSchema: masterLear,
    onSubmit: (values, action) => {
      console.log(values);
      action.resetForm()
      hendalSubmitBTN(values)
    },
  });

  const { handleBlur, handleChange, handleSubmit, values, errors, touched } = formik;

  const hendalSubmitBTN = (values) => {

    let updateData = {
      CNAME: values.CNAME,
      CITY: values.CITY,
      RATING: values.RATING,
      SNUM: values.SNUM
    }

    if (update) {
      dispatch(updateCustomer(values.CNUM, updateData));
    } else {
      dispatch(postCustomer(values));
    }
    // dispatch(postCustomer(data))
    console.log(cname, city, rating, snum);
    event.preventDefault();
  }

  const btnDelete = (id) => {
    dispatch(deleteCustomer(id))
  }

  const btnUpdate = (value) => {
    setupdate(value)
    console.log(value);
  }

  // console.log(customer);

  return (
    <Container>
      <Link to={"/category"}>
        <button>
          Category
        </button>
      </Link>
      <br />
      <br />
      <form onSubmit={handleSubmit}>
        <Form.Control
          placeholder="Customer CNAME"
          type="text"
          name="CNAME"
          aria-label="CNAME"
          aria-describedby="basic-addon1"
          value={values.CNAME}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <Form.Control
          placeholder="Customer CITY"
          type="text"
          name="CITY"
          aria-label="CITY"
          aria-describedby="basic-addon1"
          value={values.CITY}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <Form.Control
          placeholder="Salespeople Rating"
          type="number"
          name="RATING"
          aria-label="RATING"
          aria-describedby="basic-addon1"
          value={values.RATING}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <Form.Control
          placeholder="Salespeople Name"
          type="number"
          name="SNUM"
          aria-label="SNUM"
          aria-describedby="basic-addon1"
          value={values.SNUM}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <button type="submit">
          {
            update === null ? "Add Customer" : "Edit Customer"
          }
        </button>
      </form>
      <div>
        <Row>
          <Col md="12">
            <Card className="card-plain table-plain-bg shadow p-3 mb-5 bg-body rounded">
              <Card.Header className="p-0">
                <Card.Title as="h4"></Card.Title>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover">
                  <thead>
                    <tr>
                      <th>CNUM</th>
                      <th>CNAME</th>
                      <th>CITY</th>
                      <th>RATING</th>
                      <th>SNUM</th>
                      <th>Active</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {customerData?.data?.data?.map((v) => {
                      return (
                        <>
                          <tr>
                            <td>{v.CNUM}</td>
                            <td>{v.CNAME}</td>
                            <td>{v.CITY}</td>
                            <td>{v.RATING}</td>
                            <td>{v.SNUM}</td>
                            <td>{v.IsActive == 1 ? 'true' : 'false'}</td>
                            <td>
                              <button onClick={() => btnDelete(v.CNUM)}>Delete</button>
                              <button onClick={() => btnUpdate(v)}>Edit</button>
                            </td>
                          </tr>
                        </>
                      );
                    })}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </Container>
  )
}

export default Customer
