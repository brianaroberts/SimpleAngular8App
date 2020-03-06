export interface IProfile {
    id: number
    fName: string
    lName: string
    email: string
    phoneNumber: string
    location: {
        address: string
        city: string
        state: string
        zipCode: string        
    }   
}