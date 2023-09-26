# IResearchEffect&LT;T : Object&GT;

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.integration.api.research.effects.IResearchEffect;
```


## Methods

:::group{name=getDesc}

Return Type: [TranslatableContents](/vanilla/api/text/content/type/TranslatableContents)

```zenscript
IResearchEffect.getDesc<T : Object>() as TranslatableContents
```

| Parameter |  Type  |
|-----------|--------|
| T         | Object |


:::

:::group{name=getEffect}

Return Type: T

```zenscript
IResearchEffect.getEffect<T : Object>() as T
```

| Parameter |  Type  |
|-----------|--------|
| T         | Object |


:::

:::group{name=getId}

Return Type: [ResourceLocation](/vanilla/api/resource/ResourceLocation)

```zenscript
IResearchEffect.getId<T : Object>() as ResourceLocation
```

| Parameter |  Type  |
|-----------|--------|
| T         | Object |


:::

:::group{name=getRegistryEntry}

Return Type: **invalid**

```zenscript
IResearchEffect.getRegistryEntry<T : Object>() as invalid
```

| Parameter |  Type  |
|-----------|--------|
| T         | Object |


:::

:::group{name=getSubtitle}

Return Type: [TranslatableContents](/vanilla/api/text/content/type/TranslatableContents)

```zenscript
IResearchEffect.getSubtitle<T : Object>() as TranslatableContents
```

| Parameter |  Type  |
|-----------|--------|
| T         | Object |


:::

:::group{name=overrides}

Return Type: boolean

```zenscript
IResearchEffect.overrides<T : Object>(var1 as IResearchEffect<T>) as boolean
```

| Parameter |                                                    Type                                                    |
|-----------|------------------------------------------------------------------------------------------------------------|
| var1      | [IResearchEffect](/mods/sdmcrtplus/integration/minecolonies/api/research/effects/IResearchEffect)&lt;T&gt; |
| T         | Object                                                                                                     |


:::

:::group{name=setEffect}

```zenscript
IResearchEffect.setEffect<T : Object>(var1 as T)
```

| Parameter |  Type  |
|-----------|--------|
| var1      | T      |
| T         | Object |


:::

:::group{name=writeToNBT}

Return Type: [CompoundTag](/mods/sdmcrtplus/nbt/CompoundTag)

```zenscript
IResearchEffect.writeToNBT<T : Object>() as CompoundTag
```

| Parameter |  Type  |
|-----------|--------|
| T         | Object |


:::


