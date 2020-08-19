# VUE响应式底层原理

- Observer类负责将复杂类型的变量转化成响应式数据，转化为响应式数据的变量都会带有 '__ob__'  属性，所以 '__ob__' 属性可以作为判断响应式数据的标识。
- watcher:当我们侦测到数据变化的时候,需要通知谁?需要用到这个数据的地方有自定义的,也有可能是模板上的,我们把这些地方统称为watcher,可以理解成依赖;
- Dep的作用在与收集依赖,当侦测到数据发生变化时,dep会通知他收集的所有watcher;

## 运行原理

- 数据data进过observer处理变成影响式数据，数据的getter与setter被拦截。

- 每当有watcher到data读取数据时，会被getter拦截，watcher被当做依赖被dep收集。

- 每当Data的数据发生变化时会被setter拦截，setter会通知Dep,Dep再通知它收集的所有watcher, watcher再调用它的回调函数。

## 数组响应式原理

- 不会触发set方法的数组方法有push(),pop(),shift(),unshift(),splice(),sort(),revese(),(vue把这些方法定义为**变异方法**--会修改原来的数组的方法)
- **非变异方法** 比如:filter(),concat(),slice(),他们不会修改原始数组而会返回一个新的数组,
- 因为变异方法无法触发set方法所以无法劫持到数据的变化,vue的做法是对这些方法重写来达到数据劫持;

- defineProperty不能检测数组长度的变化,准确的说是通过改变length而增加的长度不能监测到;
- 对于数组新增的属性,需要手动再初始化,
- 数组的变化侦测实现原理有所不同，当我们通过key读取数组时，一样会被getter拦截。
- 但是由于Object.defineProperty的setter只能做到对每个key进行拦截，当数组调用原生方法如push或pop时，数组值发生变化，Object.defineProperty却拦截不到，所以数组值的变化侦测只能通过重写数组的原生方法实现拦截。(如上边说的变异方法)


- 由于setter方法只能监听的每个key对应的值变化，如果Object新增或者删除一个key, setter是侦测不到，所以不会触发依赖。
- 由于Array是通过重写Array原型方法触发依赖，所以如果直接修改数组下的元素，是不会触发依赖的。
- 针对vue侦测方案的缺陷，vue提供了vm.$set与vm.$del, 这两个API会在方法内调用dep.notify，所以通过API进行赋值可以触发依赖。
