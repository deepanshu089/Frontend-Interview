import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getBlogs, getBlogById, createBlog } from '@/lib/api';
import type { Blog, CreateBlogDto } from '@/types';

export const useGetBlogs = () => {
    return useQuery<Blog[]>({
        queryKey: ['blogs'],
        queryFn: getBlogs,
    });
};

export const useGetBlog = (id: string | undefined) => {
    return useQuery<Blog>({
        queryKey: ['blogs', id],
        queryFn: () => getBlogById(id!),
        enabled: !!id,
    });
};

export const useCreateBlog = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (newBlog: CreateBlogDto) => createBlog(newBlog),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['blogs'] });
        },
    });
};
