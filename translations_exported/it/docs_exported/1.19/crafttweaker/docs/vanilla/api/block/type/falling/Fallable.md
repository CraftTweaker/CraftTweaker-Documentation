# Fallable

## Importare la Classe

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.block.type.falling.Fallable;
```


## Metodi

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

```zenscript
Fallable.onBrokenAfterFall(level as Level, pos as BlockPos, fallingEntity as FallingBlockEntity)
```

| Parametro     | Tipo                                                                   |
| ------------- | ---------------------------------------------------------------------- |
| level         | [Level](/vanilla/api/world/Level)                                      |
| pos           | [BlockPos](/vanilla/api/util/math/BlockPos)                            |
| fallingEntity | [FallingBlockEntity](/vanilla/api/entity/type/misc/FallingBlockEntity) |


:::

:::group{name=onLand}

```zenscript
Fallable.onLand(level as Level, pos as BlockPos, fallingState as BlockState, placeState as BlockState, fallingEntity as FallingBlockEntity)
```

| Parametro     | Tipo                                                                   |
| ------------- | ---------------------------------------------------------------------- |
| level         | [Level](/vanilla/api/world/Level)                                      |
| pos           | [BlockPos](/vanilla/api/util/math/BlockPos)                            |
| fallingState  | [BlockState](/vanilla/api/block/BlockState)                            |
| placeState    | [BlockState](/vanilla/api/block/BlockState)                            |
| fallingEntity | [FallingBlockEntity](/vanilla/api/entity/type/misc/FallingBlockEntity) |


:::


## Proprietà

| Nome                | Tipo                                                              | Ha Getter | Ha Setter | Descrizione                                                                            |
| ------------------- | ----------------------------------------------------------------- | --------- | --------- | -------------------------------------------------------------------------------------- |
| fallDamageSource    | [DamageSource](/vanilla/api/world/DamageSource)                   | sì        | no        | Gets the damage source used when this block falls on an entity.                        |
| hurtsEntitySelector | Predicate&lt;[Entity](/vanilla/api/entity/Entity)&gt; | sì        | no        | Gets a predicate that determines if an entity should be damaged by this falling block. |

