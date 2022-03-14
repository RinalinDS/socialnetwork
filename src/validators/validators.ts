export const required = (value: string | undefined) => {
    if(value) return undefined
    return 'Field is required'
}


export const maxLengthCreator = (length: number) => (value: string | undefined) => {
    if(value && value.length > length) return `Maximum length is ${length} symbols`
    return undefined
}