

type SquarePropsType = {
    elementProps: number,
}

export const Square = ({elementProps}: SquarePropsType) => {


    const colorManager = (element: number) => {
        let theme: string = '';
        let currentLine: number = Number.isInteger(element / 8) ? element / 8 - 1 : Math.floor(element / 8);
        let pairLine: boolean = currentLine % 2 == 0

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
                {elementProps}
            </div>
        </>
    )
}