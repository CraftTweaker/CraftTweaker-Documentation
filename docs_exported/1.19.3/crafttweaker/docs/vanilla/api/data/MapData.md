# MapData

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.data.MapData;
```


## Implemented Interfaces
MapData implements the following interfaces. That means all methods defined in these interfaces are also available in MapData

- [IData](/vanilla/api/data/IData)

## Constructors


```zenscript
new MapData() as MapData
new MapData();
```

```zenscript
new MapData(map as IData[string]) as MapData
```
| Parameter |                   Type                   |
|-----------|------------------------------------------|
| map       | [IData](/vanilla/api/data/IData)[string] |



## Casters

|                     Result Type                     | Is Implicit |
|-----------------------------------------------------|-------------|
| boolean                                             | false       |
| byte                                                | false       |
| byte[]                                              | false       |
| double                                              | false       |
| float                                               | false       |
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
// MapData.add(other as IData) as IData

(Hello: "World", Somewhere: "Over the rainbow").add(2);
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
// MapData.asBool() as boolean

(Hello: "World", Somewhere: "Over the rainbow").asBool();
```

:::

:::group{name=asByte}

Casts this IData to a byte.

Returns: this data as a byte  
Return Type: byte

```zenscript
// MapData.asByte() as byte

(Hello: "World", Somewhere: "Over the rainbow").asByte();
```

:::

:::group{name=asByteArray}

Casts this IData to a byte array.

Returns: this data as a byte array  
Return Type: byte[]

```zenscript
// MapData.asByteArray() as byte[]

(Hello: "World", Somewhere: "Over the rainbow").asByteArray();
```

:::

:::group{name=asDouble}

Casts this IData to a double.

Returns: this data as a double  
Return Type: double

```zenscript
// MapData.asDouble() as double

(Hello: "World", Somewhere: "Over the rainbow").asDouble();
```

:::

:::group{name=asFloat}

Casts this IData to a float.

Returns: this data as a float  
Return Type: float

```zenscript
// MapData.asFloat() as float

(Hello: "World", Somewhere: "Over the rainbow").asFloat();
```

:::

:::group{name=asInt}

Casts this IData to an int.

Returns: this data as an int  
Return Type: int

```zenscript
// MapData.asInt() as int

(Hello: "World", Somewhere: "Over the rainbow").asInt();
```

:::

:::group{name=asIntArray}

Casts this IData to an int array.

Returns: this data as an int array  
Return Type: int[]

```zenscript
// MapData.asIntArray() as int[]

(Hello: "World", Somewhere: "Over the rainbow").asIntArray();
```

:::

:::group{name=asList}

Casts this IData to a list.

Returns: this data as a list  
Return Type: stdlib.List&lt;[IData](/vanilla/api/data/IData)&gt;

```zenscript
// MapData.asList() as stdlib.List<IData>

(Hello: "World", Somewhere: "Over the rainbow").asList();
```

:::

:::group{name=asLong}

Casts this IData to a long.

Returns: this data as a long  
Return Type: long

```zenscript
// MapData.asLong() as long

(Hello: "World", Somewhere: "Over the rainbow").asLong();
```

:::

:::group{name=asLongArray}

Casts this IData to a long array.

Returns: this data as a long array  
Return Type: long[]

```zenscript
// MapData.asLongArray() as long[]

(Hello: "World", Somewhere: "Over the rainbow").asLongArray();
```

:::

:::group{name=asShort}

Casts this IData to a short.

Returns: this data as a short  
Return Type: short

```zenscript
// MapData.asShort() as short

(Hello: "World", Somewhere: "Over the rainbow").asShort();
```

:::

:::group{name=asString}

Gets an escaped string version of this IData, quotes are included in the output

 E.G `println(("hello" as IData).asString())` prints `"hello"`

Returns: The escaped string version of this IData.  
Return Type: string

```zenscript
// MapData.asString() as string

(Hello: "World", Somewhere: "Over the rainbow").asString();
```

:::

:::group{name=compareTo}

Compares this IData to the other IData

Returns: The comparison result.  
Return Type: int

```zenscript
// MapData.compareTo(other as IData) as int

(Hello: "World", Somewhere: "Over the rainbow").compareTo(5);
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
// MapData.getAsString() as string

(Hello: "World", Somewhere: "Over the rainbow").getAsString();
```

:::

:::group{name=getId}

Gets the internal ID of this data.

Returns: the intenral ID of this data.  
Return Type: byte

```zenscript
// MapData.getId() as byte

(Hello: "World", Somewhere: "Over the rainbow").getId();
```

:::

:::group{name=isEmpty}

Checks if this data is empty.

Returns: True if empty.  
Return Type: boolean

```zenscript
// MapData.isEmpty() as boolean

(Hello: "World", Somewhere: "Over the rainbow").isEmpty();
```

:::

:::group{name=map}

Maps this IData to another IData based on the given operation.

Returns: A new IData from the operation  
Return Type: [IData](/vanilla/api/data/IData)

```zenscript
// MapData.map(operation as Function<IData,IData>) as IData

(Hello: "World", Somewhere: "Over the rainbow").map((data) => 3);
```

| Parameter |                                       Type                                        |             Description              |
|-----------|-----------------------------------------------------------------------------------|--------------------------------------|
| operation | Function&lt;[IData](/vanilla/api/data/IData),[IData](/vanilla/api/data/IData)&gt; | The operation to apply to this IData |


:::

:::group{name=putAll}

Adds all entries from the given map into this one.
 Can override existing keys.

```zenscript
// MapData.putAll(map as IData[string])

(Hello: "World", Somewhere: "Over the rainbow").putAll({Hello: "Goodbye", Item: "Bedrock"});
```

| Parameter |                   Type                   |                Description                |
|-----------|------------------------------------------|-------------------------------------------|
| map       | [IData](/vanilla/api/data/IData)[string] | The other entries to be added to this map |


:::

:::group{name=setAt}

Sets the given value inside this IData at the given index.

```zenscript
MapData.setAt(name as string, data as IData?)
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
myMapData + other as IData
(Hello: "World", Somewhere: "Over the rainbow") + 2
```

:::

:::group{name=AND}

Applies a bitwise AND (&) operation to this IData and the other IData

```zenscript
myMapData & other as IData
(Hello: "World", Somewhere: "Over the rainbow") & 2
```

:::

:::group{name=CAT}

Concatenates the given IData to this IData.

```zenscript
myMapData ~ other as IData
(Hello: "World", Somewhere: "Over the rainbow") ~ 2
```

:::

:::group{name=COMPARE}

Compares this IData to the other IData

```zenscript
myMapData < other as IData
(Hello: "World", Somewhere: "Over the rainbow") < 5
```

:::

:::group{name=DIV}

Divides the given IData from this IData.

```zenscript
myMapData / other as IData
(Hello: "World", Somewhere: "Over the rainbow") / 2
```

:::

:::group{name=MOD}

Applies a modulo operation to this IData against the other IData.

```zenscript
myMapData % other as IData
(Hello: "World", Somewhere: "Over the rainbow") % 2
```

:::

:::group{name=MUL}

Multiplies the given IData to this IData.

```zenscript
myMapData * other as IData
(Hello: "World", Somewhere: "Over the rainbow") * 2
```

:::

:::group{name=NEG}

Negates this IData.

```zenscript
-myMapData
-(Hello: "World", Somewhere: "Over the rainbow")
```

:::

:::group{name=NOT}

Applies a NOT (!) operation to this IData.

```zenscript
!myMapData
!true
```

:::

:::group{name=OR}

Applies a bitwise OR (|) operation to this IData and the other IData

```zenscript
myMapData | other as IData
(Hello: "World", Somewhere: "Over the rainbow") | 2
```

:::

:::group{name=SHL}

Applies a SHL (<<) operation to this data by the other data

```zenscript
myMapData << other as IData
(Hello: "World", Somewhere: "Over the rainbow") << 2
```

:::

:::group{name=SHR}

Applies a SHR (>>) operation to this data by the other data

```zenscript
myMapData >> other as IData
(Hello: "World", Somewhere: "Over the rainbow") >> 2
```

:::

:::group{name=SUB}

Subtracts the given IData from this IData.

```zenscript
myMapData - other as IData
(Hello: "World", Somewhere: "Over the rainbow") - 2
```

:::

:::group{name=XOR}

Applies a bitwise XOR (^) operation to this IData and the other IData

```zenscript
myMapData ^ other as IData
(Hello: "World", Somewhere: "Over the rainbow") ^ 2
```

:::


## Properties

|  Name   |  Type   | Has Getter | Has Setter |          Description          |
|---------|---------|------------|------------|-------------------------------|
| isEmpty | boolean | true       | false      | Checks if this data is empty. |

