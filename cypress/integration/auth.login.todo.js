// Normally you shouldn't need to break your tests up this much.
// Normally I'd just have a file called `auth` and have all my tests
// in that file. But I've split them up like this to make the workshop
// flow nicer with the demo and exercises.
// eslint-disable-next-line
import {generate} from '../utils'

describe('authentication', () => {
  beforeEach(() => cy.logout())

  it('should allow existing users to login', () => {
    // you'll want to first create a new user.
    // This custom cypress command is similar to a promise, so you can do:
    // cy.createNewUser().then(user => {
    //   more cy commands here
    // })

    cy.createNewUser().then(user => {
      // With the user created, go ahead and use the cy commands to:
      // 1. visit the app: visitApp
      cy.visit('/')
        .getByText(/login/i)
        // 2. Click the login link
        .click()

        // 3. type the user's username in the username field
        .getByLabelText(/username/i)
        .type(user.username)

        // 4. type the user's password in the password field
        .getByLabelText(/password/i)
        .type(user.password)

        // 5. submit the form by clicking the submit button
        .getByText(/submit/i)
        .click()

        // Finally assert the route changed to '/'
        .assertRoute('/')

        // and verify that the display name contains user.username
        .getByTestId('username-display')
        .should('contain', user.username)
    })
  })
})
