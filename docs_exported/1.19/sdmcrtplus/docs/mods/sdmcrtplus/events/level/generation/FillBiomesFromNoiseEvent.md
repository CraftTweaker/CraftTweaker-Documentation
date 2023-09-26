# FillBiomesFromNoiseEvent

The event can be canceled

 An event is called whenever a biome is created.

The event is not cancelable.

The event does not have a result.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.events.level.generation.FillBiomesFromNoiseEvent;
```


## Extending Event

FillBiomesFromNoiseEvent extends [Event](/forge/api/event/Event). That means all methods available in [Event](/forge/api/event/Event) are also available in FillBiomesFromNoiseEvent

## Methods

:::group{name=getBiome}

Return Type: [ResourceLocation](/vanilla/api/resource/ResourceLocation)

```zenscript
// FillBiomesFromNoiseEvent.getBiome() as ResourceLocation

myFillBiomesFromNoiseEvent.getBiome();
```

:::

:::group{name=getChunkpos}

Return Type: [ChunkPos](/mods/sdmcrtplus/world/level/ChunkPos)

```zenscript
// FillBiomesFromNoiseEvent.getChunkpos() as ChunkPos

myFillBiomesFromNoiseEvent.getChunkpos();
```

:::

:::group{name=getPlayer}

Return Type: [Player](/vanilla/api/entity/type/player/Player)

```zenscript
// FillBiomesFromNoiseEvent.getPlayer() as Player

myFillBiomesFromNoiseEvent.getPlayer();
```

:::

:::group{name=setBiome}

```zenscript
FillBiomesFromNoiseEvent.setBiome(biome as ResourceLocation)
```

| Parameter |                            Type                            |
|-----------|------------------------------------------------------------|
| biome     | [ResourceLocation](/vanilla/api/resource/ResourceLocation) |


:::


