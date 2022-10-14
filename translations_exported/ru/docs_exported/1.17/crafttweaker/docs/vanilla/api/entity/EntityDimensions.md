# EntityDimensions

## Импорт класса

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.entity.EntityDimensions;
```


## Методы

:::group{name=makeBoundingBox}

Return Type: [AABB](/vanilla/api/util/math/AABB)

```zenscript
EntityDimensions.makeBoundingBox(vec as Vec3) as AABB
```

| Параметр | Тип                                 | Описание                |
| -------- | ----------------------------------- | ----------------------- |
| vec      | [Vec3](/vanilla/api/util/math/Vec3) | No Description Provided |


:::

:::group{name=makeBoundingBox}

Return Type: [AABB](/vanilla/api/util/math/AABB)

```zenscript
EntityDimensions.makeBoundingBox(x as double, y as double, z as double) as AABB
```

| Параметр | Тип    | Описание                |
| -------- | ------ | ----------------------- |
| x        | double | No Description Provided |
| y        | double | No Description Provided |
| z        | double | No Description Provided |


:::

:::group{name=scale}

Return Type: [EntityDimensions](/vanilla/api/entity/EntityDimensions)

```zenscript
EntityDimensions.scale(factor as float) as EntityDimensions
```

| Параметр | Тип   | Описание                |
| -------- | ----- | ----------------------- |
| factor   | float | No Description Provided |


:::

:::group{name=scale}

Return Type: [EntityDimensions](/vanilla/api/entity/EntityDimensions)

```zenscript
EntityDimensions.scale(widthFactor as float, heightFactor as float) as EntityDimensions
```

| Параметр     | Тип   | Описание                |
| ------------ | ----- | ----------------------- |
| widthFactor  | float | No Description Provided |
| heightFactor | float | No Description Provided |


:::


