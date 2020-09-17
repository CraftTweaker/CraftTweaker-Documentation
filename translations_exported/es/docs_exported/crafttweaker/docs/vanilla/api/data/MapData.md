# MapData



Esta clase fue añadida por un mod con la ID  `crafttweaker`. Necesitas tener este mod instalado si quieres usar esta caracteristica.

## Importar la clase
Puede ser requerido que importes el paquete si encuentras algun problema (como crear un Array).
```zenscript
crafttweaker.api.data.MapData
```

## Interfaces implementadas
MapData implementa las siguientes interfaces. Esto significa que cualquier método disponible también puede ser usado en esta clase.
- [data.IData](/vanilla/api/data/IData)

## Constructores
```zenscript
new crafttweaker.api.data.MapData();
```
```zenscript
new crafttweaker.api.data.MapData(map as crafttweaker.api.data.IData[String]);
```
| Parámetro | Tipo                                                           | Descripción                   |
| --------- | -------------------------------------------------------------- | ----------------------------- |
| mapa      | [crafttweaker.api.data.IData](/vanilla/api/data/IData)[String] | No se proporcionó descripción |



## Métodos
### asList

Obtiene una lista<IData> la representación de esta IData, devuelve nulo en cualquier cosa menos [crafttweaker.api.data.ListData](/vanilla/api/data/ListData).

 Devuelve: `null si este IData no es una lista.`

Tipo de retorno: Lista&lt;[crafttweaker.api.data.IData](/vanilla/api/data/IData)&gt;

```zenscript
myMapData.asList();
```

### asMap

Obtiene una representación del mapa<String, IData> de esta IData, devuelve nulo en cualquier cosa menos [crafttweaker.api.data.MapData](/vanilla/api/data/MapData).

 Devuelve: `null si este IData no es un mapa.`

Tipo de retorno: [crafttweaker.api.data.IData](/vanilla/api/data/IData)[String]

```zenscript
myMapData.asMap();
```

### asString

Obtiene la representación de cadena de este IData

 Devuelve: `String que representa este IData (valor y tipo).`

Tipo de retorno: Cadena

```zenscript
myMapData.asString();
```

### contiene

Comprueba si el mapa contiene la clave dada.

 Devuelve: `Verdadero si el Mapa contiene la clave`

Tipo de retorno: booleano

```zenscript
myMapData.contains(clave como String);
myMapData.contains("Hola");
```

| Parámetro | Tipo   | Descripción       |
| --------- | ------ | ----------------- |
| llave     | Cadena | La clave a buscar |



Comprueba si este IData contiene otra IData, utilizada principalmente en subclases de [crafttweaker. pi.data.ICollectionData](/vanilla/api/data/ICollectionData), es lo mismo que una comprobación igual en otros tipos IData

 Devuelve: `verdadero si el IData dado está contenido en este IData`

Tipo de retorno: booleano

```zenscript
myMapData.contains(datos como crafttweaker.api.data.IData);
myMapData.contains("Mostrar");
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
myMapData.copy();
```

### obtener

Recuperar el valor asociado con la clave

 Devuelve: `El valor si está presente, nulo de lo contrario`

Tipo de retorno: [crafttweaker.api.data.IData](/vanilla/api/data/IData)

```zenscript
myMapData.get(key as String);
myMapData.get("Hola");
```

| Parámetro | Tipo   | Descripción       |
| --------- | ------ | ----------------- |
| llave     | Cadena | La clave a buscar |


### getId

Obtiene el ID de la etiqueta NBT interna.

 Utilizado para determinar qué tipo de NBT se almacena (en una lista por ejemplo)

 Devuelve: `ID de la etiqueta NBT que representan estos datos.`

Tipo de retorno: byte

```zenscript
myMapData.getId();
```

### getString

Obtiene la representación de cadena de la etiqueta INBT interna

 Devuelve: `Cadena que representa el INBT interno de este IData.`

Tipo de retorno: Cadena

```zenscript
myMapData.getString();
```

### fusión

Combina este mapa y el otro mapa. Si las entradas de este mapa y del otro mapa comparten los valores se intenta fusionar. Si esto no funciona, entonces se utilizará el valor del otro mapa.

 Devuelve: `Este mapa, después de la fusión`

Tipo de retorno: [crafttweaker.api.data.MapData](/vanilla/api/data/MapData)

```zenscript
myMapData.merge(otro como crafttweaker.api.data.MapData);
myMapData.merge({Doodle: "Do});
```

| Parámetro | Tipo                                                       | Descripción   |
| --------- | ---------------------------------------------------------- | ------------- |
| otro      | [crafttweaker.api.data.MapData](/vanilla/api/data/MapData) | El otro mapa. |


### poner

Añade el valor de la clave dada o crea una nueva entrada si no existía antes.

 Devuelve: `El valor anterior si está presente, nulo de lo contrario`

Tipo de retorno: [crafttweaker.api.data.IData](/vanilla/api/data/IData)

```zenscript
myMapData.put(key as String, value as crafttweaker.api.data.IData);
myMapData.put("Hola", "Goodbye");
```

| Parámetro | Tipo                                  | Descripción                             |
| --------- | ------------------------------------- | --------------------------------------- |
| llave     | Cadena                                | La clave para establecer el valor para. |
| valor     | [data.IData](/vanilla/api/data/IData) | El valor a establecer.                  |


### putAll

Añade todas las entradas del mapa dado a ésta. Puede reemplazar las claves existentes.

```zenscript
myMapData.putAll(map as crafttweaker.api.data.IData[String]);
myMapData.putAll({Hello: "Goodbye", Objeto: "Bedrock"});
```

| Parámetro | Tipo                                                           | Descripción                              |
| --------- | -------------------------------------------------------------- | ---------------------------------------- |
| mapa      | [crafttweaker.api.data.IData](/vanilla/api/data/IData)[String] | Las otras entradas a agregar a este mapa |


### eliminar

Elimina la entrada con la clave dada del mapa

```zenscript
myMapData.remove(key as String);
myMapData.remove("en alguna parte");
```

| Parámetro | Tipo   | Descripción                       |
| --------- | ------ | --------------------------------- |
| llave     | Cadena | La clave de la entrada a eliminar |



## Propiedades

| Nombre  | Tipo                                 | Tiene Obtén | Tiene Setter |
| ------- | ------------------------------------ | ----------- | ------------ |
| isEmpty | boolean                              | verdad      | falso        |
| keySet  | Establecer&lt;String&gt; | verdad      | falso        |
| tamaño  | int                                  | verdad      | falso        |

## Operadores
### AGREGAR

Añade todas las entradas del IData dado a esta entrada

```zenscript
myMapData + datos como crafttweaker.api.data.IData
```

| Parámetro | Tipo                                  | Descripción                   |
| --------- | ------------------------------------- | ----------------------------- |
| datos     | [data.IData](/vanilla/api/data/IData) | No se proporcionó descripción |

## Casters

| Tipo de resultado                                              | Es implícito |
| -------------------------------------------------------------- | ------------ |
| [crafttweaker.api.data.IData](/vanilla/api/data/IData)[String] | verdad       |

