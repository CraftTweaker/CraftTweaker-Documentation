# ShortData #短数据



## 导入类

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
| 布尔值                                                         | false |
| byte                                                        | false |
| double                                                      | false |
| float                                                       | false |
| [ICollectionData #所收集数据](/vanilla/api/data/ICollectionData) | false |
| int                                                         | false |
| [INumberData #编号数据](/vanilla/api/data/INumberData)          | false |
| long                                                        | false |
| short                                                       | false |

## 使用方式

:::group{name=asBoolean}

Return Type: boolean

```zenscript
// ShortData.asBoolean() as boolean

1058.asBoolean();
```

:::

:::group{name=asCollection}

Return Type: [ICollectionData](/vanilla/api/data/ICollectionData)

```zenscript
// ShortData.asCollection() as ICollectionData

1058.asCollection();
```

:::

:::group{name=asList}

获取列表<IData> representation of this IData, returns null on anything but [ListData](/vanilla/api/data/ListData).

Returns: null if this IData is not a list.  
Return Type: stdlib.List&lt;[IData](/vanilla/api/data/IData)&gt;

```zenscript
// ShortData.asList() as stdlib.List<IData>

1058.asList();
```

:::

:::group{name=asMap}

Gets a Map<String, IData> representation of this IData, returns null on anything but [MapData](/vanilla/api/data/MapData).

Returns: null if this IData is not a map.  
Return Type: [IData](/vanilla/api/data/IData)[string]

```zenscript
// ShortData.asMap() as IData[string]

1058.asMap();
```

:::

:::group{name=asNumber}

Return Type: [INumberData](/vanilla/api/data/INumberData)

```zenscript
// ShortData.asNumber() as INumberData

1058.asNumber();
```

:::

:::group{name=asString}

获取此IData的字符串表示形式

Returns: String that represents this IData (value and type).  
Return Type: string

```zenscript
// ShortData.asString() as string

1058.asString();
```

:::

:::group{name=getByte}

Gets the value of this [IData](/vanilla/api/data/IData) as a byte

Returns: the byte value of this [IData](/vanilla/api/data/IData)  
Return Type: byte

```zenscript
// ShortData.getByte() as byte

1058.getByte();
```

:::

:::group{name=getDouble}

Gets the value of this [IData](/vanilla/api/data/IData) as a double

Returns: the double value of this [IData](/vanilla/api/data/IData)  
Return Type: double

```zenscript
// ShortData.getDouble() as double

1058.getDouble();
```

:::

:::group{name=getFloat}

Gets the value of this [IData](/vanilla/api/data/IData) as a float

Returns: the float value of this [IData](/vanilla/api/data/IData)  
Return Type: float

```zenscript
// ShortData.getFloat() as float

1058.getFloat();
```

:::

:::group{name=getId}

获取内部NBT标签的 ID。

 用来确定哪些NBT类型被存储(例如在列表中)

Returns: ID of the NBT tag that this data represents.  
Return Type: byte

```zenscript
// ShortData.getId() as byte

1058.getId();
```

:::

:::group{name=getInt}

Gets the value of this [IData](/vanilla/api/data/IData) as an int

Returns: the int value of this [IData](/vanilla/api/data/IData)  
Return Type: int

```zenscript
// ShortData.getInt() as int

1058.getInt();
```

:::

:::group{name=getLong}

Gets the value of this [IData](/vanilla/api/data/IData) as a long

Returns: the long value of this [IData](/vanilla/api/data/IData)  
Return Type: long

```zenscript
// ShortData.getLong() as long

1058.getLong();
```

:::

:::group{name=getShort}

Gets the value of this [IData](/vanilla/api/data/IData) as a short

Returns: the short value of this [IData](/vanilla/api/data/IData)  
Return Type: short

```zenscript
// ShortData.getShort() as short

1058.getShort();
```

:::

:::group{name=getString}

获取内部INBT标记的字符串表示形式

Returns: String that represents the internal INBT of this IData.  
Return Type: string

```zenscript
// ShortData.getString() as string

1058.getString();
```

:::


