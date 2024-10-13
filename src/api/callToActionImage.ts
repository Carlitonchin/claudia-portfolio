import { getData } from "./api";

export interface CallToActionImage {
    image: string;
    link: string;
    externalLink: boolean;
    hoverText: string;
    hoverIcon: string;
    icon: string;
}

export const getCallToActionImage = async (): Promise<CallToActionImage> => {
    const response = await getData(`
        {
  getCallToActionImage{
    data{
      externalLink,link,hoverText,hoverIcon,icon,image
    }
  }
}

    `)

    return response.getCallToActionImage.data
}