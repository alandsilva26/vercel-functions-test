
const SVG = `<?xml version="1.0" encoding="utf-8"?>
    <svg viewBox="98.547 185.874 320.729 71.871" xmlns="http://www.w3.org/2000/svg">
      <text style="fill: rgb(51, 51, 51); font-family: Arial, sans-serif; font-size: 64px; white-space: pre;" x="99.167" y="244.114">Alan Dsilva</text>
    </svg>`;

module.exports = (req, res) => {
    res.setHeader("content-type", "image/svg+xml");
    res.send(SVG);
}
