// resources/UserResource.js
export class PostResource {
    static toJson(post) {
        return {
            type: "posts",
            id: post._id,
            attributes: {
                title: post.title ?? '',
                content: post.content ?? ''
              
            }
        };
    }

    static collection(posts) {
        return posts.map(post => this.toJson(post));
    }
}

