import { Formik, Field, Form, ErrorMessage } from "formik";
import { Button, Label, Col, FormGroup } from "reactstrap";
import { validateContactForm } from "../utils/validateContactForm";
import { useDispatch } from "react-redux";
//import { postVisitor } from "../features/visitors/visitorSlice";

const ContactForm = () => {

    const dispatch = useDispatch();

    const handleSubmit = (values, { resetForm }) => {
        const petition = {
          firstname: values.firstname,
          lastname: values.lastname,
          organization: values.organization,
          email: values.email,
          feedback: values.feedback,
          date: new Date(Date.now()).toISOString(),
        };
        console.log('The petition object is: ', petition);
       // dispatch(postVisitor(petition));
        resetForm();
    }

  return (
    <Formik
      initialValues={{
        firstname: '',
        lastname: '',
        organization: '',
        email: '',
        feedback: '',
      }}
      validate={validateContactForm}
      onSubmit={handleSubmit}
    >
      <Form>
        <FormGroup row>
          <Label htmlFor='firstname' md='2'>
            First Name :
          </Label>
          <Col md='4'>
            <Field
                name='firstname' 
                placeholder='Nombre'
                className='form-control'
            />
            <ErrorMessage name='firstname'>
                {(msg) => <p className='text-danger'>{msg}</p>}
            </ErrorMessage>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label htmlFor='lastname' md='2'>
            Last Name :
          </Label>
          <Col md='4'>
            <Field
                    name='lastname'
                    placeholder='Apellido' 
                    className='form-control'
            />
            <ErrorMessage name='lastname'>
                {(msg) => <p className='text-danger'>{msg}</p>}
            </ErrorMessage>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label htmlFor='organization' md='2' >
            Organization :
          </Label>
          <Col md='4'>
            <Field
                    name='organization'
                    placeholder='Organizacion' 
                    className='form-control'
            />
            <ErrorMessage name='organization'>
                {(msg) => <p className='text-danger'>{msg}</p>}
            </ErrorMessage>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label htmlFor='email' md='2'>
            E-mail :
          </Label>
          <Col md='4'>
            <Field
                    name='email'
                    placeholder='Correo Electronico'
                    type='email' 
                    className='form-control'
            />
            <ErrorMessage name='email'>
                {(msg) => <p className='text-danger'>{msg}</p>}
            </ErrorMessage>
          </Col>
        </FormGroup>
        <FormGroup row>
            <Label htmlFor='feedback' md='2'>
                Request :
            </Label>
            <Col md='4'>
            <Field
                name='feedback'
                placeholder='Su mensaje/pedido aqui'
                as='textarea'
                rows='10' 
                className='form-control'
            />
            </Col>
        </FormGroup>
        <FormGroup row>
            <Col md={{ size: 4, offset: 2}}>
                <Button type='submit' color='warning' size='lg' block>
                    Submit
                </Button>
            </Col>
        </FormGroup>
      </Form>
    </Formik>
  );
};
export default ContactForm;
