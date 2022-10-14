# BaseSpawner

## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.world.BaseSpawner;
```


## 使用方式

:::group{name=getOrCreateDisplayEntity}

Return Type: [Entity](/vanilla/api/entity/Entity)

```zenscript
BaseSpawner.getOrCreateDisplayEntity(param0 as Level) as Entity
```

| 参数     | 类型                                | 描述                      |
| ------ | --------------------------------- | ----------------------- |
| param0 | [Level](/vanilla/api/world/Level) | No Description Provided |


:::

:::group{name=getSpin}

Return Type: double

```zenscript
// BaseSpawner.getSpin() as double

myBaseSpawner.getSpin();
```

:::

:::group{name=getoSpin}

Return Type: double

```zenscript
// BaseSpawner.getoSpin() as double

myBaseSpawner.getoSpin();
```

:::

:::group{name=setEntityId}

Return Type: void

```zenscript
BaseSpawner.setEntityId(param0 as EntityType) as void
```

| 参数     | 类型                                           | 描述                      |
| ------ | -------------------------------------------- | ----------------------- |
| param0 | [EntityType](/vanilla/api/entity/EntityType) | No Description Provided |


:::


## 参数

| 名称       | 类型                                            | 可获得   | 可设置   | 描述                      |
| -------- | --------------------------------------------- | ----- | ----- | ----------------------- |
| entityId | [BaseSpawner](/vanilla/api/world/BaseSpawner) | false | true  | No Description Provided |
| oSpin    | double                                        | true  | false | No Description Provided |
| spin     | double                                        | true  | false | No Description Provided |

