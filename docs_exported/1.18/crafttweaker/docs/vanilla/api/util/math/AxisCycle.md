# AxisCycle

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.util.math.AxisCycle;
```


## Enum Constants

AxisCycle is an enum. It has 3 enum constants. They are accessible using the code below.

```zenscript
<constant:minecraft:direction/axiscycle:none>
<constant:minecraft:direction/axiscycle:forward>
<constant:minecraft:direction/axiscycle:backward>
```
## Methods

:::group{name=cycle}

Return Type: [Axis](/vanilla/api/util/direction/Axis)

```zenscript
AxisCycle.cycle(axis as Axis) as Axis
```

| Parameter |                   Type                   |
|-----------|------------------------------------------|
| axis      | [Axis](/vanilla/api/util/direction/Axis) |


:::

:::group{name=cycle}

Return Type: double

```zenscript
AxisCycle.cycle(x as double, y as double, z as double, axis as Axis) as double
```

| Parameter |                   Type                   |
|-----------|------------------------------------------|
| x         | double                                   |
| y         | double                                   |
| z         | double                                   |
| axis      | [Axis](/vanilla/api/util/direction/Axis) |


:::

:::group{name=cycle}

Return Type: int

```zenscript
AxisCycle.cycle(x as int, y as int, z as int, axis as Axis) as int
```

| Parameter |                   Type                   |
|-----------|------------------------------------------|
| x         | int                                      |
| y         | int                                      |
| z         | int                                      |
| axis      | [Axis](/vanilla/api/util/direction/Axis) |


:::

:::group{name=inverse}

Return Type: [AxisCycle](/vanilla/api/util/math/AxisCycle)

```zenscript
// AxisCycle.inverse() as AxisCycle

myAxisCycle.inverse();
```

:::


