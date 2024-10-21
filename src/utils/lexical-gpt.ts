
export function convertRichTextToHTML(node: any): string {
    if (!node) return '';
    if(!node.type){
        node = node.root
    }
    
    switch (node.type) {
      case 'root':
        return node.children?.map(convertRichTextToHTML).join('') || '';
  
      case 'heading-element':
        const headingTag = node.tag || 'h2';
        return `<${headingTag}>${node.children?.map(convertRichTextToHTML).join('') || ''}</${headingTag}>`;
  
      case 'paragraph-element':
        return `<p>${node.children?.map(convertRichTextToHTML).join('') || ''}</p>`;
  
      case 'text':
        return node.text || '';
  
      case 'image':
        const imgTag = `<img src="${node.src}" alt="${node.altText || ''}" width="100%">`;
        const caption = node.showCaption && node.caption 
          ? `<figcaption>${convertRichTextToHTML(node.caption.editorState.root)}</figcaption>`
          : '';
        return `<figure>${imgTag}${caption}</figure>`;
  
      case 'webiny-list':
        const listTag = node.listType === 'bullet' ? 'ul' : 'ol';
        return `<${listTag}>${node.children?.map(convertRichTextToHTML).join('') || ''}</${listTag}>`;
  
      case 'webiny-listitem':
        return `<li>${node.children?.map(convertRichTextToHTML).join('') || ''}</li>`;
  
      case 'webiny-quote':
        return `<blockquote>${node.children?.map(convertRichTextToHTML).join('') || ''}</blockquote>`;
  
      default:
        return node.children?.map(convertRichTextToHTML).join('') || '';
    }
}