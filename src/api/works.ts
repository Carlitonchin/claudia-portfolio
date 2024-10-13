import { getData } from "./api"

export interface Job {
    name: string
    image: string
    slug: string
    alt: string
}

export interface JobsHeader{
    title: string;
    subtitle: string;
}

export const getJobs = async (): Promise<Job[]> => {
    const response = await getData(`
        {
            listWorks {
                data {
                    name,image,slug,alt
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