# GenerationStages

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.generationstages.GenerationStages;
```


## Static Methods

:::group{name=addBiomeStages}

By adding some biome to the stage, it will not spawn and in its place will be the biome of the plain. This restriction works until the player gets a stage.

```zenscript
GenerationStages.addBiomeStages(stage as string, biome as ResourceLocation)
```

| Parameter |                            Type                            |                 Description                 |
|-----------|------------------------------------------------------------|---------------------------------------------|
| stage     | string                                                     | The stage needed to unlock                  |
| biome     | [ResourceLocation](/vanilla/api/resource/ResourceLocation) | A biome that needs to be added to the stage |


:::

:::group{name=addFeatureStages}

Allows you to add generation parts such as Grass, Trees, Lakes, etc. to a stage

```zenscript
GenerationStages.addFeatureStages(stages as string, feature as ResourceLocation)
```

| Parameter |                            Type                            |                  Description                  |
|-----------|------------------------------------------------------------|-----------------------------------------------|
| stages    | string                                                     | The stage needed to unlock                    |
| feature   | [ResourceLocation](/vanilla/api/resource/ResourceLocation) | A feature that needs to be added to the stage |


:::

:::group{name=addStructureStage}



```zenscript
GenerationStages.addStructureStage(stage as string, dungeon as ResourceLocation)
```

| Parameter |                            Type                            |                   Description                    |
|-----------|------------------------------------------------------------|--------------------------------------------------|
| stage     | string                                                     | The stage that blocks the spawn of the structure |
| dungeon   | [ResourceLocation](/vanilla/api/resource/ResourceLocation) | The structure that will be blocked               |


:::

:::group{name=getStructuresTemplates}

Return Type: stdlib.List&lt;[ResourceLocation](/vanilla/api/resource/ResourceLocation)&gt;

```zenscript
// GenerationStages.getStructuresTemplates() as stdlib.List<ResourceLocation>

GenerationStages.getStructuresTemplates();
```

:::

:::group{name=setClearAll}

Parameters that will be applied and cannot be undone from outside

```zenscript
GenerationStages.setClearAll(clearAll as boolean)
```

| Parameter |  Type   |                                                               Description                                                                |
|-----------|---------|------------------------------------------------------------------------------------------------------------------------------------------|
| clearAll  | boolean | The parameter is necessary if you want there to be no generation in the world. There will be some plains with a distribution into biomes |


:::

:::group{name=setClearAll}



```zenscript
GenerationStages.setClearAll(stage as string, clearAll as boolean)
```

| Parameter |  Type   |                                                               Description                                                                |
|-----------|---------|------------------------------------------------------------------------------------------------------------------------------------------|
| stage     | string  | The stage needed to unlock                                                                                                               |
| clearAll  | boolean | The parameter is necessary if you want there to be no generation in the world. There will be some plains with a distribution into biomes |


:::

:::group{name=setDeleteAll}

Parameters that will be applied and cannot be undone from outside

```zenscript
GenerationStages.setDeleteAll(deleteAll as boolean)
```

| Parameter |  Type   |                                                      Description                                                      |
|-----------|---------|-----------------------------------------------------------------------------------------------------------------------|
| deleteAll | boolean | The world will be one continuous plain. What does it mean in the world there will be one earth and caves without ores |


:::

:::group{name=setDeleteAll}



```zenscript
GenerationStages.setDeleteAll(stage as string, deleteAll as boolean)
```

| Parameter |  Type   |                                                      Description                                                      |
|-----------|---------|-----------------------------------------------------------------------------------------------------------------------|
| stage     | string  | The stage needed to unlock                                                                                            |
| deleteAll | boolean | The world will be one continuous plain. What does it mean in the world there will be one earth and caves without ores |


:::

:::group{name=setStarterChunk}

Parameters that will be applied and cannot be undone from outside

```zenscript
GenerationStages.setStarterChunk(starterChunk as boolean)
```

|  Parameter   |  Type   |                                                            Description                                                             |
|--------------|---------|------------------------------------------------------------------------------------------------------------------------------------|
| starterChunk | boolean | The spawn chunk will be cleared of everything except the biome. Which means neither grass, nor trees, and not what this biome adds |


:::

