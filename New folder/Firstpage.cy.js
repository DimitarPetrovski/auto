
//We can configure env,browser and screen size in the config.js file example 
//We can also use imports example Import {Class} from "../../../../Randompath 

describe('Register form tests', () => {
    beforeEach(() => {
    cy.get(Cypress.env('#En or In'))
    cy.get('#SignupButton').click()
    })

    //ClOSE BUTTON FUNCTION ('X')
    it('Close button functionality', () => {
        cy.get('#X button').click()
        cy.contains('Sign up').should('exist')
    })

    //HEADERS
    it('Should contain header', () => {
        cy.get('h1').should('contain', 'Get 100% bonus up to 500E cash'); 
        //Same test for h2,h3 if it's not existent error should popup
    })
    
    //FIRST NAME FIELD
    it('Valid first name', () => {
        cy.get('#Firstnamefield').click().type('Random')
        cy.get('#AcceptandcontinueButton').click()
        cy.get('#ErrorMesssage').should('not.exist')
    })
    it('Invalid first name less than 2 chars', () => {
        cy.get('#Firstnamefield').click().type('A')
        cy.get('#AcceptandcontinueButton').click()
        cy.get('#ErrorMesssage').should('exist')
    })
    it('Invalid first name empty field', () => {
        cy.get('#Firstnamefield').click().type(' ')
        cy.get('#AcceptandcontinueButton').click()
        cy.get('#ErrorMesssage').should('exist')
    })

    //LAST NAME FIELD
    it('Valid last name', () => {
        cy.get('#Lastnamefield').click().type('Random')
        cy.get('#AcceptandcontinueButton').click()
        cy.get('#ErrorMesssage').should('not.exist')
    })
    it('Invalid last name less than 2 chars', () => {
        cy.get('#Lastnamefield').click().type('A')
        cy.get('#AcceptandcontinueButton').click()
        cy.get('#ErrorMesssage').should('exist')
    })
    it('Invalid last name empty field', () => {
        cy.get('#Lastnamefield').click().type(' ')
        cy.get('#AcceptandcontinueButton').click()
        cy.get('#ErrorMesssage').should('exist')
    })

    //EMAIL FIELD
    it('Valid email', () => {
        cy.get('#Emailfield').click().type('Random@gmail.com')
        cy.get('#AcceptandcontinueButton').click()
        cy.get('#ErrorMesssage').should('not.exist')
    })
    it('Invalid email', () => {
        cy.get('#Emailfield').click().type('Random')
        cy.get('#AcceptandcontinueButton').click()
        cy.get('#ErrorMesssage').should('exist')
    })
    it('Invalid email field empty', () => {
        cy.get('#Emailfield').click().type(' ')
        cy.get('#AcceptandcontinueButton').click()
        cy.get('#ErrorMesssage').should('exist')
    })
    it('Invalid email already taken', () => { 
        cy.get('#Firstnamefield').click().type('Random')
        cy.get('#Lastnamefield').click().type('Randomlast')
        cy.get('#Emailfield').click().type('Random123@gmail.com')
        cy.get('#Passwordfield').click().type('Randompass1!')
        cy.get('#OpenCountrydropdown').click()
        cy.contains('[role="option"]', 'Argentina').click()
        cy.get('#AcceptandcontinueButton').click()
        cy.get('#ErrorMesssage').should('exist')
    })

     //PASSWORD FIELD
     it('Valid password', () => {
        cy.get('#Passwordfield').click().type('Randompass1!')
        cy.get('#AcceptandcontinueButton').click()
        cy.get('#ErrorMesssage').should('not.exist')
    })
    it('Invalid password', () => {
        cy.get('#Passwordfield').click().type('Randompass')
        cy.get('#AcceptandcontinueButton').click()
        cy.get('#ErrorMesssage').should('exist')
    })
    it('Invalid password field empty', () => {
        cy.get('#Passwordfield').click().type(' ')
        cy.get('#AcceptandcontinueButton').click()
        cy.get('#ErrorMesssage').should('exist')
    })
    it('Password visable ASDFG', () => {
        cy.get('#passwordInput').invoke('val').then((password) => {
        expect(password).to.not.contain('******');
    })
    })
    it('Password invisable *****', () => {
        cy.get('#PasswordInput').invoke('val').then((password) => {
        expect(password).to.contain('******');
    });


    //DROP DOWNS
    it('Dropdown option validation', () => {
        cy.get('#DropdownButton').select('Option24').should('have.value', '24')
        cy.get('#ErrorMesssage').should('not.exist')
    })      
    it('Dropdown option validation', () => {
        cy.get('#DropdownButton').select('Option24').should('have.value', '23')
        cy.get('#ErrorMesssage').should('exist')
        //WE CAN CREATE MULTIPLE TESTS FOR EVERY OPTION IN THE DROPDOWN TO VALIDATE THAT THE VALUE IN THE ARRAY MATCHES THE OPTION, SAME GOES FOR THE DROPDOWNS IN THE 2ND REGISTER PAGE
        
    })
    })
})