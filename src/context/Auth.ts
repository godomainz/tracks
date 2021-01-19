export interface Auth {
    token: string | null;
    errorMessage: string[] | null;
}

export interface Login {
    email: string;
    password: string;
}