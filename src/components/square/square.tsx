import { Piece } from "../piece/piece";


type SquarePropsType = {
    elementProps: number,
    piece: string | null
}

export const Square = ({ elementProps, piece }: SquarePropsType) => {


    const colorManager = (element: number) => {
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

    return (
        <>
            <div className={colorManager(elementProps)}>
                {piece !== null ?
                    <Piece role={piece} />
                    : null
                }
            </div>
        </>
    )
}