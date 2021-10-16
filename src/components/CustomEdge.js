import React from "react";
import { getSmoothStepPath, getBezierPath } from "react-flow-renderer";

export default function CustomEdge({
  source,
  target,
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  animated,
  style = {},
  data,
}) {
  const edgePath =
    data.type === "smoothstep"
      ? getSmoothStepPath({
          sourceX,
          sourceY,
          sourcePosition,
          targetX,
          targetY,
          targetPosition,
        })
      : getBezierPath({
          sourceX,
          sourceY,
          sourcePosition,
          targetX,
          targetY,
          targetPosition,
        });
  return (
    <>
      {data.hasArrow && (
        <defs>
          <marker
            className="react-flow__arrowhead"
            id={`marker-${id}`}
            markerWidth="25"
            markerHeight="30"
            viewBox="-10 -10 20 20"
            orient="auto"
            refX="0"
            refY="0"
          >
            <polyline
              stroke={`rgba(${data.color.r}, ${data.color.g}, ${data.color.b}, ${data.color.a})`}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1"
              fill={`rgba(${data.color.r}, ${data.color.g}, ${data.color.b}, ${data.color.a})`}
              points="-5,-4 0,0 -5,4 -5,-4"
            />
          </marker>
          <marker
            className="react-flow__arrowhead"
            id={`marker-start-${id}`}
            markerWidth="25"
            markerHeight="30"
            viewBox="-10 -10 20 20"
            orient="auto"
            refX="0"
            refY="0"
          >
            <polyline
              // transform="translate(90)"
              style={{ transform: "rotate(180deg)" }}
              stroke={`rgba(${data.color.r}, ${data.color.g}, ${data.color.b}, ${data.color.a})`}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1"
              fill={`rgba(${data.color.r}, ${data.color.g}, ${data.color.b}, ${data.color.a})`}
              points="-5,-4 0,0 -5,4 -5,-4"
            />
          </marker>
        </defs>
      )}
      <path
        id={id}
        d={edgePath}
        stroke={`rgba(${data.color.r}, ${data.color.g}, ${data.color.b}, ${data.color.a})`}
        fill={`rgba(${data.color.r}, ${data.color.g}, ${data.color.b}, ${data.color.a})`}
        className="react-flow__edge-path"
        style={{
          ...style,
          stroke: `rgba(${data.color.r}, ${data.color.g}, ${data.color.b}, ${data.color.a})`,
        }}
        markerEnd={`url(#marker-${id})`}
        markerStart={`url(#marker-start-${id})`}
      />
    </>
  );
}
