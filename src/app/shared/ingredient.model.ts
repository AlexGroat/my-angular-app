// export class Ingredient {
//     public name: string;
//     public amount: number;

//     constructor(name: string, amount: number) {
//         this.name = name;
//         this.amount = amount;
//     } 
// }

// below is a shortcut for small models, putting the public accessor infront of the argument names
// automatically assign the values in this constructor to the newly created properties

export class Ingredient {
    constructor(public name: string, public amount: number) {}
  }