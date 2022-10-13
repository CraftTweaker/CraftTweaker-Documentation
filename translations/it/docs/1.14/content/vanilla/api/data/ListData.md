# ListData



Questa classe è stata aggiunta da una mod con ID `crafttweaker`. Perciò, è necessario avere questa mod installata per poter utilizzare questa funzione.

## Importare la Classe
Potrebbe essere necessario importare il pacchetto, se si incontrano dei problemi (come castare un vettore), quindi meglio essere sicuri e aggiungere la direttiva di importazione.
```zenscript
crafttweaker.api.data.ListData
```

## Interfacce Implementate
ListData implements the following interfaces. Ciò significa che ogni metodo presente nell'interfaccia può essere usato anche per questa classe.
- [crafttweaker.api.data.ICollectionData](/vanilla/api/data/ICollectionData)

## Constructors
```zenscript
new crafttweaker.api.data.ListData();
```
```zenscript
new crafttweaker.api.data.ListData(list as List<crafttweaker.api.data.IData>);
```
| Parametro | Tipo                                                         | Descrizione                 | IsOptional | Default Value |
| --------- | ------------------------------------------------------------ | --------------------------- | ---------- | ------------- |
| list      | List<[crafttweaker.api.data.IData](/vanilla/api/data/IData)> | Nessuna descrizione fornita | sì         | null          |



## Metodi
### add

```zenscript
["Hello", "World", "!"].add(value as crafttweaker.api.data.IData);
["Hello", "World", "!"].add("today");
```

| Parametro | Tipo                                                   | Descrizione                  |
| --------- | ------------------------------------------------------ | ---------------------------- |
| valore    | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | The value to add to the list |



```zenscript
["Hello", "World", "!"].add(index as int, value as crafttweaker.api.data.IData);
["Hello", "World", "!"].add(1, "beautiful");
```

| Parametro | Tipo                                                   | Descrizione                                                          |
| --------- | ------------------------------------------------------ | -------------------------------------------------------------------- |
| indice    | int                                                    | The index to add to. Subsequent items will be moved one index higher |
| valore    | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | The value to add to the list                                         |


### clear

Removes every element in the list

```zenscript
["Hello", "World", "!"].clear();
```

### get

Retrieves the [crafttweaker.api.data.IData](/vanilla/api/data/IData) stored at the given index.

Returns [crafttweaker.api.data.IData](/vanilla/api/data/IData)

```zenscript
["Hello", "World", "!"].get(index as int);
["Hello", "World", "!"].get(0);
```

| Parametro | Tipo | Descrizione         |
| --------- | ---- | ------------------- |
| indice    | int  | The index (0-based) |


### remove

Removes the [crafttweaker.api.data.IData](/vanilla/api/data/IData) stored at the given index.

Returns [crafttweaker.api.data.IData](/vanilla/api/data/IData)

```zenscript
["Hello", "World", "!"].remove(index as int);
["Hello", "World", "!"].remove(0);
```

| Parametro | Tipo | Descrizione         |
| --------- | ---- | ------------------- |
| indice    | int  | The index (0-based) |


### set

Sets the item at the provided index to the given value

Returns [crafttweaker.api.data.IData](/vanilla/api/data/IData)

```zenscript
["Hello", "World", "!"].set(index as int, value as crafttweaker.api.data.IData);
["Hello", "World", "!"].set(0, "Bye");
```

| Parametro | Tipo                                                   | Descrizione                |
| --------- | ------------------------------------------------------ | -------------------------- |
| indice    | int                                                    | The index to set (0-based) |
| valore    | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | The new Value              |



## Proprietà

| Nome | Tipo | Ha Getter | Ha Setter |
| ---- | ---- | --------- | --------- |
| size | int  | sì        | no        |

## Caster

| Tipo Risultato                                               | Implicito |
| ------------------------------------------------------------ | --------- |
| List<[crafttweaker.api.data.IData](/vanilla/api/data/IData)> | sì        |

