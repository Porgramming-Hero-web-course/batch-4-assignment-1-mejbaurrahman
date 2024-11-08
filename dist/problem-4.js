"use strict";
{
    const calculateShapeArea = (shape) => {
        if (shape.shape === "rectangle") {
            return shape.width * shape.height;
        }
        else {
            return Math.PI * shape.radius * shape.radius;
        }
    };
    // const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
    // console.log(circleArea.toFixed(2));
    // const rectangleArea = calculateShapeArea({
    //   shape: "rectangle",
    //   width: 4,
    //   height: 6,
    // });
    // console.log(rectangleArea);
}
