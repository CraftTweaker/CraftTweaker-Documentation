# ByteArrayData



Esta clase fue añadida por un mod con la ID  `crafttweaker`. Necesitas tener este mod instalado si quieres usar esta caracteristica.

## Importar la clase
Puede ser requerido que importes el paquete si encuentras algun problema (como crear un Array).
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
| Parámetro | Tipo   | Descripción             |
| --------- | ------ | ----------------------- |
| interno   | byte[] | No description provided |



## Métodos
### añadir

```zenscript
[4, 1, 2].add(value as crafttweaker.api.data.IData);
[4, 1, 2].add("today");
```

| Parámetro | Tipo                                                   | Descripción                  |
| --------- | ------------------------------------------------------ | ---------------------------- |
| valor     | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | The value to add to the list |



```zenscript
[4, 1, 2].add(index as int, value as crafttweaker.api.data.IData);
[4, 1, 2].add(1, "beautiful");
```

| Parámetro | Tipo                                                   | Descripción                                                          |
| --------- | ------------------------------------------------------ | -------------------------------------------------------------------- |
| índice    | int                                                    | The index to add to. Subsequent items will be moved one index higher |
| valor     | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | The value to add to the list                                         |


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

| Parámetro | Tipo | Descripción         |
| --------- | ---- | ------------------- |
| índice    | int  | The index (0-based) |


### eliminar

Removes the [crafttweaker.api.data.IData](/vanilla/api/data/IData) stored at the given index.

Returns [crafttweaker.api.data.IData](/vanilla/api/data/IData)

```zenscript
[4, 1, 2].remove(index as int);
[4, 1, 2].remove(0);
```

| Parámetro | Tipo | Descripción         |
| --------- | ---- | ------------------- |
| índice    | int  | The index (0-based) |


### set

Sets the item at the provided index to the given value

Returns [crafttweaker.api.data.IData](/vanilla/api/data/IData)

```zenscript
[4, 1, 2].set(index as int, value as crafttweaker.api.data.IData);
[4, 1, 2].set(0, "Bye");
```

| Parámetro | Tipo                                                   | Descripción                |
| --------- | ------------------------------------------------------ | -------------------------- |
| índice    | int                                                    | The index to set (0-based) |
| valor     | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | The new Value              |



## Propiedades

| Nombre | Tipo | Has Getter | Has Setter |
| ------ | ---- | ---------- | ---------- |
| tamaño | int  | verdad     | falso      |

