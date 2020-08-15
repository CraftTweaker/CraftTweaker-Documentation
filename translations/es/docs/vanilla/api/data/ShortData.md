# Datos cortos



Esta clase fue añadida por un mod con la ID  `crafttweaker`. Necesitas tener este mod instalado si quieres usar esta caracteristica.

## Importar la clase
Puede ser requerido que importes el paquete si encuentras algun problema (como crear un Array).
```zenscript
data.Datos cortos
```

## Interfaces implementadas
ShortData implementa las siguientes interfaces. Esto significa que cualquier método disponible también puede ser usado en esta clase.
- [datos de crafttweaker.api.infumberData](/vanilla/api/data/INumberData)

## Constructores
```zenscript
nuevo crafttweaker.api.data.ShortData(interno como corto);
```
| Parámetro | Tipo  | Descripción                   |
| --------- | ----- | ----------------------------- |
| interno   | corto | No se proporcionó descripción |



## Métodos
### asList

Obtiene una lista<IData> la representación de esta IData, devuelve nulo en cualquier cosa menos [crafttweaker.api.data.ListData](/vanilla/api/data/ListData).

 Devuelve: `null si este IData no es una lista.`

Devuelve List<[crafttweaker.api.data.IData](/vanilla/api/data/IData)>

```zenscript
1058.asList();
```

### asMap

Obtiene una representación del mapa<String, IData> de esta IData, devuelve nulo en cualquier cosa menos [crafttweaker.api.data.MapData](/vanilla/api/data/MapData).

 Devuelve: `null si este IData no es un mapa.`

Devuelve [crafttweaker.api.data.IData](/vanilla/api/data/IData)[String]

```zenscript
1058.asMap();
```

### asString

Obtiene la representación de cadena de este IData

 Devuelve: `String que representa este IData (valor y tipo).`

Devuelve Cadena

```zenscript
1058.asString();
```

### contiene

Comprueba si este IData contiene otra IData, utilizada principalmente en subclases de [crafttweaker. pi.data.ICollectionData](/vanilla/api/data/ICollectionData), es lo mismo que una comprobación igual en otros tipos IData

Devuelve booleano

```zenscript
1058.contains(data as crafttweaker.api.data.IData);
1058.contains("Display");
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
1058.copy();
```

### getId

Obtiene el ID de la etiqueta NBT interna.

 Utilizado para determinar qué tipo de NBT se almacena (en una lista por ejemplo)

 Devuelve: `ID de la etiqueta NBT que representan estos datos.`

Devuelve byte

```zenscript
1058.getId();
```

### getString

Obtiene la representación de cadena de la etiqueta INBT interna

 Devuelve: `Cadena que representa el INBT interno de este IData.`

Devuelve Cadena

```zenscript
1058.getString();
```


