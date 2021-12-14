export default function generateSnowflakeData(options) {

    const {
        STROKE,
        SUB_BRANCHES,
        DISTANCE_FROM_CENTRE,
        ARM_LENGTH
    } = options;

    const gen = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

    const subBranchCount = gen(SUB_BRANCHES.min, SUB_BRANCHES.max);
    const distanceFromCentre = new Array(subBranchCount)
        .fill(0)
        .map((i) => gen(DISTANCE_FROM_CENTRE.min, DISTANCE_FROM_CENTRE.max));
    const armLength = new Array(subBranchCount)
        .fill(0)
        .map((i) => gen(ARM_LENGTH.min, ARM_LENGTH.max));

    let c = 0;
    const subBranches = new Array(subBranchCount).fill(0).map((i) => c++);

    const armStroke = gen(STROKE.min, STROKE.max);
    const subBranchStrokeSame = gen(STROKE.min, STROKE.max);
    const subBranchStroke =
        gen(1, 3) == 1
            ? new Array(subBranchCount).fill(subBranchStrokeSame)
            : new Array(subBranchCount)
                .fill(0)
                .map((i) => gen(STROKE.min, STROKE.max))
                .slice(0, subBranchCount);

    return {
        distanceFromCentre,
        armLength,
        subBranches,
        armStroke,
        subBranchStroke,
    }
};
