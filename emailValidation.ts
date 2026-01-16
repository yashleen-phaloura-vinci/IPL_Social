export class EmailValidation{
    validate (email:string):boolean{
        if(this.containsSpace(email)){
            return false;
        }
        //a
        if(!this.containsAt(email)){
            return false;
        }



        return true;
    }

    private containsSpace(email:string):boolean{
        return email.includes(" ");
    }
    private containsAt(email:string):boolean{
        return email.includes("@");
    }
    

}