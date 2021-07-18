# INumberData #编号数据

Represents a Number in the form of an [IData](/vanilla/api/data/IData), useful for converting between types (double to int / long for example).

## 导入相关包

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.data.INumberData;
```


## 已实现的接口
INumberData实现了以下接口。 That means all methods defined in these interfaces are also available in INumberData

- [IData](/vanilla/api/data/IData)

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
INumberData.asCollection() as ICollectionData
1.asCollection();
```

### asList #作为列表

获取列表<IData> representation of this IData, returns null on anything but [ListData](/vanilla/api/data/ListData).

Return Type: stdlib.List&lt;[IData](/vanilla/api/data/IData)&gt;

```zenscript
INumberData.asList() as stdlib.List<IData>
1.asList();
```

### asMap #作为地图数据

Gets a Map<String, IData> representation of this IData, returns null on anything but [MapData](/vanilla/api/data/MapData).

Return Type: [IData](/vanilla/api/data/IData)[string]

```zenscript
INumberData.asMap() as IData[string]
1.asMap();
```

### asNumber

Return Type: [INumberData](/vanilla/api/data/INumberData)

```zenscript
INumberData.asNumber() as INumberData
1.asNumber();
```

### asString #作为字符串

获取此IData的字符串表示形式

Return Type: string

```zenscript
INumberData.asString() as string
1.asString();
```

### contains #容器

Checks if this IData contains another IData, mainly used in subclasses of [ICollectionData](/vanilla/api/data/ICollectionData), is the same as an equals check on other IData types

Return Type: boolean

```zenscript
INumberData.contains(data as IData) as boolean
1.contains("Display");
```

| 参数   | 类型                               | 描述          |
| ---- | -------------------------------- | ----------- |
| data | [IData](/vanilla/api/data/IData) | 要检查是否有包含的数据 |


### copy #复制

制作此IData的副本。

 IData默认情况下是不可变的，使用它可以创建对象的正确副本。

Return Type: [IData](/vanilla/api/data/IData)

```zenscript
INumberData.copy() as IData
1.copy();
```

### getByte

Gets the value of this [IData](/vanilla/api/data/IData) as a byte

Return Type: byte

```zenscript
INumberData.getByte() as byte
1.getByte();
```

### getDouble

Gets the value of this [IData](/vanilla/api/data/IData) as a double

Return Type: double

```zenscript
INumberData.getDouble() as double
1.getDouble();
```

### getFloat

Gets the value of this [IData](/vanilla/api/data/IData) as a float

Return Type: float

```zenscript
INumberData.getFloat() as float
1.getFloat();
```

### getId #获取id

获取内部NBT标签的 ID。

 用来确定哪些NBT类型被存储(例如在列表中)

Return Type: byte

```zenscript
INumberData.getId() as byte
1.getId();
```

### getInt

Gets the value of this [IData](/vanilla/api/data/IData) as an int

Return Type: int

```zenscript
INumberData.getInt() as int
1.getInt();
```

### getLong

Gets the value of this [IData](/vanilla/api/data/IData) as a long

Return Type: long

```zenscript
INumberData.getLong() as long
1.getLong();
```

### getShort

Gets the value of this [IData](/vanilla/api/data/IData) as a short

Return Type: short

```zenscript
INumberData.getShort() as short
1.getShort();
```

### getString #获取字符串

获取内部INBT标记的字符串表示形式

Return Type: string

```zenscript
INumberData.getString() as string
1.getString();
```


