declare var M
export class ErrorService {
    static show(message): void {
        M.toast({ html: message })
    }
}