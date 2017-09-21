export class Register{
    id:number;
    name: string;
    department: string;
    city: string;
  email: string;
  phoneno: string;
  

    constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}