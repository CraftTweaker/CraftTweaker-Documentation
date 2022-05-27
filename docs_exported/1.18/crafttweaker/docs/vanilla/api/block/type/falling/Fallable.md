# Fallable



## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.block.type.falling.Fallable;
```


## Methods

:::group{name=getFallDamageSource}

Gets the damage source used when this block falls on an entity.

Returns: The damage source used when this block falls on an entity.  
Return Type: [DamageSource](/vanilla/api/world/DamageSource)

```zenscript
// Fallable.getFallDamageSource() as DamageSource

(<block:minecraft:sand> as Fallable).getFallDamageSource();
```

:::

:::group{name=getHurtsEntitySelector}

Gets a predicate that determines if an entity should be damaged by this falling block.

Returns: The predicate that determines if an entity should be damaged by this falling block.  
Return Type: Predicate&lt;[Entity](/vanilla/api/entity/Entity)&gt;

```zenscript
// Fallable.getHurtsEntitySelector() as Predicate<Entity>

(<block:minecraft:sand> as Fallable).getHurtsEntitySelector();
```

:::

:::group{name=onBrokenAfterFall}

Return Type: void

```zenscript
Fallable.onBrokenAfterFall(level as Level, pos as BlockPos, fallingEntity as FallingBlockEntity) as void
```

| Parameter | Type | Description |
|-----------|------|-------------|
| level | [Level](/vanilla/api/world/Level) | No Description Provided |
| pos | [BlockPos](/vanilla/api/util/math/BlockPos) | No Description Provided |
| fallingEntity | [FallingBlockEntity](/vanilla/api/entity/type/misc/FallingBlockEntity) | No Description Provided |


:::

:::group{name=onLand}

Return Type: void

```zenscript
Fallable.onLand(level as Level, pos as BlockPos, fallingState as BlockState, placeState as BlockState, fallingEntity as FallingBlockEntity) as void
```

| Parameter | Type | Description |
|-----------|------|-------------|
| level | [Level](/vanilla/api/world/Level) | No Description Provided |
| pos | [BlockPos](/vanilla/api/util/math/BlockPos) | No Description Provided |
| fallingState | [BlockState](/vanilla/api/block/BlockState) | No Description Provided |
| placeState | [BlockState](/vanilla/api/block/BlockState) | No Description Provided |
| fallingEntity | [FallingBlockEntity](/vanilla/api/entity/type/misc/FallingBlockEntity) | No Description Provided |


:::


## Properties

| Name | Type | Has Getter | Has Setter | Description |
|------|------|------------|------------|-------------|
| fallDamageSource | [DamageSource](/vanilla/api/world/DamageSource) | true | false | Gets the damage source used when this block falls on an entity. |
| hurtsEntitySelector | Predicate&lt;[Entity](/vanilla/api/entity/Entity)&gt; | true | false | Gets a predicate that determines if an entity should be damaged by this falling block. |

