# Axis

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.util.direction.Axis;
```


## Implemented Interfaces
Axis implements the following interfaces. That means all methods defined in these interfaces are also available in Axis

- [StringRepresentable](/vanilla/api/util/StringRepresentable)
- Predicate&lt;[Direction](/vanilla/api/util/direction/Direction)&gt;

## Enum Constants

Axis is an enum. It has 3 enum constants. They are accessible using the code below.

```zenscript
Axis.X
Axis.Y
Axis.Z
```
## Methods

:::group{name=choose}

Return Type: double

```zenscript
Axis.choose(x as double, y as double, z as double) as double
```

| Parameter | Type | Description |
|-----------|------|-------------|
| x | double | No Description Provided |
| y | double | No Description Provided |
| z | double | No Description Provided |


:::

:::group{name=choose}

Return Type: int

```zenscript
Axis.choose(x as int, y as int, z as int) as int
```

| Parameter | Type | Description |
|-----------|------|-------------|
| x | int | No Description Provided |
| y | int | No Description Provided |
| z | int | No Description Provided |


:::

:::group{name=getName}

Return Type: string

```zenscript
// Axis.getName() as string

myAxis.getName();
```

:::

:::group{name=getPlane}

Return Type: [Plane](/vanilla/api/util/direction/Plane)

```zenscript
// Axis.getPlane() as Plane

myAxis.getPlane();
```

:::

:::group{name=isHorizontal}

Return Type: boolean

```zenscript
// Axis.isHorizontal() as boolean

myAxis.isHorizontal();
```

:::

:::group{name=isVertical}

Return Type: boolean

```zenscript
// Axis.isVertical() as boolean

myAxis.isVertical();
```

:::

:::group{name=test}

Return Type: boolean

```zenscript
Axis.test(direction as Direction) as boolean
```

| Parameter | Type | Description |
|-----------|------|-------------|
| direction | [Direction](/vanilla/api/util/direction/Direction) | No Description Provided |


:::


## Properties

| Name | Type | Has Getter | Has Setter | Description |
|------|------|------------|------------|-------------|
| horizontal | boolean | true | false | No Description Provided |
| name | string | true | false | No Description Provided |
| plane | [Plane](/vanilla/api/util/direction/Plane) | true | false | No Description Provided |
| vertical | boolean | true | false | No Description Provided |

