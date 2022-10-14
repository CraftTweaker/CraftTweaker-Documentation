# EntityDimensions

## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.entity.EntityDimensions;
```


## 使用方式

:::group{name=makeBoundingBox}

Return Type: [AABB](/vanilla/api/util/math/AABB)

```zenscript
EntityDimensions.makeBoundingBox(vec as Vec3) as AABB
```

| 参数  | 类型                                  |
| --- | ----------------------------------- |
| vec | [Vec3](/vanilla/api/util/math/Vec3) |


:::

:::group{name=makeBoundingBox}

Return Type: [AABB](/vanilla/api/util/math/AABB)

```zenscript
EntityDimensions.makeBoundingBox(x as double, y as double, z as double) as AABB
```

| 参数 | 类型     |
| -- | ------ |
| x  | double |
| y  | double |
| z  | double |


:::

:::group{name=scale}

Return Type: [EntityDimensions](/vanilla/api/entity/EntityDimensions)

```zenscript
EntityDimensions.scale(factor as float) as EntityDimensions
```

| 参数     | 类型    |
| ------ | ----- |
| factor | float |


:::

:::group{name=scale}

Return Type: [EntityDimensions](/vanilla/api/entity/EntityDimensions)

```zenscript
EntityDimensions.scale(widthFactor as float, heightFactor as float) as EntityDimensions
```

| 参数           | 类型    |
| ------------ | ----- |
| widthFactor  | float |
| heightFactor | float |


:::


