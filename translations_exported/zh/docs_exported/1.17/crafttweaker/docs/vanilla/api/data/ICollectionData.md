# ICollectionData #所收集数据

The ICollection data is used to represent a collection of [IData](/vanilla/api/data/IData) like a List<IData>

## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.data.ICollectionData;
```


## 已实现的接口
ICollectionData实现了以下接口。 That means all methods defined in these interfaces are also available in ICollectionData

- [IData #数据](/vanilla/api/data/IData)

## Static Methods

:::group{name=getFromMembers}

Creates the most specific ICollectionData form possible for the provided members. <br />  <br />  Tries to return (in order) [ByteArrayData](/vanilla/api/data/ByteArrayData), [IntArrayData](/vanilla/api/data/IntArrayData), [LongArrayData](/vanilla/api/data/LongArrayData) or if neither is applicable [ListData](/vanilla/api/data/ListData)

Return Type: [ICollectionData](/vanilla/api/data/ICollectionData)

```zenscript
ICollectionData.getFromMembers(members as IData[]) as ICollectionData
```

| 参数      | 类型                                 | 描述                      |
| ------- | ---------------------------------- | ----------------------- |
| members | [IData](/vanilla/api/data/IData)[] | No Description Provided |


:::

## Casters

| 结果类型                                                        | 是否隐藏  |
| ----------------------------------------------------------- | ----- |
| 布尔值                                                         | false |
| [ICollectionData #所收集数据](/vanilla/api/data/ICollectionData) | false |
| [INumberData #编号数据](/vanilla/api/data/INumberData)          | false |

## 使用方式

:::group{name=add}



Return Type: void

```zenscript
// ICollectionData.add(value as IData) as void

new ListData(["Hello", "World"]).add("today");
```

| 参数    | 类型                                   | 描述       |
| ----- | ------------------------------------ | -------- |
| value | [IData #数据](/vanilla/api/data/IData) | 要添加到列表的值 |


:::

:::group{name=add}



Return Type: void

```zenscript
// ICollectionData.add(index as int, value as IData) as void

new ListData(["Hello", "World"]).add(1, "beautiful");
```

| 参数    | 类型                                   | 描述                   |
| ----- | ------------------------------------ | -------------------- |
| index | int                                  | 要添加的索引。 后续项目将会上移一个索引 |
| value | [IData #数据](/vanilla/api/data/IData) | 要添加到列表的值             |


:::

:::group{name=asBoolean}

Return Type: boolean

```zenscript
// ICollectionData.asBoolean() as boolean

new ListData(["Hello", "World"]).asBoolean();
```

:::

:::group{name=asCollection}

Return Type: [ICollectionData](/vanilla/api/data/ICollectionData)

```zenscript
// ICollectionData.asCollection() as ICollectionData

new ListData(["Hello", "World"]).asCollection();
```

:::

:::group{name=asList}

获取列表<IData> representation of this IData, returns null on anything but [ListData](/vanilla/api/data/ListData).

Returns: null if this IData is not a list.  
Return Type: stdlib.List&lt;[IData](/vanilla/api/data/IData)&gt;

```zenscript
// ICollectionData.asList() as stdlib.List<IData>

new ListData(["Hello", "World"]).asList();
```

:::

:::group{name=asMap}

Gets a Map<String, IData> representation of this IData, returns null on anything but [MapData](/vanilla/api/data/MapData).

Returns: null if this IData is not a map.  
Return Type: [IData](/vanilla/api/data/IData)[string]

```zenscript
// ICollectionData.asMap() as IData[string]

new ListData(["Hello", "World"]).asMap();
```

:::

:::group{name=asNumber}

Return Type: [INumberData](/vanilla/api/data/INumberData)

```zenscript
// ICollectionData.asNumber() as INumberData

new ListData(["Hello", "World"]).asNumber();
```

:::

:::group{name=asString}

获取此IData的字符串表示形式

Returns: String that represents this IData (value and type).  
Return Type: string

```zenscript
// ICollectionData.asString() as string

new ListData(["Hello", "World"]).asString();
```

:::

:::group{name=clear}

删除列表中的每个元素

Return Type: void

```zenscript
// ICollectionData.clear() as void

new ListData(["Hello", "World"]).clear();
```

:::

:::group{name=contains}

Checks if this IData contains another IData, mainly used in subclasses of [ICollectionData](/vanilla/api/data/ICollectionData), is the same as an equals check on other IData types

Returns: true if the given IData is contained in this IData  
Return Type: boolean

```zenscript
// ICollectionData.contains(data as IData) as boolean

new ListData(["Hello", "World"]).contains("Display");
```

| 参数   | 类型                                   | 描述          |
| ---- | ------------------------------------ | ----------- |
| data | [IData #数据](/vanilla/api/data/IData) | 要检查是否有包含的数据 |


:::

:::group{name=getAt}

Retrieves the [IData](/vanilla/api/data/IData) stored at the given index.

Returns: The [IData](/vanilla/api/data/IData)  
Return Type: [IData](/vanilla/api/data/IData)

```zenscript
// ICollectionData.getAt(index as int) as IData

new ListData(["Hello", "World"]).getAt(0);
```

| 参数    | 类型  | 描述               |
| ----- | --- | ---------------- |
| index | int | The index (从0开始) |


:::

:::group{name=getId}

获取内部NBT标签的 ID。

 用来确定哪些NBT类型被存储(例如在列表中)

Returns: ID of the NBT tag that this data represents.  
Return Type: byte

```zenscript
// ICollectionData.getId() as byte

new ListData(["Hello", "World"]).getId();
```

:::

:::group{name=getString}

获取内部INBT标记的字符串表示形式

Returns: String that represents the internal INBT of this IData.  
Return Type: string

```zenscript
// ICollectionData.getString() as string

new ListData(["Hello", "World"]).getString();
```

:::

:::group{name=isEmpty}

Return Type: boolean

```zenscript
// ICollectionData.isEmpty() as boolean

new ListData(["Hello", "World"]).isEmpty();
```

:::

:::group{name=remove}

Removes the [IData](/vanilla/api/data/IData) stored at the given index.

Returns: The [IData](/vanilla/api/data/IData) that was removed  
Return Type: [IData](/vanilla/api/data/IData)

```zenscript
// ICollectionData.remove(index as int) as IData

new ListData(["Hello", "World"]).remove(0);
```

| 参数    | 类型  | 描述               |
| ----- | --- | ---------------- |
| index | int | The index (从0开始) |


:::

:::group{name=setAt}

在给定值的索引处设置项目

Returns: The replaced value  
Return Type: [IData](/vanilla/api/data/IData)

```zenscript
// ICollectionData.setAt(index as int, value as IData) as IData

new ListData(["Hello", "World"]).setAt(0, "Bye");
```

| 参数    | 类型                                   | 描述            |
| ----- | ------------------------------------ | ------------- |
| index | int                                  | 要设置的索引 (从0开始) |
| value | [IData #数据](/vanilla/api/data/IData) | 新值            |


:::


## 参数

| 名称       | 类型  | 可获得  | 可设置   | 描述                      |
| -------- | --- | ---- | ----- | ----------------------- |
| empty    | 布尔值 | true | false | No Description Provided |
| size #大小 | int | true | false | No Description Provided |

