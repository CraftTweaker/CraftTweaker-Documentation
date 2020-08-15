# ICollectionData

Los datos de ICollection se utilizan para representar una colección de [crafttweaker.api.data.IData](/vanilla/api/data/IData) como una Lista<IData>

Esta clase fue añadida por un mod con la ID  `crafttweaker`. Necesitas tener este mod instalado si quieres usar esta caracteristica.

## Importar la clase
Puede ser requerido que importes el paquete si encuentras algun problema (como crear un Array).
```zenscript
data.ICollectionData
```

## Interfaces implementadas
ICollectionData implementa las siguientes interfaces. Esto significa que cualquier método disponible también puede ser usado en esta clase.
- [data.IData](/vanilla/api/data/IData)

## Métodos
### añadir

```zenscript
new ListData(["Hola", "Mundo"]).add(value as crafttweaker.api.data.IData);
new ListData(["Hola", "Mundo"]).add("hoy");
```

| Parámetro | Tipo                                  | Descripción                  |
| --------- | ------------------------------------- | ---------------------------- |
| valor     | [data.IData](/vanilla/api/data/IData) | El valor a añadir a la lista |



```zenscript
new ListData(["Hola", "Mundo"]).add(index as int, value as crafttweaker.api.data.IData);
new ListData(["Hola", "Mundo"]).add(1, "hermoso");
```

| Parámetro | Tipo                                  | Descripción                                                                      |
| --------- | ------------------------------------- | -------------------------------------------------------------------------------- |
| índice    | int                                   | El índice al que añadir. Los elementos posteriores se moverán un índice más alto |
| valor     | [data.IData](/vanilla/api/data/IData) | El valor a añadir a la lista                                                     |


### asList

Obtiene una lista<IData> la representación de esta IData, devuelve nulo en cualquier cosa menos [crafttweaker.api.data.ListData](/vanilla/api/data/ListData).

 Devuelve: `null si este IData no es una lista.`

Devuelve List<[crafttweaker.api.data.IData](/vanilla/api/data/IData)>

```zenscript
new ListData(["Hola", "Mundo"]).asList();
```

### asMap

Obtiene una representación del mapa<String, IData> de esta IData, devuelve nulo en cualquier cosa menos [crafttweaker.api.data.MapData](/vanilla/api/data/MapData).

 Devuelve: `null si este IData no es un mapa.`

Devuelve [crafttweaker.api.data.IData](/vanilla/api/data/IData)[String]

```zenscript
new ListData(["Hola", "Mundo"]).asMap();
```

### asString

Obtiene la representación de cadena de este IData

 Devuelve: `String que representa este IData (valor y tipo).`

Devuelve Cadena

```zenscript
new ListData(["Hola", "Mundo"]).asString();
```

### limpiar

Elimina todos los elementos de la lista

```zenscript
new ListData(["Hola", "Mundo"]).clear();
```

### contiene

Comprueba si este IData contiene otra IData, utilizada principalmente en subclases de [crafttweaker. pi.data.ICollectionData](/vanilla/api/data/ICollectionData), es lo mismo que una comprobación igual en otros tipos IData

Devuelve booleano

```zenscript
new ListData(["Hola", "Mundo"]).contains(data as crafttweaker.api.data.IData);
new ListData(["Hola", "Mundo"]).contains("Mostrar");
```

| Parámetro | Tipo                                  | Descripción                              |
| --------- | ------------------------------------- | ---------------------------------------- |
| datos     | [data.IData](/vanilla/api/data/IData) | datos para comprobar si están contenidos |


### copiar

Hace una copia de este IData.

 IData es inmutable por defecto, use esto para crear una copia adecuada del objeto.

 Devuelve: `una copia de este IData.`

Devuelve [crafttweaker.api.data.IData](/vanilla/api/data/IData)

```zenscript
new ListData(["Hola", "Mundo"]).copy();
```

### obtener

Recupera el [crafttweaker.api.data.IData](/vanilla/api/data/IData) almacenado en el índice dado.

Devuelve [crafttweaker.api.data.IData](/vanilla/api/data/IData)

```zenscript
new ListData(["Hola", "Mundo"]).get(index as int);
new ListData(["Hola", "Mundo"]).get(0);
```

| Parámetro | Tipo | Descripción          |
| --------- | ---- | -------------------- |
| índice    | int  | El índice (0-basado) |


### getId

Obtiene el ID de la etiqueta NBT interna.

 Utilizado para determinar qué tipo de NBT se almacena (en una lista por ejemplo)

 Devuelve: `ID de la etiqueta NBT que representan estos datos.`

Devuelve byte

```zenscript
new ListData(["Hola", "Mundo"]).getId();
```

### getString

Obtiene la representación de cadena de la etiqueta INBT interna

 Devuelve: `Cadena que representa el INBT interno de este IData.`

Devuelve Cadena

```zenscript
new ListData(["Hola", "Mundo"]).getString();
```

### eliminar

Elimina el [crafttweaker.api.data.IData](/vanilla/api/data/IData) almacenado en el índice dado.

Devuelve [crafttweaker.api.data.IData](/vanilla/api/data/IData)

```zenscript
new ListData(["Hola", "Mundo"]).remove(index as int);
new ListData(["Hola", "Mundo"]).remove(0);
```

| Parámetro | Tipo | Descripción          |
| --------- | ---- | -------------------- |
| índice    | int  | El índice (0-basado) |


### poner

Establece el elemento en el índice proporcionado al valor dado

Devuelve [crafttweaker.api.data.IData](/vanilla/api/data/IData)

```zenscript
new ListData(["Hola", "Mundo"]).set(index as int, value as crafttweaker.api.data.IData);
new ListData(["Hola", "Mundo"]).set(0, "Bye");
```

| Parámetro | Tipo                                  | Descripción                       |
| --------- | ------------------------------------- | --------------------------------- |
| índice    | int                                   | El índice a establecer (0-basado) |
| valor     | [data.IData](/vanilla/api/data/IData) | El nuevo valor                    |



## Propiedades

| Nombre | Tipo | Tiene Obtén | Tiene Setter |
| ------ | ---- | ----------- | ------------ |
| tamaño | int  | verdad      | falso        |

