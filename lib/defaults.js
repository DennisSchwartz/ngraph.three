/**
 * This module provides default settings for three.js graphics. There are a lot
 * of possible configuration paramters, and this file provides reasonable defaults
 */

/**
 * Default node UI creator. Renders a cube
 */
module.exports.createNodeUI = createNodeUI;

/**
 * Default link UI creator. Renders a line
 **/
module.exports.createLinkUI = createLinkUI;

/**
 * Updates cube position
 */
module.exports.nodeRenderer = nodeRenderer;

/**
 * Updates line position
 */
module.exports.linkRenderer = linkRenderer;

var NODE_SIZE = 2; // default size of a node square

var nodeGeometry = new THREE.CubeGeometry(NODE_SIZE, NODE_SIZE, NODE_SIZE);
var nodeMaterial = new THREE.MeshBasicMaterial({ color: 0xfefefe });

var linkMaterial = new THREE.LineBasicMaterial({ color: 0x00cccc });

function createNodeUI(node) {
  return new THREE.Mesh(nodeGeometry, nodeMaterial);
}

function createLinkUI(link) {
  var linkGeometry = new THREE.Geometry();
  // we don't cara about position here. linkRenderer will update it
  linkGeometry.vertices.push(new THREE.Vector3(0, 0, 0));
  linkGeometry.vertices.push(new THREE.Vector3(0, 0, 0));

  return new THREE.Line(linkGeometry, linkMaterial);
}

function nodeRenderer(node) {
  node.position.x = node.pos.x;
  node.position.y = node.pos.y;
  node.position.z = node.pos.z;
}

function linkRenderer(link) {
  var from = link.from;
  var to = link.to;
  link.geometry.vertices[0].set(from.x, from.y, from.z);
  link.geometry.vertices[1].set(to.x, to.y, to.z);
  link.geometry.verticesNeedUpdate = true;
}
