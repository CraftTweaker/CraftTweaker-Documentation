# EntityDimensions

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.entity.EntityDimensions;
```


## Extending Record

EntityDimensions extends Record. That means all methods available in Record are also available in EntityDimensions

## Methods

:::group{name=makeBoundingBox}

Return Type: [AABB](/vanilla/api/util/math/AABB)

```zenscript
EntityDimensions.makeBoundingBox(vec as Vec3) as AABB
```

| Parameter |                Type                 |
|-----------|-------------------------------------|
| vec       | [Vec3](/vanilla/api/util/math/Vec3) |


:::

:::group{name=makeBoundingBox}

Return Type: [AABB](/vanilla/api/util/math/AABB)

```zenscript
EntityDimensions.makeBoundingBox(x as double, y as double, z as double) as AABB
```

| Parameter |  Type  |
|-----------|--------|
| x         | double |
| y         | double |
| z         | double |


:::

:::group{name=scale}

Return Type: [EntityDimensions](/vanilla/api/entity/EntityDimensions)

```zenscript
EntityDimensions.scale(factor as float) as EntityDimensions
```

| Parameter | Type  |
|-----------|-------|
| factor    | float |


:::

:::group{name=scale}

Return Type: [EntityDimensions](/vanilla/api/entity/EntityDimensions)

```zenscript
EntityDimensions.scale(widthFactor as float, heightFactor as float) as EntityDimensions
```

|  Parameter   | Type  |
|--------------|-------|
| widthFactor  | float |
| heightFactor | float |


:::


