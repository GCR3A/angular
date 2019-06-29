import { Iemployer } from './employer.interface';
export class employer implements Iemployer{
  nom: string;
  prenom: string;
  date_naissance: Date;
  number_phone: number;
  poste_occupe: string;
  adresse: string;
  constructor(nom: string, prenom: string, date_naissance: Date, number_phone: number,
      poste_occupe: string, adresse: string){
          this.nom = nom;
          this.prenom = prenom;
          this.date_naissance = date_naissance;
          this.number_phone = number_phone;
          this.poste_occupe = poste_occupe ;
          this.adresse = adresse;
      }
  get_age():number{
      let birth_year      = this.date_naissance.getFullYear() ;
      let current_year    = new Date().getFullYear() ;
      return (current_year  - birth_year );
  }
}