# MobStages

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.mobstages.MobStages;
```


## Static Methods

:::group{name=addRange}

```zenscript
MobStages.addRange(entityId as string, range as int)
```

| Parameter |  Type  |
|-----------|--------|
| entityId  | string |
| range     | int    |


:::

:::group{name=addReplacement}

```zenscript
MobStages.addReplacement(entityId as EntityType, replacementId as EntityType)
```

|   Parameter   |                     Type                     |
|---------------|----------------------------------------------|
| entityId      | [EntityType](/vanilla/api/entity/EntityType) |
| replacementId | [EntityType](/vanilla/api/entity/EntityType) |


:::

:::group{name=addReplacement}

```zenscript
MobStages.addReplacement(entityId as string, replacementId as string)
```

|   Parameter   |  Type  |
|---------------|--------|
| entityId      | string |
| replacementId | string |


:::

:::group{name=addReplacement}

```zenscript
MobStages.addReplacement(entityId as string, range as int, dimension as ResourceLocation)
```

| Parameter |                            Type                            |
|-----------|------------------------------------------------------------|
| entityId  | string                                                     |
| range     | int                                                        |
| dimension | [ResourceLocation](/vanilla/api/resource/ResourceLocation) |


:::

:::group{name=addReplacement}

```zenscript
MobStages.addReplacement(entityId as string, replacementId as string, dimension as ResourceLocation)
```

|   Parameter   |                            Type                            |
|---------------|------------------------------------------------------------|
| entityId      | string                                                     |
| replacementId | string                                                     |
| dimension     | [ResourceLocation](/vanilla/api/resource/ResourceLocation) |


:::

:::group{name=addStage}

```zenscript
MobStages.addStage(stage as string, entityId as EntityType)
```

| Parameter |                     Type                     |
|-----------|----------------------------------------------|
| stage     | string                                       |
| entityId  | [EntityType](/vanilla/api/entity/EntityType) |


:::

:::group{name=addStage}

```zenscript
MobStages.addStage(stage as string, entityId as string)
```

| Parameter |  Type  |
|-----------|--------|
| stage     | string |
| entityId  | string |


:::

:::group{name=addStage}

```zenscript
MobStages.addStage(stage as string, entityId as string, dimension as ResourceLocation)
```

| Parameter |                            Type                            |
|-----------|------------------------------------------------------------|
| stage     | string                                                     |
| entityId  | string                                                     |
| dimension | [ResourceLocation](/vanilla/api/resource/ResourceLocation) |


:::

:::group{name=toggleSpawner}

```zenscript
MobStages.toggleSpawner(entityId as string, allow as boolean)
```

| Parameter |  Type   |
|-----------|---------|
| entityId  | string  |
| allow     | boolean |


:::

:::group{name=toggleSpawner}

```zenscript
MobStages.toggleSpawner(entityId as string, allow as boolean, dimension as ResourceLocation)
```

| Parameter |                            Type                            |
|-----------|------------------------------------------------------------|
| entityId  | string                                                     |
| allow     | boolean                                                    |
| dimension | [ResourceLocation](/vanilla/api/resource/ResourceLocation) |


:::

