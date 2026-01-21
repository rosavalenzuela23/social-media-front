type User = {
    username: string;
}

type Image = {
    path: string,
    uuid: string,
}

type Post = {
    creatorUuid: string,
    creatorUsername?: string,
    message: string,
    date: string,
    images: Image[]
}

export type {
    User,
    Post,
    Image
}