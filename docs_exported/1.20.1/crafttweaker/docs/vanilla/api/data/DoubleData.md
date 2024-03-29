# DoubleData

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.data.DoubleData;
```


## Implemented Interfaces
DoubleData implements the following interfaces. That means all methods defined in these interfaces are also available in DoubleData

- [IData](/vanilla/api/data/IData)

## Constructors


```zenscript
new DoubleData(internal as double) as DoubleData
```
| Parameter |  Type  |
|-----------|--------|
| internal  | double |



## Casters

|                     Result Type                     | Is Implicit |
|-----------------------------------------------------|-------------|
| byte[]                                              | false       |
| [IData](/vanilla/api/data/IData)[string]            | false       |
| int[]                                               | false       |
| long[]                                              | false       |
| stdlib.List&lt;[IData](/vanilla/api/data/IData)&gt; | false       |
| string                                              | false       |

## Methods

:::group{name=asByteArray}

Casts this IData to a byte array.

Returns: this data as a byte array  
Return Type: byte[]

```zenscript
// DoubleData.asByteArray() as byte[]

(3.25 as IData).asByteArray();
```

:::

:::group{name=asIntArray}

Casts this IData to an int array.

Returns: this data as an int array  
Return Type: int[]

```zenscript
// DoubleData.asIntArray() as int[]

(3.25 as IData).asIntArray();
```

:::

:::group{name=asList}

Casts this IData to a list.

Returns: this data as a list  
Return Type: stdlib.List&lt;[IData](/vanilla/api/data/IData)&gt;

```zenscript
// DoubleData.asList() as stdlib.List<IData>

(3.25 as IData).asList();
```

:::

:::group{name=asLongArray}

Casts this IData to a long array.

Returns: this data as a long array  
Return Type: long[]

```zenscript
// DoubleData.asLongArray() as long[]

(3.25 as IData).asLongArray();
```

:::

:::group{name=asMap}

Casts this IData to a map.

Returns: this data as a map  
Return Type: [IData](/vanilla/api/data/IData)[string]

```zenscript
// DoubleData.asMap() as IData[string]

(3.25 as IData).asMap();
```

:::

:::group{name=asString}

Gets an escaped string version of this IData, quotes are included in the output

 E.G `println(("hello" as IData).asString())` prints `"hello"`

Returns: The escaped string version of this IData.  
Return Type: string

```zenscript
// DoubleData.asString() as string

(3.25 as IData).asString();
```

:::

:::group{name=getAsString}

Gets the literal string version of this IData.

 E.G `println(("hello" as IData).getAsString())` prints `hello`

Returns: The literal string version of this IData.  
Return Type: string

```zenscript
// DoubleData.getAsString() as string

(3.25 as IData).getAsString();
```

:::

:::group{name=getId}

Gets the internal ID of this data.

Returns: the intenral ID of this data.  
Return Type: byte

```zenscript
// DoubleData.getId() as byte

(3.25 as IData).getId();
```

:::

:::group{name=getKeys}

Gets the keys of this IData

Returns: The keys of this IData.  
Return Type: Set&lt;string&gt;

```zenscript
// DoubleData.getKeys() as Set<string>

(3.25 as IData).getKeys();
```

:::

:::group{name=isEmpty}

Checks if this data is empty.

Returns: True if empty.  
Return Type: boolean

```zenscript
// DoubleData.isEmpty() as boolean

(3.25 as IData).isEmpty();
```

:::

:::group{name=length}

Gets the length of this IData.

Returns: The length of this IData.  
Return Type: int

```zenscript
// DoubleData.length() as int

(3.25 as IData).length();
```

:::

:::group{name=map}

Maps this IData to another IData based on the given operation.

Returns: A new IData from the operation  
Return Type: [IData](/vanilla/api/data/IData)

```zenscript
// DoubleData.map(operation as Function<IData,IData>) as IData

(3.25 as IData).map((data) => 3);
```

| Parameter |                                       Type                                        |             Description              |
|-----------|-----------------------------------------------------------------------------------|--------------------------------------|
| operation | Function&lt;[IData](/vanilla/api/data/IData),[IData](/vanilla/api/data/IData)&gt; | The operation to apply to this IData |


:::

:::group{name=merge}

Merges the given data with this data.

Returns: the result of merging the datas.  
Return Type: [IData](/vanilla/api/data/IData)

```zenscript
DoubleData.merge(other as IData) as IData
```

| Parameter |               Type               |    Description    |
|-----------|----------------------------------|-------------------|
| other     | [IData](/vanilla/api/data/IData) | the data to merge |


:::

:::group{name=put}

Puts the given value inside this IData at the given index.

```zenscript
// DoubleData.put(index as string, value as IData?)

new MapData().put("key", "value");
```

| Parameter |               Type                |         Description          |
|-----------|-----------------------------------|------------------------------|
| index     | string                            | The key to store the data at |
| value     | [IData](/vanilla/api/data/IData)? | The data to store.           |


:::

:::group{name=remove}

Removes the stored data at the given index.

```zenscript
// DoubleData.remove(index as int)

[1, 2, 3] as IData.remove(0);
```

| Parameter | Type |     Description      |
|-----------|------|----------------------|
| index     | int  | The index to remove. |


:::

:::group{name=remove}

Removes the stored data at the given key.

```zenscript
// DoubleData.remove(key as string)

{key: "value"} as IData.remove("key");
```

| Parameter |  Type  |    Description     |
|-----------|--------|--------------------|
| key       | string | The key to remove. |


:::

:::group{name=setAt}

Sets the given value inside this IData at the given index.

```zenscript
DoubleData.setAt(name as string, data as IData?)
```

| Parameter |               Type                |         Description          |
|-----------|-----------------------------------|------------------------------|
| name      | string                            | The key to store the data at |
| data      | [IData](/vanilla/api/data/IData)? | The data to store.           |


:::


## Operators

:::group{name=AND}

Applies a bitwise AND (&) operation to this IData and the other IData

```zenscript
myDoubleData & other as IData
(3.25 as IData) & 2
```

:::

:::group{name=CAT}

Concatenates the given IData to this IData.

```zenscript
myDoubleData ~ other as IData
(3.25 as IData) ~ 2
```

:::

:::group{name=INDEXGET}

Gets the data at the given index.

```zenscript
[myDoubleData]
[[1, 2, 3] as IData]
```

:::

:::group{name=INDEXSET}

Puts the given value inside this IData at the given index.

```zenscript
[myDoubleData] = index as string
[new MapData()] = "key"
```

:::

:::group{name=NOT}

Applies a NOT (!) operation to this IData.

```zenscript
!myDoubleData
!true
```

:::

:::group{name=OR}

Applies a bitwise OR (|) operation to this IData and the other IData

```zenscript
myDoubleData | other as IData
(3.25 as IData) | 2
```

:::

:::group{name=SHL}

Applies a SHL (<<) operation to this data by the other data

```zenscript
myDoubleData << other as IData
(3.25 as IData) << 2
```

:::

:::group{name=SHR}

Applies a SHR (>>) operation to this data by the other data

```zenscript
myDoubleData >> other as IData
(3.25 as IData) >> 2
```

:::

:::group{name=XOR}

Applies a bitwise XOR (^) operation to this IData and the other IData

```zenscript
myDoubleData ^ other as IData
(3.25 as IData) ^ 2
```

:::


## Properties

|  Name   |       Type        | Has Getter | Has Setter |          Description           |
|---------|-------------------|------------|------------|--------------------------------|
| isEmpty | boolean           | true       | false      | Checks if this data is empty.  |
| keys    | Set&lt;string&gt; | true       | false      | Gets the keys of this IData    |
| length  | int               | true       | false      | Gets the length of this IData. |

