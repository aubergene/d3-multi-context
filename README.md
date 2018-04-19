# d3-multi-context

A simple wrapper so you can pass multiple contexts to functions which use the [d3-path API](https://github.com/d3/d3-path).

```js
var svgCtx = d3.path();
var hpglCtx = d3Hpgl.hpgl();
var path = d3MultiContext([svgCtx, hpglCtx])

path.moveTo(150, 50);
path.lineTo(200, 100);
path.moveTo(100, 50);

path.toArray()
// ["M150,50L200,100M100,50", "PU150,50;\nPD;\nPA200,100;\nPU100,50;\nPD;\n"]
```
