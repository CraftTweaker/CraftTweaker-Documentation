# IResearchEffectManager

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.integration.api.research.effects.IResearchEffectManager;
```


## Methods

:::group{name=applyEffect}

```zenscript
IResearchEffectManager.applyEffect<T : Object>(var1 as IResearchEffect<T>)
```

| Parameter |                                                    Type                                                    |
|-----------|------------------------------------------------------------------------------------------------------------|
| var1      | [IResearchEffect](/mods/sdmcrtplus/integration/minecolonies/api/research/effects/IResearchEffect)&lt;T&gt; |
| T         | Object                                                                                                     |


:::

:::group{name=getEffect}

Return Type: W

```zenscript
IResearchEffectManager.getEffect<W : IResearchEffect>(var1 as ResourceLocation, var2 as Class<W>) as W
```

| Parameter |                                               Type                                                |
|-----------|---------------------------------------------------------------------------------------------------|
| var1      | [ResourceLocation](/vanilla/api/resource/ResourceLocation)                                        |
| var2      | Class&lt;W&gt;                                                                                    |
| W         | [IResearchEffect](/mods/sdmcrtplus/integration/minecolonies/api/research/effects/IResearchEffect) |


:::

:::group{name=getEffectStrength}

Return Type: double

```zenscript
IResearchEffectManager.getEffectStrength(var1 as ResourceLocation) as double
```

| Parameter |                            Type                            |
|-----------|------------------------------------------------------------|
| var1      | [ResourceLocation](/vanilla/api/resource/ResourceLocation) |


:::

:::group{name=removeAllEffects}

```zenscript
// IResearchEffectManager.removeAllEffects()

myIResearchEffectManager.removeAllEffects();
```

:::


