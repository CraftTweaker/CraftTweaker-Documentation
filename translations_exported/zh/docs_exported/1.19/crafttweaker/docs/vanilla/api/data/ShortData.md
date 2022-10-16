# ShortData #短数据

## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.data.ShortData;
```


## 已实现的接口
ShortData实现了以下接口。 That means all methods defined in these interfaces are also available in ShortData

- [IData #数据](/vanilla/api/data/IData)

## Constructor #构造函数


```zenscript
new ShortData(internal as short) as ShortData
```
| 参数       | 类型    |
| -------- | ----- |
| internal | short |



## Casters

| Result Type                                                     | 是否隐藏  |
| --------------------------------------------------------------- | ----- |
| byte[]                                                          | false |
| [IData](/vanilla/api/data/IData)[string]                        | false |
| 整型[]                                                            | false |
| long[]                                                          | false |
| stdlib.List&lt;[IData](/vanilla/api/data/IData)&gt; | false |
| string                                                          | false |

## 使用方式

:::group{name=asByteArray}

Casts this IData to a byte array.

Returns: this data as a byte array  
Return Type: byte[]

```zenscript
// ShortData.asByteArray() as byte[]

(1058 as IData).asByteArray();
```

:::

:::group{name=asIntArray}

Casts this IData to an int array.

Returns: this data as an int array  
Return Type: int[]

```zenscript
// ShortData.asIntArray() as int[]

(1058 as IData).asIntArray();
```

:::

:::group{name=asList}

Casts this IData to a list.

Returns: this data as a list  
Return Type: stdlib.List&lt;[IData](/vanilla/api/data/IData)&gt;

```zenscript
// ShortData.asList() as stdlib.List<IData>

(1058 as IData).asList();
```

:::

:::group{name=asLongArray}

Casts this IData to a long array.

Returns: this data as a long array  
Return Type: long[]

```zenscript
// ShortData.asLongArray() as long[]

(1058 as IData).asLongArray();
```

:::

:::group{name=asMap}

Casts this IData to a map.

Returns: this data as a map  
Return Type: [IData](/vanilla/api/data/IData)[string]

```zenscript
// ShortData.asMap() as IData[string]

(1058 as IData).asMap();
```

:::

:::group{name=asString}

Gets an escaped string version of this IData, quotes are included in the output

 E.G `println(("hello" as IData).asString())` prints `"hello"`

Returns: The escaped string version of this IData.  
Return Type: string

```zenscript
// ShortData.asString() as string

(1058 as IData).asString();
```

:::

:::group{name=getAsString}

Gets the literal string version of this IData.

 E.G `println(("hello" as IData).getAsString())` prints `hello`

Returns: The literal string version of this IData.  
Return Type: string

```zenscript
// ShortData.getAsString() as string

(1058 as IData).getAsString();
```

:::

:::group{name=getId}

Gets the internal ID of this data.

Returns: the intenral ID of this data.  
Return Type: byte

```zenscript
// ShortData.getId() as byte

(1058 as IData).getId();
```

:::

:::group{name=getKeys}

Gets the keys of this IData

Returns: The keys of this IData.  
Return Type: Set&lt;string&gt;

```zenscript
// ShortData.getKeys() as Set<string>

(1058 as IData).getKeys();
```

:::

:::group{name=isEmpty}

Checks if this data is empty.

Returns: True if empty.  
Return Type: boolean

```zenscript
// ShortData.isEmpty() as boolean

(1058 as IData).isEmpty();
```

:::

:::group{name=length}

Gets the length of this IData.

Returns: The length of this IData.  
Return Type: int

```zenscript
// ShortData.length() as int

(1058 as IData).length();
```

:::

:::group{name=map}

Maps this IData to another IData based on the given operation.

Returns: A new IData from the operation  
Return Type: [IData](/vanilla/api/data/IData)

```zenscript
// ShortData.map(operation as Function<IData,IData>) as IData

(1058 as IData).map((data) => 3);
```

| 参数        | 类型                                                                                            | 描述                                   |
| --------- | --------------------------------------------------------------------------------------------- | ------------------------------------ |
| operation | Function&lt;[IData](/vanilla/api/data/IData),[IData](/vanilla/api/data/IData)&gt; | The operation to apply to this IData |


:::

:::group{name=merge}

Merges the given data with this data.

Returns: the result of merging the datas.  
Return Type: [IData](/vanilla/api/data/IData)

```zenscript
ShortData.merge(other as IData) as IData
```

| 参数    | 类型                                   | 描述                |
| ----- | ------------------------------------ | ----------------- |
| other | [IData #数据](/vanilla/api/data/IData) | the data to merge |


:::

:::group{name=put}

Puts the given value inside this IData at the given index.

```zenscript
// ShortData.put(index as string, value as IData?)

new MapData().put("key", "value");
```

| 参数    | 类型                                | 描述                           |
| ----- | --------------------------------- | ---------------------------- |
| index | string                            | The key to store the data at |
| value | [IData](/vanilla/api/data/IData)? | The data to store.           |


:::

:::group{name=remove}

Removes the stored data at the given index.

```zenscript
// ShortData.remove(index as int)

[1, 2, 3] as IData.remove(0);
```

| 参数    | 类型  | 描述                   |
| ----- | --- | -------------------- |
| index | int | The index to remove. |


:::

:::group{name=remove}

Removes the stored data at the given key.

```zenscript
// ShortData.remove(key as string)

{key: "value"} as IData.remove("key");
```

| 参数  | 类型     | 描述                 |
| --- | ------ | ------------------ |
| key | string | The key to remove. |


:::

:::group{name=setAt}

Sets the given value inside this IData at the given index.

```zenscript
ShortData.setAt(name as string, data as IData?)
```

| 参数       | 类型                                | 描述                           |
| -------- | --------------------------------- | ---------------------------- |
| name（名称） | string                            | The key to store the data at |
| data     | [IData](/vanilla/api/data/IData)? | The data to store.           |


:::


## 运算符

:::group{name=CAT}

Concatenates the given IData to this IData.

```zenscript
myShortData ~ other as IData
(1058 as IData) ~ 2
```

:::

:::group{name=INDEXGET}

Gets the data at the given index.

```zenscript
[myShortData]
[[1, 2, 3] as IData]
```

:::

:::group{name=INDEXSET}

Puts the given value inside this IData at the given index.

```zenscript
[myShortData] = index as string
[new MapData()] = "key"
```

:::

:::group{name=NOT}

Applies a NOT (!) operation to this IData.

```zenscript
!myShortData
!true
```

:::


## 参数

| 名称            | 类型                            | 可获得  | 可设置   | 描述                             |
| ------------- | ----------------------------- | ---- | ----- | ------------------------------ |
| isEmpty #是否为空 | 布尔值                           | true | false | Checks if this data is empty.  |
| keys          | Set&lt;string&gt; | true | false | Gets the keys of this IData    |
| length        | int                           | true | false | Gets the length of this IData. |

