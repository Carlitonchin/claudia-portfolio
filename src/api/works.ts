import { getData } from "./api"

export interface Job {
    name: string
    image: string
    slug: string
    alt: string
    gallery: string[]
    url: string
    secondaryDescription: string
    secondaryTitle: string
    principalDescription: string
    mainTitle: string
    altMainImage: string
    mainImage: string
    altLogo: string
    logo: string
}

export interface JobsHeader{
    title: string;
    subtitle: string;
}

export const getJobs = async (): Promise<Job[]> => {
    const response = await getData(`
        {
  listWorks{
    data{
      gallery,url,secondaryDescription,
      secondaryTitle,principalDescription,
      mainTitle,altMainImage,mainImage,altLogo,
      logo,slug,alt,image,name
    }
  }
}
    `)

    return response.listWorks.data
}

export const getJobsHeader = async (): Promise<JobsHeader> => {
    const response = await getData(`
        {
  getHeaderWork{
    data{
      subtitle,title
    }
  }
}
    `)

    return response.getHeaderWork.data
}