# LongData



Questa classe è stata aggiunta da una mod con ID `crafttweaker`. Perciò, è necessario avere questa mod installata per poter utilizzare questa funzione.

## Importare la Classe
Potrebbe essere necessario importare il pacchetto, se si incontrano dei problemi (come castare un vettore), quindi meglio essere sicuri e aggiungere la direttiva di importazione.
```zenscript
crafttweaker.api.data.LongData
```

## Interfacce Implementate
LongData implements the following interfaces. Ciò significa che ogni metodo presente nell'interfaccia può essere usato anche per questa classe.
- [crafttweaker.api.data.INumberData](/vanilla/api/data/INumberData)

## Constructors
```zenscript
new crafttweaker.api.data.LongData(internal as long);
```
| Parametro | Tipo | Descrizione                 |
| --------- | ---- | --------------------------- |
| internal  | long | Nessuna descrizione fornita |



## Metodi
### asList

Gets a List<IData> representation of this IData, returns null on anything but [crafttweaker.api.data.ListData](/vanilla/api/data/ListData).

 Returns: `null if this IData is not a list.`

Returns List<[crafttweaker.api.data.IData](/vanilla/api/data/IData)>

```zenscript
800000000.asList();
```

### asMap

Gets a Map<String, IData> representation of this IData, returns null on anything but [crafttweaker.api.data.MapData](/vanilla/api/data/MapData).

 Returns: `null if this IData is not a map.`

Returns [crafttweaker.api.data.IData](/vanilla/api/data/IData)[String]

```zenscript
800000000.asMap();
```

### asString

Gets the String representation of this IData

 Returns: `String that represents this IData (value and type).`

Ritorna una stringa

```zenscript
800000000.asString();
```

### contains

Checks if this IData contains another IData, mainly used in subclasses of [crafttweaker.api.data.ICollectionData](/vanilla/api/data/ICollectionData), is the same as an equals check on other IData types

Restituisce un booleano

```zenscript
800000000.contains(data as crafttweaker.api.data.IData);
800000000.contains("Display");
```

| Parametro | Tipo                                                   | Descrizione                      |
| --------- | ------------------------------------------------------ | -------------------------------- |
| data      | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | data to check if it is contained |


### copy

Makes a copy of this IData.

 IData is immutable by default, use this to create a proper copy of the object.

 Returns: `a copy of this IData.`

Returns [crafttweaker.api.data.IData](/vanilla/api/data/IData)

```zenscript
800000000.copy();
```

### getId

Gets the ID of the internal NBT tag.

 Used to determine what NBT type is stored (in a list for example)

 Returns: `ID of the NBT tag that this data represents.`

Returns byte

```zenscript
800000000.getId();
```

### getString

Gets the String representation of the internal INBT tag

 Returns: `String that represents the internal INBT of this IData.`

Ritorna una stringa

```zenscript
800000000.getString();
```


