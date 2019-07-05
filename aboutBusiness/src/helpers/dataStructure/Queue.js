export let Queue = (function() {
  const items = new WeakMap();
  class Queue{
    constructor () {
      items.set(this, []);
    }
    //添加元素
    enqueue(element) {
      let q = items.get(this);
      q.push(element);
    }
    //删除元素
    dequeue() {
      let q = items.get(this);
      let r = q.shift();
      return r;
    }
    //查看队列头元素
    front() {
      let q = items.get(this);
      return q[0]
    }
    //检查队列是否为空
    isEmpty() {
      let q = items.get(this);
      return q.length == 0;
    }
    size() {
      let q = items.get(this);
      return q.length;
    }
    //打印队列元素
    print() {
      let q = items.get(this);
      console.log(q.toString());
    }
  }

  return Queue;
})();