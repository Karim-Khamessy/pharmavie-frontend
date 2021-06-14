export class Product {
<<<<<<< HEAD
    id : String | undefined;
    name : String;
    description: String;
    laboratory: String;
    conditioning: String;
    dosage: String;
    form: String;
    quantity : number ; 
    presentation: String;
    therapeutiClass : String;
=======
    id : String | undefined ;
    name : String ;
    description: String;
    laboratory: String;
    conditioning: String ;
    dosage: String ;
    form: String  ;
    quantity : number  ; 
    presentation: String ;
    therapeutiClass : String  ;
>>>>>>> 5b60fd22d6b34088e88c37413c1092cfc3c45161
    subClass: String;
    specification: String;
    DurationOfConversation: String;
    publicPrice: Number;
    use: String;
    path: String;
    contreIndications: String;
    tableOfContent : String;
     constructor(name : string,
         description: string,
         laboratory: string,
         conditioning: string,
         dosage: string,
         form: string,
         presentation: string,
         therapeutiClass : string,
         subClass: string,
         specification: string,
         DurationOfConversation: string,
         publicPrice: number,
         use: string,
         path: string,
         contreIndications: string,
<<<<<<< HEAD
         tableOfContent : string,
=======
         tableOfContent: string,
>>>>>>> 5b60fd22d6b34088e88c37413c1092cfc3c45161
         ) {

       
       this.name = name;
       this.description = description;
       this.laboratory = laboratory;
       this.conditioning = conditioning;
       this.dosage = dosage;
       this.form = form;
       this.presentation = presentation;
       this.therapeutiClass = therapeutiClass;
       this.subClass = subClass;
       this.specification = specification;
       this.DurationOfConversation = DurationOfConversation;
       this.publicPrice = publicPrice;
       this.use = use;
       this.path = path;
       this.contreIndications = contreIndications;
       this.tableOfContent = tableOfContent;
       this.quantity = 1 ; 
     }
   }