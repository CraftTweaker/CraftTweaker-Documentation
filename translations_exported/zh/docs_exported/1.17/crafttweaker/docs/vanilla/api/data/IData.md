# IData #数据

IData接口是处理NBT等数据的通用接口。 您可以将所有原始数据 (短数据, 双精度数据, 字符串数据, 整型数据, ...) 以及某些数组转换为IData。 Remember that while they offer similar features, IData and their counterparts are NOT the same, which is why they will be referred to as DataTypes (e.g. [ByteData](/vanilla/api/data/ByteData)).

## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.data.IData;
```


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
// IData.asBoolean() as boolean

{Display: {lore: ["Hello", "World"]}}.asBoolean();
```

:::

:::group{name=asCollection}

Return Type: [ICollectionData](/vanilla/api/data/ICollectionData)

```zenscript
// IData.asCollection() as ICollectionData

{Display: {lore: ["Hello", "World"]}}.asCollection();
```

:::

:::group{name=asList}

获取列表<IData> representation of this IData, returns null on anything but [ListData](/vanilla/api/data/ListData).

Returns: null if this IData is not a list.  
Return Type: stdlib.List&lt;[IData](/vanilla/api/data/IData)&gt;

```zenscript
// IData.asList() as stdlib.List<IData>

{Display: {lore: ["Hello", "World"]}}.asList();
```

:::

:::group{name=asMap}

Gets a Map<String, IData> representation of this IData, returns null on anything but [MapData](/vanilla/api/data/MapData).

Returns: null if this IData is not a map.  
Return Type: [IData](/vanilla/api/data/IData)[string]

```zenscript
// IData.asMap() as IData[string]

{Display: {lore: ["Hello", "World"]}}.asMap();
```

:::

:::group{name=asNumber}

Return Type: [INumberData](/vanilla/api/data/INumberData)

```zenscript
// IData.asNumber() as INumberData

{Display: {lore: ["Hello", "World"]}}.asNumber();
```

:::

:::group{name=asString}

获取此IData的字符串表示形式

Returns: String that represents this IData (value and type).  
Return Type: string

```zenscript
// IData.asString() as string

{Display: {lore: ["Hello", "World"]}}.asString();
```

:::

:::group{name=contains}

Checks if this IData contains another IData, mainly used in subclasses of [ICollectionData](/vanilla/api/data/ICollectionData), is the same as an equals check on other IData types

Returns: true if the given IData is contained in this IData  
Return Type: boolean

```zenscript
// IData.contains(data as IData) as boolean

{Display: {lore: ["Hello", "World"]}}.contains("Display");
```

| 参数   | 类型                                   | 描述          |
| ---- | ------------------------------------ | ----------- |
| data | [IData #数据](/vanilla/api/data/IData) | 要检查是否有包含的数据 |


:::

:::group{name=copy}

制作此IData的副本。

 IData默认情况下是不可变的，使用它可以创建对象的正确副本。

Returns: a copy of this IData.  
Return Type: [IData](/vanilla/api/data/IData)

```zenscript
// IData.copy() as IData

{Display: {lore: ["Hello", "World"]}}.copy();
```

:::

:::group{name=getId}

获取内部NBT标签的 ID。

 用来确定哪些NBT类型被存储(例如在列表中)

Returns: ID of the NBT tag that this data represents.  
Return Type: byte

```zenscript
// IData.getId() as byte

{Display: {lore: ["Hello", "World"]}}.getId();
```

:::

:::group{name=getString}

获取内部INBT标记的字符串表示形式

Returns: String that represents the internal INBT of this IData.  
Return Type: string

```zenscript
// IData.getString() as string

{Display: {lore: ["Hello", "World"]}}.getString();
```

:::


