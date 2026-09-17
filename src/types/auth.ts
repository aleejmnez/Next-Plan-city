import { User } from "./user";

//el usuario se registra y se pide estas variables
export interface RegisterCredentials {
    name:string;
    email:string;
    password:string;
}


//cuando el usuario ya esta registrado ya puede hacer login con los datos que ingreso en el register (email, password)
export interface LoginCredentials{
    email:string;
    password:string;
}

//cuando el usuario hace login se autentica y se le da el token
export interface AuthResponse{
    accesToken:string;
    user: User
}

// interface se le pide al usuario la contraseña actual para que puede cambiar por una nueva
export interface ChangePasswordRequest{
    currentPassword:string;
    NewPassword:string;
}
