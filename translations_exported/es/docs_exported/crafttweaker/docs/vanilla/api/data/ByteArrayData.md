# ByteArrayData



Esta clase fue añadida por un mod con la ID  `crafttweaker`. Necesitas tener este mod instalado si quieres usar esta caracteristica.

## Importar la clase
Puede ser requerido que importes el paquete si encuentras algun problema (como crear un Array).
```zenscript
crafttweaker.api.data.ByteArrayData
```

## Interfaces implementadas
ByteArrayData implementa las siguientes interfaces. Esto significa que cualquier método disponible también puede ser usado en esta clase.
- [data.ICollectionData](/vanilla/api/data/ICollectionData)
- [data.IData](/vanilla/api/data/IData)

## Constructores
```zenscript
nuevo crafttweaker.api.data.ByteArrayData(interno como byte[]);
```
| Parámetro | Tipo   | Descripción                   |
| --------- | ------ | ----------------------------- |
| interno   | byte[] | No se proporcionó descripción |



## Métodos
### añadir

```zenscript
[4, 1, 2].add(value as crafttweaker.api.data.IData);
[4, 1, 2].add("today");
```

| Parámetro | Tipo                                  | Descripción                  |
| --------- | ------------------------------------- | ---------------------------- |
| valor     | [data.IData](/vanilla/api/data/IData) | El valor a añadir a la lista |



```zenscript
[4, 1, 2].add(index as int, value as crafttweaker.api.data.IData);
[4, 1, 2].add(1, "hermoso");
```

| Parámetro | Tipo                                  | Descripción                                                                      |
| --------- | ------------------------------------- | -------------------------------------------------------------------------------- |
| índice    | int                                   | El índice al que añadir. Los elementos posteriores se moverán un índice más alto |
| valor     | [data.IData](/vanilla/api/data/IData) | El valor a añadir a la lista                                                     |


### asList

Obtiene una lista<IData> la representación de esta IData, devuelve nulo en cualquier cosa menos [crafttweaker.api.data.ListData](/vanilla/api/data/ListData).

 Devuelve: `null si este IData no es una lista.`

Tipo de retorno: Lista&lt;[crafttweaker.api.data.IData](/vanilla/api/data/IData)&gt;

```zenscript
[4, 1, 2].asList();
```

### asMap

Obtiene una representación del mapa<String, IData> de esta IData, devuelve nulo en cualquier cosa menos [crafttweaker.api.data.MapData](/vanilla/api/data/MapData).

 Devuelve: `null si este IData no es un mapa.`

Tipo de retorno: [crafttweaker.api.data.IData](/vanilla/api/data/IData)[String]

```zenscript
[4, 1, 2].asMap();
```

### asString

Obtiene la representación de cadena de este IData

 Devuelve: `String que representa este IData (valor y tipo).`

Tipo de retorno: Cadena

```zenscript
[4, 1, 2].asString();
```

### limpiar

Elimina todos los elementos de la lista

```zenscript
[4, 1, 2].clear();
```

### contiene

Comprueba si este IData contiene otra IData, utilizada principalmente en subclases de [crafttweaker. pi.data.ICollectionData](/vanilla/api/data/ICollectionData), es lo mismo que una comprobación igual en otros tipos IData

 Devuelve: `verdadero si el IData dado está contenido en este IData`

Tipo de retorno: booleano

```zenscript
[4, 1, 2].contains(data as crafttweaker.api.data.IData);
[4, 1, 2].contains("Display");
```

| Parámetro | Tipo                                  | Descripción                              |
| --------- | ------------------------------------- | ---------------------------------------- |
| datos     | [data.IData](/vanilla/api/data/IData) | datos para comprobar si están contenidos |


### copiar

Hace una copia de este IData.

 IData es inmutable por defecto, use esto para crear una copia adecuada del objeto.

 Devuelve: `una copia de este IData.`

Tipo de retorno: [crafttweaker.api.data.IData](/vanilla/api/data/IData)

```zenscript
[4, 1, 2].copy();
```

### obtener

Recupera el [crafttweaker.api.data.IData](/vanilla/api/data/IData) almacenado en el índice dado. Devuelve: `El [crafttweaker.api.data.IData](/vanilla/api/data/IData)`

Tipo de retorno: [crafttweaker.api.data.IData](/vanilla/api/data/IData)

```zenscript
[4, 1, 2].get(index as int);
[4, 1, 2].get(0);
```

| Parámetro | Tipo | Descripción          |
| --------- | ---- | -------------------- |
| índice    | int  | El índice (0-basado) |


### getId

Obtiene el ID de la etiqueta NBT interna.

 Utilizado para determinar qué tipo de NBT se almacena (en una lista por ejemplo)

 Devuelve: `ID de la etiqueta NBT que representan estos datos.`

Tipo de retorno: byte

```zenscript
[4, 1, 2].getId();
```

### getString

Obtiene la representación de cadena de la etiqueta INBT interna

 Devuelve: `Cadena que representa el INBT interno de este IData.`

Tipo de retorno: Cadena

```zenscript
[4, 1, 2].getString();
```

### eliminar

Elimina el [crafttweaker.api.data.IData](/vanilla/api/data/IData) almacenado en el índice dado. Devuelve: `El [crafttweaker.api.data.IData](/vanilla/api/data/IData) que fue eliminado`

Tipo de retorno: [crafttweaker.api.data.IData](/vanilla/api/data/IData)

```zenscript
[4, 1, 2].remove(index as int);
[4, 1, 2].remove(0);
```

| Parámetro | Tipo | Descripción          |
| --------- | ---- | -------------------- |
| índice    | int  | El índice (0-basado) |


### poner

Establece el elemento en el índice proporcionado al valor dado Devuelve: `El valor reemplazado`

Tipo de retorno: [crafttweaker.api.data.IData](/vanilla/api/data/IData)

```zenscript
[4, 1, 2].set(index as int, value as crafttweaker.api.data.IData);
[4, 1, 2].set(0, "Bye");
```

| Parámetro | Tipo                                  | Descripción                       |
| --------- | ------------------------------------- | --------------------------------- |
| índice    | int                                   | El índice a establecer (0-basado) |
| valor     | [data.IData](/vanilla/api/data/IData) | El nuevo valor                    |



## Propiedades

| Nombre | Tipo | Tiene Obtén | Tiene Setter |
| ------ | ---- | ----------- | ------------ |
| tamaño | int  | verdad      | falso        |

