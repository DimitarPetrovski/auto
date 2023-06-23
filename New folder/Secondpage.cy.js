
//We can configure env,browser and screen size in the config.js file example 
//We can also use imports example Import {Class} from "../../../../Randompath 

describe('Register form tests', () => {
  beforeEach(() => {
  cy.get(Cypress.env('#En or In'))
  //NAVIGATE TO SECOND PAGE OF REGISTRATION
  cy.get('#SignupButton').click()
  cy.get('#Firstnamefield').type('Randomfirst')
  cy.get('#Lastnamefield').type('Randomlast')
  cy.get('#Emailfield').type('Randomemail123@gmail.com') 
  cy.get('#Passwordfield').type('Random123!')
  cy.get('#DropdownButton').click()
  cy.contains('[role="option"]', 'Argentina').click()
  cy.get('#AcceptandcontinueButton').click()
  }) 

  //STREET ADDRESS FIELD
  it('Valid street address', () => {
    cy.get('#Streetaddressfield').click().type('Randomaddress')
    cy.get('#CompleteandstartplayingButton').click()
    cy.get('#ErrorMesssage').should('not.exist')
})

it('Invalid street address Empty field', () => {
    cy.get('#Streetaddressfield').click().type(' ')
    cy.get('#CompleteandstartplayingButton').click()
    cy.get('#ErrorMesssage').should('exist')
})

//CITY FIELD
it('Valid City', () => {
    cy.get('#Cityfield').click().type('Randomcity')
    cy.get('#CompleteandstartplayingButton').click()
    cy.get('#ErrorMesssage').should('not.exist')
})

it('Invalid City only numbers', () => {
    cy.get('#Cityfield').click().type('12345')
    cy.get('#CompleteandstartplayingButton').click()
    cy.get('#ErrorMesssage').should('exist')
})

it('Invalid City empty field', () => {
    cy.get('#Cityfield').click().type(' ')
    cy.get('#CompleteandstartplayingButton').click()
    cy.get('#ErrorMesssage').should('exist')
})

//ZIPCODE FIELD
it('Valid Zipcode', () => {
    cy.get('#Zimcodefield').click().type('Randomzipcode')
    cy.get('#CompleteandstartplayingButton').click()
    cy.get('#ErrorMesssage').should('not.exist')
})

it('Invalid Zipcode less than 3', () => {
    cy.get('#Zimcodefield').click().type('ZC')
    cy.get('#CompleteandstartplayingButton').click()
    cy.get('#ErrorMesssage').should('exist')
})

it('Invalid Zipcode empty field', () => {
    cy.get('#Zimcodefield').click().type(' ')
    cy.get('#CompleteandstartplayingButton').click()
    cy.get('#ErrorMesssage').should('exist')
})

//PHONE NUMBER FIELD
it('Valid phone number', () => {
    cy.get('#Phonenumbefield').click().type(' ')
    cy.get('#CompleteandstartplayingButton').click()
    cy.get('#ErrorMesssage').should('not.exist')
})

it('Invalid phone number less than 5 digits', () => {
  cy.get('#Phonenumbefield').click().type('1234')
  cy.get('#CompleteandstartplayingButton').click()
  cy.get('#ErrorMesssage').should('exist')
})

it('Invalid phone number empty field', () => {
  cy.get('#Phonenumbefield').click().type(' ')
  cy.get('#CompleteandstartplayingButton').click()
  cy.get('#ErrorMesssage').should('exist')
})

//BACK BUTTON FUNCTIONALITY
it('Back button navigates to previous page', () => {
  cy.get('#Backbutton').click()
  cy.contains('Sign up').should('exist')
})

})
