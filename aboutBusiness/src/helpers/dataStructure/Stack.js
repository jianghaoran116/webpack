const items = new WeakMap()

export class Stack {
  constructor() {
    items.set(this, [])
  }
  
  //添加元素
  push(element) {
    let s = items.get(this);
    s.push(element)
  }

  //从栈移除元素
  pop() {
    let s = items.get(this);
    return s.pop()
  }

  //查看栈顶元素
  peek() {
    let s = items.get(this);
    return s[s.length-1]
  }

  //检查栈是否为空
  isEmpty() {
    let s = items.get(this);
    return s.length == 0
  }

  //清空栈元素
  clear() {
    let s = items.get(this);
    s = [];
  }

  //打印栈元素
  print() {
    let s = items.get(this);
    console.log(s.toString())
  }
}