# ByteArrayData



This class was added by a mod with mod-id `crafttweaker`. So you need to have this mod installed if you want to use this feature.

## Importation de la classe
It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zenscript
crafttweaker.api.data.ByteArrayData
```

## Implemented Interfaces
ByteArrayData implements the following interfaces. That means any method available to them can also be used on this class.
- [crafttweaker.api.data.ICollectionData](/vanilla/api/data/ICollectionData)

## Constructors
```zenscript
new crafttweaker.api.data.ByteArrayData(internal as byte[]);
```
| Paramètre | Type de texte | Libellé                 |
| --------- | ------------- | ----------------------- |
| interne   | octet[]       | No description provided |



## Méthodes
### Ajouter

```zenscript
[4, 1, 2].add(value as crafttweaker.api.data.IData);
[4, 1, 2].add("today");
```

| Paramètre | Type de texte                                          | Libellé                      |
| --------- | ------------------------------------------------------ | ---------------------------- |
| valeur    | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | The value to add to the list |



```zenscript
[4, 1, 2].add(index as int, value as crafttweaker.api.data.IData);
[4, 1, 2].add(1, "beautiful");
```

| Paramètre | Type de texte                                          | Libellé                                                              |
| --------- | ------------------------------------------------------ | -------------------------------------------------------------------- |
| index     | Indice                                                 | The index to add to. Subsequent items will be moved one index higher |
| valeur    | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | The value to add to the list                                         |


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

| Paramètre | Type de texte | Libellé             |
| --------- | ------------- | ------------------- |
| index     | Indice        | The index (0-based) |


### Enlever

Removes the [crafttweaker.api.data.IData](/vanilla/api/data/IData) stored at the given index.

Returns [crafttweaker.api.data.IData](/vanilla/api/data/IData)

```zenscript
[4, 1, 2].remove(index as int);
[4, 1, 2].remove(0);
```

| Paramètre | Type de texte | Libellé             |
| --------- | ------------- | ------------------- |
| index     | Indice        | The index (0-based) |


### set

Sets the item at the provided index to the given value

Returns [crafttweaker.api.data.IData](/vanilla/api/data/IData)

```zenscript
[4, 1, 2].set(index as int, value as crafttweaker.api.data.IData);
[4, 1, 2].set(0, "Bye");
```

| Paramètre | Type de texte                                          | Libellé                    |
| --------- | ------------------------------------------------------ | -------------------------- |
| index     | Indice                                                 | The index to set (0-based) |
| valeur    | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | The new Value              |



## Propriétés

| Nom    | Type de texte | Has Getter | Has Setter |
| ------ | ------------- | ---------- | ---------- |
| taille | Indice        | vrai       | Faux       |

