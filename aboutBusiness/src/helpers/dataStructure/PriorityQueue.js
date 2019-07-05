export let PriorityQueue = (function() {
  const items = new WeakMap();

  class QueueElement{
    constructor (element, priority) {
      this.element = element;
      this.priority = priority;
    }
  }

  class PriorityQueue{
    constructor () {
      items.set(this, []);
    }
    //添加元素
    enqueue(element, priority) {
      let q = items.get(this);
      let queueElement = new QueueElement(element, priority);
      let added = false;

      for (let i=0; i<q.length; i++){
        if (queueElement.priority < q[i].priority){ // {2}
          q.splice(i,0,queueElement); // {3}
          added = true;
          break; // {4}
        }
      }
      if (!added){
        q.push(queueElement); //{5}
      }
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
      for (let i=0; i<q.length; i++){
        console.log(`${q[i].element} - ${q[i].priority}`);
      }
    }
  }

  return PriorityQueue;
})();