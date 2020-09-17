# Dirección

Representa una dirección cardinal (norte, sur, este, oeste) y (arriba y abajo).

Esta clase fue añadida por un mod con la ID  `crafttweaker`. Necesitas tener este mod instalado si quieres usar esta caracteristica.

## Importar la clase
Puede ser requerido que importes el paquete si encuentras algun problema (como crear un Array).
```zenscript
crafttweaker.api.util.Dirección
```

## Métodos
### girar alrededor

Rota esta dirección alrededor de un eje dado

Devuelve [crafttweaker.api.util.Direction](/vanilla/api/util/Direction)

```zenscript
<direction:north>.rotateAround(axis as crafttweaker.api.util.DirectionAxis);
<direction:north>.rotateAround(<directionaxis:north>);
```

| Parámetro | Tipo                                                                      | Descripción              |
| --------- | ------------------------------------------------------------------------- | ------------------------ |
| eje       | [crafttweaker.api.util.Eje de dirección](/vanilla/api/util/DirectionAxis) | el eje a girar alrededor |


### rotateY

Rota esta dirección en el eje Y

 Devuelve: `la dirección que giró en el eje Y de esta dirección`

Devuelve [crafttweaker.api.util.Direction](/vanilla/api/util/Direction)

```zenscript
<direction:north>.rotateY();
```

### rotarYCW

Rota esta dirección en sentido contrario al reloj en el eje Y

 Devuelve: `la dirección que es contraria en sentido horario en el eje Y`

Devuelve [crafttweaker.api.util.Direction](/vanilla/api/util/Direction)

```zenscript
<direction:north>.rotateYCW();
```


## Propiedades

| Nombre            | Tipo                                                                      | Tiene Obtén | Tiene Setter |
| ----------------- | ------------------------------------------------------------------------- | ----------- | ------------ |
| eje               | [crafttweaker.api.util.Eje de dirección](/vanilla/api/util/DirectionAxis) | verdad      | falso        |
| axisOffset        | int                                                                       | verdad      | falso        |
| ángulo horizontal | flotante                                                                  | verdad      | falso        |
| índice horizontal | int                                                                       | verdad      | falso        |
| índice            | int                                                                       | verdad      | falso        |
| nombre            | Cadena                                                                    | verdad      | falso        |
| opuesto           | [crafttweaker.api.util.Dirección](/vanilla/api/util/Direction)            | verdad      | falso        |
| xOffset           | int                                                                       | verdad      | falso        |
| yOffset           | int                                                                       | verdad      | falso        |
| zOffset           | int                                                                       | verdad      | falso        |

