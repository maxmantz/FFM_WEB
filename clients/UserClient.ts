import { baseUrl } from "./"

export interface User {
    id: number,
    identifier: string,
    email: string
}

class UserClient {
    constructor(private token: string | undefined) { }

    getUserByIdentifier(identifier: string) {
        return fetch(`${baseUrl}/users/${identifier}`, {
            headers: {
                "Authorization": `Bearer ${this.token}`
            }
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error(response.statusText)
                }
                return response.json() as Promise<User>;
            })
    }
}

export default UserClient;