
export class RookDomain {
    constructor() { }

    public preview(index: number) {
        const lines: number[] = [];
        for(let i = index+8; i <= 64 && i >= 0; i+= 8){
            lines.push(i);
        }
        if(index > 8){
            for(let i = index-8; i <= 64 && i > 0; i-= 8){
                lines.push(i);
            }
        }
        const left = index% 8 == 0 ? index - 8 : index - (index % 8)
        for(let i = index-1; i <= index-1 && i > left; i-=1){
            lines.push(i)
        }
        const right = index% 8 == 0 ? index : index + (8 - (index % 8))
        for(let i = index+1; i >= index+1 && i <= right; i+=1){
            console.log("ici")
            lines.push(i)
        }
        
        return lines
    }
}