# Direction

## Importare la Classe

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.util.Direction;
```


## Interfacce Implementate
Direction implements the following interfaces. That means all methods defined in these interfaces are also available in Direction

- [StringRepresentable](/vanilla/api/util/StringRepresentable)

## Enum Constants

Direction is an enum. It has 6 enum constants. They are accessible using the code below.

```zenscript
Direction.DOWN
Direction.UP
Direction.NORTH
Direction.SOUTH
Direction.WEST
Direction.EAST
```
## Metodi

:::group{name=getAxis}

Return Type: [Axis](/vanilla/api/util/direction/Axis)

```zenscript
// Direction.getAxis() as Axis

myDirection.getAxis();
```

:::

:::group{name=getAxisDirection}

Return Type: [AxisDirection](/vanilla/api/util/direction/AxisDirection)

```zenscript
// Direction.getAxisDirection() as AxisDirection

myDirection.getAxisDirection();
```

:::

:::group{name=getClockWise}

Return Type: [Direction](/vanilla/api/util/direction/Direction)

```zenscript
// Direction.getClockWise() as Direction

myDirection.getClockWise();
```

:::

:::group{name=getClockWise}

Return Type: [Direction](/vanilla/api/util/direction/Direction)

```zenscript
Direction.getClockWise(axis as Axis) as Direction
```

| Parametro | Tipo                                     | Descrizione             |
| --------- | ---------------------------------------- | ----------------------- |
| axis      | [Axis](/vanilla/api/util/direction/Axis) | No Description Provided |


:::

:::group{name=getCounterClockWise}

Return Type: [Direction](/vanilla/api/util/direction/Direction)

```zenscript
// Direction.getCounterClockWise() as Direction

myDirection.getCounterClockWise();
```

:::

:::group{name=getCounterClockWise}

Return Type: [Direction](/vanilla/api/util/direction/Direction)

```zenscript
Direction.getCounterClockWise(axis as Axis) as Direction
```

| Parametro | Tipo                                     | Descrizione             |
| --------- | ---------------------------------------- | ----------------------- |
| axis      | [Axis](/vanilla/api/util/direction/Axis) | No Description Provided |


:::

:::group{name=getName}

Return Type: string

```zenscript
// Direction.getName() as string

myDirection.getName();
```

:::

:::group{name=getNormal}

Return Type: [Vec3i](/vanilla/api/util/math/Vec3i)

```zenscript
// Direction.getNormal() as Vec3i

myDirection.getNormal();
```

:::

:::group{name=getOpposite}

Return Type: [Direction](/vanilla/api/util/direction/Direction)

```zenscript
// Direction.getOpposite() as Direction

myDirection.getOpposite();
```

:::

:::group{name=getRotation}

Return Type: [Quaternion](/vanilla/api/util/math/Quaternion)

```zenscript
// Direction.getRotation() as Quaternion

myDirection.getRotation();
```

:::

:::group{name=getStepX}

Return Type: int

```zenscript
// Direction.getStepX() as int

myDirection.getStepX();
```

:::

:::group{name=getStepY}

Return Type: int

```zenscript
// Direction.getStepY() as int

myDirection.getStepY();
```

:::

:::group{name=getStepZ}

Return Type: int

```zenscript
// Direction.getStepZ() as int

myDirection.getStepZ();
```

:::

:::group{name=isFacingAngle}

Return Type: boolean

```zenscript
Direction.isFacingAngle(degrees as float) as boolean
```

| Parametro | Tipo  | Descrizione             |
| --------- | ----- | ----------------------- |
| degrees   | float | No Description Provided |


:::

:::group{name=step}

Return Type: [Vector3f](/vanilla/api/util/math/Vector3f)

```zenscript
// Direction.step() as Vector3f

myDirection.step();
```

:::

:::group{name=toYRot}

Return Type: float

```zenscript
// Direction.toYRot() as float

myDirection.toYRot();
```

:::


## Proprietà

| Nome             | Tipo                                                       | Ha Getter | Ha Setter | Descrizione             |
| ---------------- | ---------------------------------------------------------- | --------- | --------- | ----------------------- |
| axis             | [Axis](/vanilla/api/util/direction/Axis)                   | sì        | no        | No Description Provided |
| axisDirection    | [AxisDirection](/vanilla/api/util/direction/AxisDirection) | sì        | no        | No Description Provided |
| clockWise        | [Direction](/vanilla/api/util/direction/Direction)         | sì        | no        | No Description Provided |
| counterClockWise | [Direction](/vanilla/api/util/direction/Direction)         | sì        | no        | No Description Provided |
| normal           | [Vec3i](/vanilla/api/util/math/Vec3i)                      | sì        | no        | No Description Provided |
| opposite         | [Direction](/vanilla/api/util/direction/Direction)         | sì        | no        | No Description Provided |
| rotation         | [Quaternion](/vanilla/api/util/math/Quaternion)            | sì        | no        | No Description Provided |
| step             | [Vector3f](/vanilla/api/util/math/Vector3f)                | sì        | no        | No Description Provided |
| stepX            | int                                                        | sì        | no        | No Description Provided |
| stepY            | int                                                        | sì        | no        | No Description Provided |
| stepZ            | int                                                        | sì        | no        | No Description Provided |
| toYRot           | float                                                      | sì        | no        | No Description Provided |

