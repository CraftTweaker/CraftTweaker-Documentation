# BoolData

Careful with BoolData: While it works for specifying boolean attributes in JSON syntax, using it in Tags will instead use a [ByteData](/vanilla/api/data/ByteData) object. Reason for this is that Minecraft does not have Boolean NBT values.

## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.data.BoolData;
```


## 已实现的接口
BoolData implements the following interfaces. That means all methods defined in these interfaces are also available in BoolData

- [IData #数据](/vanilla/api/data/IData)

## Constructor #构造函数

No Description Provided
```zenscript
new BoolData(internal as boolean) as BoolData
```
| 参数       | 类型  | 描述                      |
| -------- | --- | ----------------------- |
| internal | 布尔值 | No Description Provided |



## Casters

| 结果类型                                                        | 是否隐藏  |
| ----------------------------------------------------------- | ----- |
| 布尔值                                                         | false |
| [ByteData #字节数据](/vanilla/api/data/ByteData)                | false |
| [ICollectionData #所收集数据](/vanilla/api/data/ICollectionData) | false |

## 使用方式

:::group{name=asBoolean}

Return Type: boolean

```zenscript
// BoolData.asBoolean() as boolean

true.asBoolean();
```

:::

:::group{name=asCollection}

Return Type: [ICollectionData](/vanilla/api/data/ICollectionData)

```zenscript
// BoolData.asCollection() as ICollectionData

true.asCollection();
```

:::

:::group{name=asList}

获取列表<IData> representation of this IData, returns null on anything but [ListData](/vanilla/api/data/ListData).

Returns: null if this IData is not a list.  
Return Type: stdlib.List&lt;[IData](/vanilla/api/data/IData)&gt;

```zenscript
// BoolData.asList() as stdlib.List<IData>

true.asList();
```

:::

:::group{name=asMap}

Gets a Map<String, IData> representation of this IData, returns null on anything but [MapData](/vanilla/api/data/MapData).

Returns: null if this IData is not a map.  
Return Type: [IData](/vanilla/api/data/IData)[string]

```zenscript
// BoolData.asMap() as IData[string]

true.asMap();
```

:::

:::group{name=asString}

获取此IData的字符串表示形式

Returns: String that represents this IData (value and type).  
Return Type: string

```zenscript
// BoolData.asString() as string

true.asString();
```

:::

:::group{name=contains}

Checks if this IData contains another IData, mainly used in subclasses of [ICollectionData](/vanilla/api/data/ICollectionData), is the same as an equals check on other IData types

Returns: true if the given IData is contained in this IData  
Return Type: boolean

```zenscript
// BoolData.contains(data as IData) as boolean

true.contains("Display");
```

| 参数   | 类型                                   | 描述          |
| ---- | ------------------------------------ | ----------- |
| data | [IData #数据](/vanilla/api/data/IData) | 要检查是否有包含的数据 |


:::

:::group{name=getByteData}

Converts this BoolData to a [ByteData](/vanilla/api/data/ByteData) object. This will be used when this Data is converted to NBT

Return Type: [ByteData](/vanilla/api/data/ByteData)

```zenscript
// BoolData.getByteData() as ByteData

true.getByteData();
```

:::

:::group{name=getId}

获取内部NBT标签的 ID。

 用来确定哪些NBT类型被存储(例如在列表中)

Returns: ID of the NBT tag that this data represents.  
Return Type: byte

```zenscript
// BoolData.getId() as byte

true.getId();
```

:::

:::group{name=getString}

获取内部INBT标记的字符串表示形式

Returns: String that represents the internal INBT of this IData.  
Return Type: string

```zenscript
// BoolData.getString() as string

true.getString();
```

:::


