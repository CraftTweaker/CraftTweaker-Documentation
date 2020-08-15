# ListData



This class was added by a mod with mod-id `crafttweaker`. So you need to have this mod installed if you want to use this feature.

## Importation de la classe
It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zenscript
crafttweaker.api.data.ListData
```

## Implemented Interfaces
ListData implements the following interfaces. That means any method available to them can also be used on this class.
- [crafttweaker.api.data.ICollectionData](/vanilla/api/data/ICollectionData)

## Constructors
```zenscript
new crafttweaker.api.data.ListData();
```
```zenscript
new crafttweaker.api.data.ListData(list as List<crafttweaker.api.data.IData>);
```
| Paramètre | Type de texte                                                | Libellé                 | IsOptional | Valeur par défaut |
| --------- | ------------------------------------------------------------ | ----------------------- | ---------- | ----------------- |
| liste     | List<[crafttweaker.api.data.IData](/vanilla/api/data/IData)> | No description provided | vrai       | null              |



## Méthodes
### Ajouter

```zenscript
["Hello", "World", "!"].add(value as crafttweaker.api.data.IData);
["Hello", "World", "!"].add("today");
```

| Paramètre | Type de texte                                          | Libellé                      |
| --------- | ------------------------------------------------------ | ---------------------------- |
| valeur    | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | The value to add to the list |



```zenscript
["Hello", "World", "!"].add(index as int, value as crafttweaker.api.data.IData);
["Hello", "World", "!"].add(1, "beautiful");
```

| Paramètre | Type de texte                                          | Libellé                                                              |
| --------- | ------------------------------------------------------ | -------------------------------------------------------------------- |
| index     | Indice                                                 | The index to add to. Subsequent items will be moved one index higher |
| valeur    | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | The value to add to the list                                         |


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

| Paramètre | Type de texte | Libellé             |
| --------- | ------------- | ------------------- |
| index     | Indice        | The index (0-based) |


### Enlever

Removes the [crafttweaker.api.data.IData](/vanilla/api/data/IData) stored at the given index.

Returns [crafttweaker.api.data.IData](/vanilla/api/data/IData)

```zenscript
["Hello", "World", "!"].remove(index as int);
["Hello", "World", "!"].remove(0);
```

| Paramètre | Type de texte | Libellé             |
| --------- | ------------- | ------------------- |
| index     | Indice        | The index (0-based) |


### set

Sets the item at the provided index to the given value

Returns [crafttweaker.api.data.IData](/vanilla/api/data/IData)

```zenscript
["Hello", "World", "!"].set(index as int, value as crafttweaker.api.data.IData);
["Hello", "World", "!"].set(0, "Bye");
```

| Paramètre | Type de texte                                          | Libellé                    |
| --------- | ------------------------------------------------------ | -------------------------- |
| index     | Indice                                                 | The index to set (0-based) |
| valeur    | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | The new Value              |



## Propriétés

| Nom    | Type de texte | Has Getter | Has Setter |
| ------ | ------------- | ---------- | ---------- |
| taille | Indice        | vrai       | Faux       |

## Casters

| Result type                                                  | Is Implicit |
| ------------------------------------------------------------ | ----------- |
| List<[crafttweaker.api.data.IData](/vanilla/api/data/IData)> | vrai        |

