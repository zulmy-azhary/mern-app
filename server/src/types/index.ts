export interface TUser {
  fullName: string;
  nik: string;
  password: string;
  role: "Admin" | "Ketok" | "Preparation" | "Pengecatan" | "Inspection";
}
