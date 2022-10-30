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
Plane.HORIZONTAL
Plane.VERTICAL
```
## Methods

:::group{name=getRandomAxis}

Return Type: [Axis](/vanilla/api/util/direction/Axis)

```zenscript
Plane.getRandomAxis(random as Random) as Axis
```

| Parameter | Type | Description |
|-----------|------|-------------|
| random | [Random](/vanilla/api/util/math/Random) | No Description Provided |


:::

:::group{name=getRandomDirection}

Return Type: [Direction](/vanilla/api/util/direction/Direction)

```zenscript
Plane.getRandomDirection(random as Random) as Direction
```

| Parameter | Type | Description |
|-----------|------|-------------|
| random | [Random](/vanilla/api/util/math/Random) | No Description Provided |


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
Plane.test(direction as Direction) as boolean
```

| Parameter | Type | Description |
|-----------|------|-------------|
| direction | [Direction](/vanilla/api/util/direction/Direction) | No Description Provided |


:::


## Properties

| Name | Type | Has Getter | Has Setter | Description |
|------|------|------------|------------|-------------|
| iterator | stdlib.Iterator&lt;[Direction](/vanilla/api/util/direction/Direction)&gt; | true | false | No Description Provided |

