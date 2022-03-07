export default function safeText(text) {
  const table = {
    "<": "lt",
    ">": "gt",
    '"': "quot",
    "'": "apos",
    "&": "amp",
    "\r": "#10",
    "\n": "#13",
  };

  return text.toString().replace(/[<>"'\r\n&]/g, function (chr) {
    return "&" + table[chr] + ";";
  });
}
