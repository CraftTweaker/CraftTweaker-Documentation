# StringData #字符串数据



## 导入相关包

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.data.StringData;
```


## 已实现的接口
StringData实现了以下接口。 That means all methods defined in these interfaces are also available in StringData

- [IData](/vanilla/api/data/IData)

## Constructor #构造函数

No Description Provided
```zenscript
new StringData(internal as string) as StringData
```

| 参数       | 类型     | 描述                      |
| -------- | ------ | ----------------------- |
| internal | string | No Description Provided |



## Casters

| 结果类型                                                        | 是否隐藏  |
| ----------------------------------------------------------- | ----- |
| [ICollectionData #所收集数据](/vanilla/api/data/ICollectionData) | false |
| [INumberData #编号数据](/vanilla/api/data/INumberData)          | false |

## 方法

### asCollection

Return Type: [ICollectionData](/vanilla/api/data/ICollectionData)

```zenscript
StringData.asCollection() as ICollectionData
new StringData("Hello").asCollection();
```

### asList #作为列表

获取列表<IData> representation of this IData, returns null on anything but [ListData](/vanilla/api/data/ListData).

Return Type: stdlib.List&lt;[IData](/vanilla/api/data/IData)&gt;

```zenscript
StringData.asList() as stdlib.List<IData>
new StringData("Hello").asList();
```

### asMap #作为地图数据

Gets a Map<String, IData> representation of this IData, returns null on anything but [MapData](/vanilla/api/data/MapData).

Return Type: [IData](/vanilla/api/data/IData)[string]

```zenscript
StringData.asMap() as IData[string]
new StringData("Hello").asMap();
```

### asNumber

Return Type: [INumberData](/vanilla/api/data/INumberData)

```zenscript
StringData.asNumber() as INumberData
new StringData("Hello").asNumber();
```

### getId #获取id

获取内部NBT标签的 ID。

 用来确定哪些NBT类型被存储(例如在列表中)

Return Type: byte

```zenscript
StringData.getId() as byte
new StringData("Hello").getId();
```

### getString #获取字符串

获取内部INBT标记的字符串表示形式

Return Type: string

```zenscript
StringData.getString() as string
new StringData("Hello").getString();
```


## 运算符

### ADD

连接两个字符串数据并返回结果。

```zenscript
myStringData + data as StringData
new StringData("Hello") + new StringData("World")
```




