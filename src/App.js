import './App.css';
import { Form, Field, Formik, FieldArray } from "formik";

function App() {
  return (
    <div>
      <Formik
        initialValues={{
          name: "",
          phone: "",
          password: "",
          gender: "",
          date: "",
          about: "",
          social: [],
          hobbies: [],
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ values }) => (
          <Form>
            <label>Name:</label>
            <Field name="name" type="text" />
            <br /> <br />
            <label>Phone:</label>
            <Field name="phone" typne="number" />
            <br /> <br />
            <label>Password:</label>
            <Field name="password" type="password" />
            <br /> <br />
            <label>Gender:</label>
            <br />
            <label>Male:</label>
            <Field name="gender" value="male" type="radio" />
            <br /> <br />
            <label>Female:</label>
            <Field name="gender" value="female" type="radio" />
            <br /> <br />
            <label>Date:</label>
            <Field name="date" type="date" />
            <br /> <br />
            <label>About:</label>
            <Field name="about" as="textarea" />
            <br /> <br />
            <label>Social:</label>
            <br /> <br />
            <label>Facebook:</label>
            <Field name="social[0]" type="text" />
            <br /> <br />
            <label>Twitter:</label>
            <Field name="social[1]" type="text" />
            <br /> <br />
            <FieldArray
              name="hobbies"
              render={(arrayHelpers) => (
                <div>
                  {values.hobbies && values.hobbies.length > 0 ? (
                    values.hobbies.map((hobby, index) => (
                      <div key={index}>
                        <Field name={`hobbies.${index}`} />
                        <button
                          type="button"
                          onClick={() => arrayHelpers.remove(index)} 
                        >
                          -
                        </button>
                        <button
                          type="button"
                          onClick={() => arrayHelpers.insert(index, "")} 
                        >
                          +
                        </button>
                      </div>
                    ))
                  ) : (
                    <button type="button" onClick={() => arrayHelpers.push("")}>
                      Add a Hobbies
                    </button>
                  )}
                </div>
              )}
            />
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default App;
