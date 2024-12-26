
export class PawnDomain {
    constructor() {}

    public static forward(index: number, color: string) {
        if(color === "black"){
            return index +8;
        }
        if(color === "white"){
            return index -8;
        }
    }

    public static preview(index: number, color: string){
        if(color === "black"){
            return [index +8];
        }else if(color === "white"){
            return [index -8];
        } else {
            return null
        }

    }
}
