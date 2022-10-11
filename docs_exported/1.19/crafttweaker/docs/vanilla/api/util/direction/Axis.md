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
<constant:minecraft:direction/axis:x>
<constant:minecraft:direction/axis:y>
<constant:minecraft:direction/axis:z>
```
## Methods

:::group{name=choose}

Return Type: double

```zenscript
Axis.choose(x as double, y as double, z as double) as double
```

| Parameter |  Type  |
|-----------|--------|
| x         | double |
| y         | double |
| z         | double |


:::

:::group{name=choose}

Return Type: int

```zenscript
Axis.choose(x as int, y as int, z as int) as int
```

| Parameter | Type |
|-----------|------|
| x         | int  |
| y         | int  |
| z         | int  |


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
Axis.test(direction as Direction?) as boolean
```

| Parameter |                        Type                         |
|-----------|-----------------------------------------------------|
| direction | [Direction](/vanilla/api/util/direction/Direction)? |


:::


## Properties

|    Name    |                    Type                    | Has Getter | Has Setter |
|------------|--------------------------------------------|------------|------------|
| horizontal | boolean                                    | true       | false      |
| name       | string                                     | true       | false      |
| plane      | [Plane](/vanilla/api/util/direction/Plane) | true       | false      |
| vertical   | boolean                                    | true       | false      |

