# ListDatos



Esta clase fue añadida por un mod con la ID  `crafttweaker`. Necesitas tener este mod instalado si quieres usar esta caracteristica.

## Importar la clase
Puede ser requerido que importes el paquete si encuentras algun problema (como crear un Array).
```zenscript
data.ListData de crafttweaker.api.
```

## Interfaces implementadas
ListData implementa las siguientes interfaces. Esto significa que cualquier método disponible también puede ser usado en esta clase.
- [data.ICollectionData](/vanilla/api/data/ICollectionData)

## Constructores
```zenscript
new crafttweaker.api.data.ListData();
```
```zenscript
new crafttweaker.api.data.ListData(list as List<crafttweaker.api.data.IData>);
```
| Parámetro | Tipo                                                           | Descripción                   | Opcional | Valor por defecto |
| --------- | -------------------------------------------------------------- | ----------------------------- | -------- | ----------------- |
| lista     | Lista <[crafttweaker.api.data.IData](/vanilla/api/data/IData)> | No se proporcionó descripción | verdad   | nulo              |



## Métodos
### añadir

```zenscript
["Hola", "Mundo", "!"].add(value as crafttweaker.api.data.IData);
["Hola", "Mundo", "!"].add("hoy");
```

| Parámetro | Tipo                                  | Descripción                  |
| --------- | ------------------------------------- | ---------------------------- |
| valor     | [data.IData](/vanilla/api/data/IData) | El valor a añadir a la lista |



```zenscript
["Hola", "Mundo", "!"].add(index as int, value as crafttweaker.api.data.IData);
["Hola", "Mundo", "!"].add(1, "hermoso");
```

| Parámetro | Tipo                                  | Descripción                                                                      |
| --------- | ------------------------------------- | -------------------------------------------------------------------------------- |
| índice    | int                                   | El índice al que añadir. Los elementos posteriores se moverán un índice más alto |
| valor     | [data.IData](/vanilla/api/data/IData) | El valor a añadir a la lista                                                     |


### limpiar

Elimina todos los elementos de la lista

```zenscript
["Hola", "Mundo", "!"].clear();
```

### obtener

Recupera el [crafttweaker.api.data.IData](/vanilla/api/data/IData) almacenado en el índice dado.

Devuelve [crafttweaker.api.data.IData](/vanilla/api/data/IData)

```zenscript
["Hola", "Mundo", "!"].get(index as int);
["Hola", "Mundo", "!"].get(0);
```

| Parámetro | Tipo | Descripción          |
| --------- | ---- | -------------------- |
| índice    | int  | El índice (0-basado) |


### eliminar

Elimina el [crafttweaker.api.data.IData](/vanilla/api/data/IData) almacenado en el índice dado.

Devuelve [crafttweaker.api.data.IData](/vanilla/api/data/IData)

```zenscript
["Hola", "Mundo", "!"].remove(index as int);
["Hola", "Mundo", "!"].remove(0);
```

| Parámetro | Tipo | Descripción          |
| --------- | ---- | -------------------- |
| índice    | int  | El índice (0-basado) |


### poner

Establece el elemento en el índice proporcionado al valor dado

Devuelve [crafttweaker.api.data.IData](/vanilla/api/data/IData)

```zenscript
["Hola", "Mundo", "!"].set(index as int, value as crafttweaker.api.data.IData);
["Hola", "Mundo", "!"].set(0, "Sí");
```

| Parámetro | Tipo                                  | Descripción                       |
| --------- | ------------------------------------- | --------------------------------- |
| índice    | int                                   | El índice a establecer (0-basado) |
| valor     | [data.IData](/vanilla/api/data/IData) | El nuevo valor                    |



## Propiedades

| Nombre | Tipo | Tiene Obtén | Tiene Setter |
| ------ | ---- | ----------- | ------------ |
| tamaño | int  | verdad      | falso        |

## Casters

| Tipo de resultado                                              | Es implícito |
| -------------------------------------------------------------- | ------------ |
| Lista <[crafttweaker.api.data.IData](/vanilla/api/data/IData)> | verdad       |

