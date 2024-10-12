import { getData } from "./api"

export interface Job {
    name: string
    image: string
    slug: string
    alt: string
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