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
MobStages.addReplacement(entityId as MCEntityType, replacementId as MCEntityType)
```

|   Parameter   |                     Type                           |
|---------------|----------------------------------------------------|
| entityId      | [MCEntityType](/vanilla/api/entities/MCEntityType) |
| replacementId | [MCEntityType](/vanilla/api/entities/MCEntityType) |


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
MobStages.addReplacement(entityId as string, range as int, dimension as MCResourceLocation)
```

| Parameter |                            Type                            |
|-----------|------------------------------------------------------------|
| entityId  | string                                                     |
| range     | int                                                        |
| dimension | [MCResourceLocation](/vanilla/api/util/MCResourceLocation) |


:::

:::group{name=addReplacement}

```zenscript
MobStages.addReplacement(entityId as string, replacementId as string, dimension as MCResourceLocation)
```

|   Parameter   |                            Type                            |
|---------------|------------------------------------------------------------|
| entityId      | string                                                     |
| replacementId | string                                                     |
| dimension     | [MCResourceLocation](/vanilla/api/util/MCResourceLocation) |


:::

:::group{name=addStage}

```zenscript
MobStages.addStage(stage as string, entityId as MCEntityType)
```

| Parameter |                     Type                           |
|-----------|----------------------------------------------------|
| stage     | string                                             |
| entityId  | [MCEntityType](/vanilla/api/entities/MCEntityType) |


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
MobStages.addStage(stage as string, entityId as string, dimension as MCResourceLocation)
```

| Parameter |                            Type                            |
|-----------|------------------------------------------------------------|
| stage     | string                                                     |
| entityId  | string                                                     |
| dimension | [MCResourceLocation](/vanilla/api/util/MCResourceLocation) |


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
MobStages.toggleSpawner(entityId as string, allow as boolean, dimension as MCResourceLocation)
```

| Parameter |                            Type                            |
|-----------|------------------------------------------------------------|
| entityId  | string                                                     |
| allow     | boolean                                                    |
| dimension | [MCResourceLocation](/vanilla/api/util/MCResourceLocation) |


:::

