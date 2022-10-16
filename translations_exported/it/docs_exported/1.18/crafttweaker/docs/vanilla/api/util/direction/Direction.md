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
<constant:minecraft:direction:down>
<constant:minecraft:direction:up>
<constant:minecraft:direction:north>
<constant:minecraft:direction:south>
<constant:minecraft:direction:west>
<constant:minecraft:direction:east>
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

| Parametro | Tipo                                     |
| --------- | ---------------------------------------- |
| axis      | [Axis](/vanilla/api/util/direction/Axis) |


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

| Parametro | Tipo                                     |
| --------- | ---------------------------------------- |
| axis      | [Axis](/vanilla/api/util/direction/Axis) |


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

| Parametro | Tipo  |
| --------- | ----- |
| degrees   | float |


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

| Nome             | Tipo                                                       | Ha Getter | Ha Setter |
| ---------------- | ---------------------------------------------------------- | --------- | --------- |
| axis             | [Axis](/vanilla/api/util/direction/Axis)                   | sì        | no        |
| axisDirection    | [AxisDirection](/vanilla/api/util/direction/AxisDirection) | sì        | no        |
| clockWise        | [Direction](/vanilla/api/util/direction/Direction)         | sì        | no        |
| counterClockWise | [Direction](/vanilla/api/util/direction/Direction)         | sì        | no        |
| normal           | [Vec3i](/vanilla/api/util/math/Vec3i)                      | sì        | no        |
| opposite         | [Direction](/vanilla/api/util/direction/Direction)         | sì        | no        |
| rotation         | [Quaternion](/vanilla/api/util/math/Quaternion)            | sì        | no        |
| step             | [Vector3f](/vanilla/api/util/math/Vector3f)                | sì        | no        |
| stepX            | int                                                        | sì        | no        |
| stepY            | int                                                        | sì        | no        |
| stepZ            | int                                                        | sì        | no        |
| toYRot           | float                                                      | sì        | no        |

