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
        });
        it("should return at least one dot", ()=>{
            let actual = emailValidation.validate("exampletestcom");

            expect (actual).toBe(false);
        });
        it("should return without dot at the end",()=>{
            let actual = emailValidation.validate("example@test.com.");

            expect (actual).toBe(false);
        })

    })

})