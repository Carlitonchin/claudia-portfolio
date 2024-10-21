import { getData } from "./api"

export interface BlogPost {
    slug: string
    image: string
    alt: string
    title: string
    description: string
    firstPublishedOn: Date
    post: any
    category: BlogCategory
}

export interface BlogCategory {
    name: string
}

export const getBlogPostBySlug = async (slug: string): Promise<BlogPost> => {
    const response = await getData(`
        {
  getBlog(where:{slug:"${slug}"}){
    data{
      category{
        name
      },description,alt,image,title,firstPublishedOn,slug,post
    }
  }
}`);

    return response.getBlog.data
}

export const getBlogPosts = async (): Promise<BlogPost[]> => {
    const response = await getData(`
        {
  listBlogs{
    data{
      category{
        name
      },description,alt,image,title,firstPublishedOn,slug
    }
  }
}`);

    return response.listBlogs.data
}