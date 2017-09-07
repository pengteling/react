import $ from 'jquery'
import 'babel-polyfill'
// Promise
// $.get('http://music.henshui.com/api/musicList.js')
//   .then(data=>{
//     console.log(data)
//     return $.get('http://music.henshui.com/')
//   })
//   .then(data=>{console.log(data)})

// function* gen(x){
//   var y = yield x + 2;
//   console.log(y)
//   return y;
// }
//
// var g = gen(1);
// console.log(g.next(3)) // { value: 3, done: false }
// console.log(g.next()) // { value: 2, done: true }


// function* helloWorldGenerator() {
//   var one = yield 1
//   var two = yield 2
//   var three = yield 3
//   console.log(one,two,three)
// }
//
// var hw = helloWorldGenerator();
//
// console.log(hw.next())
// console.log(hw.next())
// console.log(hw.next())
// console.log(hw.next())
// console.log(hw.next())

//console.log(hw)

// for (let val of hw){
//   console.log(val)
// }


// const BinaryTree = () =>{
//   let Node = (key) =>{}
// }

function BinaryTree(){
  var Node = function(key){
    this.key = key
    this.left = null
    this.right =null
  }
  var root = null;
  var insertNode = function(node,newNode){
    if(newNode.key < node.key){
      if(node.left ===null){
        node.left = newNode
      }else{
        insertNode(node.left,newNode)
      }
    }else{
      if(node.right===null){
        node.right =newNode
      }else{
        insertNode(node.right,newNode)
      }
    }
  }
  this.insert = function(key){
    var newNode = new Node(key)
    if(root === null){
      root = newNode
    }else{
      insertNode(root,newNode)
    }
  }
}

var nodes = [8,3,10,1,6,4,7,13,21]
var binaryTree = new BinaryTree()
nodes.forEach(function(key){
  binaryTree.insert(key)
})
console.log(binaryTree)
