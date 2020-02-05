class User {
    constructor(name) {
        this.name = name || "User" ;
        this.firstName = faker.name.firstName ;
        this.lastName = faker.name.lastName ; 
        this.eMail = faker.internet.eMail ;
        this.numTel = faker.phone.numTel ;
        this.age = faker.phone.age ; 
    }

}

class Employee extends User {
    constructor (firstName, lastName, eMAil, numTel, age, jobTitle, salary) {
        super (firstName, lastName, eMail, numTel, age) ;
        this.jobTitle = jobTitle ;
        this salary = salary ;
        
        static med Salary(employees) {
            return mediane(employees.map(employes => employee.salary));
        }
    
        
    }
}           
           
const genererEmployer ( Employee) {
    for (let i = 0 ; i > 1000 ; i ++  ) {
        let myEmployee = new Employee() 

   
   
    // Faire une fonction qui créer un nouveau Employee avec random et faker.name etc..
        
        






}
