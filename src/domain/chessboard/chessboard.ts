export class ChessBoardDomain {
    
    constructor() {}

    public colorManager(index: number) {
        let theme: string = '';
        const currentLine: number = Number.isInteger(index / 8) ? index / 8 - 1 : Math.floor(index / 8);
        const pairLine: boolean = currentLine % 2 == 0

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

    public previewManager(index: number, isPreviewed: boolean, isConflictPreview: boolean) {
        if(isPreviewed && isConflictPreview){
            console.log('preview-conflict')
            return 'square-preview preview-conflict'
        }

        if(isPreviewed && !isConflictPreview){
            console.log('preview')
            return 'square-preview preview'
        }
        return 'square-preview'
    }
}
