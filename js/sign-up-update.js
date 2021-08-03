class SignUpUpdate{

    get firstName() {
        return this._firstName;
    }
    set firstName(firstName) {
        let nameRegex = RegExp('^[A-Z]{1}[A-Za-z\\s]{2,}$');
        if (nameRegex.test(firstName)) {
            this._firstName = firstName;
        } else {
            throw 'Name is in Incorrect Format';
        }
    }

    get surname() {
        return this._surname;
    }
    set surname(surname) {
            this._surname = surname;
    }

    get mobileNumber() {
        return this._mobileNumber;
    }
    set mobileNumber(mobileNumber) {

        let phoneRegex1=RegExp('^[1-9][0-9]{9}$');
        let phoneRegex2=RegExp('^[0-9]{2}[1-9][0-9]{9}$');
        let phoneRegex3=RegExp('^[+][0-9]{2}[1-9][0-9]{9}$');
        if(phoneRegex1.test(mobileNumber)||phoneRegex2.test(mobileNumber)||phoneRegex3.test(mobileNumber)) 
        this._mobileNumber = mobileNumber;
        else throw "Phone number is Incorrect";
        
    }
    get email(){
        return this._email;
    }
    set email(email){
        this._email = email;
    }

    get password(){
        return this._password;
    }
    set password(value){
        this._password = value;
    }

    toString(){
        return "firstName "+this._firstName+" surname"+this._surname+"mobileNumber "+this._mobileNumber+" email "+
        this._email+"password "+this._password;
    }
}