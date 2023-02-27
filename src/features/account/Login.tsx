import { ErrorMessage, Form, Formik } from "formik";
import { observer } from "mobx-react-lite";
import { useState } from "react";
import { Button, Header, Label } from "semantic-ui-react";
import { User } from "../../app/models/user";
import { useStore } from "../../app/store/store";
import MyTextInput from "./MyTextInput";

export default observer(function Login() {
    const { userStore } = useStore();
    const [user, setUser] = useState<User[]>([]);
    return (
        <Formik
            initialValues={{ username: '', password: '', error: null }}
            onSubmit={(values, { setErrors }) =>
                    userStore.login(values.username, values.password)
                    .catch(error => setErrors({ error: 'Invalid email or password' }))
                }
        >
            {({ handleSubmit, errors }) => (
                <Form className='ui form' onSubmit={handleSubmit} autoComplete='off'>
                    <Header as='h2' content='Login to PetStore' color="teal" textAlign="center" />
                    <MyTextInput placeholder="Username" name='username' />
                    <MyTextInput placeholder="Password" name='password' type='password' />
                    <ErrorMessage name='error' render={() => 
                        <Label style={{ marginBottom: 10 }} basic color='red' content={errors.error} />} />
                    <Button positive content='Login' type="submit" fluid />
                </Form>
            )}
        </Formik>
    )
})