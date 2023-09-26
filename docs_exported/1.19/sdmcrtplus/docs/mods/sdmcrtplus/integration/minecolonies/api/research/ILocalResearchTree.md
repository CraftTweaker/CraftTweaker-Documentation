# ILocalResearchTree

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.integration.api.research.ILocalResearchTree;
```


## Methods

:::group{name=addResearch}

```zenscript
ILocalResearchTree.addResearch(var1 as ResourceLocation, var2 as ILocalResearch)
```

| Parameter |                                          Type                                           |
|-----------|-----------------------------------------------------------------------------------------|
| var1      | [ResourceLocation](/vanilla/api/resource/ResourceLocation)                              |
| var2      | [ILocalResearch](/mods/sdmcrtplus/integration/minecolonies/api/research/ILocalResearch) |


:::

:::group{name=attemptBeginResearch}

```zenscript
ILocalResearchTree.attemptBeginResearch(var1 as Player, var2 as IColony, var3 as invalid)
```

| Parameter |                                  Type                                   |
|-----------|-------------------------------------------------------------------------|
| var1      | [Player](/vanilla/api/entity/type/player/Player)                        |
| var2      | [IColony](/mods/sdmcrtplus/integration/minecolonies/api/colony/IColony) |
| var3      | **invalid**                                                             |


:::

:::group{name=attemptResetResearch}

```zenscript
ILocalResearchTree.attemptResetResearch(var1 as Player, var2 as IColony?, var3 as ILocalResearch)
```

| Parameter |                                          Type                                           |
|-----------|-----------------------------------------------------------------------------------------|
| var1      | [Player](/vanilla/api/entity/type/player/Player)                                        |
| var2      | [IColony](/mods/sdmcrtplus/integration/minecolonies/api/colony/IColony)?                |
| var3      | [ILocalResearch](/mods/sdmcrtplus/integration/minecolonies/api/research/ILocalResearch) |


:::

:::group{name=branchFinishedHighestLevel}

Return Type: boolean

```zenscript
ILocalResearchTree.branchFinishedHighestLevel(var1 as ResourceLocation) as boolean
```

| Parameter |                            Type                            |
|-----------|------------------------------------------------------------|
| var1      | [ResourceLocation](/vanilla/api/resource/ResourceLocation) |


:::

:::group{name=finishResearch}

```zenscript
ILocalResearchTree.finishResearch(var1 as ResourceLocation)
```

| Parameter |                            Type                            |
|-----------|------------------------------------------------------------|
| var1      | [ResourceLocation](/vanilla/api/resource/ResourceLocation) |


:::

:::group{name=getResearch}

Return Type: [ILocalResearch](/mods/sdmcrtplus/integration/minecolonies/api/research/ILocalResearch)

```zenscript
ILocalResearchTree.getResearch(var1 as ResourceLocation, var2 as ResourceLocation) as ILocalResearch
```

| Parameter |                            Type                            |
|-----------|------------------------------------------------------------|
| var1      | [ResourceLocation](/vanilla/api/resource/ResourceLocation) |
| var2      | [ResourceLocation](/vanilla/api/resource/ResourceLocation) |


:::

:::group{name=getResearchInProgress}

Return Type: stdlib.List&lt;[ILocalResearch](/mods/sdmcrtplus/integration/minecolonies/api/research/ILocalResearch)&gt;

```zenscript
// ILocalResearchTree.getResearchInProgress() as stdlib.List<ILocalResearch>

myILocalResearchTree.getResearchInProgress();
```

:::

:::group{name=hasCompletedResearch}

Return Type: boolean

```zenscript
ILocalResearchTree.hasCompletedResearch(var1 as ResourceLocation) as boolean
```

| Parameter |                            Type                            |
|-----------|------------------------------------------------------------|
| var1      | [ResourceLocation](/vanilla/api/resource/ResourceLocation) |


:::

:::group{name=readFromNBT}

```zenscript
ILocalResearchTree.readFromNBT(var1 as CompoundTag, var2 as IResearchEffectManager)
```

| Parameter |                                                      Type                                                       |
|-----------|-----------------------------------------------------------------------------------------------------------------|
| var1      | [CompoundTag](/mods/sdmcrtplus/nbt/CompoundTag)                                                                 |
| var2      | [IResearchEffectManager](/mods/sdmcrtplus/integration/minecolonies/api/research/effects/IResearchEffectManager) |


:::

:::group{name=writeToNBT}

```zenscript
ILocalResearchTree.writeToNBT(var1 as CompoundTag)
```

| Parameter |                      Type                       |
|-----------|-------------------------------------------------|
| var1      | [CompoundTag](/mods/sdmcrtplus/nbt/CompoundTag) |


:::


