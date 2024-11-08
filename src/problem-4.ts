{
  type Circle = {
    shape: "circle";
    radius: number;
  };

  type Rectangle = {
    shape: "rectangle";
    width: number;
    height: number;
  };

  const calculateShapeArea = (shape: Circle | Rectangle): number => {
    if (shape.shape === "rectangle") {
      return shape.width * shape.height;
    } else {
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
