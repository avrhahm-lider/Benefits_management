export function bodyEror(){
    const err = new Error("invalid body")
    err.status = 400
    return err
}