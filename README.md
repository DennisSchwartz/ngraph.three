# ngraph.three

This is a 3d graph renderer, which uses [three.js](https://github.com/mrdoob/three.js) as a rendering engine. This library is a part of [ngraph](https://github.com/anvaka/ngraph) project.

# usage

Basic example:

``` js
// Create graph:
var createGraph = require('ngraph.graph');
var graph = createGraph();
graph.addLink(1, 2);

// And render it
var createThree = require('ngraph.three');
var graphics = createThree(graph);

graphics.run(); // begin animation loop
```

Very often it is required to do something with scene before animation frame is rendered. To do so
use `onFrame()` callback:

``` js
var graphics = createThree(graph);

graphics.onFrame(function() {
 console.log('Frame is being rendered');
});
graphics.run(); // begin animation loop
```


# examples
Many examples are available in [ngraph](https://github.com/anvaka/ngraph/tree/master/examples/three.js) repository

# install

With [npm](https://npmjs.org) do:

```
npm install ngraph.three
```

# license

MIT
