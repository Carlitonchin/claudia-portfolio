import { getData } from "./api"

export interface AboutData {
    name: string
    job: string
    experience: string
    about: string
    email: string
    image: string
    alt: string
}

export const getAboutData = async (): Promise<AboutData> => {
    const response = await getData(`
        {
            getAbout {
                data {
                    name,job,experience,about,email,image,alt
                    }
            }
        }
    `)

    return response.getAbout.data
}