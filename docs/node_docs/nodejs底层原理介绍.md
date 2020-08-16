# nodejs底层原理介绍

## Node.js的运行机制如下
- （1）V8引擎解析JavaScript脚本。

- （2）解析后的代码，调用Node API。

- （3）libuv库负责Node API的执行。它将不同的任务分配给不同的线程，形成一个Event Loop（事件循环），以异步- 的方式将任务的执行结果返回给V8引擎。
  
- （4）V8引擎再将结果返回给用户。
  
## Node.js 事件循环

  
- 事件循环是了解 Node.js 最重要的方面之一。
- 它阐明了 Node.js 如何做到异步且具有非阻塞的 I/O，
- Node.js是因为 JavaScript 代码运行在单个线程上。 每次只处理一件事。(大大简化了编程方式，而不必担心并发问题。)
- nodejs的event loop是基于libuv，而浏览器的event loop则在html5的规范中明确定义。(libuv已经对event loop作出了实现，而html5规范中只是定义了浏览器中event loop的模型，)
- event loop是libuv的核心所在，上面我们提到 js 会把回调和任务交给libuv，libuv何时来调用回调就是 event loop 来控制的。event loop 首先会在内部维持多个事件队列（或者叫做观察者 watcher），比如 时间队列、网络队列等等，使用者可以在watcher中注册回调，当事件发生时事件转入pending状态，再下一次循环的时候按顺序取出来执行，而libuv会执行一个相当于 while true的无限循环，不断的检查各个watcher上面是否有需要处理的pending状态事件，如果有则按顺序去触发队列里面保存的事件，同时由于libuv的事件循环每次只会执行一个回调，从而避免了 竞争的发生。

## 事件循环的几个阶段
- timers：执行setTimeout() 和 setInterval()中到期的callback。
- I/O callbacks：上一轮循环中有少数的I/Ocallback会被延迟到这一轮的这一阶段执行
- idle, prepare：仅内部使用
- poll：最为重要的阶段，执行I/O callback，在适当的条件下会阻塞在这个阶段
- check：执行setImmediate的callback
- close callbacks：执行close事件的callback，例如socket.on("close",func)

## NodeJS事件循环中执行顺序
> 是在6个循环阶段后都会取执行任务队列中的微任务和宏任务