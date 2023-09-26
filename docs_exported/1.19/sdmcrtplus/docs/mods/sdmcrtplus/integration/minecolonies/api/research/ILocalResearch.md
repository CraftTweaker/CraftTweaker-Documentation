# ILocalResearch

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.integration.api.research.ILocalResearch;
```


## Methods

:::group{name=getBranch}

Return Type: [ResourceLocation](/vanilla/api/resource/ResourceLocation)

```zenscript
// ILocalResearch.getBranch() as ResourceLocation

myILocalResearch.getBranch();
```

:::

:::group{name=getDepth}

Return Type: int

```zenscript
// ILocalResearch.getDepth() as int

myILocalResearch.getDepth();
```

:::

:::group{name=getId}

Return Type: [ResourceLocation](/vanilla/api/resource/ResourceLocation)

```zenscript
// ILocalResearch.getId() as ResourceLocation

myILocalResearch.getId();
```

:::

:::group{name=getProgress}

Return Type: int

```zenscript
// ILocalResearch.getProgress() as int

myILocalResearch.getProgress();
```

:::

:::group{name=getState}

Return Type: **invalid**

```zenscript
// ILocalResearch.getState() as invalid

myILocalResearch.getState();
```

:::

:::group{name=research}

Return Type: boolean

```zenscript
ILocalResearch.research(var1 as IResearchEffectManager, var2 as ILocalResearchTree) as boolean
```

| Parameter |                                                      Type                                                       |
|-----------|-----------------------------------------------------------------------------------------------------------------|
| var1      | [IResearchEffectManager](/mods/sdmcrtplus/integration/minecolonies/api/research/effects/IResearchEffectManager) |
| var2      | [ILocalResearchTree](/mods/sdmcrtplus/integration/minecolonies/api/research/ILocalResearchTree)                 |


:::

:::group{name=setProgress}

```zenscript
ILocalResearch.setProgress(var1 as int)
```

| Parameter | Type |
|-----------|------|
| var1      | int  |


:::

:::group{name=setState}

```zenscript
ILocalResearch.setState(var1 as invalid)
```

| Parameter |    Type     |
|-----------|-------------|
| var1      | **invalid** |


:::


