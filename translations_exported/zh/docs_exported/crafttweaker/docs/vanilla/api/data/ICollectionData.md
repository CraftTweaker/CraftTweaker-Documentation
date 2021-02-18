# ICollectionData #所收集数据

The ICollection data is used to represent a collection of [IData](/vanilla/api/data/IData) like a List<IData>

## 导入相关包

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.data.ICollectionData;
```


## 已实现的接口
ICollectionData实现了以下接口。 That means all methods defined in these interfaces are also available in ICollectionData

- [IData](/vanilla/api/data/IData)

## 方法

### getFromMembers

Creates the most specific ICollectionData form possible for the provided members.

 Tries to return (in order) [ByteArrayData](/vanilla/api/data/ByteArrayData), [IntArrayData](/vanilla/api/data/IntArrayData), [LongArrayData](/vanilla/api/data/LongArrayData) or if neither is applicable [ListData](/vanilla/api/data/ListData)

Return Type: [ICollectionData](/vanilla/api/data/ICollectionData)

```zenscript
ICollectionData.getFromMembers(members as IData[]) as ICollectionData
```

| 参数      | 类型                                 | 描述                      |
| ------- | ---------------------------------- | ----------------------- |
| members | [IData](/vanilla/api/data/IData)[] | No Description Provided |


## Casters

| 结果类型                                                        | 是否隐藏  |
| ----------------------------------------------------------- | ----- |
| [ICollectionData #所收集数据](/vanilla/api/data/ICollectionData) | false |
| [INumberData #编号数据](/vanilla/api/data/INumberData)          | false |

## 方法

### add



Return Type: void

```zenscript
ICollectionData.add(value as IData) as void
new ListData(["Hello", "World"]).add("today");
```

| 参数    | 类型                               | 描述       |
| ----- | -------------------------------- | -------- |
| value | [IData](/vanilla/api/data/IData) | 要添加到列表的值 |




Return Type: void

```zenscript
ICollectionData.add(index as int, value as IData) as void
new ListData(["Hello", "World"]).add(1, "beautiful");
```

| 参数    | 类型                               | 描述                   |
| ----- | -------------------------------- | -------------------- |
| index | int                              | 要添加的索引。 后续项目将会上移一个索引 |
| value | [IData](/vanilla/api/data/IData) | 要添加到列表的值             |


### asCollection

Return Type: [ICollectionData](/vanilla/api/data/ICollectionData)

```zenscript
ICollectionData.asCollection() as ICollectionData
new ListData(["Hello", "World"]).asCollection();
```

### asList #作为列表

获取列表<IData> representation of this IData, returns null on anything but [ListData](/vanilla/api/data/ListData).

Return Type: stdlib.List&lt;[IData](/vanilla/api/data/IData)&gt;

```zenscript
ICollectionData.asList() as stdlib.List<IData>
new ListData(["Hello", "World"]).asList();
```

### asMap #作为地图数据

Gets a Map<String, IData> representation of this IData, returns null on anything but [MapData](/vanilla/api/data/MapData).

Return Type: [IData](/vanilla/api/data/IData)[string]

```zenscript
ICollectionData.asMap() as IData[string]
new ListData(["Hello", "World"]).asMap();
```

### asNumber

Return Type: [INumberData](/vanilla/api/data/INumberData)

```zenscript
ICollectionData.asNumber() as INumberData
new ListData(["Hello", "World"]).asNumber();
```

### asString #作为字符串

获取此IData的字符串表示形式

Return Type: string

```zenscript
ICollectionData.asString() as string
new ListData(["Hello", "World"]).asString();
```

### clear #清除

删除列表中的每个元素

Return Type: void

```zenscript
ICollectionData.clear() as void
new ListData(["Hello", "World"]).clear();
```

### contains #容器

Checks if this IData contains another IData, mainly used in subclasses of [ICollectionData](/vanilla/api/data/ICollectionData), is the same as an equals check on other IData types

Return Type: boolean

```zenscript
ICollectionData.contains(data as IData) as boolean
new ListData(["Hello", "World"]).contains("Display");
```

| 参数   | 类型                               | 描述          |
| ---- | -------------------------------- | ----------- |
| data | [IData](/vanilla/api/data/IData) | 要检查是否有包含的数据 |


### copy #复制

制作此IData的副本。

 IData默认情况下是不可变的，使用它可以创建对象的正确副本。

Return Type: [IData](/vanilla/api/data/IData)

```zenscript
ICollectionData.copy() as IData
new ListData(["Hello", "World"]).copy();
```

### getAt

Retrieves the [IData](/vanilla/api/data/IData) stored at the given index.

Return Type: [IData](/vanilla/api/data/IData)

```zenscript
ICollectionData.getAt(index as int) as IData
new ListData(["Hello", "World"]).getAt(0);
```

| 参数    | 类型  | 描述               |
| ----- | --- | ---------------- |
| index | int | The index (从0开始) |


### getId #获取id

获取内部NBT标签的 ID。

 用来确定哪些NBT类型被存储(例如在列表中)

Return Type: byte

```zenscript
ICollectionData.getId() as byte
new ListData(["Hello", "World"]).getId();
```

### getString #获取字符串

获取内部INBT标记的字符串表示形式

Return Type: string

```zenscript
ICollectionData.getString() as string
new ListData(["Hello", "World"]).getString();
```

### remove

Removes the [IData](/vanilla/api/data/IData) stored at the given index.

Return Type: [IData](/vanilla/api/data/IData)

```zenscript
ICollectionData.remove(index as int) as IData
new ListData(["Hello", "World"]).remove(0);
```

| 参数    | 类型  | 描述               |
| ----- | --- | ---------------- |
| index | int | The index (从0开始) |


### setAt

在给定值的索引处设置项目

Return Type: [IData](/vanilla/api/data/IData)

```zenscript
ICollectionData.setAt(index as int, value as IData) as IData
new ListData(["Hello", "World"]).setAt(0, "Bye");
```

| 参数    | 类型                               | 描述            |
| ----- | -------------------------------- | ------------- |
| index | int                              | 要设置的索引 (从0开始) |
| value | [IData](/vanilla/api/data/IData) | 新值            |



## 参数

| 名称   | 类型  | 可获得  | 可设置   |
| ---- | --- | ---- | ----- |
| size | int | true | false |

