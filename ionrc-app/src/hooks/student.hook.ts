import { useState } from "react";

export enum Presence {
    Absent,
    Present
};

export interface Student {
    id: number,
    firstName: string,
    lastName: string,
    birthDate?: string,
    parentName?: string,
    parentEmail?: string,
    parentPhone?: string,
    photoUrl?: string,
    status?: Presence
}

const fakeStudents: Student[] = [{
    "id": 1,
    "firstName": "Agustin",
    "lastName": "Mercy"
}, {
    "id": 2,
    "firstName": "David",
    "lastName": "Piercey"
}, {
    "id": 3,
    "firstName": "Aeriela",
    "lastName": "Kleisle"
}, {
    "id": 4,
    "firstName": "Gerome",
    "lastName": "Oxenbury"
}, {
    "id": 5,
    "firstName": "Zitella",
    "lastName": "Pogue"
}, {
    "id": 6,
    "firstName": "Brendan",
    "lastName": "Brazear"
}, {
    "id": 7,
    "firstName": "Lenore",
    "lastName": "Biasini"
}, {
    "id": 8,
    "firstName": "Kane",
    "lastName": "Powe"
}, {
    "id": 9,
    "firstName": "Rorie",
    "lastName": "Coopper"
}, {
    "id": 10,
    "firstName": "Steven",
    "lastName": "Winter"
}, {
    "id": 11,
    "firstName": "Viv",
    "lastName": "Smouten"
}, {
    "id": 12,
    "firstName": "Giusto",
    "lastName": "Larciere"
}, {
    "id": 13,
    "firstName": "Anabelle",
    "lastName": "Staynes"
}, {
    "id": 14,
    "firstName": "Nicolina",
    "lastName": "Mewhirter"
}, {
    "id": 15,
    "firstName": "Ellie",
    "lastName": "Iacabucci"
}, {
    "id": 16,
    "firstName": "Alisha",
    "lastName": "Haining"
}, {
    "id": 17,
    "firstName": "Erek",
    "lastName": "Willas"
}, {
    "id": 18,
    "firstName": "Rey",
    "lastName": "Geare"
}, {
    "id": 19,
    "firstName": "Bridget",
    "lastName": "Moraleda"
}, {
    "id": 20,
    "firstName": "Romola",
    "lastName": "Wolfenden"
}];

export const useStudents = () => {
    const useStudentState = useState(fakeStudents);
    return useStudentState;
}