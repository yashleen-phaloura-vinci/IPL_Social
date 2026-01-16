import { EmailValidation } from "../emailValidation"

describe('emailValidation', ()=>{
    //Arrange
    let emailValidation = new EmailValidation();

    describe('validate email', ()=>{
        it("should return validate email", ()=>{

            //Act
            let actual = emailValidation.validate("example@test.com");

            //Assert
            expect (actual).toBe(true);
        });
        it("should return with @",()=>{
            let actual = emailValidation.validate("exampletest.com");

            expect (actual).toBe(false);
        })

    })

})