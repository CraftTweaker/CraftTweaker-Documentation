# ClimateSampler

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sixikutils.api.misc.world.ClimateSampler;
```


## Extending Record

ClimateSampler extends Record. That means all methods available in Record are also available in ClimateSampler

## Methods

:::group{name=findSpawnPosition}

Return Type: [BlockPos](/vanilla/api/util/math/BlockPos)

```zenscript
// ClimateSampler.findSpawnPosition() as BlockPos

myClimateSampler.findSpawnPosition();
```

:::

:::group{name=getContinentalness}

Return Type: [DensityFunction](/mods/sixikutils/utils/world/DensityFunction)

```zenscript
// ClimateSampler.getContinentalness() as DensityFunction

myClimateSampler.getContinentalness();
```

:::

:::group{name=getDepth}

Return Type: [DensityFunction](/mods/sixikutils/utils/world/DensityFunction)

```zenscript
// ClimateSampler.getDepth() as DensityFunction

myClimateSampler.getDepth();
```

:::

:::group{name=getErosion}

Return Type: [DensityFunction](/mods/sixikutils/utils/world/DensityFunction)

```zenscript
// ClimateSampler.getErosion() as DensityFunction

myClimateSampler.getErosion();
```

:::

:::group{name=getHumidity}

Return Type: [DensityFunction](/mods/sixikutils/utils/world/DensityFunction)

```zenscript
// ClimateSampler.getHumidity() as DensityFunction

myClimateSampler.getHumidity();
```

:::

:::group{name=getTemperature}

Return Type: [DensityFunction](/mods/sixikutils/utils/world/DensityFunction)

```zenscript
// ClimateSampler.getTemperature() as DensityFunction

myClimateSampler.getTemperature();
```

:::

:::group{name=getWeirdness}

Return Type: [DensityFunction](/mods/sixikutils/utils/world/DensityFunction)

```zenscript
// ClimateSampler.getWeirdness() as DensityFunction

myClimateSampler.getWeirdness();
```

:::

:::group{name=spawnTarget}

Return Type: stdlib.List&lt;[ClimateParameterPoint](/mods/sixikutils/utils/world/ClimateParameterPoint)&gt;

```zenscript
// ClimateSampler.spawnTarget() as stdlib.List<ClimateParameterPoint>

myClimateSampler.spawnTarget();
```

:::


