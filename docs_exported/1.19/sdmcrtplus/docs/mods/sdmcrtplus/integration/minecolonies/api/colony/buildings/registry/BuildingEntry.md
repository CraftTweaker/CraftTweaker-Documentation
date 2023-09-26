# BuildingEntry

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.integration.api.colony.buildings.registry.BuildingEntry;
```


## Methods

:::group{name=getBuildingBlock}

Return Type: [AbstractBlockMinecolonies](/mods/sdmcrtplus/integration/minecolonies/api/blocks/AbstractBlockMinecolonies)

```zenscript
// BuildingEntry.getBuildingBlock() as AbstractBlockMinecolonies

myBuildingEntry.getBuildingBlock();
```

:::

:::group{name=getModuleProducers}

Return Type: stdlib.List&lt;[Supplier](/mods/sdmcrtplus/utils/Supplier)&gt;

```zenscript
// BuildingEntry.getModuleProducers() as stdlib.List<Supplier>

myBuildingEntry.getModuleProducers();
```

:::

:::group{name=getModuleViewProducers}

Return Type: stdlib.List&lt;[Supplier](/mods/sdmcrtplus/utils/Supplier)&lt;[Supplier](/mods/sdmcrtplus/utils/Supplier)&lt;[IBuildingModuleView](/mods/sdmcrtplus/integration/minecolonies/api/colony/buildings/registry/IBuildingModuleView)&gt;&gt;&gt;

```zenscript
// BuildingEntry.getModuleViewProducers() as stdlib.List<Supplier<Supplier<IBuildingModuleView>>>

myBuildingEntry.getModuleViewProducers();
```

:::

:::group{name=getRegistryName}

Return Type: [ResourceLocation](/vanilla/api/resource/ResourceLocation)

```zenscript
// BuildingEntry.getRegistryName() as ResourceLocation

myBuildingEntry.getRegistryName();
```

:::

:::group{name=getTranslationKey}

Return Type: string

```zenscript
// BuildingEntry.getTranslationKey() as string

myBuildingEntry.getTranslationKey();
```

:::

:::group{name=produceBuilding}

Return Type: [IBuilding](/mods/sdmcrtplus/integration/minecolonies/api/colony/buildings/IBuilding)

```zenscript
BuildingEntry.produceBuilding(position as BlockPos, colony as IColony) as IBuilding
```

| Parameter |                                  Type                                   |
|-----------|-------------------------------------------------------------------------|
| position  | [BlockPos](/vanilla/api/util/math/BlockPos)                             |
| colony    | [IColony](/mods/sdmcrtplus/integration/minecolonies/api/colony/IColony) |


:::

:::group{name=produceBuildingView}

Return Type: [IBuildingView](/mods/sdmcrtplus/integration/minecolonies/api/colony/buildings/views/IBuildingView)

```zenscript
BuildingEntry.produceBuildingView(position as BlockPos, colony as IColonyView) as IBuildingView
```

| Parameter |                                      Type                                       |
|-----------|---------------------------------------------------------------------------------|
| position  | [BlockPos](/vanilla/api/util/math/BlockPos)                                     |
| colony    | [IColonyView](/mods/sdmcrtplus/integration/minecolonies/api/colony/IColonyView) |


:::


