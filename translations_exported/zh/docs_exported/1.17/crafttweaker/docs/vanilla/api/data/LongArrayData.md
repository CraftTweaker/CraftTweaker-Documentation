# LongArrayData #长数组数据



## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.data.LongArrayData;
```


## 已实现的接口
longArrayData实现了以下接口。 That means all methods defined in these interfaces are also available in LongArrayData

- [ICollectionData #所收集数据](/vanilla/api/data/ICollectionData)

## Constructor #构造函数

No Description Provided
```zenscript
new LongArrayData(internal as long[]) as LongArrayData
```
| 参数       | 类型     | 描述                      |
| -------- | ------ | ----------------------- |
| internal | long[] | No Description Provided |



## Casters

| 结果类型                                                        | 是否隐藏  |
| ----------------------------------------------------------- | ----- |
| 布尔值                                                         | false |
| [ICollectionData #所收集数据](/vanilla/api/data/ICollectionData) | false |
| [INumberData #编号数据](/vanilla/api/data/INumberData)          | false |

## 使用方式

:::group{name=asBoolean}

Return Type: boolean

```zenscript
// LongArrayData.asBoolean() as boolean

[100000, 800000, 50000].asBoolean();
```

:::

:::group{name=asCollection}

Return Type: [ICollectionData](/vanilla/api/data/ICollectionData)

```zenscript
// LongArrayData.asCollection() as ICollectionData

[100000, 800000, 50000].asCollection();
```

:::

:::group{name=asMap}

Gets a Map<String, IData> representation of this IData, returns null on anything but [MapData](/vanilla/api/data/MapData).

Returns: null if this IData is not a map.  
Return Type: [IData](/vanilla/api/data/IData)[string]

```zenscript
// LongArrayData.asMap() as IData[string]

[100000, 800000, 50000].asMap();
```

:::

:::group{name=asNumber}

Return Type: [INumberData](/vanilla/api/data/INumberData)

```zenscript
// LongArrayData.asNumber() as INumberData

[100000, 800000, 50000].asNumber();
```

:::

:::group{name=asString}

获取此IData的字符串表示形式

Returns: String that represents this IData (value and type).  
Return Type: string

```zenscript
// LongArrayData.asString() as string

[100000, 800000, 50000].asString();
```

:::

:::group{name=contains}

Checks if this IData contains another IData, mainly used in subclasses of [ICollectionData](/vanilla/api/data/ICollectionData), is the same as an equals check on other IData types

Returns: true if the given IData is contained in this IData  
Return Type: boolean

```zenscript
// LongArrayData.contains(data as IData) as boolean

[100000, 800000, 50000].contains("Display");
```

| 参数   | 类型                                   | 描述          |
| ---- | ------------------------------------ | ----------- |
| data | [IData #数据](/vanilla/api/data/IData) | 要检查是否有包含的数据 |


:::

:::group{name=getId}

获取内部NBT标签的 ID。

 用来确定哪些NBT类型被存储(例如在列表中)

Returns: ID of the NBT tag that this data represents.  
Return Type: byte

```zenscript
// LongArrayData.getId() as byte

[100000, 800000, 50000].getId();
```

:::

:::group{name=getString}

获取内部INBT标记的字符串表示形式

Returns: String that represents the internal INBT of this IData.  
Return Type: string

```zenscript
// LongArrayData.getString() as string

[100000, 800000, 50000].getString();
```

:::


