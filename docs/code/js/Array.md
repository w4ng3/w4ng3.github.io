---
title: 数组
icon: array
date: 2019-09-16
category: JavaScript
tag:
  - 快速上手
---

本文对 JavaScript 中数组的创建、访问、操作进行了简要的介绍。

<!-- more -->

## 数组的创建

第一种方法是直接表示:

```js
[1, 2, 3.14, "Hello", null, true];
```

上述数组包含 6 个元素。数组用 `[]` 表示，元素之间用 `,` 分隔。

另一种创建数组的方法是通过 `Array()` 函数实现:

```js
new Array(1, 2, 3); // 创建了数组[1, 2, 3]
```

然而，出于代码的可读性考虑，强烈建议直接使用 `[]`。

## 访问元素

数组的元素可以通过索引来访问。请注意，索引的起始值为 `0`:

```js
let arr = [1, 2, 3.14, "Hello", null, true];
arr[0]; // 返回索引为0的元素，即1
arr[5]; // 返回索引为5的元素，即true
arr[6]; // 索引超出了范围，返回undefined
```

JavaScript 的 Array 可以包含任意数据类型，并通过索引来访问每个元素。

## 数组的长度

要取得 Array 的长度，直接访问 `length` 属性:

```js
const arr = [1, 2, 3.14, "Hello", null, true];

arr.length; // 6
```

请注意，直接给 Array 的 `length` 赋一个新的值会导致 Array 大小的变化:

```js
const arr = [1, 2, 3];

arr.length; // 3
arr.length = 6;
arr; // arr 变为 [1, 2, 3, undefined, undefined, undefined]
arr.length = 2;
arr; // arr 变为 [1, 2]
```

Array 可以通过索引把对应的元素修改为新的值，因此，对 Array 的索引进行赋值会直接修改这个 Array:

```js
const arr = ["A", "B", "C"];

arr[1] = 99;
arr; // arr 现在变为 ['A', 99, 'C']
```

::: warning

如果通过索引赋值时，索引超过了范围，同样会引起 Array 大小的变化:

```js
const arr = [1, 2, 3];

arr[5] = "x";
arr; // arr 变为 [1, 2, 3, undefined, undefined, 'x']
```

大多数其他编程语言不允许直接改变数组的大小，越界访问索引会报错。然而，JavaScript 的 Array 却不会有任何错误。在编写代码时，不建议直接修改 Array 的大小，访问索引时要确保索引不会越界。

:::

## 操作数组

### indexOf

与 String 类似，Arra。也可以通过 `indexOf()` 来搜索一个指定的元素第一次出现的位置:

```js
const arr = [10, 20, "30", "xyz"];

arr.indexOf(10); // 元素 10 的索引为 0
arr.indexOf(20); // 元素 20 的索引为 1
arr.indexOf(30); // 元素 30 没有找到，返回 -1
arr.indexOf("30"); // 元素 '30' 的索引为 2
```

::: warning

- 数字 `30` 和字符串 `'30'` 是不同的元素。
- `lastIndexOf(某元素，startIndex)` 和`indexOf()`相同，区别在于从尾部向首部查询
:::

### slice

`slice()` 就是对应 String 的 `substring()` 版本，它截取 Array 的部分元素，然后==返回一个新的 Array:==

```js
const arr = ["A", "B", "C", "D", "E", "F", "G"];

arr.slice(0, 3); // 从索引 0 开始，到索引 3 结束，但不包括索引 3: ['A', 'B', 'C']
arr.slice(3); // 从索引 3 开始到结束: ['D', 'E', 'F', 'G']
```

注意到 `slice()` 的起止参数包括开始索引，不包括结束索引。

如果不给 `slice()` 传递任何参数，它就会从头到尾截取所有元素。利用这一点，我们可以很容易地复制一个 Array:

```js
const arr = ["A", "B", "C", "D", "E", "F", "G"];
const aCopy = arr.slice();

aCopy; // ['A', 'B', 'C', 'D', 'E', 'F', 'G']
aCopy === arr; // false
```

### push 和 pop

`push()` 向 Array 的末尾添加若干元素， `pop()` 则 Array 的最后一个元素删除掉:

```js
const arr = [1, 2];

arr.push("A", "B"); // 返回 Array 新的长度: 4
arr; // [1, 2, 'A', 'B']
arr.pop(); // pop() 返回 'B'
arr; // [1, 2, 'A']
arr.pop();
arr.pop();
arr.pop(); // 连续 pop 3次
arr; // []
arr.pop(); // 空数组继续 pop 不会报错，而是返回 undefined
arr; // []
```

### unshift 和 shift

如果要往 Array 的头部添加若干元素，使用 `unshift()` 方法， `shift()` 方法则把 Array 的第一个元素删掉:

```js
const arr = [1, 2];

arr.unshift("A", "B"); // 返回 Array 新的长度: 4
arr; // ['A', 'B', 1, 2]
arr.shift(); // 'A'
arr; // ['B', 1, 2]

arr.shift();
arr.shift();
arr.shift(); // 连续 shift 3次

arr; // []
arr.shift(); // 空数组继续 shift 不会报错，而是返回 undefined
arr; // []
```

### sort

`sort()` 可以对当前 Array 进行排序，它会直接修改当前 Array 的元素位置，直接调用时，按照默认顺序排序:

```js
const arr = ["B", "C", "A"];

arr.sort();
arr; // ['A', 'B', 'C']
```

数组页可以按照自己指定的顺序排序，将在后面的函数中讲到。

### reverse

`reverse()` 把整个 Array 的元素给掉个个，也就是反转:

```js
const arr = ["one", "two", "three"];

arr.reverse();
arr; // ['three', 'two', 'one']
```

### splice

`splice()` 方法是修改 Array 的 ==“万能方法”==，它可以从指定的索引开始删除若干元素，然后再从该位置添加若干元素:

```js
const arr = ["Microsoft", "Apple", "Yahoo", "AOL", "Excite", "Oracle"];

// 从索引 2 开始删 3 个元素,然后再添加 2 个元素:
arr.splice(2, 3, "Google", "Facebook"); // 返回删除的元素 ['Yahoo', 'AOL', 'Excite']
arr; // ['Microsoft', 'Apple', 'Google', 'Facebook', 'Oracle']

// 只删除,不添加:
arr.splice(2, 2); // ['Google', 'Facebook']
arr; // ['Microsoft', 'Apple', 'Oracle']

// 只添加,不删除:
arr.splice(2, 0, "Google", "Facebook"); // 返回[],因为没有删除任何元素
arr; // ['Microsoft', 'Apple', 'Google', 'Facebook', 'Oracle']
```

### concat

`concat()` 方法把当前的 Array 和另一个 Array 连接起来，==并返回一个新的 Array:==

```js
const arr = ["A", "B", "C"];
const added = arr.concat([1, 2, 3]);

added; // ['A', 'B', 'C', 1, 2, 3]
arr; // ['A', 'B', 'C']
```

::: tip

需要留意的是: `concat()` 方法并没有修改当前 Array，而是返回了一个新的 Array。

:::

实际上， `concat()` 方法可以接收任意个元素和 Array，并且**自动把 Array 拆开**，然后全部添加到新的 Array 里:

```js
const arr = ["A", "B", "C"];

arr.concat(1, 2, [3, 4]); // ['A', 'B', 'C', 1, 2, 3, 4]
```

### join

`join()` 方法是一个非常实用的方法，它把当前 Array 的每个元素都用指定的字符串连接起来，然后返回连接后的字符串:

```js
const arr = ["A", "B", "C", 1, 2, 3];

arr.join("-"); // 'A-B-C-1-2-3'
```

::: tip

若 Array 的元素不是字符串，将自动转换为字符串后再连接。

:::


### 过滤: filter

根据方法==返回数组中满足条件的元素组成的新数组==，原数组不变

```js
let num = [9, 3, 1 , 5, 2, 4]
let filterNum = num.filter(n => {return n % 2 == 1})
console.log(num) // [ 9, 3, 1, 5, 2, 4 ]
console.log(filterNum) // [ 9, 3, 1, 5 ]
```
### 格式化数组: map

传入方法,==返回格式化后的数组==,原数组不变

```js
let num = [9, 3, 1 , 5, 2, 4]
let mapNum = filterNum.map(n => {return n*2})
console.log(mapNum) // [ 18, 6, 2, 10, 4, 8 ]
```
### 检验数组: every&some

1.every();对数组的每一项都运行给定的函数，若每一项都返回 true,则返回 true
2.some(); 若存在一项或多项返回 true,则返回 true

```js
let arr = [1,2,3,4,5,6]
let test1 = arr.every(n => {return n < 5})
let test2 = arr.some(n => {return n < 5})
console.log(`所有数都小于5：${test1},有些数小于5：${test2}`) // false,true
```
### 遍历数组: forEach

```js
let arr =[5,99,46,18,66,78,0] 
let arr2= []
arr.forEach(el => {
    if (el >65) {
        arr2.push(el)
    }
});
console.log(arr2) // [ 99, 66, 78 ]
```
### 累加: reduce

```js
var numbers = [65, 44, 12, 4];
let oo = numbers.reduce((e,n) => {return e+n })
console.log(oo) // 125
// reduceRight() 从数组的最后一项开始，向前遍历到第一项
```

### 查找元素: find

找到数组中第一次满足条件的元素，并返回，若找不到则返回undefined。不改变原数组。

```js
let arr =[5,99,46,18,66,78,0] 
let bo = arr.find(e => {return e > 65 })
console.log(bo) // 99
```

### 查找元素下标: findIndex
```js
// 同indexOf()，返回第一个满足条件的下标，并停止寻找
// 区别是findIndex() 的参数为一个回调函数,且一般用于对象数组
let arr = [5,99,46] 
let boIndex = arr.findIndex(el=>{return el===99})
console.log(boIndex) // 1
```

### includes

用于判断字符串是否包含指定的子字符串。

```js
let arr =[5,99,46] 
console.log(arr.includes(99))  // true
```
### Array.isArray()

用来判断一个元素是否为数组

```js
console.log(Array.isArray([])) // true
console.log(Array.isArray({})) // false
```


### Array.from
`Array.from()` 方法对一个类似数组或可迭代对象创建一个新的、浅拷贝的数组实例。
> 类数组：带有length属性即可称为类数组，比如String, 和 {length:20}

```js
console.log(Array.from('foo'));
// expected output: Array ["f", "o", "o"]

console.log(Array.from([1, 2, 3], x => x + x));
// expected output: Array [2, 4, 6]

Array.from({length: 5}, (v, i) => i);
// mapFn可接受两个参数（value,index）
// [0, 1, 2, 3, 4]
```
- 可用于获取对象中的元素
```js
const map = new Map([[1, 2], [2, 4], [4, 8]]);
Array.from(map);
// [[1, 2], [2, 4], [4, 8]]

const mapper = new Map([['1', 'a'], ['2', 'b']]);
Array.from(mapper.values());
// ['a', 'b'];

Array.from(mapper.keys());
// ['1', '2'];
```


## 多维数组

如果数组的某个元素又是一个 Array，则可以形成多维数组，例如:

```js
const arr = [[1, 2, 3], [400, 500, 600], "-"];
```

上述 Array 包含 3 个元素，其中头两个元素本身也是 Array。


## 数组常用算法
### 数组去重算法
```js
// --run--
var arr = [1,1,1,2,2,3,3,1,2,3]
var result = []
for (var i = 0;i < arr.length; i++) {
    // 判断遍历到的这项是否存在结果数组中，不在就推入
    if(!result.includes(arr[i])) {
        result.push(arr[i])
    }
}
console.log(result)
```

### 随机样本
```js
// --run--
// 从数组中随机取3个元素
let arr = [3,9,10,1,5,4,2]
let result = []
for(var i = 0;i<3;i++){
    // 随机一个下标，取整
    var n = parseInt(Math.random()*arr.length)
    // 推入结果数组
    result.push(arr[n])
    // 删除这项，防止重复被随机到
    arr.splice(n,1)
}
console.log(result)
```

### 遍历二位数组
```js
// --run--
var matrix = [
    [11,22,33],
    [44,55,66],
    [77,88]
]
console.log(matrix.length) // 3
for(var i = 0; i < 3;i++) {
    for(var j = 0;j < matrix[i].length;j++) {
        console.log(matrix[i][j])
    }
}
```

## 深/浅克隆

- 使用arr1 = arr2 的语法不会克隆数组,而是指向同一个对象
- 浅克隆：只克隆数组的第一层，如果是多维数组，或者数组中的项是其他引用类型值，则不克隆其他层
- 深克隆：克隆数组的所有层，要使用递归

```js
// --run--
var arr1 = [3,[4,5,6],7,[8,9,1,2],11]

function deepClone(arr){
    var result = []
    for(var i = 0;i < arr.length;i++) {
        if(Array.isArray(arr[i])) {
            result.push(deepClone(arr[i]))
        } else {
            result.push(arr[i])
        }
    }
    return result
}

var arr2 = deepClone(arr1)
arr1.unshift(44)
console.log(arr1)
console.log(arr2)
```

## 更多介绍

更多关于数组的详情参见 [数据结构 / 数组](https://mrhope.site/code/language/js/types/array.html#%E6%95%B0%E7%BB%84%E7%9A%84%E6%9C%AC%E8%B4%A8)