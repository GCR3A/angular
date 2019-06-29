export interface Iemployer {
    nom: string;
    prenom: string;
    date_naissance: Date;
    number_phone: number;
    poste_occupe: string;
    adresse: string;
    get_age(): number

}