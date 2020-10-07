export class User {
    constructor(
        public name:string,
        public email:string,
        public phone:number,
        public password:number
    ){}

    // typescript compiler generat a public field for each public contructor 
    //parameter and automatically assign the parameter value to that field when 
    //you create  in new user
}
