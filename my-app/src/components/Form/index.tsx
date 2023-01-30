import React from "react";
import TextField from "@mui/material/TextField";
import * as yup from "yup";
import { useFormik } from "formik";
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Typography } from "@mui/material";

interface Props {}



const getFormatedDate = (currentDate: string) => {
  return currentDate.split('/').reverse().join('-');
 }
const Form = (props: Props) => {
  const formik = useFormik({
    initialValues: {
      name: "",
      telephone: "",
      email: "",
      date: "",
    },
    validationSchema: yup.object({
      name: yup
      .string()
      .required("O campo é obrigatório.")
      .matches(/^[a-z]+$/ , 'Nomes não podem conter números')
      ,
      telephone: yup
      .number()
      .required("O campo é obrigatório.")
      .integer("O campo deve conter apenas numeros"),

      
      email: yup
        .string()
        .email("E-mail inválido.")
        .required("O campo é obrigatório."),
      date: yup
        .date()
        .min(getFormatedDate('01/01/1900'))
        .required("O campo é obrigatório.")
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });



  return (

    <Container maxWidth="sm">


    <form onSubmit={formik.handleSubmit}>

<Stack sx={{ width: '100%' }} spacing={2}>
<Typography variant="h2" >
  Cadastro
</Typography>
   <TextField
    label="nome"
    id="name"
    name="name"
    type="text"
    onChange={formik.handleChange}
    onBlur={formik.handleBlur}
    value={formik.values.name}
  />
  {formik.touched.name && formik.errors.name ? (
     <Alert severity="error">{formik.errors.name}</Alert>

  ) : null}
  <TextField
    label="telefone"
    id="telephone"
    name="telephone"
    type="text"
    onChange={formik.handleChange}
    onBlur={formik.handleBlur}
    value={formik.values.telephone}
  />
  {formik.touched.telephone && formik.errors.telephone ? (

    <Alert severity="error">{formik.errors.telephone}</Alert>
  ) : null}

  <TextField
    label="email"
    id="email"
    name="email"
    type="text"
    onChange={formik.handleChange}
    onBlur={formik.handleBlur}
    value={formik.values.email}
  />
  {formik.touched.email && formik.errors.email ? (
    <Alert severity="error">{formik.errors.email}</Alert>


  ) : null}

  <TextField
    label="data"
    id="date"
    name="date"
    type="text"
    onChange={formik.handleChange}
    onBlur={formik.handleBlur}
    value={formik.values.date}
  />
  {formik.touched.date && formik.errors.date ? (
    <Alert severity="error">{formik.errors.date}</Alert>
  ) : null}

  <Button   type="submit" variant="contained">Enviar</Button>
  

 
</Stack>

 
</form>
  </Container>

   
  );
};

export default Form;
