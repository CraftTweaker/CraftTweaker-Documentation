# PistonMath

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.block.type.piston.PistonMath;
```


## Static Methods

:::group{name=getMovementArea}

Return Type: [AABB](/vanilla/api/util/math/AABB)

```zenscript
PistonMath.getMovementArea(area as AABB, direction as Direction, progress as double) as AABB
```

| Parameter |                        Type                        |
|-----------|----------------------------------------------------|
| area      | [AABB](/vanilla/api/util/math/AABB)                |
| direction | [Direction](/vanilla/api/util/direction/Direction) |
| progress  | double                                             |


:::

