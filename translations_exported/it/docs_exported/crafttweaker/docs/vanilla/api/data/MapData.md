# MapData



Questa classe è stata aggiunta da una mod con ID `crafttweaker`. Perciò, è necessario avere questa mod installata per poter utilizzare questa funzione.

## Importing the class
Potrebbe essere necessario importare il pacchetto, se si incontrano dei problemi (come castare un vettore), quindi meglio essere sicuri e aggiungere la direttiva di importazione.
```zenscript
crafttweaker.api.data.MapData
```

## Interfacce Implementate
MapData implements the following interfaces. Ciò significa che ogni metodo presente nell'interfaccia può essere usato anche per questa classe.
- [crafttweaker.api.data.IData](/vanilla/api/data/IData)

## Constructors
```zenscript
new crafttweaker.api.data.MapData();
```
```zenscript
new crafttweaker.api.data.MapData(map as crafttweaker.api.data.IData[String]);
```
| Parameter | Type                                                           | Description                 |
| --------- | -------------------------------------------------------------- | --------------------------- |
| map       | [crafttweaker.api.data.IData](/vanilla/api/data/IData)[String] | Nessuna descrizione fornita |



## Methods
### asList

Gets a List<IData> representation of this IData, returns null on anything but [crafttweaker.api.data.ListData](/vanilla/api/data/ListData).

 Returns: `null if this IData is not a list.`

Tipo di restituzione: Elenco&lt;[crafttweaker.api.data.IData](/vanilla/api/data/IData)&gt;

```zenscript
myMapData.asList();
```

### asMap

Gets a Map<String, IData> representation of this IData, returns null on anything but [crafttweaker.api.data.MapData](/vanilla/api/data/MapData).

 Returns: `null if this IData is not a map.`

Tipo restituito: [crafttweaker.api.data.IData](/vanilla/api/data/IData)[String]

```zenscript
myMapData.asMap();
```

### asString

Gets the String representation of this IData

 Returns: `String that represents this IData (value and type).`

Return type: String

```zenscript
myMapData.asString();
```

### contains

Checks if the Map contains the given key.

 Restituisce: `Vero se la mappa contiene la chiave`

Return type: boolean

```zenscript
myMapData.contains(key as String);
myMapData.contains("Hello");
```

| Parameter | Type   | Description           |
| --------- | ------ | --------------------- |
| key       | String | The key to search for |



Checks if this IData contains another IData, mainly used in subclasses of [crafttweaker.api.data.ICollectionData](/vanilla/api/data/ICollectionData), is the same as an equals check on other IData types

 Restituisce: `true se gli IData forniti sono contenuti in questo IData`

Return type: boolean

```zenscript
myMapData.contains(dati come crafttweaker.api.data.IData);
myMapData.contains("Display");
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
myMapData.copy();
```

### get

Retrieves the value associated with the key

 Restituisce: `Il valore se presente, null altrimenti`

Tipo restituito: [crafttweaker.api.data.IData](/vanilla/api/data/IData)

```zenscript
myMapData.get(key as String);
myMapData.get("Hello");
```

| Parameter | Type   | Description           |
| --------- | ------ | --------------------- |
| key       | String | The key to search for |


### getId

Gets the ID of the internal NBT tag.

 Used to determine what NBT type is stored (in a list for example)

 Returns: `ID of the NBT tag that this data represents.`

Tipo restituito: byte

```zenscript
myMapData.getId();
```

### getString

Gets the String representation of the internal INBT tag

 Returns: `String that represents the internal INBT of this IData.`

Return type: String

```zenscript
myMapData.getString();
```

### merge

Merges this map and the other map. If entries from this map and the other map share the values are tried to be merged. If that does not work, then the value from the other map is used.

 Restituisce: `Questa mappa, dopo la fusione`

Tipo di restituzione: [crafttweaker.api.data.MapData](/vanilla/api/data/MapData)

```zenscript
myMapData.merge(other as crafttweaker.api.data.MapData);
myMapData.merge({Doodle: "Do});
```

| Parameter | Type                                                       | Description    |
| --------- | ---------------------------------------------------------- | -------------- |
| other     | [crafttweaker.api.data.MapData](/vanilla/api/data/MapData) | The other map. |


### put

Adds sets the value for the given key or creates a new entry if it did not exist before.

 Restituisce: `Il valore precedente se presente, null altrimenti`

Tipo restituito: [crafttweaker.api.data.IData](/vanilla/api/data/IData)

```zenscript
myMapData.put(key as String, value as crafttweaker.api.data.IData);
myMapData.put("Hello", "Goodbye");
```

| Parameter | Type                                                   | Description                   |
| --------- | ------------------------------------------------------ | ----------------------------- |
| key       | String                                                 | The key to set the value for. |
| value     | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | The value to set.             |


### putAll

Adds all entries from the given map into this one. Can override existing keys.

```zenscript
myMapData.putAll(map as crafttweaker.api.data.IData[String]);
myMapData.putAll({Hello: "Goodbye", Item: "Bedrock"});
```

| Parameter | Type                                                           | Description                               |
| --------- | -------------------------------------------------------------- | ----------------------------------------- |
| map       | [crafttweaker.api.data.IData](/vanilla/api/data/IData)[String] | The other entries to be added to this map |


### remove

Removes the entry with the given key from the Map

```zenscript
myMapData.remove(key as String);
myMapData.remove("Somewhere");
```

| Parameter | Type   | Description                    |
| --------- | ------ | ------------------------------ |
| key       | String | The key of the entry to remove |



## Properties

| Name    | Type                              | Ha Getter | Ha Setter |
| ------- | --------------------------------- | --------- | --------- |
| isEmpty | boolean                           | true      | false     |
| keySet  | Imposta&lt;String&gt; | true      | false     |
| size    | int                               | true      | false     |

## Operators
### ADD

Adds all entries from the given IData to this entry

```zenscript
myMapData + data as crafttweaker.api.data.IData
```

| Parameter | Type                                                   | Description                 |
| --------- | ------------------------------------------------------ | --------------------------- |
| data      | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | Nessuna descrizione fornita |

## Caster

| Tipo Risultato                                                 | Implicito |
| -------------------------------------------------------------- | --------- |
| [crafttweaker.api.data.IData](/vanilla/api/data/IData)[String] | true      |

