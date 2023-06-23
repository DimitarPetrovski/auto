
describe('Register form', () => {
    beforeEach(() => {
      cy.visit('https://casinodays.com/en/')
      cy.get('#SignupButton').click()
    })
        //IF THE EMAIL OR PHONE NUMBER IS ALREADY TAKEN THE REGISTRATION WILL FAIL.


        //1st page of sign up
        it('First page of sign up', () => {
        cy.get('#Firstnamefield').type('Randomfirst')
        cy.get('#Lastnamefield').type('Randomlast')
        cy.get('#Emailfield').type('Randomemail321@gmail.com') 
        cy.get('#Passwordfield').type('Random123!')
        cy.get('#Countryfield').click()
        cy.contains('[role="option"]', 'Argentina').click()
        cy.get('#AcceptandcontinueButton').click()


        //2nd page of sign up
        cy.get('#Daydropdown').click()
        cy.contains('[role="option"]', '15').click()
        cy.get('#Monthdropdown').click()
        cy.contains('[role="option"]', '01').click()        
        cy.get('#Yeardropdown').click()
        cy.contains('[role="option"]', '2000').click()
        cy.get('#Genderdropdown').click()
        cy.contains('[role="option"]', 'Male').click()
        cy.get('#Streetaddressfield').type('Random Address')
        cy.get('#Cityfield').type('Skopje')   
        cy.get('#Zipcodefield').type('1000')
        cy.get('Countrycodefield').click()
        cy.contains('[role="option"]', 'Argentina').click()
        cy.get('#Phonenumberfield').type('987654321')
        cy.get('#CompleteandstartplayingButton').click()

        //Message Registration completed
        cy.get('#Registercompleted').should('exist')

        //Get request to DB to see if the user was created.


        
      
        })
    })
