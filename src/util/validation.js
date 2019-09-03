import * as Yup from 'yup';

const alpha = /^[a-zA-Z_]+( [a-zA-Z_]+)*$/;

const validation = Yup.object().shape({
  firstName: Yup.string()
    .matches(alpha, {message: "Enter Valid Name", excludeEmptyString: true })
    .required("This is a required field")
    .max(35),
  // lastName: Yup.string()
  //   .matches(alpha, {message: "Enter Valid Name", excludeEmptyString: true })
  //   .required("This is a required field")
  //   .max(35),
  occupation: Yup.string()
      .test('county', 'cannot be empty', value => value !== 'Please Select')
      .required('required'),
  recaptcha: Yup.string().required(),
  // message: Yup.string()
  //     .required('required'),
  // terms: Yup.bool()
  //     .oneOf([true], "Must agree to something")
});

export default validation;