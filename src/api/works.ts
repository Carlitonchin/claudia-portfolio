import { getData } from "./api"

export interface Job {
    name: string
    image: string
    slug: string
    alt: string
    gallery: JobGallery[]
    url: string
    secondaryDescription: string
    secondaryTitle: string
    principalDescription: string
    mainTitle: string
    altMainImage: string
    mainImage: string
    altLogo: string
    logo: string
    order: number
}

export interface JobsHeader{
    title: string;
    subtitle: string;
}

export interface JobGallery {
  height: number;
  width: number;
  alt: string;
  image: string;
  tinyImage: string;
}

export const getJobs = async (): Promise<Job[]> => {
    const response = await getData(`
        {
  listWorks{
    data{
      url,secondaryDescription,
      secondaryTitle,principalDescription,
      mainTitle,altMainImage,mainImage,altLogo,
      logo,slug,alt,image,name,order
      gallery{
          height,width,alt,image,tinyImage
      }
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