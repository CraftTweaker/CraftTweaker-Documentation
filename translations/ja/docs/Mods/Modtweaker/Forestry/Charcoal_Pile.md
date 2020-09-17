# チャコールパイル

ModTweakerを使用すると、森林伐採用の木炭ウォールレシピを追加または削除できます。

## 発信中

You can call the package using `mods.forestry.CharcoalWall`

## レシピの削除

```zenscript
//mods.forestry.CharcoalWall.removeWall(IBlock block);
mods.forestry.CharcoalWall.removeWall(<minecraft:bedrock>.asBlock());


//mods.forestry.CharcoalWall.removeWallState(IBlockState State);
mods.forestry.CharcoalWall.removeWallState(<blockstate:minecraft:bedrock>);


///スタックがブロックに変換できないと失敗します！
//mods.forestry.CharcoalWall.removeWallStack(IItemStack stack);
mods.forestry.CharcoalWall.removeWallStack(<minecraft:bedrock>);
```

## Reipe Addition

`` は、壁が提供する炭の量を示しています。

```zenscript
//mods.forestry.CharcoalWall.addWall(IBlock block, int amount);
mods.forestry.CharcoalWall.addWall(<minecraft:bedrock>.asBlock(), 10);


//mods.forestry.CharcoalWall.addWallState(IBlockState state, int amount);
mods.forestry.CharcoalWall.addWallState(<blockstate:minecraft:bedrock>, 10);


//Will fail if the stack cannot be converted to a block!
//mods.forestry.CharcoalWall.addWallStack(IItemStack stack, int amount);
mods.forestry.CharcoalWall.addWallStack(<minecraft:bedrock>, 10);
```