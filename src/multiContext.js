function Path(contexts) {
  if (!Array.isArray(contexts)) throw new Error('Must pass an array of contexts')
  if (!contexts.length) throw new Error('Must pass at least one context')
  this.contexts = contexts;
}

function path(contexts) {
  return new Path(contexts);
}

Path.prototype = path.prototype = {
  constructor: Path,
  moveTo: function(x, y) {
    this.contexts.forEach(function(d) {
      d.moveTo(x, y)
    })
  },
  closePath: function() {
    this.contexts.forEach(function (d) {
      d.closePath()
    })
  },
  lineTo: function(x, y) {
    this.contexts.forEach(function (d) {
      d.lineTo(x, y)
    })
  },
  quadraticCurveTo: function(x1, y1, x, y) {
    this.contexts.forEach(function (d) {
      d.quadraticCurveTo(x1, y1, x, y)
    })
  },
  bezierCurveTo: function(x1, y1, x2, y2, x, y) {
    this.contexts.forEach(function (d) {
      d.bezierCurveTo(x1, y1, x2, y2, x, y)
    })
  },
  arcTo: function(x1, y1, x2, y2, r) {
    this.contexts.forEach(function (d) {
      d.arcTo(x1, y1, x2, y2, r)
    })
  },
  arc: function (x, y, r, a0, a1, ccw) {
    this.contexts.forEach(function (d) {
      d.arc(x, y, r, a0, a1, ccw)
    })
  },
  rect: function(x, y, w, h) {
    this.contexts.forEach(function (d) {
      d.rect(x, y, w, h)
    })
  },
  toArray: function() {
    return this.contexts.map(function(d) {
      return d.toString()
    })
  }
};

export default path;
