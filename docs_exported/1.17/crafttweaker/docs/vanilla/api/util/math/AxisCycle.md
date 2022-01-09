# AxisCycle

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.util.math.AxisCycle;
```


## Enum Constants

AxisCycle is an enum. It has 3 enum constants. They are accessible using the code below.

```zenscript
AxisCycle.NONE
AxisCycle.FORWARD
AxisCycle.BACKWARD
```
## Methods

:::group{name=cycle}

Return Type: [Axis](/vanilla/api/util/direction/Axis)

```zenscript
AxisCycle.cycle(axis as Axis) as Axis
```

| Parameter | Type | Description |
|-----------|------|-------------|
| axis | [Axis](/vanilla/api/util/direction/Axis) | No Description Provided |


:::

:::group{name=cycle}

Return Type: double

```zenscript
AxisCycle.cycle(x as double, y as double, z as double, axis as Axis) as double
```

| Parameter | Type | Description |
|-----------|------|-------------|
| x | double | No Description Provided |
| y | double | No Description Provided |
| z | double | No Description Provided |
| axis | [Axis](/vanilla/api/util/direction/Axis) | No Description Provided |


:::

:::group{name=cycle}

Return Type: int

```zenscript
AxisCycle.cycle(x as int, y as int, z as int, axis as Axis) as int
```

| Parameter | Type | Description |
|-----------|------|-------------|
| x | int | No Description Provided |
| y | int | No Description Provided |
| z | int | No Description Provided |
| axis | [Axis](/vanilla/api/util/direction/Axis) | No Description Provided |


:::

:::group{name=inverse}

Return Type: [AxisCycle](/vanilla/api/util/math/AxisCycle)

```zenscript
// AxisCycle.inverse() as AxisCycle

myAxisCycle.inverse();
```

:::


