import { UUID } from "crypto";

export interface Student {
    id: string,
    name: string,
    lastname: string,
    date: string,
    email: string,
    phone: string,
    address: string,
    schoolId: UUID;
}