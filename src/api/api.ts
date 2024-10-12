export type availableLanguages = "pt-BR"
const defaultLanguage: availableLanguages = "pt-BR"

export const getApiUrl = (lang?: availableLanguages) => {
    lang = lang || defaultLanguage
    return `${import.meta.env.API_URL}/${lang}`
}

export const getData = async (
    query: string, 
    variables?: string, 
    options?: { lang?: availableLanguages }
) => {
    const response = await fetch(getApiUrl(options?.lang), {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Bearer ${import.meta.env.API_TOKEN}`,
        },
        body: JSON.stringify({
            query,
            variables,
        }),
    })

    if(response.status !== 200) throw new Error("Error fetching data")
    
    const json = await response.json()
    if(!json.data) throw new Error("Error fetching data")
    return json.data
}