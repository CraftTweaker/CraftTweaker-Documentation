# BoolData

Careful with BoolData: While it works for specifying boolean attributes in JSON syntax,
 using it in Tags will instead use a [ByteData](/vanilla/api/data/ByteData) object. Reason for this is that
 Minecraft does not have Boolean NBT values.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.data.BoolData;
```


## Implemented Interfaces
BoolData implements the following interfaces. That means all methods defined in these interfaces are also available in BoolData

- [IData](/vanilla/api/data/IData)

## Constructors


```zenscript
new BoolData(internalValue as boolean) as BoolData
```
|   Parameter   |  Type   |
|---------------|---------|
| internalValue | boolean |



## Casters

|                     Result Type                     | Is Implicit |
|-----------------------------------------------------|-------------|
| boolean                                             | true        |
| byte[]                                              | false       |
| [ByteData](/vanilla/api/data/ByteData)              | false       |
| [IData](/vanilla/api/data/IData)[string]            | false       |
| int[]                                               | false       |
| long[]                                              | false       |
| stdlib.List&lt;[IData](/vanilla/api/data/IData)&gt; | false       |
| string                                              | false       |

## Methods

:::group{name=add}

Adds the given IData to this IData.

Returns: A new IData after adding the other data.  
Return Type: [IData](/vanilla/api/data/IData)

```zenscript
// BoolData.add(other as IData) as IData

(true as IData).add(2);
```

| Parameter |               Type               |      Description       |
|-----------|----------------------------------|------------------------|
| other     | [IData](/vanilla/api/data/IData) | the other data to add. |


:::

:::group{name=asByteArray}

Casts this IData to a byte array.

Returns: this data as a byte array  
Return Type: byte[]

```zenscript
// BoolData.asByteArray() as byte[]

(true as IData).asByteArray();
```

:::

:::group{name=asIntArray}

Casts this IData to an int array.

Returns: this data as an int array  
Return Type: int[]

```zenscript
// BoolData.asIntArray() as int[]

(true as IData).asIntArray();
```

:::

:::group{name=asList}

Casts this IData to a list.

Returns: this data as a list  
Return Type: stdlib.List&lt;[IData](/vanilla/api/data/IData)&gt;

```zenscript
// BoolData.asList() as stdlib.List<IData>

(true as IData).asList();
```

:::

:::group{name=asLongArray}

Casts this IData to a long array.

Returns: this data as a long array  
Return Type: long[]

```zenscript
// BoolData.asLongArray() as long[]

(true as IData).asLongArray();
```

:::

:::group{name=asMap}

Casts this IData to a map.

Returns: this data as a map  
Return Type: [IData](/vanilla/api/data/IData)[string]

```zenscript
// BoolData.asMap() as IData[string]

(true as IData).asMap();
```

:::

:::group{name=asString}

Gets an escaped string version of this IData, quotes are included in the output

 E.G `println(("hello" as IData).asString())` prints `"hello"`

Returns: The escaped string version of this IData.  
Return Type: string

```zenscript
// BoolData.asString() as string

(true as IData).asString();
```

:::

:::group{name=getAsString}

Gets the literal string version of this IData.

 E.G `println(("hello" as IData).getAsString())` prints `hello`

Returns: The literal string version of this IData.  
Return Type: string

```zenscript
// BoolData.getAsString() as string

(true as IData).getAsString();
```

:::

:::group{name=getByteData}

Return Type: [ByteData](/vanilla/api/data/ByteData)

```zenscript
// BoolData.getByteData() as ByteData

(true as IData).getByteData();
```

:::

:::group{name=getId}

Gets the internal ID of this data.

Returns: the intenral ID of this data.  
Return Type: byte

```zenscript
// BoolData.getId() as byte

(true as IData).getId();
```

:::

:::group{name=getKeys}

Gets the keys of this IData

Returns: The keys of this IData.  
Return Type: Set&lt;string&gt;

```zenscript
// BoolData.getKeys() as Set<string>

(true as IData).getKeys();
```

:::

:::group{name=isEmpty}

Checks if this data is empty.

Returns: True if empty.  
Return Type: boolean

```zenscript
// BoolData.isEmpty() as boolean

(true as IData).isEmpty();
```

:::

:::group{name=length}

Gets the length of this IData.

Returns: The length of this IData.  
Return Type: int

```zenscript
// BoolData.length() as int

(true as IData).length();
```

:::

:::group{name=map}

Maps this IData to another IData based on the given operation.

Returns: A new IData from the operation  
Return Type: [IData](/vanilla/api/data/IData)

```zenscript
// BoolData.map(operation as Function<IData,IData>) as IData

(true as IData).map((data) => 3);
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
BoolData.merge(other as IData) as IData
```

| Parameter |               Type               |    Description    |
|-----------|----------------------------------|-------------------|
| other     | [IData](/vanilla/api/data/IData) | the data to merge |


:::

:::group{name=put}

Puts the given value inside this IData at the given index.

```zenscript
// BoolData.put(index as string, value as IData?)

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
// BoolData.remove(index as int)

[1, 2, 3] as IData.remove(0);
```

| Parameter | Type |     Description      |
|-----------|------|----------------------|
| index     | int  | The index to remove. |


:::

:::group{name=remove}

Removes the stored data at the given key.

```zenscript
// BoolData.remove(key as string)

{key: "value"} as IData.remove("key");
```

| Parameter |  Type  |    Description     |
|-----------|--------|--------------------|
| key       | string | The key to remove. |


:::

:::group{name=setAt}

Sets the given value inside this IData at the given index.

```zenscript
BoolData.setAt(name as string, data as IData?)
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
myBoolData + other as IData
(true as IData) + 2
```

:::

:::group{name=CAT}

Concatenates the given IData to this IData.

```zenscript
myBoolData ~ other as IData
(true as IData) ~ 2
```

:::

:::group{name=DIV}

Divides the given IData from this IData.

```zenscript
myBoolData / other as IData
(true as IData) / 2
```

:::

:::group{name=INDEXGET}

Gets the data at the given index.

```zenscript
[myBoolData]
[[1, 2, 3] as IData]
```

:::

:::group{name=INDEXSET}

Puts the given value inside this IData at the given index.

```zenscript
[myBoolData] = index as string
[new MapData()] = "key"
```

:::

:::group{name=MOD}

Applies a modulo operation to this IData against the other IData.

```zenscript
myBoolData % other as IData
(true as IData) % 2
```

:::

:::group{name=MUL}

Multiplies the given IData to this IData.

```zenscript
myBoolData * other as IData
(true as IData) * 2
```

:::

:::group{name=NEG}

Negates this IData.

```zenscript
-myBoolData
-(true as IData)
```

:::

:::group{name=SHL}

Applies a SHL (<<) operation to this data by the other data

```zenscript
myBoolData << other as IData
(true as IData) << 2
```

:::

:::group{name=SHR}

Applies a SHR (>>) operation to this data by the other data

```zenscript
myBoolData >> other as IData
(true as IData) >> 2
```

:::

:::group{name=SUB}

Subtracts the given IData from this IData.

```zenscript
myBoolData - other as IData
(true as IData) - 2
```

:::


## Properties

|  Name   |       Type        | Has Getter | Has Setter |          Description           |
|---------|-------------------|------------|------------|--------------------------------|
| isEmpty | boolean           | true       | false      | Checks if this data is empty.  |
| keys    | Set&lt;string&gt; | true       | false      | Gets the keys of this IData    |
| length  | int               | true       | false      | Gets the length of this IData. |

