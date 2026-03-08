export type User = {
    name: string;
    type: string;
    email: string;
    password?: string;
    password_confirmation?: string;
    role: string;
    department: string;
    phone: string;
    location: string;
    shift: 'morning' | 'afternoon' | 'night';
};