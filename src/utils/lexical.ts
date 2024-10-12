function strongIfNecessary(text: string, format: number){
    if(!format) return text;

    return `<strong>${text}</strong>`
}

export function convertLexicalToHTML(node: any): string {
    if (!node) return '';

    switch (node.type) {
        case 'root':
            return strongIfNecessary(node.children?.map(convertLexicalToHTML).join('') || '', node.format);

        case 'paragraph-element':
            return strongIfNecessary(`<p>${node.children?.map(convertLexicalToHTML).join('') || ''}</p>`, node.format);

        case 'webiny-list':
            const listTag = node.tag || 'ul'; // Default to 'ul' if tag is not specified
            return strongIfNecessary(`<${listTag}>${node.children?.map(convertLexicalToHTML).join('') || ''}</${listTag}>`, node.format);

        case 'webiny-listitem':
            return strongIfNecessary(`<li style="margin-top: 0.5rem;">${node.children?.map(convertLexicalToHTML).join('') || ''}</li>`, node.format);

        case 'text':
            return strongIfNecessary(node.text || '', node.format);

        // Handle other formats as needed
        default:
            return node.children?.map(convertLexicalToHTML).join('') || '';
    }
}