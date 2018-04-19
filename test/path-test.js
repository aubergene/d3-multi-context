var tape = require("tape"),
  path = require("../"),
  d3Path = require("d3-path").path(),
  d3Hpgl = require("d3-hpgl").hpgl();

tape("path is an instanceof path", function(test) {
  var contexts = [d3Path, d3Hpgl]
  var p = path.path(contexts);
  test.ok(p instanceof path.path);
  test.equal(p.constructor.name, "Path");
  test.deepEqual(p.toArray(), ["", ""]);
  test.end();
});

tape("path.moveTo(x, y) returns correct commands", function(test) {
  var p = path.path([d3Path, d3Hpgl]);
  p.moveTo(150, 50);
  p.lineTo(200, 100);
  p.moveTo(100, 50);
  test.deepEqual(p.toArray(), [
    "M150,50L200,100M100,50",
    "PU150,50;\nPD;\nPA200,100;\nPU100,50;\nPD;\n"
  ]);
  test.end();
});

