# StringData



Questa classe è stata aggiunta da una mod con ID `crafttweaker`. Perciò, è necessario avere questa mod installata per poter utilizzare questa funzione.

## Importing the class
Potrebbe essere necessario importare il pacchetto, se si incontrano dei problemi (come castare un vettore), quindi meglio essere sicuri e aggiungere la direttiva di importazione.
```zenscript
crafttweaker.api.data.StringData
```

## Interfacce Implementate
StringData implements the following interfaces. Ciò significa che ogni metodo presente nell'interfaccia può essere usato anche per questa classe.
- [crafttweaker.api.data.IData](/vanilla/api/data/IData)

## Constructors
```zenscript
new crafttweaker.api.data.StringData(internal as String);
```
| Parameter | Type   | Description                 |
| --------- | ------ | --------------------------- |
| internal  | String | Nessuna descrizione fornita |



## Methods
### asList

Gets a List<IData> representation of this IData, returns null on anything but [crafttweaker.api.data.ListData](/vanilla/api/data/ListData).

 Returns: `null if this IData is not a list.`

Tipo di restituzione: Elenco&lt;[crafttweaker.api.data.IData](/vanilla/api/data/IData)&gt;

```zenscript
new StringData("Hello").asList();
```

### asMap

Gets a Map<String, IData> representation of this IData, returns null on anything but [crafttweaker.api.data.MapData](/vanilla/api/data/MapData).

 Returns: `null if this IData is not a map.`

Tipo restituito: [crafttweaker.api.data.IData](/vanilla/api/data/IData)[String]

```zenscript
new StringData("Hello").asMap();
```

### asString

Gets the String representation of this IData

 Returns: `String that represents this IData (value and type).`

Return type: String

```zenscript
new StringData("Hello").asString();
```

### contains

Checks if this IData contains another IData, mainly used in subclasses of [crafttweaker.api.data.ICollectionData](/vanilla/api/data/ICollectionData), is the same as an equals check on other IData types

 Restituisce: `true se gli IData forniti sono contenuti in questo IData`

Return type: boolean

```zenscript
new StringData("Hello").contains(data as crafttweaker.api.data.IData);
new StringData("Hello").contains("Display");
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
new StringData("Hello").copy();
```

### getId

Gets the ID of the internal NBT tag.

 Used to determine what NBT type is stored (in a list for example)

 Returns: `ID of the NBT tag that this data represents.`

Tipo restituito: byte

```zenscript
new StringData("Hello").getId();
```

### getString

Gets the String representation of the internal INBT tag

 Returns: `String that represents the internal INBT of this IData.`

Return type: String

```zenscript
new StringData("Hello").getString();
```


## Operators
### ADD

Concatenates the two string Datas and returns the result.

 Restituisce: `Una nuova StringData con il valore concatenato.`

```zenscript
new StringData("Hello") + data as crafttweaker.api.data.StringData
new StringData("Hello") + new StringData("World")
```

| Parameter | Type                                                             | Description              |
| --------- | ---------------------------------------------------------------- | ------------------------ |
| data      | [crafttweaker.api.data.StringData](/vanilla/api/data/StringData) | The other data to append |

