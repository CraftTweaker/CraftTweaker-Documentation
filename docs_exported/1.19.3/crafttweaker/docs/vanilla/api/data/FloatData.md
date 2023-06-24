# FloatData

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.data.FloatData;
```


## Implemented Interfaces
FloatData implements the following interfaces. That means all methods defined in these interfaces are also available in FloatData

- [IData](/vanilla/api/data/IData)

## Constructors


```zenscript
new FloatData(internal as float) as FloatData
```
| Parameter | Type  |
|-----------|-------|
| internal  | float |



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
// FloatData.asByteArray() as byte[]

(8.5 as IData).asByteArray();
```

:::

:::group{name=asIntArray}

Casts this IData to an int array.

Returns: this data as an int array  
Return Type: int[]

```zenscript
// FloatData.asIntArray() as int[]

(8.5 as IData).asIntArray();
```

:::

:::group{name=asList}

Casts this IData to a list.

Returns: this data as a list  
Return Type: stdlib.List&lt;[IData](/vanilla/api/data/IData)&gt;

```zenscript
// FloatData.asList() as stdlib.List<IData>

(8.5 as IData).asList();
```

:::

:::group{name=asLongArray}

Casts this IData to a long array.

Returns: this data as a long array  
Return Type: long[]

```zenscript
// FloatData.asLongArray() as long[]

(8.5 as IData).asLongArray();
```

:::

:::group{name=asMap}

Casts this IData to a map.

Returns: this data as a map  
Return Type: [IData](/vanilla/api/data/IData)[string]

```zenscript
// FloatData.asMap() as IData[string]

(8.5 as IData).asMap();
```

:::

:::group{name=asString}

Gets an escaped string version of this IData, quotes are included in the output

 E.G `println(("hello" as IData).asString())` prints `"hello"`

Returns: The escaped string version of this IData.  
Return Type: string

```zenscript
// FloatData.asString() as string

(8.5 as IData).asString();
```

:::

:::group{name=getAsString}

Gets the literal string version of this IData.

 E.G `println(("hello" as IData).getAsString())` prints `hello`

Returns: The literal string version of this IData.  
Return Type: string

```zenscript
// FloatData.getAsString() as string

(8.5 as IData).getAsString();
```

:::

:::group{name=getId}

Gets the internal ID of this data.

Returns: the intenral ID of this data.  
Return Type: byte

```zenscript
// FloatData.getId() as byte

(8.5 as IData).getId();
```

:::

:::group{name=getKeys}

Gets the keys of this IData

Returns: The keys of this IData.  
Return Type: Set&lt;string&gt;

```zenscript
// FloatData.getKeys() as Set<string>

(8.5 as IData).getKeys();
```

:::

:::group{name=isEmpty}

Checks if this data is empty.

Returns: True if empty.  
Return Type: boolean

```zenscript
// FloatData.isEmpty() as boolean

(8.5 as IData).isEmpty();
```

:::

:::group{name=length}

Gets the length of this IData.

Returns: The length of this IData.  
Return Type: int

```zenscript
// FloatData.length() as int

(8.5 as IData).length();
```

:::

:::group{name=map}

Maps this IData to another IData based on the given operation.

Returns: A new IData from the operation  
Return Type: [IData](/vanilla/api/data/IData)

```zenscript
// FloatData.map(operation as Function<IData,IData>) as IData

(8.5 as IData).map((data) => 3);
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
FloatData.merge(other as IData) as IData
```

| Parameter |               Type               |    Description    |
|-----------|----------------------------------|-------------------|
| other     | [IData](/vanilla/api/data/IData) | the data to merge |


:::

:::group{name=put}

Puts the given value inside this IData at the given index.

```zenscript
// FloatData.put(index as string, value as IData?)

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
// FloatData.remove(index as int)

[1, 2, 3] as IData.remove(0);
```

| Parameter | Type |     Description      |
|-----------|------|----------------------|
| index     | int  | The index to remove. |


:::

:::group{name=remove}

Removes the stored data at the given key.

```zenscript
// FloatData.remove(key as string)

{key: "value"} as IData.remove("key");
```

| Parameter |  Type  |    Description     |
|-----------|--------|--------------------|
| key       | string | The key to remove. |


:::

:::group{name=setAt}

Sets the given value inside this IData at the given index.

```zenscript
FloatData.setAt(name as string, data as IData?)
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
myFloatData & other as IData
(8.5 as IData) & 2
```

:::

:::group{name=CAT}

Concatenates the given IData to this IData.

```zenscript
myFloatData ~ other as IData
(8.5 as IData) ~ 2
```

:::

:::group{name=INDEXGET}

Gets the data at the given index.

```zenscript
[myFloatData]
[[1, 2, 3] as IData]
```

:::

:::group{name=INDEXSET}

Puts the given value inside this IData at the given index.

```zenscript
[myFloatData] = index as string
[new MapData()] = "key"
```

:::

:::group{name=NOT}

Applies a NOT (!) operation to this IData.

```zenscript
!myFloatData
!true
```

:::

:::group{name=OR}

Applies a bitwise OR (|) operation to this IData and the other IData

```zenscript
myFloatData | other as IData
(8.5 as IData) | 2
```

:::

:::group{name=SHL}

Applies a SHL (<<) operation to this data by the other data

```zenscript
myFloatData << other as IData
(8.5 as IData) << 2
```

:::

:::group{name=SHR}

Applies a SHR (>>) operation to this data by the other data

```zenscript
myFloatData >> other as IData
(8.5 as IData) >> 2
```

:::

:::group{name=XOR}

Applies a bitwise XOR (^) operation to this IData and the other IData

```zenscript
myFloatData ^ other as IData
(8.5 as IData) ^ 2
```

:::


## Properties

|  Name   |       Type        | Has Getter | Has Setter |          Description           |
|---------|-------------------|------------|------------|--------------------------------|
| isEmpty | boolean           | true       | false      | Checks if this data is empty.  |
| keys    | Set&lt;string&gt; | true       | false      | Gets the keys of this IData    |
| length  | int               | true       | false      | Gets the length of this IData. |

