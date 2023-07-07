# RandomState

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sixikutils.api.misc.world.RandomState;
```


## Methods

:::group{name=aquiferRandom}

Return Type: [PositionalRandomFactory](/mods/sixikutils/utils/world/PositionalRandomFactory)

```zenscript
// RandomState.aquiferRandom() as PositionalRandomFactory

myRandomState.aquiferRandom();
```

:::

:::group{name=getOrCreateRandomFactory}

Return Type: [PositionalRandomFactory](/mods/sixikutils/utils/world/PositionalRandomFactory)

```zenscript
RandomState.getOrCreateRandomFactory(rs as ResourceLocation) as PositionalRandomFactory
```

| Parameter |                            Type                            |
|-----------|------------------------------------------------------------|
| rs        | [ResourceLocation](/vanilla/api/resource/ResourceLocation) |


:::

:::group{name=legacyLevelSeed}

Return Type: long

```zenscript
// RandomState.legacyLevelSeed() as long

myRandomState.legacyLevelSeed();
```

:::

:::group{name=oreRandom}

Return Type: [PositionalRandomFactory](/mods/sixikutils/utils/world/PositionalRandomFactory)

```zenscript
// RandomState.oreRandom() as PositionalRandomFactory

myRandomState.oreRandom();
```

:::

:::group{name=router}

Return Type: [NoiseRouter](/mods/sixikutils/utils/world/NoiseRouter)

```zenscript
// RandomState.router() as NoiseRouter

myRandomState.router();
```

:::

:::group{name=sampler}

Return Type: [ClimateSampler](/mods/sixikutils/utils/world/ClimateSampler)

```zenscript
// RandomState.sampler() as ClimateSampler

myRandomState.sampler();
```

:::

:::group{name=surfaceSystem}

Return Type: [SurfaceSystem](/mods/sixikutils/utils/world/SurfaceSystem)

```zenscript
// RandomState.surfaceSystem() as SurfaceSystem

myRandomState.surfaceSystem();
```

:::


