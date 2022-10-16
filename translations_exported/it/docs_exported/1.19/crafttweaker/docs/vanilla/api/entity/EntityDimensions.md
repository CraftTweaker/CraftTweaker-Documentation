# EntityDimensions

## Importare la Classe

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.entity.EntityDimensions;
```


## Metodi

:::group{name=makeBoundingBox}

Return Type: [AABB](/vanilla/api/util/math/AABB)

```zenscript
EntityDimensions.makeBoundingBox(vec as Vec3) as AABB
```

| Parametro | Tipo                                |
| --------- | ----------------------------------- |
| vec       | [Vec3](/vanilla/api/util/math/Vec3) |


:::

:::group{name=makeBoundingBox}

Return Type: [AABB](/vanilla/api/util/math/AABB)

```zenscript
EntityDimensions.makeBoundingBox(x as double, y as double, z as double) as AABB
```

| Parametro | Tipo   |
| --------- | ------ |
| x         | double |
| y         | double |
| z         | double |


:::

:::group{name=scale}

Return Type: [EntityDimensions](/vanilla/api/entity/EntityDimensions)

```zenscript
EntityDimensions.scale(factor as float) as EntityDimensions
```

| Parametro | Tipo  |
| --------- | ----- |
| factor    | float |


:::

:::group{name=scale}

Return Type: [EntityDimensions](/vanilla/api/entity/EntityDimensions)

```zenscript
EntityDimensions.scale(widthFactor as float, heightFactor as float) as EntityDimensions
```

| Parametro    | Tipo  |
| ------------ | ----- |
| widthFactor  | float |
| heightFactor | float |


:::


