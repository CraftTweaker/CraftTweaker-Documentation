# Древесный уголь

ModTweaker позволяет добавлять или удалять рецепты древесного угля леса

## Звонок

Пакет можно позвонить через `mods.forestry.CharcoalWall`

## Удаление рецепта

```zenscript
//mods.forestry.CharcoalWall.removeWall(IBlock block);
mods.forestry.CharcoalWall.removeWall(<minecraft:bedrock>.asBlock());


//mods.forestry.CharcoalWall.removeWallState(IBlockState state);
mods.forestry.CharcoalWall.removeWallState(<blockstate:minecraft:bedrock>);


//Если стек не может быть преобразован в блок!
//mods.forestry.CharcoalWall.removeWallStack(IItemStack stack);
mods.forestry.CharcoalWall.removeWallStack(<minecraft:bedrock>);
```

## Прибавление Reipe

`сумма` определяет количество древесного угля, которое будет предоставлено стеной.

```zenscript
//mods.forestry.CharcoalWall.addWall(IBlock block, int amount);
mods.forestry.CharcoalWall.addWall(<minecraft:bedrock>.asBlock(), 10);


//mods.forestry.CharcoalWall. ddWallState(состояние IBlockState int amount);
mods.forestry.CharcoalWall.addWallState(<blockstate:minecraft:bedrock>, 10);


//Не получится, если стек не может быть преобразован в блок!
//mods.forestry.CharcoalWall.addWallStack(IItemStack stack, int amount);
mods.forestry.CharcoalWall.addWallStack(<minecraft:bedrock>, 10);
```