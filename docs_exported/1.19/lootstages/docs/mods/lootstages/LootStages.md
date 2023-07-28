# LootStages

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.LootStages;
```


## Static Methods

:::group{name=addBlockTableStages}



```zenscript
LootStages.addBlockTableStages(stage as string, block as Block)
```

| Parameter |               Type                |                           Description                           |
|-----------|-----------------------------------|-----------------------------------------------------------------|
| stage     | string                            | A stage from the Game Stage mod that blocks the block LootTable |
| block     | [Block](/vanilla/api/block/Block) | The block to which the restriction will be applied              |


:::

:::group{name=addBlockTableStages}



```zenscript
LootStages.addBlockTableStages(stage as string, block as Block, replaceItem as IItemStack)
```

|  Parameter  |                    Type                    |                           Description                           |
|-------------|--------------------------------------------|-----------------------------------------------------------------|
| stage       | string                                     | A stage from the Game Stage mod that blocks the block LootTable |
| block       | [Block](/vanilla/api/block/Block)          | The block to which the restriction will be applied              |
| replaceItem | [IItemStack](/vanilla/api/item/IItemStack) | The item that the drop-down loot will be replaced with          |


:::

:::group{name=addBlockTableStages}



```zenscript
LootStages.addBlockTableStages(stage as string, block as Block, replaceTable as ResourceLocation)
```

|  Parameter   |                            Type                            |                           Description                           |
|--------------|------------------------------------------------------------|-----------------------------------------------------------------|
| stage        | string                                                     | A stage from the Game Stage mod that blocks the block LootTable |
| block        | [Block](/vanilla/api/block/Block)                          | The block to which the restriction will be applied              |
| replaceTable | [ResourceLocation](/vanilla/api/resource/ResourceLocation) | The table that the original table will be replaced with         |


:::

:::group{name=addChestItemStage}



```zenscript
LootStages.addChestItemStage(stage as string, table as ResourceLocation, itemStack as IItemStack)
```

| Parameter |                            Type                            |                                 Description                                  |
|-----------|------------------------------------------------------------|------------------------------------------------------------------------------|
| stage     | string                                                     | A stage from the Game Stage mod that will block an item                      |
| table     | [ResourceLocation](/vanilla/api/resource/ResourceLocation) | The loot table to which the lock will be applied                             |
| itemStack | [IItemStack](/vanilla/api/item/IItemStack)                 | An item that will be blocked from the loot table. Which means it won't spawn |


:::

:::group{name=addChestItemStage}



```zenscript
LootStages.addChestItemStage(stage as string, table as ResourceLocation, itemStack as IItemStack, dimension as ResourceLocation)
```

| Parameter |                            Type                            |                                 Description                                  |
|-----------|------------------------------------------------------------|------------------------------------------------------------------------------|
| stage     | string                                                     | A stage from the Game Stage mod that will block an item                      |
| table     | [ResourceLocation](/vanilla/api/resource/ResourceLocation) | The loot table to which the lock will be applied                             |
| itemStack | [IItemStack](/vanilla/api/item/IItemStack)                 | An item that will be blocked from the loot table. Which means it won't spawn |
| dimension | [ResourceLocation](/vanilla/api/resource/ResourceLocation) | The dimension in which the lock will be applied                              |


:::

:::group{name=addChestTableStage}



```zenscript
LootStages.addChestTableStage(stage as string, table as ResourceLocation)
```

| Parameter |                            Type                            |                                 Description                                  |
|-----------|------------------------------------------------------------|------------------------------------------------------------------------------|
| stage     | string                                                     | A stage from the Game Stage mod that will block an Chest LootTable           |
| table     | [ResourceLocation](/vanilla/api/resource/ResourceLocation) | The loot table that will stop spawning. Means that the chest will be empty ! |


:::

:::group{name=addChestTableStage}



```zenscript
LootStages.addChestTableStage(stage as string, table as ResourceLocation, replaceTable as ResourceLocation)
```

|  Parameter   |                            Type                            |                            Description                             |
|--------------|------------------------------------------------------------|--------------------------------------------------------------------|
| stage        | string                                                     | A stage from the Game Stage mod that will block an Chest LootTable |
| table        | [ResourceLocation](/vanilla/api/resource/ResourceLocation) | The loot table that will stop spawning.                            |
| replaceTable | [ResourceLocation](/vanilla/api/resource/ResourceLocation) | The table to be replaced with, the main loot table                 |


:::

:::group{name=addEntityTableStage}



```zenscript
LootStages.addEntityTableStage(stage as string, table as ResourceLocation)
```

| Parameter |                            Type                            |                             Description                             |
|-----------|------------------------------------------------------------|---------------------------------------------------------------------|
| stage     | string                                                     | A stage from the Game Stage mod that will block an Entity LootTable |
| table     | [ResourceLocation](/vanilla/api/resource/ResourceLocation) | The table that will stop falling out                                |


:::

:::group{name=addEntityTableStage}



```zenscript
LootStages.addEntityTableStage(stage as string, table as ResourceLocation, replaceTable as ResourceLocation)
```

|  Parameter   |                            Type                            |                             Description                             |
|--------------|------------------------------------------------------------|---------------------------------------------------------------------|
| stage        | string                                                     | A stage from the Game Stage mod that will block an Entity LootTable |
| table        | [ResourceLocation](/vanilla/api/resource/ResourceLocation) | The table that will stop falling out                                |
| replaceTable | [ResourceLocation](/vanilla/api/resource/ResourceLocation) | The table that the original table will be replaced with             |


:::

:::group{name=addEntityTableStage}



```zenscript
LootStages.addEntityTableStage(stage as string, table as ResourceLocation, replaceTable as ResourceLocation, dimension as ResourceLocation)
```

|  Parameter   |                            Type                            |                             Description                             |
|--------------|------------------------------------------------------------|---------------------------------------------------------------------|
| stage        | string                                                     | A stage from the Game Stage mod that will block an Entity LootTable |
| table        | [ResourceLocation](/vanilla/api/resource/ResourceLocation) | The table that will stop falling out                                |
| replaceTable | [ResourceLocation](/vanilla/api/resource/ResourceLocation) | The table that the original table will be replaced with             |
| dimension    | [ResourceLocation](/vanilla/api/resource/ResourceLocation) | The dimension in which the lock will be applied                     |


:::

