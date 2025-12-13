// resources/UserResource.js
export class UserResource {
    static toJson(user) {
        return {
            type: "Users",
            id: user._id,
            attributes: {
                name: user.name ?? '',
                email: user.email ?? ''
              
            }
        };
    }

    static collection(users) {
        return users.map(user => this.toJson(user));
    }
}

