export class ChessBoardDomain {
    
    constructor() {}

    public static colorManager = (element: number) => {
        let theme: string = '';
        const currentLine: number = Number.isInteger(element / 8) ? element / 8 - 1 : Math.floor(element / 8);
        const pairLine: boolean = currentLine % 2 == 0

        if (pairLine && element % 2 !== 0) {
            theme = "clear"
        }
        if (pairLine && element % 2 == 0) {
            theme = "dark"
        }
        if (!pairLine && element % 2 !== 0) {
            theme = "dark"
        }
        if (!pairLine && element % 2 == 0) {
            theme = "clear"
        }
        return 'square ' + theme;
    }
}
