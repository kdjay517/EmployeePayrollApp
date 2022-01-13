class EmployeePayrollData {
    constructor() {

    }

    get id() {
        return this._id;
    }

    set id(id) {
        this._id = id; 
    }

    get name() {
        return this._name;
    }

    set name(name) {
        console.log(name);
        let pattern = RegExp("^[A-Z]{1}[A-Za-z]{2,}$");
        if(pattern.test(name)){
            this._name = name;
        }
        else{
            throw "Incorrect Name";
        }
    }

    get profilePic(){
        return this._profilePic;
    }

    set profilePic(profilePic) {
        this._profilePic = profilePic;
    }

    get gender() {
        return this._gender;
    }

    set gender(gender) {
        this._gender = gender;
    }

    get department() {
        return this._department;
    }

    set department(department) {
        this._department = department;
    }

    get salary() {
        return this._salary;
    }

    get startDate() {
       return this._startDate;
    }

    set startDate(startDate) {
        let currentDate = new Date();
        if(startDate > currentDate) {
            throw "Start date is a future date";
        }
        var diff = Math.abs(currentDate.getTime - startDate.getTime);
        if(diff / (1000*60*60*24) > 30) {
            throw "start date is a beyond 30 days";
        }
        this._startDate = startDate;
    }

    get note() {
        return this._note;
    }

    set note(note) {
        this._note = note;
    }

    toString() {
        const options = {year: 'numeric', month: 'long', day: 'numeric'};
        const empDate = !startDate ? "undefined" : this.startDate.toLocateDateString("en-us",options);
        return "id = " + this.id
               + "name = " + this.name
               + "gender = " + this.gender
               + "profilePic = " + this.profilePic
               + "department = " + this.department
               + "salary = " + this.salary
               + "startDate = " + empDate
               + "note = " + this.note;
    }
}