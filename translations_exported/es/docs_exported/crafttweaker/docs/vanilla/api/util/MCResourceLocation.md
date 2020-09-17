# Ubicación MCResource

Esta clase fue añadida por un mod con la ID  `crafttweaker`. Necesitas tener este mod instalado si quieres usar esta caracteristica.

## Importar la clase
Puede ser requerido que importes el paquete si encuentras algun problema (como crear un Array).
```zenscript
crafttweaker.api.util.MCResourceLocation
```

## Interfaces implementadas
MCResourceLocation implementa las siguientes interfaces. Esto significa que cualquier método disponible también puede ser usado en esta clase.
- [crafttweaker.api.brackets.CommandStringMostrar](/vanilla/api/brackets/CommandStringDisplayable)

## Constructores
```zenscript
nuevo crafttweaker.api.util.MCResourceLocation(namespace as String, path as String);
```
| Parámetro | Tipo   | Descripción                   |
| --------- | ------ | ----------------------------- |
| namespace | Cadena | No se proporcionó descripción |
| ruta      | Cadena | No se proporcionó descripción |



## Métodos
### comparar con

Tipo de retorno: int

```zenscript
myMCResourceLocation.compareTo(p_compareTo_1_ como crafttweaker.api.util.MCResourceLocation);
```

| Parámetro     | Tipo                                                                             | Descripción                   |
| ------------- | -------------------------------------------------------------------------------- | ----------------------------- |
| comparar_1_ | [crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation) | No se proporcionó descripción |


### igual a

Tipo de retorno: booleano

```zenscript
myMCResourceLocation.equals(otro como objeto);
```

| Parámetro | Tipo   | Descripción                   |
| --------- | ------ | ----------------------------- |
| otro      | Objeto | No se proporcionó descripción |


### getNamespace

Tipo de retorno: Cadena

```zenscript
myMCResourceLocation.getNamespace();
```

### getPath

Tipo de retorno: Cadena

```zenscript
myMCResourceLocation.getPath();
```

### hashCode

Tipo de retorno: int

```zenscript
myMCResourceLocation.hashCode();
```

### toString

Tipo de retorno: Cadena

```zenscript
myMCResourceLocation.toString();
```


## Propiedades

| Nombre        | Tipo   | Tiene Obtén | Tiene Setter |
| ------------- | ------ | ----------- | ------------ |
| commandString | Cadena | verdad      | falso        |
| namespace     | Cadena | verdad      | falso        |
| ruta          | Cadena | verdad      | falso        |

