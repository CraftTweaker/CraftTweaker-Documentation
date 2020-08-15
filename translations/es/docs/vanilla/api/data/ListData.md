# ListData



Esta clase fue añadida por un mod con la ID  `crafttweaker`. Necesitas tener este mod instalado si quieres usar esta caracteristica.

## Importar la clase
Puede ser requerido que importes el paquete si encuentras algun problema (como crear un Array).
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
| Parámetro | Tipo                                                         | Descripción             | IsOptional | Valor por defecto |
| --------- | ------------------------------------------------------------ | ----------------------- | ---------- | ----------------- |
| lista     | List<[crafttweaker.api.data.IData](/vanilla/api/data/IData)> | No description provided | verdad     | nulo              |



## Métodos
### añadir

```zenscript
["Hello", "World", "!"].add(value as crafttweaker.api.data.IData);
["Hello", "World", "!"].add("today");
```

| Parámetro | Tipo                                                   | Descripción                  |
| --------- | ------------------------------------------------------ | ---------------------------- |
| valor     | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | The value to add to the list |



```zenscript
["Hello", "World", "!"].add(index as int, value as crafttweaker.api.data.IData);
["Hello", "World", "!"].add(1, "beautiful");
```

| Parámetro | Tipo                                                   | Descripción                                                          |
| --------- | ------------------------------------------------------ | -------------------------------------------------------------------- |
| índice    | int                                                    | The index to add to. Subsequent items will be moved one index higher |
| valor     | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | The value to add to the list                                         |


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

| Parámetro | Tipo | Descripción         |
| --------- | ---- | ------------------- |
| índice    | int  | The index (0-based) |


### eliminar

Removes the [crafttweaker.api.data.IData](/vanilla/api/data/IData) stored at the given index.

Returns [crafttweaker.api.data.IData](/vanilla/api/data/IData)

```zenscript
["Hello", "World", "!"].remove(index as int);
["Hello", "World", "!"].remove(0);
```

| Parámetro | Tipo | Descripción         |
| --------- | ---- | ------------------- |
| índice    | int  | The index (0-based) |


### set

Sets the item at the provided index to the given value

Returns [crafttweaker.api.data.IData](/vanilla/api/data/IData)

```zenscript
["Hello", "World", "!"].set(index as int, value as crafttweaker.api.data.IData);
["Hello", "World", "!"].set(0, "Bye");
```

| Parámetro | Tipo                                                   | Descripción                |
| --------- | ------------------------------------------------------ | -------------------------- |
| índice    | int                                                    | The index to set (0-based) |
| valor     | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | The new Value              |



## Propiedades

| Nombre | Tipo | Has Getter | Has Setter |
| ------ | ---- | ---------- | ---------- |
| tamaño | int  | verdad     | falso      |

## Casters

| Result type                                                  | Is Implicit |
| ------------------------------------------------------------ | ----------- |
| List<[crafttweaker.api.data.IData](/vanilla/api/data/IData)> | verdad      |

