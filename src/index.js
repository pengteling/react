class Node{
  constructor(key){
    this.key = key
    this.left = null
    this.right = null
  }
}
class BinaryTree{
  constructor(){
    this.root = null
    this.inOrderTraverse =this.inOrderTraverse.bind(this)
    this.inOrderTraverseNode = this.inOrderTraverseNode.bind(this)
    this.preOrderTraverse = this.preOrderTraverse.bind(this)
    this.preOrderTraverseNode = this.preOrderTraverseNode.bind(this)
    this.min = this.min.bind(this)
    this.minNode = this.minNode.bind(this)
    this.find = this.find.bind(this)
    this.findNode = this.findNode.bind(this)
    this.remove = this.remove.bind(this)
    this.removeNode = this.removeNode.bind(this)
    this.findMinNode = this.findMinNode.bind(this)

  }

  //插入根结点
  insert(key){
    let newNode = new Node(key)
    if(this.root === null){
      this.root = newNode
    }
    else{
      this.insertNode(this.root,newNode)
    }
  }
  //插入新节点
  insertNode(node,newNode){
    if(newNode.key < node.key){
      if(node.left === null){
        node.left = newNode
      }else{
        this.insertNode(node.left,newNode)
      }
    }
    else{
      if(node.right === null){
        node.right = newNode
      }else{
        this.insertNode(node.right,newNode)
      }
    }
  }
  //中序遍历
  inOrderTraverse(callback){
    this.inOrderTraverseNode(this.root,callback)
  }
  //中序遍历算法  先左 后自己 最后 右
  inOrderTraverseNode(node,callback){
    if(node!==null){
      this.inOrderTraverseNode(node.left,callback)
      callback(node.key)
      this.inOrderTraverseNode(node.right,callback)
    }
  }
  //前序遍历 用于复制二叉树
  preOrderTraverse(callback){
    this.preOrderTraverseNode(this.root,callback)
  }
  preOrderTraverseNode(node,callback){
    if(node!==null){
      callback(node.key)
      this.preOrderTraverseNode(node.left,callback)
      this.preOrderTraverseNode(node.right,callback)
    }
  }
  //后序遍历   文件路径--

  //查找值
  min(callbak){
    this.minNode(this.root,callbak)
  }
  minNode(node,callback){
    if(node!==null){
      if(node.left!==null){
        this.minNode(node.left,callback)
      }else{
        callback(node.key)
      }
    }
  }

  findNode(key,node){
    //return false
    if(node===null){
      return null
    }
    if(node.key==key){
      return node
    }else if(node.key>key){
      return this.findNode(key,node.left)
    }else if(node.key<key){
      return this.findNode(key,node.right)
    }
  }

  findMinNode(node,key){
    if(node===null){
      return null
    }
    if(node.left !==null){
      return findMinNode(node.left,null)
    }else{
      return node
    }
  }


  find(key){
    return this.findNode(key,this.root)
  }
  remove(key){
    this.root = this.removeNode(this.root,key)
  }
  removeNode(node,key){
    //return node
    if(node===null){
      return null  //找不到删除节点
    }
    if(key< node.key){
      node.left = this.removeNode(node.left,key)
      return node
    }else if(key>node.key){
      node.right = this.removeNode(node.right,key)
      return node
    }else{
      //如果找到节点 有三种处理情况
      //没有子节点 直接删除当前 即把当前node给个null
      if(node.left===null && node.right===null){
        node = null
        return node
      }
        //左边节点有 则直接把右节点赋给当前节点 表示删除当前节点
      else if(node.left === null){
        node = node.right
        return node
      }
      //只有左边节点 则直接把左边节点赋给当前节点表示删除当前节点
      else if(node.right ===null){
        node = node.left
        return node
      }
      //左边右边节点都有，则把右边节点的最小值赋给当前节点 并删除该最小节点
      else{
          let minNode =this.findMinNode(node.right)
          node.key = minNode.key
          node.right = this.removeNode(node.right,minNode.key)
          return node
      }

    }
  }
}
var nodes = [6,8,3,10,1,85,4,7,13,21]
var binaryTree = new BinaryTree()
nodes.forEach(function(key){
  binaryTree.insert(key)
})
console.log(binaryTree)

// 中遍历
// binaryTree.inOrderTraverse((key)=>{
//   console.log(key)
// })
// 前遍历
binaryTree.preOrderTraverse((key)=>{
  console.log(key)
})
//最小
binaryTree.min((key)=>{
  console.log(`最小值${key}`)
})


console.log(binaryTree.find(6))
binaryTree.remove(3)

binaryTree.inOrderTraverse((key)=>{
  console.log(key)
})
