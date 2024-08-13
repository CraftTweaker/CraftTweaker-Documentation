# EmptyData

Represents a marker object for data.

 Note that this is not supposed to be used in scripts, and as such it cannot be obtained in any way.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.data.EmptyData;
```


## Implemented Interfaces
EmptyData implements the following interfaces. That means all methods defined in these interfaces are also available in EmptyData

- [IData](/vanilla/api/data/IData)

## Casters

|                     Result Type                     | Is Implicit |
|-----------------------------------------------------|-------------|
| boolean                                             | false       |
| byte                                                | false       |
| byte[]                                              | false       |
| double                                              | false       |
| float                                               | false       |
| [IData](/vanilla/api/data/IData)[string]            | false       |
| int                                                 | false       |
| int[]                                               | false       |
| long                                                | false       |
| long[]                                              | false       |
| short                                               | false       |
| stdlib.List&lt;[IData](/vanilla/api/data/IData)&gt; | false       |
| string                                              | false       |

## Methods

:::group{name=add}

Adds the given IData to this IData.

Returns: A new IData after adding the other data.  
Return Type: [IData](/vanilla/api/data/IData)

```zenscript
// EmptyData.add(other as IData) as IData

myEmptyData.add(2);
```

| Parameter |               Type               |      Description       |
|-----------|----------------------------------|------------------------|
| other     | [IData](/vanilla/api/data/IData) | the other data to add. |


:::

:::group{name=asBool}

Casts this IData to a boolean.

Returns: this data as a bool  
Return Type: boolean

```zenscript
// EmptyData.asBool() as boolean

myEmptyData.asBool();
```

:::

:::group{name=asByte}

Casts this IData to a byte.

Returns: this data as a byte  
Return Type: byte

```zenscript
// EmptyData.asByte() as byte

myEmptyData.asByte();
```

:::

:::group{name=asByteArray}

Casts this IData to a byte array.

Returns: this data as a byte array  
Return Type: byte[]

```zenscript
// EmptyData.asByteArray() as byte[]

myEmptyData.asByteArray();
```

:::

:::group{name=asDouble}

Casts this IData to a double.

Returns: this data as a double  
Return Type: double

```zenscript
// EmptyData.asDouble() as double

myEmptyData.asDouble();
```

:::

:::group{name=asFloat}

Casts this IData to a float.

Returns: this data as a float  
Return Type: float

```zenscript
// EmptyData.asFloat() as float

myEmptyData.asFloat();
```

:::

:::group{name=asInt}

Casts this IData to an int.

Returns: this data as an int  
Return Type: int

```zenscript
// EmptyData.asInt() as int

myEmptyData.asInt();
```

:::

:::group{name=asIntArray}

Casts this IData to an int array.

Returns: this data as an int array  
Return Type: int[]

```zenscript
// EmptyData.asIntArray() as int[]

myEmptyData.asIntArray();
```

:::

:::group{name=asList}

Casts this IData to a list.

Returns: this data as a list  
Return Type: stdlib.List&lt;[IData](/vanilla/api/data/IData)&gt;

```zenscript
// EmptyData.asList() as stdlib.List<IData>

myEmptyData.asList();
```

:::

:::group{name=asLong}

Casts this IData to a long.

Returns: this data as a long  
Return Type: long

```zenscript
// EmptyData.asLong() as long

myEmptyData.asLong();
```

:::

:::group{name=asLongArray}

Casts this IData to a long array.

Returns: this data as a long array  
Return Type: long[]

```zenscript
// EmptyData.asLongArray() as long[]

myEmptyData.asLongArray();
```

:::

:::group{name=asMap}

Casts this IData to a map.

Returns: this data as a map  
Return Type: [IData](/vanilla/api/data/IData)[string]

```zenscript
// EmptyData.asMap() as IData[string]

myEmptyData.asMap();
```

:::

:::group{name=asShort}

Casts this IData to a short.

Returns: this data as a short  
Return Type: short

```zenscript
// EmptyData.asShort() as short

myEmptyData.asShort();
```

:::

:::group{name=asString}

Gets an escaped string version of this IData, quotes are included in the output

 E.G `println(("hello" as IData).asString())` prints `"hello"`

Returns: The escaped string version of this IData.  
Return Type: string

```zenscript
// EmptyData.asString() as string

myEmptyData.asString();
```

:::

:::group{name=compareTo}

Compares this IData to the other IData

Returns: The comparison result.  
Return Type: int

```zenscript
// EmptyData.compareTo(other as IData) as int

myEmptyData.compareTo(5);
```

| Parameter |               Type               |       Description        |
|-----------|----------------------------------|--------------------------|
| other     | [IData](/vanilla/api/data/IData) | the data to be compared. |


:::

:::group{name=getAsString}

Gets the literal string version of this IData.

 E.G `println(("hello" as IData).getAsString())` prints `hello`

Returns: The literal string version of this IData.  
Return Type: string

```zenscript
// EmptyData.getAsString() as string

myEmptyData.getAsString();
```

:::

:::group{name=getId}

Gets the internal ID of this data.

Returns: the intenral ID of this data.  
Return Type: byte

```zenscript
// EmptyData.getId() as byte

myEmptyData.getId();
```

:::

:::group{name=getKeys}

Gets the keys of this IData

Returns: The keys of this IData.  
Return Type: Set&lt;string&gt;

```zenscript
// EmptyData.getKeys() as Set<string>

myEmptyData.getKeys();
```

:::

:::group{name=isEmpty}

Checks if this data is empty.

Returns: True if empty.  
Return Type: boolean

```zenscript
// EmptyData.isEmpty() as boolean

myEmptyData.isEmpty();
```

:::

:::group{name=length}

Gets the length of this IData.

Returns: The length of this IData.  
Return Type: int

```zenscript
// EmptyData.length() as int

myEmptyData.length();
```

:::

:::group{name=map}

Maps this IData to another IData based on the given operation.

Returns: A new IData from the operation  
Return Type: [IData](/vanilla/api/data/IData)

```zenscript
// EmptyData.map(operation as Function<IData,IData>) as IData

myEmptyData.map((data) => 3);
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
EmptyData.merge(other as IData) as IData
```

| Parameter |               Type               |    Description    |
|-----------|----------------------------------|-------------------|
| other     | [IData](/vanilla/api/data/IData) | the data to merge |


:::

:::group{name=put}

Puts the given value inside this IData at the given index.

```zenscript
// EmptyData.put(index as string, value as IData?)

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
// EmptyData.remove(index as int)

[1, 2, 3] as IData.remove(0);
```

| Parameter | Type |     Description      |
|-----------|------|----------------------|
| index     | int  | The index to remove. |


:::

:::group{name=remove}

Removes the stored data at the given key.

```zenscript
// EmptyData.remove(key as string)

{key: "value"} as IData.remove("key");
```

| Parameter |  Type  |    Description     |
|-----------|--------|--------------------|
| key       | string | The key to remove. |


:::

:::group{name=setAt}

Sets the given value inside this IData at the given index.

```zenscript
EmptyData.setAt(name as string, data as IData?)
```

| Parameter |               Type                |         Description          |
|-----------|-----------------------------------|------------------------------|
| name      | string                            | The key to store the data at |
| data      | [IData](/vanilla/api/data/IData)? | The data to store.           |


:::


## Operators

:::group{name=ADD}

Adds the given IData to this IData.

```zenscript
myEmptyData + other as IData
myEmptyData + 2
```

:::

:::group{name=AND}

Applies a bitwise AND (&) operation to this IData and the other IData

```zenscript
myEmptyData & other as IData
myEmptyData & 2
```

:::

:::group{name=CAT}

Concatenates the given IData to this IData.

```zenscript
myEmptyData ~ other as IData
myEmptyData ~ 2
```

:::

:::group{name=COMPARE}

Compares this IData to the other IData

```zenscript
myEmptyData < other as IData
myEmptyData < 5
```

:::

:::group{name=CONTAINS}

Checks if this IData contains the other IData <br />  <br />   <br />  For most data types, this will check equality of the data, but for map data, it will check if the other data is a string, and then check if it contains a key with that name

```zenscript
other as IData in myEmptyData
```

:::

:::group{name=DIV}

Divides the given IData from this IData.

```zenscript
myEmptyData / other as IData
myEmptyData / 2
```

:::

:::group{name=EQUALS}

Checks if this IData is equal to the other IData.

```zenscript
myEmptyData == other as IData
```

:::

:::group{name=INDEXGET}

Gets the data at the given index.

```zenscript
[myEmptyData]
[[1, 2, 3] as IData]
```

:::

:::group{name=INDEXSET}

Puts the given value inside this IData at the given index.

```zenscript
[myEmptyData] = index as string
[new MapData()] = "key"
```

:::

:::group{name=MOD}

Applies a modulo operation to this IData against the other IData.

```zenscript
myEmptyData % other as IData
myEmptyData % 2
```

:::

:::group{name=MUL}

Multiplies the given IData to this IData.

```zenscript
myEmptyData * other as IData
myEmptyData * 2
```

:::

:::group{name=NEG}

Negates this IData.

```zenscript
-myEmptyData
-myEmptyData
```

:::

:::group{name=NOT}

Applies a NOT (!) operation to this IData.

```zenscript
!myEmptyData
!true
```

:::

:::group{name=OR}

Applies a bitwise OR (|) operation to this IData and the other IData

```zenscript
myEmptyData | other as IData
myEmptyData | 2
```

:::

:::group{name=SHL}

Applies a SHL (<<) operation to this data by the other data

```zenscript
myEmptyData << other as IData
myEmptyData << 2
```

:::

:::group{name=SHR}

Applies a SHR (>>) operation to this data by the other data

```zenscript
myEmptyData >> other as IData
myEmptyData >> 2
```

:::

:::group{name=SUB}

Subtracts the given IData from this IData.

```zenscript
myEmptyData - other as IData
myEmptyData - 2
```

:::

:::group{name=XOR}

Applies a bitwise XOR (^) operation to this IData and the other IData

```zenscript
myEmptyData ^ other as IData
myEmptyData ^ 2
```

:::


## Properties

|  Name   |       Type        | Has Getter | Has Setter |          Description           |
|---------|-------------------|------------|------------|--------------------------------|
| isEmpty | boolean           | true       | false      | Checks if this data is empty.  |
| keys    | Set&lt;string&gt; | true       | false      | Gets the keys of this IData    |
| length  | int               | true       | false      | Gets the length of this IData. |

