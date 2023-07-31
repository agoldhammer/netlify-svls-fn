// exports.handler = async () => {
//   return {
//     statusCode: 200,
//     body: JSON.stringify({
//       message: "Hello World!",
//     }),
//   };
// };

// eslint-disable-next-line
exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Hello World" }),
  };
};
