# IResearchManager

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.integration.api.research.IResearchManager;
```


## Methods

:::group{name=checkAutoStartResearch}

```zenscript
// IResearchManager.checkAutoStartResearch()

myIResearchManager.checkAutoStartResearch();
```

:::

:::group{name=getResearchEffectIdFrom}

Return Type: [ResourceLocation](/vanilla/api/resource/ResourceLocation)

```zenscript
IResearchManager.getResearchEffectIdFrom(var1 as Block) as ResourceLocation
```

| Parameter |               Type                |
|-----------|-----------------------------------|
| var1      | [Block](/vanilla/api/block/Block) |


:::

:::group{name=getResearchEffects}

Return Type: [IResearchEffectManager](/mods/sdmcrtplus/integration/minecolonies/api/research/effects/IResearchEffectManager)

```zenscript
// IResearchManager.getResearchEffects() as IResearchEffectManager

myIResearchManager.getResearchEffects();
```

:::

:::group{name=getResearchTree}

Return Type: [ILocalResearchTree](/mods/sdmcrtplus/integration/minecolonies/api/research/ILocalResearchTree)

```zenscript
// IResearchManager.getResearchTree() as ILocalResearchTree

myIResearchManager.getResearchTree();
```

:::

:::group{name=readFromNBT}

```zenscript
IResearchManager.readFromNBT(var1 as CompoundTag)
```

| Parameter |                      Type                       |
|-----------|-------------------------------------------------|
| var1      | [CompoundTag](/mods/sdmcrtplus/nbt/CompoundTag) |


:::

:::group{name=writeToNBT}

```zenscript
IResearchManager.writeToNBT(var1 as CompoundTag)
```

| Parameter |                      Type                       |
|-----------|-------------------------------------------------|
| var1      | [CompoundTag](/mods/sdmcrtplus/nbt/CompoundTag) |


:::


