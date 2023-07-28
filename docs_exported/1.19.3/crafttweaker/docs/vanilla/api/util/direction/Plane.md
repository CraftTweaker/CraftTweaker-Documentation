# Plane

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.util.direction.Plane;
```


## Implemented Interfaces
Plane implements the following interfaces. That means all methods defined in these interfaces are also available in Plane

- stdlib.Iterable&lt;[Direction](/vanilla/api/util/direction/Direction)&gt;
- Predicate&lt;[Direction](/vanilla/api/util/direction/Direction)&gt;

## Enum Constants

Plane is an enum. It has 2 enum constants. They are accessible using the code below.

```zenscript
<constant:minecraft:direction/plane:horizontal>
<constant:minecraft:direction/plane:vertical>
```
## Methods

:::group{name=getRandomAxis}

Return Type: [Axis](/vanilla/api/util/direction/Axis)

```zenscript
Plane.getRandomAxis(random as RandomSource) as Axis
```

| Parameter |                        Type                         |
|-----------|-----------------------------------------------------|
| random    | [RandomSource](/vanilla/api/util/math/RandomSource) |


:::

:::group{name=getRandomDirection}

Return Type: [Direction](/vanilla/api/util/direction/Direction)

```zenscript
Plane.getRandomDirection(random as RandomSource) as Direction
```

| Parameter |                        Type                         |
|-----------|-----------------------------------------------------|
| random    | [RandomSource](/vanilla/api/util/math/RandomSource) |


:::

:::group{name=iterator}

Return Type: stdlib.Iterator&lt;[Direction](/vanilla/api/util/direction/Direction)&gt;

```zenscript
// Plane.iterator() as stdlib.Iterator<Direction>

myPlane.iterator();
```

:::

:::group{name=test}

Return Type: boolean

```zenscript
Plane.test(direction as Direction?) as boolean
```

| Parameter |                        Type                         |
|-----------|-----------------------------------------------------|
| direction | [Direction](/vanilla/api/util/direction/Direction)? |


:::


## Properties

|   Name   |                                   Type                                    | Has Getter | Has Setter |
|----------|---------------------------------------------------------------------------|------------|------------|
| iterator | stdlib.Iterator&lt;[Direction](/vanilla/api/util/direction/Direction)&gt; | true       | false      |

