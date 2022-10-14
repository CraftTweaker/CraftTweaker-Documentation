# MapData #地图数据



## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.data.MapData;
```


## 已实现的接口
mapData实现了以下接口。 That means all methods defined in these interfaces are also available in MapData

- [IData #数据](/vanilla/api/data/IData)

## Constructor #构造函数

No Description Provided
```zenscript
new MapData() as MapData
new MapData();
```
No Description Provided
```zenscript
new MapData(map as IData[string]) as MapData
```
| 参数  | 类型                                       | 描述                      |
| --- | ---------------------------------------- | ----------------------- |
| map | [IData](/vanilla/api/data/IData)[string] | No Description Provided |



## Casters

| 结果类型                                                        | 是否隐藏  |
| ----------------------------------------------------------- | ----- |
| 布尔值                                                         | false |
| [ICollectionData #所收集数据](/vanilla/api/data/ICollectionData) | false |
| [IData](/vanilla/api/data/IData)[string]                    | true  |
| [INumberData #编号数据](/vanilla/api/data/INumberData)          | false |

## 使用方式

:::group{name=asBoolean}

Return Type: boolean

```zenscript
// MapData.asBoolean() as boolean

{Hello : "World", Somewhere: "Over the rainbow"}.asBoolean();
```

:::

:::group{name=asCollection}

Return Type: [ICollectionData](/vanilla/api/data/ICollectionData)

```zenscript
// MapData.asCollection() as ICollectionData

{Hello : "World", Somewhere: "Over the rainbow"}.asCollection();
```

:::

:::group{name=asList}

获取列表<IData> representation of this IData, returns null on anything but [ListData](/vanilla/api/data/ListData).

Returns: null if this IData is not a list.  
Return Type: stdlib.List&lt;[IData](/vanilla/api/data/IData)&gt;

```zenscript
// MapData.asList() as stdlib.List<IData>

{Hello : "World", Somewhere: "Over the rainbow"}.asList();
```

:::

:::group{name=asNumber}

Return Type: [INumberData](/vanilla/api/data/INumberData)

```zenscript
// MapData.asNumber() as INumberData

{Hello : "World", Somewhere: "Over the rainbow"}.asNumber();
```

:::

:::group{name=asString}

获取此IData的字符串表示形式

Returns: String that represents this IData (value and type).  
Return Type: string

```zenscript
// MapData.asString() as string

{Hello : "World", Somewhere: "Over the rainbow"}.asString();
```

:::

:::group{name=contains}

检查地图是否包含给定的密钥。

Returns: True if the Map contains the key  
Return Type: boolean

```zenscript
// MapData.contains(key as string) as boolean

{Hello : "World", Somewhere: "Over the rainbow"}.contains("Hello");
```

| 参数  | 类型     | 描述     |
| --- | ------ | ------ |
| key | string | 要搜索的密钥 |


:::

:::group{name=getAt}

检索与密钥相关的值

Returns: The value if present, null otherwise  
Return Type: [IData](/vanilla/api/data/IData)

```zenscript
// MapData.getAt(key as string) as IData

{Hello : "World", Somewhere: "Over the rainbow"}.getAt("Hello");
```

| 参数  | 类型     | 描述     |
| --- | ------ | ------ |
| key | string | 要搜索的密钥 |


:::

:::group{name=getId}

获取内部NBT标签的 ID。

 用来确定哪些NBT类型被存储(例如在列表中)

Returns: ID of the NBT tag that this data represents.  
Return Type: byte

```zenscript
// MapData.getId() as byte

{Hello : "World", Somewhere: "Over the rainbow"}.getId();
```

:::

:::group{name=getString}

获取内部INBT标记的字符串表示形式

Returns: String that represents the internal INBT of this IData.  
Return Type: string

```zenscript
// MapData.getString() as string

{Hello : "World", Somewhere: "Over the rainbow"}.getString();
```

:::

:::group{name=merge}

合并此地图和其他地图。 如果来自此地图和其他地图的条目共享，则尝试合并这些值。 如果无法工作，则使用其他地图的值。

Returns: This map, after the merge  
Return Type: [MapData](/vanilla/api/data/MapData)

```zenscript
// MapData.merge(other as MapData) as MapData

{Hello : "World", Somewhere: "Over the rainbow"}.merge({Doodle: "Do"});
```

| 参数    | 类型                                         | 描述     |
| ----- | ------------------------------------------ | ------ |
| other | [MapData #地图数据](/vanilla/api/data/MapData) | 另一张地图。 |


:::

:::group{name=put}

添加给定键值或创建一个新条目，如果它以前不存在。

Returns: The previous value if present, null otherwise  
Return Type: [IData](/vanilla/api/data/IData)

```zenscript
// MapData.put(key as string, value as IData) as IData

{Hello : "World", Somewhere: "Over the rainbow"}.put("Hello", "Goodbye");
```

| 参数    | 类型                                   | 描述       |
| ----- | ------------------------------------ | -------- |
| key   | string                               | 要设置值的密钥。 |
| value | [IData #数据](/vanilla/api/data/IData) | 要设置的值    |


:::

:::group{name=putAll}

将给定地图中的所有条目添加到这个条目。 可以覆盖现有密钥。

Return Type: void

```zenscript
// MapData.putAll(map as IData[string]) as void

{Hello : "World", Somewhere: "Over the rainbow"}.putAll({Hello: "Goodbye", Item: "Bedrock"});
```

| 参数  | 类型                                       | 描述           |
| --- | ---------------------------------------- | ------------ |
| map | [IData](/vanilla/api/data/IData)[string] | 要添加到此地图的其他条目 |


:::

:::group{name=remove}

从地图中移除给定键的条目

Return Type: void

```zenscript
// MapData.remove(key as string) as void

{Hello : "World", Somewhere: "Over the rainbow"}.remove("Somewhere");
```

| 参数  | 类型     | 描述        |
| --- | ------ | --------- |
| key | string | 要删除的条目的密钥 |


:::


## 运算符

:::group{name=ADD}

将给定的 IData 中的所有条目添加到此条目

```zenscript
myMapData + data as IData
```

:::

:::group{name=CONTAINS}

检查地图是否包含给定的密钥。

```zenscript
key as string in myMapData
"Hello" in {Hello : "World", Somewhere: "Over the rainbow"}
```

:::

:::group{name=MEMBERGETTER}

检索与密钥相关的值

```zenscript
myMapData.key as string
{Hello : "World", Somewhere: "Over the rainbow"}."Hello"
```

:::

:::group{name=MEMBERSETTER}

添加给定键值或创建一个新条目，如果它以前不存在。

```zenscript
myMapData.key as string = value as IData
{Hello : "World", Somewhere: "Over the rainbow"}."Hello" = "Goodbye"
```

:::


## 参数

| 名称            | 类型                            | 可获得  | 可设置   | 描述                      |
| ------------- | ----------------------------- | ---- | ----- | ----------------------- |
| isEmpty #是否为空 | 布尔值                           | true | false | No Description Provided |
| keySet #设置键   | Set&lt;string&gt; | true | false | No Description Provided |
| size #大小      | int                           | true | false | No Description Provided |

