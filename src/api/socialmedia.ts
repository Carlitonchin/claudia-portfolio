import { getData } from "./api";

export interface SocialMedia {
    title: string;
    description: string | null;
    instagram: string | null;
    linkedin: string | null;
    twitter: string | null;
    facebook: string | null;
}

export const getSocialMediaData = async (): Promise<SocialMedia> => {
    const response = await getData(`{
  getSocialMedia{
    data{
      title, description, facebook, linkedin, twitter, instagram
    }
  }
}
    `)

    return response.getSocialMedia.data
}