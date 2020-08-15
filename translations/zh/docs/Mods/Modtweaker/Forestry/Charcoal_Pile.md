# 木炭宝箱

ModTinflow允许您添加或移除森林木炭墙配方

## 导入

您可以使用 `mods.forestry.CharcoalWall 来调用包`

## 删除配方

```zenscript
//mods.forestry.CharcoalWall.removeWall(IBlock block);
mods.forestry.CharcoalWall.removeWall(<minecraft:bedrock>.asBlock());


//mods.forestry.CharcoalWall.removeWallState;
mods.forestry.CharcoalWall.removeWallState(<blockstate:minecraft:bedrock>);


//Will 失败，如果堆栈不能转换为一个块!
//mods.forestry.CharcoalWall.removeWallStack(IItemStack stack);
mods.forestry.CharcoalWall.removeWallStack(<minecraft:bedrock>);
```

## Reipe 添加

`amount` 表示墙壁将提供的木炭数量。

```zenscript
//mods.forestry.CharcoalWall.addWall(IBlock block, int amount);
mods.forestry.CharcoalWall.addWall(<minecraft:bedrock>.asBlock(), 10);


/mods.forestry.CharcoalWall. ddWallState(IBlockState状态, int amount);
mods.forestry.CharcoalWall.addWallState(<blockstate:minecraft:bedrock>, 10);


//Will失败，如果堆栈不能转换为块!
//mods.forestry.CharcoalWall.addWallStack(IItemStack stack, int amount);
mods.forestry.CharcoalWall.addWallStack(<minecraft:bedrock>, 10);
```