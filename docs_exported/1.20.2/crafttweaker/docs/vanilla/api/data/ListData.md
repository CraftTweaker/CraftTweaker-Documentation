# ListData

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.data.ListData;
```


## Implemented Interfaces
ListData implements the following interfaces. That means all methods defined in these interfaces are also available in ListData

- [IData](/vanilla/api/data/IData)

## Constructors


```zenscript
new ListData() as ListData
new ListData();
```

```zenscript
new ListData(list as stdlib.List<IData>) as ListData
```
| Parameter |                        Type                         |
|-----------|-----------------------------------------------------|
| list      | stdlib.List&lt;[IData](/vanilla/api/data/IData)&gt; |



## Casters

|               Result Type                | Is Implicit |
|------------------------------------------|-------------|
| boolean                                  | false       |
| byte                                     | false       |
| double                                   | false       |
| float                                    | false       |
| [IData](/vanilla/api/data/IData)[string] | false       |
| int                                      | false       |
| long                                     | false       |
| short                                    | false       |
| string                                   | false       |

## Methods

:::group{name=asBool}

Casts this IData to a boolean.

Returns: this data as a bool  
Return Type: boolean

```zenscript
// ListData.asBool() as boolean

(["Hello", "World", "!"] as IData).asBool();
```

:::

:::group{name=asByte}

Casts this IData to a byte.

Returns: this data as a byte  
Return Type: byte

```zenscript
// ListData.asByte() as byte

(["Hello", "World", "!"] as IData).asByte();
```

:::

:::group{name=asDouble}

Casts this IData to a double.

Returns: this data as a double  
Return Type: double

```zenscript
// ListData.asDouble() as double

(["Hello", "World", "!"] as IData).asDouble();
```

:::

:::group{name=asFloat}

Casts this IData to a float.

Returns: this data as a float  
Return Type: float

```zenscript
// ListData.asFloat() as float

(["Hello", "World", "!"] as IData).asFloat();
```

:::

:::group{name=asInt}

Casts this IData to an int.

Returns: this data as an int  
Return Type: int

```zenscript
// ListData.asInt() as int

(["Hello", "World", "!"] as IData).asInt();
```

:::

:::group{name=asLong}

Casts this IData to a long.

Returns: this data as a long  
Return Type: long

```zenscript
// ListData.asLong() as long

(["Hello", "World", "!"] as IData).asLong();
```

:::

:::group{name=asMap}

Casts this IData to a map.

Returns: this data as a map  
Return Type: [IData](/vanilla/api/data/IData)[string]

```zenscript
// ListData.asMap() as IData[string]

(["Hello", "World", "!"] as IData).asMap();
```

:::

:::group{name=asShort}

Casts this IData to a short.

Returns: this data as a short  
Return Type: short

```zenscript
// ListData.asShort() as short

(["Hello", "World", "!"] as IData).asShort();
```

:::

:::group{name=asString}

Gets an escaped string version of this IData, quotes are included in the output

 E.G `println(("hello" as IData).asString())` prints `"hello"`

Returns: The escaped string version of this IData.  
Return Type: string

```zenscript
// ListData.asString() as string

(["Hello", "World", "!"] as IData).asString();
```

:::

:::group{name=compareTo}

Compares this IData to the other IData

Returns: The comparison result.  
Return Type: int

```zenscript
// ListData.compareTo(other as IData) as int

(["Hello", "World", "!"] as IData).compareTo(5);
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
// ListData.getAsString() as string

(["Hello", "World", "!"] as IData).getAsString();
```

:::

:::group{name=getId}

Gets the internal ID of this data.

Returns: the intenral ID of this data.  
Return Type: byte

```zenscript
// ListData.getId() as byte

(["Hello", "World", "!"] as IData).getId();
```

:::

:::group{name=isEmpty}

Checks if this data is empty.

Returns: True if empty.  
Return Type: boolean

```zenscript
// ListData.isEmpty() as boolean

(["Hello", "World", "!"] as IData).isEmpty();
```

:::

:::group{name=map}

Maps this IData to another IData based on the given operation.

Returns: A new IData from the operation  
Return Type: [IData](/vanilla/api/data/IData)

```zenscript
// ListData.map(operation as Function<IData,IData>) as IData

(["Hello", "World", "!"] as IData).map((data) => 3);
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
ListData.merge(other as IData) as IData
```

| Parameter |               Type               |    Description    |
|-----------|----------------------------------|-------------------|
| other     | [IData](/vanilla/api/data/IData) | the data to merge |


:::

:::group{name=remove}

Removes the stored data at the given key.

```zenscript
// ListData.remove(key as string)

{key: "value"} as IData.remove("key");
```

| Parameter |  Type  |    Description     |
|-----------|--------|--------------------|
| key       | string | The key to remove. |


:::

:::group{name=setAt}

Sets the given value inside this IData at the given index.

```zenscript
ListData.setAt(name as string, data as IData?)
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
myListData & other as IData
(["Hello", "World", "!"] as IData) & 2
```

:::

:::group{name=CAT}

Concatenates the given IData to this IData.

```zenscript
myListData ~ other as IData
(["Hello", "World", "!"] as IData) ~ 2
```

:::

:::group{name=COMPARE}

Compares this IData to the other IData

```zenscript
myListData < other as IData
(["Hello", "World", "!"] as IData) < 5
```

:::

:::group{name=DIV}

Divides the given IData from this IData.

```zenscript
myListData / other as IData
(["Hello", "World", "!"] as IData) / 2
```

:::

:::group{name=INDEXGET}

Gets the data at the given key.

```zenscript
[myListData]
```

:::

:::group{name=MOD}

Applies a modulo operation to this IData against the other IData.

```zenscript
myListData % other as IData
(["Hello", "World", "!"] as IData) % 2
```

:::

:::group{name=MUL}

Multiplies the given IData to this IData.

```zenscript
myListData * other as IData
(["Hello", "World", "!"] as IData) * 2
```

:::

:::group{name=NEG}

Negates this IData.

```zenscript
-myListData
-(["Hello", "World", "!"] as IData)
```

:::

:::group{name=NOT}

Applies a NOT (!) operation to this IData.

```zenscript
!myListData
!true
```

:::

:::group{name=OR}

Applies a bitwise OR (|) operation to this IData and the other IData

```zenscript
myListData | other as IData
(["Hello", "World", "!"] as IData) | 2
```

:::

:::group{name=SHL}

Applies a SHL (<<) operation to this data by the other data

```zenscript
myListData << other as IData
(["Hello", "World", "!"] as IData) << 2
```

:::

:::group{name=SHR}

Applies a SHR (>>) operation to this data by the other data

```zenscript
myListData >> other as IData
(["Hello", "World", "!"] as IData) >> 2
```

:::

:::group{name=SUB}

Subtracts the given IData from this IData.

```zenscript
myListData - other as IData
(["Hello", "World", "!"] as IData) - 2
```

:::

:::group{name=XOR}

Applies a bitwise XOR (^) operation to this IData and the other IData

```zenscript
myListData ^ other as IData
(["Hello", "World", "!"] as IData) ^ 2
```

:::


## Properties

|  Name   |  Type   | Has Getter | Has Setter |          Description          |
|---------|---------|------------|------------|-------------------------------|
| isEmpty | boolean | true       | false      | Checks if this data is empty. |

