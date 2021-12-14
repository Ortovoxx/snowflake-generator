import styles from '../styles/Snowflake.module.css';

export default function Snowflake({ options }) {

  const {
    distanceFromCentre,
    armLength,
    subBranches,
    armStroke,
    subBranchStroke,
  } = options


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

  return (
    <div>
      <svg version="1.1" viewBox="0 0 800 600" >
        <g fill="none" fillRule="nonzero" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="miter" strokeMiterlimit="10" >
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
    </div>
  );
}