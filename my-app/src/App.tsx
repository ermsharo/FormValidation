import * as yup from "yup";
import { useFormik } from "formik";
import TextField from '@mui/material/TextField';
function App() {

  let schema = yup.object().shape({
    nome: yup.string().required(),
    email: yup.string().email().required(),
    idade: yup.number().required().positive().integer(),
    website: yup.string().url()
  });


    const formik = useFormik({
      initialValues: {
        nome: "",
        email: "",
        idade: "",
      },
      validationSchema: yup.object({
        nome: yup.string().required("O campo é obrigatório."),
        email: yup
          .string()
          .email("E-mail inválido.")
          .required("O campo é obrigatório."),
        idade: yup
          .number()
          .required("O campo é obrigatório.")
          .positive("O campo deve ser positivo.")
          .integer("O campo deve ser um número inteiro."),
      }),
      onSubmit: (values) => {
        alert(JSON.stringify(values, null, 2));
      },
    });

  return (
    <div className="App">
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="nome">Nome</label>
      <TextField
      label = "nome"
        id="nome"
        name="nome"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.nome}
      />
      {formik.touched.nome && formik.errors.nome ? (
        <div>{formik.errors.nome}</div>
      ) : null}
      <label htmlFor="email">E-mail</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
      />
      {formik.touched.email && formik.errors.email ? (
        <div>{formik.errors.email}</div>
      ) : null}
      <label htmlFor="idade">Idade</label>
      <input
        id="idade"
        name="idade"
        type="number"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.idade}
      />
      {formik.touched.idade && formik.errors.idade ? (
        <div>{formik.errors.idade}</div>
      ) : null}
      <button type="submit">Enviar</button>
    </form>
    </div>
  );
}

export default App;
