export interface Auth {
    isSignedIn: boolean;
    errorMessage: string[];
}

export interface Login {
    email: string;
    password: string;
}