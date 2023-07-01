# BaseSpawner

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.world.BaseSpawner;
```


## Methods

:::group{name=getOrCreateDisplayEntity}

Return Type: [Entity](/vanilla/api/entity/Entity)?

```zenscript
BaseSpawner.getOrCreateDisplayEntity(level as Level, random as RandomSource, position as BlockPos) as Entity?
```

| Parameter |                        Type                         |
|-----------|-----------------------------------------------------|
| level     | [Level](/vanilla/api/world/Level)                   |
| random    | [RandomSource](/vanilla/api/util/math/RandomSource) |
| position  | [BlockPos](/vanilla/api/util/math/BlockPos)         |


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
BaseSpawner.setEntityId(type as EntityType<Entity>, level as Level, random as RandomSource, position as BlockPos)
```

| Parameter |                                           Type                                           |
|-----------|------------------------------------------------------------------------------------------|
| type      | [EntityType](/vanilla/api/entity/EntityType)&lt;[Entity](/vanilla/api/entity/Entity)&gt; |
| level     | [Level](/vanilla/api/world/Level)                                                        |
| random    | [RandomSource](/vanilla/api/util/math/RandomSource)                                      |
| position  | [BlockPos](/vanilla/api/util/math/BlockPos)                                              |


:::


## Properties

| Name  |  Type  | Has Getter | Has Setter |
|-------|--------|------------|------------|
| oSpin | double | true       | false      |
| spin  | double | true       | false      |

