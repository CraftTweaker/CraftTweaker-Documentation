# BloquePos

Representa una posición de un bloque en el mundo

Esta clase fue añadida por un mod con la ID  `crafttweaker`. Necesitas tener este mod instalado si quieres usar esta caracteristica.

## Importar la clase
Puede ser requerido que importes el paquete si encuentras algun problema (como crear un Array).
```zenscript
crafttweaker.api.util.BlockPos
```

## Constructores
```zenscript
nuevo crafttweaker.api.util.BlockPos(x as int, y as int, z as int);
```
| Parámetro | Tipo | Descripción                   |
| --------- | ---- | ----------------------------- |
| x         | int  | No se proporcionó descripción |
| y         | int  | No se proporcionó descripción |
| z         | int  | No se proporcionó descripción |



## Métodos
### añadir

Agrega dos posiciones juntas y devuelve el resultado.

 Devuelve: `new [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) con los valores añadidos.`

Tipo de retorno: [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos)

```zenscript
new BlockPos(0, 1, 2).add(pos as crafttweaker.api.util.BlockPos);
new BlockPos(0, 1, 2).add(new BlockPos(3, 2, 1));
```

| Parámetro | Tipo                                                         | Descripción            |
| --------- | ------------------------------------------------------------ | ---------------------- |
| pos       | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | otra posición a añadir |



Añade los valores dados a esta posición, y devuelve una nueva posición con los nuevos valores.

 Devuelve: `una nueva posición basada en los valores proporcionados y esta posición`

Tipo de retorno: [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos)

```zenscript
new BlockPos(0, 1, 2).add(x as double, y as double, z as double);
new BlockPos(0, 1, 2).add(50.21, -20.8, -25.2);
```

| Parámetro | Tipo  | Descripción         |
| --------- | ----- | ------------------- |
| x         | doble | valor x para añadir |
| y         | doble | y valor para añadir |
| z         | doble | valor z a añadir    |



Añade los valores dados a esta posición, y devuelve una nueva posición con los nuevos valores.

 Devuelve: `una nueva posición basada en los valores proporcionados y esta posición`

Tipo de retorno: [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos)

```zenscript
new BlockPos(0, 1, 2).add(x as int, y as int, z as int);
new BlockPos(0, 1, 2).add(50, -20, -25);
```

| Parámetro | Tipo | Descripción         |
| --------- | ---- | ------------------- |
| x         | int  | valor x para añadir |
| y         | int  | y valor para añadir |
| z         | int  | valor z a añadir    |


### producto cruzado

Crea un nuevo BlockPos basado en el producto cruzado de esta posición, y la posición dada

 Devuelve: `un nuevo BlockPos basado en el producto cruzado de este BlockPos y el BlockPos dado`

Tipo de retorno: [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos)

```zenscript
new BlockPos(0, 1, 2).crossProduct(pos as crafttweaker.api.util.BlockPos);
new BlockPos(0, 1, 2).crossProduct(new BlockPos(5, 8, 2););
```

| Parámetro | Tipo                                                         | Descripción                      |
| --------- | ------------------------------------------------------------ | -------------------------------- |
| pos       | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | BlockPos para cruzar el producto |


### distancia Sq

Obtiene la distancia cuadrada de esta posición al BlockPos especificado, usando el centro de BlockPos

 Devuelve: `la distancia cuadrada de esta posición actual y el BlockPos dado.`

Tipo de retorno: doble

```zenscript
new BlockPos(0, 1, 2).distanceSq(to as crafttweaker.api.util.BlockPos);
new BlockPos(0, 1, 2).distanceSq(new BlockPos(256, 128, 10););
```

| Parámetro | Tipo                                                         | Descripción                       |
| --------- | ------------------------------------------------------------ | --------------------------------- |
| a         | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | BlockPos contra los que comprobar |



Obtiene la distancia cuadrada de esta posición al BlockPos especificado

 Devuelve: `la distancia cuadrada de esta posición actual y el BlockPos dado.`

Tipo de retorno: doble

```zenscript
new BlockPos(0, 1, 2).distanceSq(to as crafttweaker.api.util.BlockPos, useCenter as boolean);
new BlockPos(0, 1, 2).distanceSq(new BlockPos(256, 128, 10);, true);
```

| Parámetro | Tipo                                                         | Descripción                                                           |
| --------- | ------------------------------------------------------------ | --------------------------------------------------------------------- |
| a         | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | BlockPos contra los que comprobar                                     |
| useCenter | boolean                                                      | ¿debe utilizarse el centro de la coordenada? (añade 0.5 a cada valor) |



Obtiene la distancia cuadrada de esta posición a las coordenadas especificadas

 Devuelve: `la distancia cuadrada de esta posición actual y las coordenadas dadas.`

Tipo de retorno: doble

```zenscript
new BlockPos(0, 1, 2).distanceSq(x as double, y as double, z as double, useCenter as boolean);
new BlockPos(0, 1, 2).distanceSq(500.25, 250.75, 100.20, false);
```

| Parámetro | Tipo    | Descripción                                                           |
| --------- | ------- | --------------------------------------------------------------------- |
| x         | doble   | x posición contra la que comprobar                                    |
| y         | doble   | posición y contra la que comprobar                                    |
| z         | doble   | posición z contra la que comprobar                                    |
| useCenter | boolean | ¿debe utilizarse el centro de la coordenada? (añade 0.5 a cada valor) |


### abajo

Crea un nuevo BlockPos basado en este BlockPos que es un bloque inferior a este BlockPos

 Devuelve: `un nuevo BlockPos que es un bloque inferior a este BlockPos`

Tipo de retorno: net.minecraft.util.math.BlockPos

```zenscript
new BlockPos(0, 1, 2).down();
```

### este

Crea un nuevo BlockPos basado en este BlockPos que es un bloque al este de este BlockPos

 Devuelve: `un nuevo BlockPos que es un bloque al este de este BlockPos`

Tipo de retorno: net.minecraft.util.math.BlockPos

```zenscript
new BlockPos(0, 1, 2).east();
```


Crea un nuevo BlockPos basado en este BlockPos que está n bloque al este de este BlockPos

 Devuelve: `un nuevo BlockPos que es n bloque(s) al este de este BlockPos`

Tipo de retorno: net.minecraft.util.math.BlockPos

```zenscript
new BlockPos(0, 1, 2).east(n as int);
new BlockPos(0, 1, 2).east(2);
```

| Parámetro | Tipo | Descripción                   |
| --------- | ---- | ----------------------------- |
| n         | int  | No se proporcionó descripción |


### manhattanDistancia

Obtiene la Distancia Manhattan de estos pos en comparación con una posición diferente

 Devuelve: `La distancia de manhattan de las posiciones`

Tipo de retorno: int

```zenscript
new BlockPos(0, 1, 2).manhattanDistance(other as crafttweaker.api.util.BlockPos);
new BlockPos(0, 1, 2).manhattanDistance(new BlockPos(4, 5, 6));
```

| Parámetro | Tipo                                                         | Descripción                                |
| --------- | ------------------------------------------------------------ | ------------------------------------------ |
| otro      | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | otra posición a la que llegar la distancia |


### norte

Crea un nuevo BlockPos basado en este BlockPos que es un bloque al norte de este BlockPos

 Devuelve: `un nuevo BlockPos que es un bloque al norte de este BlockPos`

Tipo de retorno: net.minecraft.util.math.BlockPos

```zenscript
new BlockPos(0, 1, 2).north();
```


Crea un nuevo BlockPos basado en este BlockPos que es n bloque (s) al norte de este BlockPos

 Devuelve: `un nuevo BlockPos que es n bloque(s) al norte de este BlockPos`

Tipo de retorno: net.minecraft.util.math.BlockPos

```zenscript
new BlockPos(0, 1, 2).north(n as int);
new BlockPos(0, 1, 2).north(10);
```

| Parámetro | Tipo | Descripción                   |
| --------- | ---- | ----------------------------- |
| n         | int  | No se proporcionó descripción |


### offset

Crea un nuevo BlockPos basado en este BlockPos que es un desplazamiento de bloques de este BlockPos basado en el [crafttweaker.api.util.Direction](/vanilla/api/util/Direction)

 Devuelve: `un nuevo BlockPos que es un desplazamiento de un bloque de este BlockPos`

Tipo de retorno: [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos)

```zenscript
new BlockPos(0, 1, 2).offset(direction as crafttweaker.api.util.Direction);
new BlockPos(0, 1, 2).offset(<direction:east>);
```

| Parámetro | Tipo                                                           | Descripción                   |
| --------- | -------------------------------------------------------------- | ----------------------------- |
| dirección | [crafttweaker.api.util.Dirección](/vanilla/api/util/Direction) | No se proporcionó descripción |



Crea un nuevo BlockPos basado en este BlockPos que es n block(s) offset de este BlockPos basado en el [crafttweaker.api.util.Direction](/vanilla/api/util/Direction)

 Devuelve: `un nuevo BlockPos que es n block(s) offset de este BlockPos`

Tipo de retorno: [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos)

```zenscript
new BlockPos(0, 1, 2).offset(direction as crafttweaker.api.util.Direction, n as int);
new BlockPos(0, 1, 2).offset(<direction:south>, 3);
```

| Parámetro | Tipo                                                           | Descripción                   |
| --------- | -------------------------------------------------------------- | ----------------------------- |
| dirección | [crafttweaker.api.util.Dirección](/vanilla/api/util/Direction) | No se proporcionó descripción |
| n         | int                                                            | No se proporcionó descripción |


### sur

Crea un nuevo BlockPos basado en este BlockPos que es un bloque al sur de este BlockPos

 Devuelve: `un nuevo BlockPos que es un bloque al sur de este BlockPos`

Tipo de retorno: net.minecraft.util.math.BlockPos

```zenscript
new BlockPos(0, 1, 2).south();
```


Crea un nuevo BlockPos basado en este BlockPos que está n bloque(s) al sur de este BlockPos

 Devuelve: `un nuevo BlockPos que está n bloque(s) al sur de este BlockPos`

Tipo de retorno: net.minecraft.util.math.BlockPos

```zenscript
new BlockPos(0, 1, 2).south(n as int);
new BlockPos(0, 1, 2).south(12);
```

| Parámetro | Tipo | Descripción                   |
| --------- | ---- | ----------------------------- |
| n         | int  | No se proporcionó descripción |


### restar

Resta dos posiciones juntas y devuelve el resultado.

 Devuelve: `new [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) con los valores eliminados.`

Tipo de retorno: [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos)

```zenscript
new BlockPos(0, 1, 2).subtract(pos as crafttweaker.api.util.BlockPos);
new BlockPos(0, 1, 2).subtract(new BlockPos(2, 1, 3));
```

| Parámetro | Tipo                                                         | Descripción              |
| --------- | ------------------------------------------------------------ | ------------------------ |
| pos       | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | otra posición a eliminar |


### arriba

Crea un nuevo BlockPos basado en este BlockPos que es un bloque mayor que este BlockPos

 Devuelve: `un nuevo BlockPos que es un bloque más alto que este BlockPos`

Tipo de retorno: net.minecraft.util.math.BlockPos

```zenscript
new BlockPos(0, 1, 2).up();
```


Crea un nuevo BlockPos basado en este BlockPos que es n bloque(s) mayor que este BlockPos

 Devuelve: `un nuevo BlockPos que es n bloque(s) mayor que este BlockPos`

Tipo de retorno: net.minecraft.util.math.BlockPos

```zenscript
new BlockPos(0, 1, 2).up(n as int);
new BlockPos(0, 1, 2).up(45);
```

| Parámetro | Tipo | Descripción                   |
| --------- | ---- | ----------------------------- |
| n         | int  | No se proporcionó descripción |


### oeste

Crea un nuevo BlockPos basado en este BlockPos que es un bloque al oeste de este BlockPos

 Devuelve: `un nuevo BlockPos que es un bloque al oeste de este BlockPos`

Tipo de retorno: net.minecraft.util.math.BlockPos

```zenscript
new BlockPos(0, 1, 2).west();
```


Crea un nuevo BlockPos basado en este BlockPos que es n bloque(s) al oeste de este BlockPos

 Devuelve: `un nuevo BlockPos que es n block(s) al oeste de este BlockPos`

Tipo de retorno: net.minecraft.util.math.BlockPos

```zenscript
new BlockPos(0, 1, 2).west(n as int);
new BlockPos(0, 1, 2).west(120);
```

| Parámetro | Tipo | Descripción                   |
| --------- | ---- | ----------------------------- |
| n         | int  | No se proporcionó descripción |


### dentro de Distancia

Comprueba si el BlockPos dado está dentro de la distancia especificada de este BlockPos (esto usa el centro de BlockPos)

 Devuelve: `verdadero si el BlockPos dado está dentro de la distancia dada de este BlockPos`

Tipo de retorno: booleano

```zenscript
new BlockPos(0, 1, 2).withinDistance(pos as crafttweaker.api.util.BlockPos, distance as double);
new BlockPos(0, 1, 2).withinDistance(new BlockPos(80, 75, 54);, 10);
```

| Parámetro | Tipo                                                         | Descripción                                            |
| --------- | ------------------------------------------------------------ | ------------------------------------------------------ |
| pos       | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | BlockPos para comprobar si está dentro de la distancia |
| distancia | doble                                                        | distancia en la que comprobar                          |



## Propiedades

| Nombre | Tipo | Tiene Obtén | Tiene Setter |
| ------ | ---- | ----------- | ------------ |
| x      | int  | verdad      | falso        |
| y      | int  | verdad      | falso        |
| z      | int  | verdad      | falso        |

## Operadores
### AGREGAR

Agrega dos posiciones juntas y devuelve el resultado.

 Devuelve: `new [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) con los valores añadidos.`

```zenscript
new BlockPos(0, 1, 2) + pos como crafttweaker.api.util.BlockPos
new BlockPos(0, 1, 2) + new BlockPos(3, 2, 1)
```

| Parámetro | Tipo                                                         | Descripción            |
| --------- | ------------------------------------------------------------ | ---------------------- |
| pos       | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | otra posición a añadir |
### BUB

Resta dos posiciones juntas y devuelve el resultado.

 Devuelve: `new [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) con los valores eliminados.`

```zenscript
new BlockPos(0, 1, 2) - pos as crafttweaker.api.util.BlockPos
new BlockPos(0, 1, 2) - new BlockPos(2, 1, 3)
```

| Parámetro | Tipo                                                         | Descripción              |
| --------- | ------------------------------------------------------------ | ------------------------ |
| pos       | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | otra posición a eliminar |

## Casters

| Tipo de resultado | Es implícito |
| ----------------- | ------------ |
| largo             | falso        |

