export interface Blog {
    id: string; // JSON server usually uses string or number, keep string for safety or verify db.json
    title: string;
    category: string[]; // Array of strings based on example
    description: string;
    date: string;
    coverImage: string;
    content: string;
}

export type CreateBlogDto = Omit<Blog, 'id'>;
