import { getData } from "./api";

export interface Skill {
    name: string;
    image: string;
    imageDescription: string;
}

export const getSkills = async (): Promise<Skill[]> => {
    const response = await getData(`
        {
            listSkills {
                data{
                    imageDescription,image,name
                }
            }
        }`
    )

    return response.listSkills.data
}