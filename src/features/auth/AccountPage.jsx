import { Form, Formik } from 'formik'
import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Header, Label, Segment } from 'semantic-ui-react'
import * as Yup from 'yup';
import MyTextInput from '../../app/common/form/MyTextInput'
import { updateUserPassword } from '../../app/firestore/firebaseService';

function AccountPage() {
  const { currentUser } = useSelector(state => state.auth);
  console.log(currentUser.providerId)
  return (
    <Segment>
      <Header
        dividing
        size='large'
        content='Account'
      />
      {currentUser.providerId === 'password' &&
        <>
          <Header
            color='teal'
            sub
            content='Change Password'
          />
          <p>Use this form to change your password</p>
          <Formik
            initialValues={{ newPassword1: '', newPassword2: '' }}
            validationSchema={Yup.object({
              newPassword1: Yup.string().required('Password is required'),
              newPassword2: Yup.string().oneOf([Yup.ref('newPassword1'), null], 'Password do not match')
            })}
            onSubmit={async (values, { setSubmitting, setErrors }) => {
              try {
                await updateUserPassword(values);
              }
              catch (error) {
                setErrors({
                  auth: error.message
                })
              }
              finally {
                setSubmitting(false)
              }
            }}
          >
            {({ errors, isSubmitting, isValid, dirty }) => (
              <Form
                className='ui form'
              >
                <MyTextInput name='newPassword1' type='password' placeholder='New Password' />
                <MyTextInput name='newPassword2' type='password' placeholder='Confirm Password' />
                {errors.auth && <Label basic color='red' style={{ marginBottom: 10 }} content={errors.auth} />}
                <Button
                  style={{ display: 'block' }}
                  loading={isSubmitting}
                  type='submit'
                  disabled={!isValid || isSubmitting || !dirty}
                  size='large'
                  positive
                  content='Update Password'
                />
              </Form>
            )}

          </Formik>
        </>
      }
      {currentUser.providerId === 'facebook.com' &&
        <>
          <Header color='teal' sub content='Facebook account' />
          <p>Please visit Facebook to update your account</p>
          <Button icon='facebook' color='facebook' as={Link} to='https://facebook.com'
            content='Go to Facebook'
          />
        </>
      }
      {currentUser.providerId === 'google.com' &&
        <>
          <Header color='teal' sub content='Google account' />
          <p>Please visit Google to update your account</p>
          <Button icon='google' color='google plus' as={Link} to='https://facebook.com'
            content='Go to Google'
          />
        </>
      }



    </Segment>
  )
}

export default AccountPage
