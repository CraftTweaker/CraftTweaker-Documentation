# BaseSpawner

## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.world.BaseSpawner;
```


## 使用方式

:::group{name=getOrCreateDisplayEntity}

Return Type: [Entity](/vanilla/api/entity/Entity)?

```zenscript
BaseSpawner.getOrCreateDisplayEntity(param0 as Level) as Entity?
```

| 参数     | 类型                                |
| ------ | --------------------------------- |
| param0 | [Level](/vanilla/api/world/Level) |


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

```zenscript
BaseSpawner.setEntityId(param0 as EntityType)
```

| 参数     | 类型                                           |
| ------ | -------------------------------------------- |
| param0 | [EntityType](/vanilla/api/entity/EntityType) |


:::


## 参数

| 名称       | 类型                                            | 可获得   | 可设置   |
| -------- | --------------------------------------------- | ----- | ----- |
| entityId | [BaseSpawner](/vanilla/api/world/BaseSpawner) | false | true  |
| oSpin    | double                                        | true  | false |
| spin     | double                                        | true  | false |

