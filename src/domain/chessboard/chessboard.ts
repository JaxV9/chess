export class ChessBoardDomain {
    
    constructor() {}

    public static colorManager = (index: number, isPreviewed: boolean, isConflictPreview: boolean) => {
        let theme: string = '';
        const currentLine: number = Number.isInteger(index / 8) ? index / 8 - 1 : Math.floor(index / 8);
        const pairLine: boolean = currentLine % 2 == 0

        if(isPreviewed && !isConflictPreview){
            return 'square preview'
        } else if(isPreviewed && isConflictPreview){
            return 'square preview-conflict'
        }
        if (pairLine && index % 2 !== 0) {
            theme = "clear"
        }
        if (pairLine && index % 2 == 0) {
            theme = "dark"
        }
        if (!pairLine && index % 2 !== 0) {
            theme = "dark"
        }
        if (!pairLine && index % 2 == 0) {
            theme = "clear"
        }
        return 'square ' + theme;
    }
}
