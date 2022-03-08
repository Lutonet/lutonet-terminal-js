import Terminal from "./Terminal.js";
setTimeout(() => {
  const terminal = new Terminal({
    theme: "dark",
    element: "#terminal",
  });
  /*{
  display: true,
  displayTitle: false,
});
*/
  console.log(terminal);
}, 50);
