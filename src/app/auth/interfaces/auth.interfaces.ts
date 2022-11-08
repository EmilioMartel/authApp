

export interface AuthResponse {
    ok      : boolean;
    name?   : string;
    uid?    : string;
    token?  : string;
    msg?    : string;
}

export interface Usuario {
    uid     : string;
    name    : string;
}