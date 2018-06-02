# 数据映射（DataMap）

映射也被称之为关联数组，能够存储多对数据。    
不同于数组，你可以自行设定对应的 key 来进行调用。  
数据映射继承自 [数据](IData) 接口，所以数据映射中的对象都是数据类型。

## 创建映射
数据映射是一种特殊的 [数据](IData) 类型，所以在最开始你需要导入这个接口：  
`import crafttweaker.data.IData;`

你也许注意到了没有类型可以被转换为映射（同样的，没有映射可以被转换为除字符串外的类型），创建它们需要别的方法！   
方法如下：

```JAVA
import crafttweaker.data.IData;

val myFirstMap = {key1: "value1",
				  key2: "value2",
				  key3: 3} as IData;
```

有几件事情需要注意：
映射往往以 `Map<String,IData>` 形式处理！这意味着你不能插入 CT 本身无法识别的数据类型作为 key。同时 Key 本身必须为字符串，value 必须为 [数据](IData) 对象。  
你甚至可以对映射进行镶套（和常见的 NBT 数据做法类似）：

```JAVA
val nestedMap = { key1: 
					{
						key1: "hello"
					}
				} as IData;
```


## 映射成员检索

不幸的是，映射一旦创建不可修改其中的成员。    
如果要进行成员检索，你需要知道它们的 key 名，你可以这样做：

```js
val mySecondMap = {key1: "value1",
				   key2: "value2",
				   key3: 3} as IData;

// 检索叫做 "key1" 的成员
var k1 = mySecondMap.key1 as IData;
print(k1.asString());

// 检索叫做 "key2" 的成员
var k2 = mySecondMap.memberGet("key2") as IData;
print(k2.asString());
```

## 修改映射

你可以添加，或者裁剪映射来获取新的映射，或者改变映射中的 values。   
也适用于镶套的映射：

```js
val map1 as IData = {
	key1 : "hello"
	key3 : "test"
};

val map2 as IData = {
	key2 : "bye"
	key3 : "override"
};

print((map1 + map2).asString()); // 打印出 {key1 : "hello", key2 : "bye", key3 : "override"}



val map3 as IData = {
	key1 : "two",
	key2 : "two",
	key3 : "three"
};

print((map3 - "key1").asString()); // 打印出 {key2 : "two", key3 : "three"}

val map4 as IData = {
	key3 : "anything"
};

print((map3 - map4).asString()); // 打印出 {key1 : "two", key2 : "two"}
```
