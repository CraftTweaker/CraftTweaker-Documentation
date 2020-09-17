# DataMap

一张地图，有时也称为Associative Array 是一种数据结构，允许您存储多个项目。  
但是，与数组不同的是，你也可以给其中每个项目一个键调用。  
数据映射扩展 [IData](/Vanilla/Data/IData/), 所以每个数据映射都是 IData, 以后可能需要这个信息。

## 创建一个地图：

地图是特殊类型的 [IData](/Vanilla/Data/IData/)， 所以在最后你需要导入该接口：  
`导入手工器。 数据库;`

您可能已经注意到，无法将类型转换为地图 (也不能将地图转换为字符串以外的类型)， 所以必须有另一种创建它们的方式！  
存在：

```zenscript
导入 craftweeker.data;

val myFirstMap = {key1："value1",
                  key2："value2",
                  key3：3} 为 IData;
```

要记住的事情是：  
地图以 `地图<String,IData>`处理！  
这意味着您的密钥不应包含普通的 CT 字符串无法处理的字符。  
这也意味着虽然密钥是一个字符串，但是值是另一个 [IData](/Vanilla/Data/IData/) 对象。  
您甚至可以在地图内嵌套地图 (NBT-Data 做了很多事情)：

```zenscript
val nestedMap = Pown key1: 
                    Power
                        key1: "hello"
                    }
                } as IData;
```

## 正在获取成员

不幸的是，上面创建的地图是不可改变的，所以你不能更改他们的成员。  
要检索地图的成员，您需要知道它的密钥名称。 然后你可以这样做：

```zenscript
val mySecondMap = {key1: "value1",
                   key2: "value2",
                   key3：3} 为 IData；

//检索名为 "key1" 的成员
var k1 = mySecondMap。 Yey1 as IData；
print(k1.asString())；

// 检索被称为“key2”的成员
var k2 = mySecondMap.memberGet("key2") as IData；
print(k2.asString())；
```

## 修改地图

您可以相互添加或从底层地图来获取一个新的有更改值的地图。  
这甚至适用于嵌套地图！

```zenscript
val map1 as IData = 然后
    key1 : "hello"
    key3 : "test"
};

val map2 as IData = P,
    key2 : "bye"
    key3 : "override"
};

打印(map1 + map2)。 sString()); //Prints {key1 : "hello", key2 : "bye", key3 : "override"}



val map3 as IData =
    key1 : "two",
    key2 : "two",
    key3 : "thee"
};

打印(map3 - "key1")。 sString()); //Prints {key2 : "two", key3 : "thie"}

val map4 as IData =
    key3 : "any thing"
};

打印(map3 - map4)。 sString()); //Prints {key1 : "two", key2 : "two"}
```