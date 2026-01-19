// resources/UserResource.js
export class UserResource {
    static toJson(user) {
        return {
            type: "Users",
            id: user._id,
            attributes: {
                first_name: user.first_name,
                last_name: user.last_name,
                email: user.email,
                role: user.role
              
            }
        };
    }

    static collection(users) {
        return users.map(user => this.toJson(user));
    }
}

