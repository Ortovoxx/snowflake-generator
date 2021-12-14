

export default function Snowflake({ options }) {

  const {
    STROKE,
    SUB_BRANCHES,
    DISTANCE_FROM_CENTRE,
    ARM_LENGTH
  } = options;

  const gen = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

  const c30 = Math.cos(Math.PI / 6);
  const s60 = Math.sin(Math.PI / 3);
  const s45 = Math.sin(Math.PI / 4);
  const c45 = Math.cos(Math.PI / 4);
  const c15 = Math.cos(Math.PI / 12);
  const s15 = Math.sin(Math.PI / 12);

  const x1 = 400
  const y1 = 300

  const top = (dis, arm) => {

    const x = s45 * arm
    const y = (y1 - dis) - (c45 * arm)

    return `${x1 - x},${y} ${x1},${y1 - dis} ${x1 + x},${y}`;
  }

  const topLeft = (dis, arm) => {
    const m = 100 / 173

    const x2 = x1 - (s60 * dis)
    const y2 = -(m * (x1 - x2)) + y1

    return `${x2 - (arm * c15)},${y2 + (arm * s15)} ${x2},${y2} ${x2 - (arm * s15)},${y2 - (arm * c15)}`;
  }

  const topRight = (dis, arm) => {
    const m = -50 / 87

    const x2 = (s60 * dis) + x1
    const y2 = -(m * (x1 - x2)) + y1

    return `${x2 + (arm * s15)},${y2 - (arm * c15)} ${x2},${y2} ${x2 + (arm * c15)},${y2 + (arm * s15)}`;
  }

  const bottomLeft = (dis, arm) => {
    const m = -50 / 87

    const x2 = x1 - (c30 * dis)
    const y2 = -(m * (x1 - x2)) + y1

    return `${x2 - (arm * c15)},${y2 - (arm * s15)} ${x2},${y2} ${x2 - (arm * s15)},${y2 + (arm * c15)}`;
  }

  const bottomRight = (dis, arm) => {
    const m = 100 / 173

    const x2 = x1 + (s60 * dis)
    const y2 = -(m * (x1 - x2)) + y1

    return `${x2 + (arm * s15)},${y2 + (arm * c15)} ${x2},${y2} ${x2 + (arm * c15)},${y2 - (arm * s15)}`;
  }

  const bottom = (dis, arm) => {

    const x = s45 * arm
    const y = (y1 + dis) + (c45 * arm)

    return `${x1 - x},${y} ${x1},${y1 + dis} ${x1 + x},${y}`;
  }

  const subBranchCount = gen(SUB_BRANCHES.min, SUB_BRANCHES.max);
  const distanceFromCentre = new Array(subBranchCount).fill(0).map(i => gen(DISTANCE_FROM_CENTRE.min, DISTANCE_FROM_CENTRE.max))
  const armLength = new Array(subBranchCount).fill(0).map(i => gen(ARM_LENGTH.min, ARM_LENGTH.max));

  let c = 0;
  const subBranches = new Array(subBranchCount).fill(0).map(i => c++)

  const baseStroke = gen(STROKE.min, STROKE.max)
  const armStroke = gen(STROKE.min, STROKE.max)
  const subBranchStrokeSame = gen(STROKE.min, STROKE.max);
  const subBranchStroke = gen(1, 3) == 1 ? new Array(subBranchCount).fill(subBranchStrokeSame) : new Array(subBranchCount).fill(0).map(i => gen(STROKE.min, STROKE.max)).slice(0, subBranchCount)

  return (
    <svg version="1.1" viewBox="0 0 800 600" >

      <g fill="none" fillRule="nonzero" stroke="#ffffff" strokeWidth={baseStroke} strokeLinecap="round" strokeLinejoin="miter" strokeMiterlimit="10" >
        <g >
          <line strokeWidth={armStroke} x1={x1} y1={y1} x2="400" y2="500" />
          {subBranches.map(i => (<polyline strokeWidth={subBranchStroke[i]} key={i} points={bottom(distanceFromCentre[i], armLength[i])} />))}
        </g>
        <g>
          <line strokeWidth={armStroke} x1={x1} y1={y1} x2="226.79492" y2="400" />
          {subBranches.map(i => (<polyline strokeWidth={subBranchStroke[i]} key={i} points={bottomLeft(distanceFromCentre[i], armLength[i])} />))}
        </g>
        <g>
          <line strokeWidth={armStroke} x1={x1} y1={y1} x2="226.79492" y2="200" />
          {subBranches.map(i => (<polyline strokeWidth={subBranchStroke[i]} key={i} points={topLeft(distanceFromCentre[i], armLength[i])} />))}
        </g>
        <g>
          <line strokeWidth={armStroke} x1={x1} y1={y1} x2="400" y2="100" />
          {subBranches.map(i => (<polyline strokeWidth={subBranchStroke[i]} key={i} points={top(distanceFromCentre[i], armLength[i])} />))}
        </g>
        <g>
          <line strokeWidth={armStroke} x1={x1} y1={y1} x2="573.20508" y2="200" />
          {subBranches.map(i => (<polyline strokeWidth={subBranchStroke[i]} key={i} points={topRight(distanceFromCentre[i], armLength[i])} />))}
        </g>
        <g>
          <line strokeWidth={armStroke} x1={x1} y1={y1} x2="573.20508" y2="400" />
          {subBranches.map(i => (<polyline strokeWidth={subBranchStroke[i]} key={i} points={bottomRight(distanceFromCentre[i], armLength[i])} />))}
        </g>
      </g>
    </svg>
  );
}