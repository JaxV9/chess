export class PawnBlackDomain {
    constructor() {}

    public static forwardBlack(index: number) {
        return index +8;
    }

    public static forwardWhite(index: number) {
        return index -8;
    }
}
