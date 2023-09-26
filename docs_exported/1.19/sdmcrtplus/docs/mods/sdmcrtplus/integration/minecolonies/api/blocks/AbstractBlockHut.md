# AbstractBlockHut

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.integration.api.blocks.AbstractBlockHut;
```


## Extending AbstractBlockMinecolonies&lt;B&gt;

AbstractBlockHut extends [AbstractBlockMinecolonies](/mods/sdmcrtplus/integration/minecolonies/api/blocks/AbstractBlockMinecolonies)&lt;B&gt;. That means all methods available in [AbstractBlockMinecolonies](/mods/sdmcrtplus/integration/minecolonies/api/blocks/AbstractBlockMinecolonies)&lt;B&gt; are also available in AbstractBlockHut

## Implemented Interfaces
AbstractBlockHut implements the following interfaces. That means all methods defined in these interfaces are also available in AbstractBlockHut

- [ITickableBlockMinecolonies](/mods/sdmcrtplus/integration/minecolonies/api/blocks/interfaces/ITickableBlockMinecolonies)
- [IBuildingBrowsableBlock](/mods/sdmcrtplus/integration/minecolonies/api/blocks/interfaces/IBuildingBrowsableBlock)

## Methods

:::group{name=getBlueprintDisplayName}

Return Type: [Component](/vanilla/api/text/Component)

```zenscript
AbstractBlockHut.getBlueprintDisplayName<T : AbstractBlockHut<T>>() as Component
```

| Parameter |                                                Type                                                |
|-----------|----------------------------------------------------------------------------------------------------|
| T         | [AbstractBlockHut](/mods/sdmcrtplus/integration/minecolonies/api/blocks/AbstractBlockHut)&lt;T&gt; |


:::

:::group{name=getBlueprintName}

Return Type: string

```zenscript
AbstractBlockHut.getBlueprintName<T : AbstractBlockHut<T>>() as string
```

| Parameter |                                                Type                                                |
|-----------|----------------------------------------------------------------------------------------------------|
| T         | [AbstractBlockHut](/mods/sdmcrtplus/integration/minecolonies/api/blocks/AbstractBlockHut)&lt;T&gt; |


:::

:::group{name=getBuildingEntry}

Return Type: [BuildingEntry](/mods/sdmcrtplus/integration/minecolonies/api/colony/buildings/registry/BuildingEntry)

```zenscript
AbstractBlockHut.getBuildingEntry<T : AbstractBlockHut<T>>() as BuildingEntry
```

| Parameter |                                                Type                                                |
|-----------|----------------------------------------------------------------------------------------------------|
| T         | [AbstractBlockHut](/mods/sdmcrtplus/integration/minecolonies/api/blocks/AbstractBlockHut)&lt;T&gt; |


:::

:::group{name=getDesc}

Return Type: stdlib.List&lt;[MutableComponent](/vanilla/api/text/MutableComponent)&gt;

```zenscript
AbstractBlockHut.getDesc<T : AbstractBlockHut<T>>() as stdlib.List<MutableComponent>
```

| Parameter |                                                Type                                                |
|-----------|----------------------------------------------------------------------------------------------------|
| T         | [AbstractBlockHut](/mods/sdmcrtplus/integration/minecolonies/api/blocks/AbstractBlockHut)&lt;T&gt; |


:::

:::group{name=getDestroyProgress}

Return Type: float

```zenscript
AbstractBlockHut.getDestroyProgress<T : AbstractBlockHut<T>>(state as BlockState, player as Player, world as BlockGetter, pos as BlockPos) as float
```

| Parameter |                                                Type                                                |
|-----------|----------------------------------------------------------------------------------------------------|
| state     | [BlockState](/vanilla/api/block/BlockState)                                                        |
| player    | [Player](/vanilla/api/entity/type/player/Player)                                                   |
| world     | [BlockGetter](/mods/sdmcrtplus/world/level/BlockGetter)                                            |
| pos       | [BlockPos](/vanilla/api/util/math/BlockPos)                                                        |
| T         | [AbstractBlockHut](/mods/sdmcrtplus/integration/minecolonies/api/blocks/AbstractBlockHut)&lt;T&gt; |


:::

:::group{name=getHutName}

Return Type: string

```zenscript
AbstractBlockHut.getHutName<T : AbstractBlockHut<T>>() as string
```

| Parameter |                                                Type                                                |
|-----------|----------------------------------------------------------------------------------------------------|
| T         | [AbstractBlockHut](/mods/sdmcrtplus/integration/minecolonies/api/blocks/AbstractBlockHut)&lt;T&gt; |


:::

:::group{name=getLevel}

Return Type: int

```zenscript
AbstractBlockHut.getLevel<T : AbstractBlockHut<T>>(data as CompoundTag) as int
```

| Parameter |                                                Type                                                |
|-----------|----------------------------------------------------------------------------------------------------|
| data      | [CompoundTag](/mods/sdmcrtplus/nbt/CompoundTag)                                                    |
| T         | [AbstractBlockHut](/mods/sdmcrtplus/integration/minecolonies/api/blocks/AbstractBlockHut)&lt;T&gt; |


:::

:::group{name=getRegistryName}

Return Type: [ResourceLocation](/vanilla/api/resource/ResourceLocation)

```zenscript
AbstractBlockHut.getRegistryName<T : AbstractBlockHut<T>>() as ResourceLocation
```

| Parameter |                                                Type                                                |
|-----------|----------------------------------------------------------------------------------------------------|
| T         | [AbstractBlockHut](/mods/sdmcrtplus/integration/minecolonies/api/blocks/AbstractBlockHut)&lt;T&gt; |


:::

:::group{name=getStateForPlacement}

Return Type: [BlockState](/vanilla/api/block/BlockState)?

```zenscript
AbstractBlockHut.getStateForPlacement<T : AbstractBlockHut<T>>(context as invalid) as BlockState?
```

| Parameter |                                                Type                                                |
|-----------|----------------------------------------------------------------------------------------------------|
| context   | **invalid**                                                                                        |
| T         | [AbstractBlockHut](/mods/sdmcrtplus/integration/minecolonies/api/blocks/AbstractBlockHut)&lt;T&gt; |


:::

:::group{name=setPlacedBy}

```zenscript
AbstractBlockHut.setPlacedBy<T : AbstractBlockHut<T>>(worldIn as Level, pos as BlockPos, state as BlockState, placer as LivingEntity, stack as ItemStack)
```

| Parameter |                                                Type                                                |
|-----------|----------------------------------------------------------------------------------------------------|
| worldIn   | [Level](/vanilla/api/world/Level)                                                                  |
| pos       | [BlockPos](/vanilla/api/util/math/BlockPos)                                                        |
| state     | [BlockState](/vanilla/api/block/BlockState)                                                        |
| placer    | [LivingEntity](/vanilla/api/entity/LivingEntity)                                                   |
| stack     | [ItemStack](/vanilla/api/item/ItemStack)                                                           |
| T         | [AbstractBlockHut](/mods/sdmcrtplus/integration/minecolonies/api/blocks/AbstractBlockHut)&lt;T&gt; |


:::


