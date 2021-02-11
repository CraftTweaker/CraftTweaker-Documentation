# ListData



## Импорт класса

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.data.ListData;
```


## Implemented Interfaces
ListData implements the following interfaces. That means all methods defined in these interfaces are also available in ListData

- [ICollectionData](/vanilla/api/data/ICollectionData)

## Constructors

No Description Provided
```zenscript
new ListData() as ListData
new ListData();
```

No Description Provided
```zenscript
new ListData(list as stdlib.List<IData>) as ListData
```

| Параметр | Тип                                                             | Description             |
| -------- | --------------------------------------------------------------- | ----------------------- |
| list     | stdlib.List&lt;[IData](/vanilla/api/data/IData)&gt; | No Description Provided |



## Утилиты

| Тип результата                                                  | Является неявным |
| --------------------------------------------------------------- | ---------------- |
| [ICollectionData](/vanilla/api/data/ICollectionData)            | false            |
| [INumberData](/vanilla/api/data/INumberData)                    | false            |
| stdlib.List&lt;[IData](/vanilla/api/data/IData)&gt; | true             |

## Methods

### asCollection

Return Type: [ICollectionData](/vanilla/api/data/ICollectionData)

```zenscript
ListData.asCollection() as ICollectionData
["Hello", "World", "!"].asCollection();
```

### asMap

Gets a Map<String, IData> representation of this IData, returns null on anything but [MapData](/vanilla/api/data/MapData).

Return Type: [IData](/vanilla/api/data/IData)[string]

```zenscript
ListData.asMap() as IData[string]
["Hello", "World", "!"].asMap();
```

### asNumber

Return Type: [INumberData](/vanilla/api/data/INumberData)

```zenscript
ListData.asNumber() as INumberData
["Hello", "World", "!"].asNumber();
```

### getId

Gets the ID of the internal NBT tag.

 Used to determine what NBT type is stored (in a list for example)

Return Type: byte

```zenscript
ListData.getId() as byte
["Hello", "World", "!"].getId();
```

### getString

Gets the String representation of the internal INBT tag

Return Type: string

```zenscript
ListData.getString() as string
["Hello", "World", "!"].getString();
```


