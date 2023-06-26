export const validateContactForm = (values) => {
    const errors = {};

    if(!values.firstname){
        errors.firstname = 'This field is Required';
    } else if (values.firstname.length < 2){
        errors.firstname = 'Must be at least 2 characters';
    } else if (values.firstname.length > 15){
        errors.firstName = 'Must be less than 15 characters'
    }

    if(!values.lastname){
        errors.lastname = 'This field is Required';
    } else if (values.lastname.length < 2){
        errors.lastname = 'Must be at least 2 characters';
    } else if (values.lastname.length > 15){
        errors.lastname = 'Must be less than 15 characters'
    }

    if(!values.email.includes('@')){
        errors.email = 'Your email must contain an \'@\' symbol';
    }

    if(!values.feedback){
        errors.feedback = 'This field is Required';
    }

    return errors;
};