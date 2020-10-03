# ByteArrayData



Questa classe è stata aggiunta da una mod con ID `crafttweaker`. Perciò, è necessario avere questa mod installata per poter utilizzare questa funzione.

## Importing the class
Potrebbe essere necessario importare il pacchetto, se si incontrano dei problemi (come castare un vettore), quindi meglio essere sicuri e aggiungere la direttiva di importazione.
```zenscript
crafttweaker.api.data.ByteArrayData
```

## Interfacce Implementate
ByteArrayData implements the following interfaces. Ciò significa che ogni metodo presente nell'interfaccia può essere usato anche per questa classe.
- [crafttweaker.api.data.ICollectionData](/vanilla/api/data/ICollectionData)
- [crafttweaker.api.data.IData](/vanilla/api/data/IData)

## Constructors
```zenscript
new crafttweaker.api.data.ByteArrayData(internal as byte[]);
```
| Parameter | Type   | Description                 |
| --------- | ------ | --------------------------- |
| internal  | byte[] | Nessuna descrizione fornita |



## Methods
### add

```zenscript
[4, 1, 2].add(value as crafttweaker.api.data.IData);
[4, 1, 2].add("today");
```

| Parameter | Type                                                   | Description                  |
| --------- | ------------------------------------------------------ | ---------------------------- |
| value     | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | The value to add to the list |



```zenscript
[4, 1, 2].add(index as int, value as crafttweaker.api.data.IData);
[4, 1, 2].add(1, "beautiful");
```

| Parameter | Type                                                   | Description                                                          |
| --------- | ------------------------------------------------------ | -------------------------------------------------------------------- |
| index     | int                                                    | The index to add to. Subsequent items will be moved one index higher |
| value     | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | The value to add to the list                                         |


### asList

Gets a List<IData> representation of this IData, returns null on anything but [crafttweaker.api.data.ListData](/vanilla/api/data/ListData).

 Returns: `null if this IData is not a list.`

Tipo di restituzione: Elenco&lt;[crafttweaker.api.data.IData](/vanilla/api/data/IData)&gt;

```zenscript
[4, 1, 2].asList();
```

### asMap

Gets a Map<String, IData> representation of this IData, returns null on anything but [crafttweaker.api.data.MapData](/vanilla/api/data/MapData).

 Returns: `null if this IData is not a map.`

Tipo restituito: [crafttweaker.api.data.IData](/vanilla/api/data/IData)[String]

```zenscript
[4, 1, 2].asMap();
```

### asString

Gets the String representation of this IData

 Returns: `String that represents this IData (value and type).`

Return type: String

```zenscript
[4, 1, 2].asString();
```

### clear

Removes every element in the list

```zenscript
[4, 1, 2].clear();
```

### contains

Checks if this IData contains another IData, mainly used in subclasses of [crafttweaker.api.data.ICollectionData](/vanilla/api/data/ICollectionData), is the same as an equals check on other IData types

 Restituisce: `true se gli IData forniti sono contenuti in questo IData`

Return type: boolean

```zenscript
[4, 1, 2].contains(dati come crafttweaker.api.data.IData);
[4, 1, 2].contains("Display");
```

| Parameter | Type                                                   | Description                      |
| --------- | ------------------------------------------------------ | -------------------------------- |
| data      | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | data to check if it is contained |


### copy

Makes a copy of this IData.

 IData is immutable by default, use this to create a proper copy of the object.

 Returns: `a copy of this IData.`

Tipo restituito: [crafttweaker.api.data.IData](/vanilla/api/data/IData)

```zenscript
[4, 1, 2].copy();
```

### get

Retrieves the [crafttweaker.api.data.IData](/vanilla/api/data/IData) stored at the given index. Restituisce: `Il [crafttweaker.api.data.IData](/vanilla/api/data/IData)`

Tipo restituito: [crafttweaker.api.data.IData](/vanilla/api/data/IData)

```zenscript
[4, 1, 2].get(index as int);
[4, 1, 2].get(0);
```

| Parameter | Type | Description         |
| --------- | ---- | ------------------- |
| index     | int  | The index (0-based) |


### getId

Gets the ID of the internal NBT tag.

 Used to determine what NBT type is stored (in a list for example)

 Returns: `ID of the NBT tag that this data represents.`

Tipo restituito: byte

```zenscript
[4, 1, 2].getId();
```

### getString

Gets the String representation of the internal INBT tag

 Returns: `String that represents the internal INBT of this IData.`

Return type: String

```zenscript
[4, 1, 2].getString();
```

### remove

Removes the [crafttweaker.api.data.IData](/vanilla/api/data/IData) stored at the given index. Restituisce: `Il [crafttweaker.api.data.IData](/vanilla/api/data/IData) che è stato rimosso`

Tipo restituito: [crafttweaker.api.data.IData](/vanilla/api/data/IData)

```zenscript
[4, 1, 2].remove(index as int);
[4, 1, 2].remove(0);
```

| Parameter | Type | Description         |
| --------- | ---- | ------------------- |
| index     | int  | The index (0-based) |


### set

Imposta l'elemento all'indice fornito al valore dato Restituisce: `Il valore sostituito`

Tipo restituito: [crafttweaker.api.data.IData](/vanilla/api/data/IData)

```zenscript
[4, 1, 2].set(index as int, value as crafttweaker.api.data.IData);
[4, 1, 2].set(0, "Bye");
```

| Parameter | Type                                                   | Description                |
| --------- | ------------------------------------------------------ | -------------------------- |
| index     | int                                                    | The index to set (0-based) |
| value     | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | The new Value              |



## Properties

| Name | Type | Ha Getter | Ha Setter |
| ---- | ---- | --------- | --------- |
| size | int  | true      | false     |

