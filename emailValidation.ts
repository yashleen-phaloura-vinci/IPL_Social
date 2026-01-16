export class EmailValidation{
    validate (email:string):boolean{
        if(this.containsSpace(email)){
            return false;
        }
        //a
        if(!this.containsAt(email)){
            return false;
        }
        //dot
        if (!this.containsDot(email)){
            return false;
        }
        if (this.endsWithDot(email)) {
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
    private containsDot(email: string): boolean {
        const domain = email.split("@")[1];
        if (!domain){
            return false;
        } 
        return domain.includes(".");
  }
   private endsWithDot(email: string): boolean {
    const domain = email.split("@")[1];
    if (!domain) return true;
    return domain.endsWith(".");
  }

}