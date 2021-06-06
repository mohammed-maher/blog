import GhostContentAPI from '@tryghost/content-api';

// create api instance with site credentials
const api = new GhostContentAPI({
    url: process.env.GHOST_URL,
    key: process.env.GHOST_API_KEY,
    version: 'v4',
});

// get all posts from Ghost
export async function getPosts() {
    return await api.posts
        .browse(
            {
                limit: 'all',
            }
        )
        .catch(err => {
            console.log(err);
        });
}

// get single post from Ghost

export async function getSinglePost(slug) {
    return await api.posts
        .read({
            slug
        })
        .catch(err => console.log(err));
}
