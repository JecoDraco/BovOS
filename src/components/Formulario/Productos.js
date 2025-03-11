import React, { useState } from 'react'
import {Button,Form,Row,Col,InputGroup} from "react-bootstrap";
import {useFormik} from "formik";
import { initialValues,validationSchema } from './Productos.form';
import {ListProductos} from "../ListProductos"

export function Productos() {
/*const Datos={
  nombre:"",
  apellidos:"",
  curp:"",
  imagen:"",
}*/
const [valores,setValores]= useState();
const [informacion,setInformacion]= useState([]);

const formik= useFormik({
  initialValues:initialValues(),
  validationSchema:validationSchema(),
  onSubmit:(formValue)=>{
    console.log(formValue);
  }
})


/* const onChange=(e)=>{
  const {name,value}=e.target;
 setValores({...valores,[name]:value});
}

const enviarDatos=(e)=>{
  e.preventDefault();
  console.log(valores);
} */

return (
    <div className='p-4'>
    <Form onSubmit={formik.handleSubmit}>
    <Row className="mb-3">
      <Form.Group as={Col} md="3" controlId="validationCustom01">
        <Form.Label>Nombe del Producto</Form.Label>
        <Form.Control
          type="text"
          placeholder="Producto"
          name="nombre"
          onChange={formik.handleChange}
        />
      </Form.Group>

      <Form.Group as={Col} md="3" controlId="validationCustom02">
        <Form.Label>Precio</Form.Label>
        <Form.Control
          type="number"
          placeholder="Precio"
          name="precio"
          onChange={formik.handleChange}
        />
      </Form.Group>
      
      <Form.Group as={Col} md="3" controlId="validationCustomUsername">
        <Form.Label>Cantidad</Form.Label>
        <InputGroup hasValidation>
          <Form.Control
            type="number"
            placeholder="Cantidad"
            name="cantidad"
            onChange={formik.handleChange}
          />
        </InputGroup>
      </Form.Group>
    </Row>
    <Row className="mb-3">
      <Form.Group as={Col} md="3" controlId="validationCustom03">
        <Form.Label>Unidad</Form.Label>
        <Form.Control type="text" placeholder="unidad" name="unidad"
        onChange={formik.handleChange} />
      </Form.Group>
      <Form.Group as={Col} md="5">
        <Form.Label>Imagen</Form.Label>
        <Form.Control type="file" name="imagen"
         onChange={formik.handleChange}
         />
        </Form.Group>
        </Row>
    <Button type="submit">Enviar</Button>
  </Form>
  <Row>
    <ListProductos/>
  </Row>
    </div>
  )
}
