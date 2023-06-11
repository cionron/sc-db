import { Gender, Major } from "@prisma/client";

interface Student {
  id: number;
  sno: string;
  sname: string;
  sex: Gender;
  age: number;
  dept: Major;
  email: string;
  phone_num: string;
  address: string;
  createdAt: string;
  updatedAt: string;
}

export type { Student };

interface StudentSet {
  id: number;
  sno: string;
  sname: string;
  sex: Gender;
  age: number;
  dept: Major;
  email: string;
  phone_num: string;
  address: string;
  setSno: any;
  setSname: any;
  setSex: any;
  setAge: any;
  setDept: any;
  setEmail: any;
  setPhoneNum: any;
  setAddress: any;
}

export type { StudentSet };
