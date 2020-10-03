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


### clear

Removes every element in the list

```zenscript
[4, 1, 2].clear();
```

### get

Retrieves the [crafttweaker.api.data.IData](/vanilla/api/data/IData) stored at the given index.

Returns [crafttweaker.api.data.IData](/vanilla/api/data/IData)

```zenscript
[4, 1, 2].get(index as int);
[4, 1, 2].get(0);
```

| Parameter | Type | Description         |
| --------- | ---- | ------------------- |
| index     | int  | The index (0-based) |


### remove

Removes the [crafttweaker.api.data.IData](/vanilla/api/data/IData) stored at the given index.

Returns [crafttweaker.api.data.IData](/vanilla/api/data/IData)

```zenscript
[4, 1, 2].remove(index as int);
[4, 1, 2].remove(0);
```

| Parameter | Type | Description         |
| --------- | ---- | ------------------- |
| index     | int  | The index (0-based) |


### set

Sets the item at the provided index to the given value

Returns [crafttweaker.api.data.IData](/vanilla/api/data/IData)

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

