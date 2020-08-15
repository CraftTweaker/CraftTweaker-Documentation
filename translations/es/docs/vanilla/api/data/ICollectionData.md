# ICollectionData

The ICollection data is used to represent a collection of [crafttweaker.api.data.IData](/vanilla/api/data/IData) like a List<IData>

Esta clase fue añadida por un mod con la ID  `crafttweaker`. Necesitas tener este mod instalado si quieres usar esta caracteristica.

## Importar la clase
Puede ser requerido que importes el paquete si encuentras algun problema (como crear un Array).
```zenscript
crafttweaker.api.data.ICollectionData
```

## Implemented Interfaces
ICollectionData implements the following interfaces. That means any method available to them can also be used on this class.
- [crafttweaker.api.data.IData](/vanilla/api/data/IData)

## Métodos
### añadir

```zenscript
new ListData(["Hello", "World"]).add(value as crafttweaker.api.data.IData);
new ListData(["Hello", "World"]).add("today");
```

| Parámetro | Tipo                                                   | Descripción                  |
| --------- | ------------------------------------------------------ | ---------------------------- |
| valor     | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | The value to add to the list |



```zenscript
new ListData(["Hello", "World"]).add(index as int, value as crafttweaker.api.data.IData);
new ListData(["Hello", "World"]).add(1, "beautiful");
```

| Parámetro | Tipo                                                   | Descripción                                                          |
| --------- | ------------------------------------------------------ | -------------------------------------------------------------------- |
| índice    | int                                                    | The index to add to. Subsequent items will be moved one index higher |
| valor     | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | The value to add to the list                                         |


### asList

Gets a List<IData> representation of this IData, returns null on anything but [crafttweaker.api.data.ListData](/vanilla/api/data/ListData).

 Returns: `null if this IData is not a list.`

Returns List<[crafttweaker.api.data.IData](/vanilla/api/data/IData)>

```zenscript
new ListData(["Hello", "World"]).asList();
```

### asMap

Gets a Map<String, IData> representation of this IData, returns null on anything but [crafttweaker.api.data.MapData](/vanilla/api/data/MapData).

 Returns: `null if this IData is not a map.`

Returns [crafttweaker.api.data.IData](/vanilla/api/data/IData)[String]

```zenscript
new ListData(["Hello", "World"]).asMap();
```

### asString

Gets the String representation of this IData

 Returns: `String that represents this IData (value and type).`

Returns String

```zenscript
new ListData(["Hello", "World"]).asString();
```

### clear

Removes every element in the list

```zenscript
new ListData(["Hello", "World"]).clear();
```

### contains

Checks if this IData contains another IData, mainly used in subclasses of [crafttweaker.api.data.ICollectionData](/vanilla/api/data/ICollectionData), is the same as an equals check on other IData types

Returns boolean

```zenscript
new ListData(["Hello", "World"]).contains(data as crafttweaker.api.data.IData);
new ListData(["Hello", "World"]).contains("Display");
```

| Parámetro | Tipo                                                   | Descripción                      |
| --------- | ------------------------------------------------------ | -------------------------------- |
| datos     | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | data to check if it is contained |


### copy

Makes a copy of this IData.

 IData is immutable by default, use this to create a proper copy of the object.

 Returns: `a copy of this IData.`

Returns [crafttweaker.api.data.IData](/vanilla/api/data/IData)

```zenscript
new ListData(["Hello", "World"]).copy();
```

### get

Retrieves the [crafttweaker.api.data.IData](/vanilla/api/data/IData) stored at the given index.

Returns [crafttweaker.api.data.IData](/vanilla/api/data/IData)

```zenscript
new ListData(["Hello", "World"]).get(index as int);
new ListData(["Hello", "World"]).get(0);
```

| Parámetro | Tipo | Descripción         |
| --------- | ---- | ------------------- |
| índice    | int  | The index (0-based) |


### getId

Gets the ID of the internal NBT tag.

 Used to determine what NBT type is stored (in a list for example)

 Returns: `ID of the NBT tag that this data represents.`

Returns byte

```zenscript
new ListData(["Hello", "World"]).getId();
```

### getString

Gets the String representation of the internal INBT tag

 Returns: `String that represents the internal INBT of this IData.`

Returns String

```zenscript
new ListData(["Hello", "World"]).getString();
```

### eliminar

Removes the [crafttweaker.api.data.IData](/vanilla/api/data/IData) stored at the given index.

Returns [crafttweaker.api.data.IData](/vanilla/api/data/IData)

```zenscript
new ListData(["Hello", "World"]).remove(index as int);
new ListData(["Hello", "World"]).remove(0);
```

| Parámetro | Tipo | Descripción         |
| --------- | ---- | ------------------- |
| índice    | int  | The index (0-based) |


### set

Sets the item at the provided index to the given value

Returns [crafttweaker.api.data.IData](/vanilla/api/data/IData)

```zenscript
new ListData(["Hello", "World"]).set(index as int, value as crafttweaker.api.data.IData);
new ListData(["Hello", "World"]).set(0, "Bye");
```

| Parámetro | Tipo                                                   | Descripción                |
| --------- | ------------------------------------------------------ | -------------------------- |
| índice    | int                                                    | The index to set (0-based) |
| valor     | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | The new Value              |



## Propiedades

| Nombre | Tipo | Has Getter | Has Setter |
| ------ | ---- | ---------- | ---------- |
| tamaño | int  | verdad     | falso      |

