# Direction

Represents a cardinal direction (north, south, east, west) and (up and down).

Questa classe è stata aggiunta da una mod con ID `crafttweaker`. Perciò, è necessario avere questa mod installata per poter utilizzare questa funzione.

## Importing the class
Potrebbe essere necessario importare il pacchetto, se si incontrano dei problemi (come castare un vettore), quindi meglio essere sicuri e aggiungere la direttiva di importazione.
```zenscript
crafttweaker.api.util.Direction
```

## Methods
### rotateAround

Rotates this direction around a given Axis

Returns [crafttweaker.api.util.Direction](/vanilla/api/util/Direction)

```zenscript
<direction:north>.rotateAround(axis as crafttweaker.api.util.DirectionAxis);
<direction:north>.rotateAround(<directionaxis:north>);
```

| Parameter | Type                                                                   | Description               |
| --------- | ---------------------------------------------------------------------- | ------------------------- |
| axis      | [crafttweaker.api.util.DirectionAxis](/vanilla/api/util/DirectionAxis) | the Axis to rotate around |


### rotateY

Rotates this direction on the Y axis

 Returns: `the direction that rotated on the Y axis of this direction`

Returns [crafttweaker.api.util.Direction](/vanilla/api/util/Direction)

```zenscript
<direction:north>.rotateY();
```

### rotateYCCW

Rotates this direction counter-clock wise on the Y axis

 Returns: `the direction that is counter clockwise on the Y axis`

Returns [crafttweaker.api.util.Direction](/vanilla/api/util/Direction)

```zenscript
<direction:north>.rotateYCCW();
```


## Properties

| Name            | Type                                                                   | Ha Getter | Ha Setter |
| --------------- | ---------------------------------------------------------------------- | --------- | --------- |
| axis            | [crafttweaker.api.util.DirectionAxis](/vanilla/api/util/DirectionAxis) | true      | false     |
| axisOffset      | int                                                                    | true      | false     |
| horizontalAngle | float                                                                  | true      | false     |
| horizontalIndex | int                                                                    | true      | false     |
| index           | int                                                                    | true      | false     |
| name            | String                                                                 | true      | false     |
| opposite        | [crafttweaker.api.util.Direction](/vanilla/api/util/Direction)         | true      | false     |
| xOffset         | int                                                                    | true      | false     |
| yOffset         | int                                                                    | true      | false     |
| zOffset         | int                                                                    | true      | false     |

