# BlockPos

Represents a position of a block in the world

Questa classe è stata aggiunta da una mod con ID `crafttweaker`. Perciò, è necessario avere questa mod installata per poter utilizzare questa funzione.

## Importing the class
Potrebbe essere necessario importare il pacchetto, se si incontrano dei problemi (come castare un vettore), quindi meglio essere sicuri e aggiungere la direttiva di importazione.
```zenscript
crafttweaker.api.util.BlockPos
```

## Constructors
```zenscript
new crafttweaker.api.util.BlockPos(x as int, y as int, z as int);
```
| Parameter | Type | Description                 |
| --------- | ---- | --------------------------- |
| x         | int  | Nessuna descrizione fornita |
| y         | int  | Nessuna descrizione fornita |
| z         | int  | Nessuna descrizione fornita |



## Methods
### add

Adds two positions together and returns the result.

 Restituisce: `new [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) con i valori aggiunti.`

Tipo di restituzione: [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos)

```zenscript
new BlockPos(0, 1, 2).add(pos as crafttweaker.api.util.BlockPos);
new BlockPos(0, 1, 2).add(new BlockPos(3, 2, 1));
```

| Parameter | Type                                                         | Description           |
| --------- | ------------------------------------------------------------ | --------------------- |
| pos       | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | other position to add |



Adds the given values to this position, and returns a new position with the new values.

 Restituisce: `una nuova posizione basata sui valori dei valori forniti e questa posizione`

Tipo di restituzione: [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos)

```zenscript
new BlockPos(0, 1, 2).add(x as double, y as double, z as double);
new BlockPos(0, 1, 2).add(50.21, -20.8, -25.2);
```

| Parameter | Type   | Description    |
| --------- | ------ | -------------- |
| x         | double | x value to add |
| y         | double | y value to add |
| z         | double | z value to add |



Adds the given values to this position, and returns a new position with the new values.

 Restituisce: `una nuova posizione basata sui valori dei valori forniti e questa posizione`

Tipo di restituzione: [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos)

```zenscript
new BlockPos(0, 1, 2).add(x as int, y as int, z as int);
new BlockPos(0, 1, 2).add(50, -20, -25);
```

| Parameter | Type | Description    |
| --------- | ---- | -------------- |
| x         | int  | x value to add |
| y         | int  | y value to add |
| z         | int  | z value to add |


### crossProduct

Creates a new BlockPos based on the cross product of this position, and the given position

 Restituisce: `un nuovo BlockPos basato sul prodotto trasversale di questo BlockPos e il BlockPos dato`

Tipo di restituzione: [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos)

```zenscript
new BlockPos(0, 1, 2).crossProduct(pos as crafttweaker.api.util.BlockPos);
new BlockPos(0, 1, 2).crossProduct(new BlockPos(5, 8, 2););
```

| Parameter | Type                                                         | Description               |
| --------- | ------------------------------------------------------------ | ------------------------- |
| pos       | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | BlockPos to cross product |


### distanceSq

Gets the squared distance of this position to the specified BlockPos, using the center of the BlockPos

 Restituisce: `la distanza quadrata di questa posizione corrente e il BlockPos.`

Tipo di ritorno: doppio

```zenscript
new BlockPos(0, 1, 2).distanceSq(to as crafttweaker.api.util.BlockPos);
new BlockPos(0, 1, 2).distanceSq(new BlockPos(256, 128, 10););
```

| Parameter | Type                                                         | Description               |
| --------- | ------------------------------------------------------------ | ------------------------- |
| to        | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | BlockPos to check against |



Gets the squared distance of this position to the specified BlockPos

 Restituisce: `la distanza quadrata di questa posizione corrente e il BlockPos.`

Tipo di ritorno: doppio

```zenscript
new BlockPos(0, 1, 2).distanceSq(to as crafttweaker.api.util.BlockPos, useCenter as boolean);
new BlockPos(0, 1, 2).distanceSq(new BlockPos(256, 128, 10);, true);
```

| Parameter | Type                                                         | Description                                                           |
| --------- | ------------------------------------------------------------ | --------------------------------------------------------------------- |
| to        | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | BlockPos to check against                                             |
| useCenter | boolean                                                      | should the center of the coordinate be used? (adds 0.5 to each value) |



Gets the squared distance of this position to the specified coordinates

 Restituisce: `la distanza quadrata di questa posizione corrente e le coordinate date.`

Tipo di ritorno: doppio

```zenscript
new BlockPos(0, 1, 2).distanceSq(x as double, y as double, z as double, useCenter as boolean);
new BlockPos(0, 1, 2).distanceSq(500.25, 250.75, 100.20, false);
```

| Parameter | Type    | Description                                                           |
| --------- | ------- | --------------------------------------------------------------------- |
| x         | double  | x position to check against                                           |
| y         | double  | y position to check against                                           |
| z         | double  | z position to check against                                           |
| useCenter | boolean | should the center of the coordinate be used? (adds 0.5 to each value) |


### down

Creates a new BlockPos based on this BlockPos that is one block lower than this BlockPos

 Returns: `a new BlockPos that is one block lower than this BlockPos`

Tipo di restituzione: net.minecraft.util.math.BlockPos

```zenscript
new BlockPos(0, 1, 2).down();
```

### east

Creates a new BlockPos based on this BlockPos that is one block east of this BlockPos

 Returns: `a new BlockPos that is one block east of this BlockPos`

Tipo di restituzione: net.minecraft.util.math.BlockPos

```zenscript
new BlockPos(0, 1, 2).east();
```


Creates a new BlockPos based on this BlockPos that is n block(s) east of this BlockPos

 Returns: `a new BlockPos that is n block(s) east of this BlockPos`

Tipo di restituzione: net.minecraft.util.math.BlockPos

```zenscript
new BlockPos(0, 1, 2).east(n as int);
new BlockPos(0, 1, 2).east(2);
```

| Parameter | Type | Description                 |
| --------- | ---- | --------------------------- |
| n         | int  | Nessuna descrizione fornita |


### manhattanDistance

Gets the Manhattan Distance of this pos compared to a different position

 Restituisce: `La distanza manhattan delle posizioni`

Return type: int

```zenscript
new BlockPos(0, 1, 2).manhattanDistance(other as crafttweaker.api.util.BlockPos);
new BlockPos(0, 1, 2).manhattanDistance(new BlockPos(4, 5, 6));
```

| Parameter | Type                                                         | Description                           |
| --------- | ------------------------------------------------------------ | ------------------------------------- |
| other     | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | other position to get the distance to |


### north

Creates a new BlockPos based on this BlockPos that is one block north of this BlockPos

 Returns: `a new BlockPos that is one block north of this BlockPos`

Tipo di restituzione: net.minecraft.util.math.BlockPos

```zenscript
new BlockPos(0, 1, 2).north();
```


Creates a new BlockPos based on this BlockPos that is n block(s) north of this BlockPos

 Returns: `a new BlockPos that is n block(s) north of this BlockPos`

Tipo di restituzione: net.minecraft.util.math.BlockPos

```zenscript
new BlockPos(0, 1, 2).north(n as int);
new BlockPos(0, 1, 2).north(10);
```

| Parameter | Type | Description                 |
| --------- | ---- | --------------------------- |
| n         | int  | Nessuna descrizione fornita |


### offset

Creates a new BlockPos based on this BlockPos that is one block offset of this BlockPos based on the given [crafttweaker.api.util.Direction](/vanilla/api/util/Direction)

 Returns: `a new BlockPos that is 1 block offset of this BlockPos`

Tipo di restituzione: [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos)

```zenscript
new BlockPos(0, 1, 2).offset(direction as crafttweaker.api.util.Direction);
new BlockPos(0, 1, 2).offset(<direction:east>);
```

| Parameter | Type                                                           | Description                 |
| --------- | -------------------------------------------------------------- | --------------------------- |
| direction | [crafttweaker.api.util.Direction](/vanilla/api/util/Direction) | Nessuna descrizione fornita |



Creates a new BlockPos based on this BlockPos that is n block(s) offset of this BlockPos based on the given [crafttweaker.api.util.Direction](/vanilla/api/util/Direction)

 Returns: `a new BlockPos that is n block(s) offset of this BlockPos`

Tipo di restituzione: [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos)

```zenscript
new BlockPos(0, 1, 2).offset(direction as crafttweaker.api.util.Direction, n as int);
new BlockPos(0, 1, 2).offset(<direction:south>, 3);
```

| Parameter | Type                                                           | Description                 |
| --------- | -------------------------------------------------------------- | --------------------------- |
| direction | [crafttweaker.api.util.Direction](/vanilla/api/util/Direction) | Nessuna descrizione fornita |
| n         | int                                                            | Nessuna descrizione fornita |


### south

Creates a new BlockPos based on this BlockPos that is one block south of this BlockPos

 Returns: `a new BlockPos that is one block south of this BlockPos`

Tipo di restituzione: net.minecraft.util.math.BlockPos

```zenscript
new BlockPos(0, 1, 2).south();
```


Creates a new BlockPos based on this BlockPos that is n block(s) south of this BlockPos

 Returns: `a new BlockPos that is n block(s) south of this BlockPos`

Tipo di restituzione: net.minecraft.util.math.BlockPos

```zenscript
new BlockPos(0, 1, 2).south(n as int);
new BlockPos(0, 1, 2).south(12);
```

| Parameter | Type | Description                 |
| --------- | ---- | --------------------------- |
| n         | int  | Nessuna descrizione fornita |


### subtract

Subtracts two positions together and returns the result.

 Restituisce: `new [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) con i valori rimossi.`

Tipo di restituzione: [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos)

```zenscript
new BlockPos(0, 1, 2).subtract(pos as crafttweaker.api.util.BlockPos);
new BlockPos(0, 1, 2).subtract(new BlockPos(2, 1, 3));
```

| Parameter | Type                                                         | Description              |
| --------- | ------------------------------------------------------------ | ------------------------ |
| pos       | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | other position to remove |


### up

Creates a new BlockPos based on this BlockPos that is one block higher than this BlockPos

 Returns: `a new BlockPos that is one block higher than this BlockPos`

Tipo di restituzione: net.minecraft.util.math.BlockPos

```zenscript
new BlockPos(0, 1, 2).up();
```


Creates a new BlockPos based on this BlockPos that is n block(s) higher than this BlockPos

 Returns: `a new BlockPos that is n block(s) higher than this BlockPos`

Tipo di restituzione: net.minecraft.util.math.BlockPos

```zenscript
new BlockPos(0, 1, 2).up(n as int);
new BlockPos(0, 1, 2).up(45);
```

| Parameter | Type | Description                 |
| --------- | ---- | --------------------------- |
| n         | int  | Nessuna descrizione fornita |


### west

Creates a new BlockPos based on this BlockPos that is one block west of this BlockPos

 Returns: `a new BlockPos that is one block west of this BlockPos`

Tipo di restituzione: net.minecraft.util.math.BlockPos

```zenscript
new BlockPos(0, 1, 2).west();
```


Creates a new BlockPos based on this BlockPos that is n block(s) west of this BlockPos

 Returns: `a new BlockPos that is n block(s) west of this BlockPos`

Tipo di restituzione: net.minecraft.util.math.BlockPos

```zenscript
new BlockPos(0, 1, 2).west(n as int);
new BlockPos(0, 1, 2).west(120);
```

| Parameter | Type | Description                 |
| --------- | ---- | --------------------------- |
| n         | int  | Nessuna descrizione fornita |


### withinDistance

Checks if the given BlockPos is within the specified distance of this BlockPos (this uses the middle of the BlockPos)

 Restituisce: `vero se il BlockPos dato è entro la distanza data di questo BlockPos`

Return type: boolean

```zenscript
new BlockPos(0, 1, 2).withinDistance(pos as crafttweaker.api.util.BlockPos, distance as double);
new BlockPos(0, 1, 2).withinDistance(new BlockPos(80, 75, 54);, 10);
```

| Parameter | Type                                                         | Description                                    |
| --------- | ------------------------------------------------------------ | ---------------------------------------------- |
| pos       | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | BlockPos to check if it is within the distance |
| distance  | double                                                       | distance to check within                       |



## Properties

| Name | Type | Ha Getter | Ha Setter |
| ---- | ---- | --------- | --------- |
| x    | int  | true      | false     |
| y    | int  | true      | false     |
| z    | int  | true      | false     |

## Operators
### ADD

Adds two positions together and returns the result.

 Restituisce: `new [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) con i valori aggiunti.`

```zenscript
new BlockPos(0, 1, 2) + pos as crafttweaker.api.util.BlockPos
new BlockPos(0, 1, 2) + new BlockPos(3, 2, 1)
```

| Parameter | Type                                                         | Description           |
| --------- | ------------------------------------------------------------ | --------------------- |
| pos       | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | other position to add |
### SUB

Subtracts two positions together and returns the result.

 Restituisce: `new [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) con i valori rimossi.`

```zenscript
new BlockPos(0, 1, 2) - pos as crafttweaker.api.util.BlockPos
new BlockPos(0, 1, 2) - new BlockPos(2, 1, 3)
```

| Parameter | Type                                                         | Description              |
| --------- | ------------------------------------------------------------ | ------------------------ |
| pos       | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | other position to remove |

## Caster

| Tipo Risultato | Implicito |
| -------------- | --------- |
| long           | false     |

