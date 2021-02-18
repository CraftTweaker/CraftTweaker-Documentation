# ShortData #短数据



## 导入相关包

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.data.ShortData;
```


## 已实现的接口
ShortData实现了以下接口。 That means all methods defined in these interfaces are also available in ShortData

- [INumberData #编号数据](/vanilla/api/data/INumberData)

## Constructor #构造函数

No Description Provided
```zenscript
new ShortData(internal as short) as ShortData
```

| 参数       | 类型    | 描述                      |
| -------- | ----- | ----------------------- |
| internal | short | No Description Provided |



## Casters

| 结果类型                                                        | 是否隐藏  |
| ----------------------------------------------------------- | ----- |
| byte                                                        | false |
| double                                                      | false |
| float                                                       | false |
| [ICollectionData #所收集数据](/vanilla/api/data/ICollectionData) | false |
| int                                                         | false |
| [INumberData #编号数据](/vanilla/api/data/INumberData)          | false |
| long                                                        | false |
| short                                                       | false |

## 方法

### asCollection

Return Type: [ICollectionData](/vanilla/api/data/ICollectionData)

```zenscript
ShortData.asCollection() as ICollectionData
1058.asCollection();
```

### asList #作为列表

获取列表<IData> representation of this IData, returns null on anything but [ListData](/vanilla/api/data/ListData).

Return Type: stdlib.List&lt;[IData](/vanilla/api/data/IData)&gt;

```zenscript
ShortData.asList() as stdlib.List<IData>
1058.asList();
```

### asMap #作为地图数据

Gets a Map<String, IData> representation of this IData, returns null on anything but [MapData](/vanilla/api/data/MapData).

Return Type: [IData](/vanilla/api/data/IData)[string]

```zenscript
ShortData.asMap() as IData[string]
1058.asMap();
```

### asNumber

Return Type: [INumberData](/vanilla/api/data/INumberData)

```zenscript
ShortData.asNumber() as INumberData
1058.asNumber();
```

### getByte

Gets the value of this [IData](/vanilla/api/data/IData) as a byte

Return Type: byte

```zenscript
ShortData.getByte() as byte
1058.getByte();
```

### getDouble

Gets the value of this [IData](/vanilla/api/data/IData) as a double

Return Type: double

```zenscript
ShortData.getDouble() as double
1058.getDouble();
```

### getFloat

Gets the value of this [IData](/vanilla/api/data/IData) as a float

Return Type: float

```zenscript
ShortData.getFloat() as float
1058.getFloat();
```

### getId #获取id

获取内部NBT标签的 ID。

 用来确定哪些NBT类型被存储(例如在列表中)

Return Type: byte

```zenscript
ShortData.getId() as byte
1058.getId();
```

### getInt

Gets the value of this [IData](/vanilla/api/data/IData) as an int

Return Type: int

```zenscript
ShortData.getInt() as int
1058.getInt();
```

### getLong

Gets the value of this [IData](/vanilla/api/data/IData) as a long

Return Type: long

```zenscript
ShortData.getLong() as long
1058.getLong();
```

### getShort

Gets the value of this [IData](/vanilla/api/data/IData) as a short

Return Type: short

```zenscript
ShortData.getShort() as short
1058.getShort();
```

### getString #获取字符串

获取内部INBT标记的字符串表示形式

Return Type: string

```zenscript
ShortData.getString() as string
1058.getString();
```


