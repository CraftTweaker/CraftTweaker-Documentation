# ByteArrayData



## Importare la Classe

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.data.ByteArrayData;
```


## Interfacce Implementate
ByteArrayData implements the following interfaces. That means all methods defined in these interfaces are also available in ByteArrayData

- [ICollectionData](/vanilla/api/data/ICollectionData)

## Constructors

No Description Provided
```zenscript
new ByteArrayData(internal as byte[]) as ByteArrayData
```
| Parametro | Tipo   | Descrizione             |
| --------- | ------ | ----------------------- |
| internal  | byte[] | No Description Provided |



## Caster

| Tipo Risultato                                       | Implicito |
| ---------------------------------------------------- | --------- |
| boolean                                              | no        |
| [ICollectionData](/vanilla/api/data/ICollectionData) | no        |
| [INumberData](/vanilla/api/data/INumberData)         | no        |

## Metodi

:::group{name=asBoolean}

Return Type: boolean

```zenscript
// ByteArrayData.asBoolean() as boolean

[4, 1, 2].asBoolean();
```

:::

:::group{name=asCollection}

Return Type: [ICollectionData](/vanilla/api/data/ICollectionData)

```zenscript
// ByteArrayData.asCollection() as ICollectionData

[4, 1, 2].asCollection();
```

:::

:::group{name=asMap}

Gets a Map<String, IData> representation of this IData, returns null on anything but [MapData](/vanilla/api/data/MapData).

Returns: null if this IData is not a map.  
Return Type: [IData](/vanilla/api/data/IData)[string]

```zenscript
// ByteArrayData.asMap() as IData[string]

[4, 1, 2].asMap();
```

:::

:::group{name=asNumber}

Return Type: [INumberData](/vanilla/api/data/INumberData)

```zenscript
// ByteArrayData.asNumber() as INumberData

[4, 1, 2].asNumber();
```

:::

:::group{name=asString}

Gets the String representation of this IData

Returns: String that represents this IData (value and type).  
Return Type: string

```zenscript
// ByteArrayData.asString() as string

[4, 1, 2].asString();
```

:::

:::group{name=contains}

Checks if this IData contains another IData, mainly used in subclasses of [ICollectionData](/vanilla/api/data/ICollectionData), is the same as an equals check on other IData types

Returns: true if the given IData is contained in this IData  
Return Type: boolean

```zenscript
// ByteArrayData.contains(data as IData) as boolean

[4, 1, 2].contains("Display");
```

| Parametro | Tipo                             | Descrizione                      |
| --------- | -------------------------------- | -------------------------------- |
| data      | [IData](/vanilla/api/data/IData) | data to check if it is contained |


:::

:::group{name=getId}

Gets the ID of the internal NBT tag.

 Used to determine what NBT type is stored (in a list for example)

Returns: ID of the NBT tag that this data represents.  
Return Type: byte

```zenscript
// ByteArrayData.getId() as byte

[4, 1, 2].getId();
```

:::

:::group{name=getString}

Gets the String representation of the internal INBT tag

Returns: String that represents the internal INBT of this IData.  
Return Type: string

```zenscript
// ByteArrayData.getString() as string

[4, 1, 2].getString();
```

:::


