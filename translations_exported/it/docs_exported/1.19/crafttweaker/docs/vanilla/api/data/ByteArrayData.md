# ByteArrayData

## Importare la Classe

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.data.ByteArrayData;
```


## Interfacce Implementate
ByteArrayData implements the following interfaces. That means all methods defined in these interfaces are also available in ByteArrayData

- [IData](/vanilla/api/data/IData)

## Constructors


```zenscript
new ByteArrayData(internal as byte[]) as ByteArrayData
```
| Parametro | Tipo   |
| --------- | ------ |
| internal  | byte[] |



## Caster

| Result Type                              | Implicito |
| ---------------------------------------- | --------- |
| boolean                                  | no        |
| byte                                     | no        |
| double                                   | no        |
| float                                    | no        |
| [IData](/vanilla/api/data/IData)[string] | no        |
| int                                      | no        |
| long                                     | no        |
| short                                    | no        |
| string                                   | no        |

## Metodi

:::group{name=add}

Adds the given IData to this IData.

Returns: A new IData after adding the other data.  
Return Type: [IData](/vanilla/api/data/IData)

```zenscript
// ByteArrayData.add(other as IData) as IData

([4, 1, 2] as IData).add(2);
```

| Parametro | Tipo                             | Descrizione            |
| --------- | -------------------------------- | ---------------------- |
| other     | [IData](/vanilla/api/data/IData) | the other data to add. |


:::

:::group{name=asBool}

Casts this IData to a boolean.

Returns: this data as a bool  
Return Type: boolean

```zenscript
// ByteArrayData.asBool() as boolean

([4, 1, 2] as IData).asBool();
```

:::

:::group{name=asByte}

Casts this IData to a byte.

Returns: this data as a byte  
Return Type: byte

```zenscript
// ByteArrayData.asByte() as byte

([4, 1, 2] as IData).asByte();
```

:::

:::group{name=asDouble}

Casts this IData to a double.

Returns: this data as a double  
Return Type: double

```zenscript
// ByteArrayData.asDouble() as double

([4, 1, 2] as IData).asDouble();
```

:::

:::group{name=asFloat}

Casts this IData to a float.

Returns: this data as a float  
Return Type: float

```zenscript
// ByteArrayData.asFloat() as float

([4, 1, 2] as IData).asFloat();
```

:::

:::group{name=asInt}

Casts this IData to an int.

Returns: this data as an int  
Return Type: int

```zenscript
// ByteArrayData.asInt() as int

([4, 1, 2] as IData).asInt();
```

:::

:::group{name=asLong}

Casts this IData to a long.

Returns: this data as a long  
Return Type: long

```zenscript
// ByteArrayData.asLong() as long

([4, 1, 2] as IData).asLong();
```

:::

:::group{name=asMap}

Casts this IData to a map.

Returns: this data as a map  
Return Type: [IData](/vanilla/api/data/IData)[string]

```zenscript
// ByteArrayData.asMap() as IData[string]

([4, 1, 2] as IData).asMap();
```

:::

:::group{name=asShort}

Casts this IData to a short.

Returns: this data as a short  
Return Type: short

```zenscript
// ByteArrayData.asShort() as short

([4, 1, 2] as IData).asShort();
```

:::

:::group{name=asString}

Gets an escaped string version of this IData, quotes are included in the output

 E.G `println(("hello" as IData).asString())` prints `"hello"`

Returns: The escaped string version of this IData.  
Return Type: string

```zenscript
// ByteArrayData.asString() as string

([4, 1, 2] as IData).asString();
```

:::

:::group{name=getAsString}

Gets the literal string version of this IData.

 E.G `println(("hello" as IData).getAsString())` prints `hello`

Returns: The literal string version of this IData.  
Return Type: string

```zenscript
// ByteArrayData.getAsString() as string

([4, 1, 2] as IData).getAsString();
```

:::

:::group{name=getId}

Gets the internal ID of this data.

Returns: the intenral ID of this data.  
Return Type: byte

```zenscript
// ByteArrayData.getId() as byte

([4, 1, 2] as IData).getId();
```

:::

:::group{name=getKeys}

Gets the keys of this IData

Returns: The keys of this IData.  
Return Type: Set&lt;string&gt;

```zenscript
// ByteArrayData.getKeys() as Set<string>

([4, 1, 2] as IData).getKeys();
```

:::

:::group{name=isEmpty}

Checks if this data is empty.

Returns: True if empty.  
Return Type: boolean

```zenscript
// ByteArrayData.isEmpty() as boolean

([4, 1, 2] as IData).isEmpty();
```

:::

:::group{name=map}

Maps this IData to another IData based on the given operation.

Returns: A new IData from the operation  
Return Type: [IData](/vanilla/api/data/IData)

```zenscript
// ByteArrayData.map(operation as Function<IData,IData>) as IData

([4, 1, 2] as IData).map((data) => 3);
```

| Parametro | Tipo                                                                                          | Descrizione                          |
| --------- | --------------------------------------------------------------------------------------------- | ------------------------------------ |
| operation | Function&lt;[IData](/vanilla/api/data/IData),[IData](/vanilla/api/data/IData)&gt; | The operation to apply to this IData |


:::

:::group{name=merge}

Merges the given data with this data.

Returns: the result of merging the datas.  
Return Type: [IData](/vanilla/api/data/IData)

```zenscript
ByteArrayData.merge(other as IData) as IData
```

| Parametro | Tipo                             | Descrizione       |
| --------- | -------------------------------- | ----------------- |
| other     | [IData](/vanilla/api/data/IData) | the data to merge |


:::

:::group{name=remove}

Removes the stored data at the given key.

```zenscript
// ByteArrayData.remove(key as string)

{key: "value"} as IData.remove("key");
```

| Parametro | Tipo   | Descrizione        |
| --------- | ------ | ------------------ |
| key       | string | The key to remove. |


:::

:::group{name=setAt}

Sets the given value inside this IData at the given index.

```zenscript
ByteArrayData.setAt(name as string, data as IData?)
```

| Parametro | Tipo                              | Descrizione                  |
| --------- | --------------------------------- | ---------------------------- |
| nome      | string                            | The key to store the data at |
| data      | [IData](/vanilla/api/data/IData)? | The data to store.           |


:::


## Operators

:::group{name=ADD}

Adds the given IData to this IData.

```zenscript
myByteArrayData + other as IData
([4, 1, 2] as IData) + 2
```

:::

:::group{name=AND}

Applies a bitwise AND (&) operation to this IData and the other IData

```zenscript
myByteArrayData & other as IData
([4, 1, 2] as IData) & 2
```

:::

:::group{name=CAT}

Concatenates the given IData to this IData.

```zenscript
myByteArrayData ~ other as IData
([4, 1, 2] as IData) ~ 2
```

:::

:::group{name=DIV}

Divides the given IData from this IData.

```zenscript
myByteArrayData / other as IData
([4, 1, 2] as IData) / 2
```

:::

:::group{name=INDEXGET}

Gets the data at the given key.

```zenscript
[myByteArrayData]
```

:::

:::group{name=MOD}

Applies a modulo operation to this IData against the other IData.

```zenscript
myByteArrayData % other as IData
([4, 1, 2] as IData) % 2
```

:::

:::group{name=MUL}

Multiplies the given IData to this IData.

```zenscript
myByteArrayData * other as IData
([4, 1, 2] as IData) * 2
```

:::

:::group{name=NEG}

Negates this IData.

```zenscript
-myByteArrayData
-([4, 1, 2] as IData)
```

:::

:::group{name=NOT}

Applies a NOT (!) operation to this IData.

```zenscript
!myByteArrayData
!true
```

:::

:::group{name=OR}

Applies a bitwise OR (|) operation to this IData and the other IData

```zenscript
myByteArrayData | other as IData
([4, 1, 2] as IData) | 2
```

:::

:::group{name=SHL}

Applies a SHL (<<) operation to this data by the other data

```zenscript
myByteArrayData << other as IData
([4, 1, 2] as IData) << 2
```

:::

:::group{name=SHR}

Applies a SHR (>>) operation to this data by the other data

```zenscript
myByteArrayData >> other as IData
([4, 1, 2] as IData) >> 2
```

:::

:::group{name=SUB}

Subtracts the given IData from this IData.

```zenscript
myByteArrayData - other as IData
([4, 1, 2] as IData) - 2
```

:::

:::group{name=XOR}

Applies a bitwise XOR (^) operation to this IData and the other IData

```zenscript
myByteArrayData ^ other as IData
([4, 1, 2] as IData) ^ 2
```

:::


## Proprietà

| Nome    | Tipo                          | Ha Getter | Ha Setter | Descrizione                   |
| ------- | ----------------------------- | --------- | --------- | ----------------------------- |
| isEmpty | boolean                       | sì        | no        | Checks if this data is empty. |
| keys    | Set&lt;string&gt; | sì        | no        | Gets the keys of this IData   |

