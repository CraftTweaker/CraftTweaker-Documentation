# Ciasto węgla drzewnego

ModTweaker pozwala na dodanie lub usunięcie przepisów dotyczących ściany drzewnej

## Dzwonienie

Możesz wywołać pakiet używając `mods.forestry.CharcoalWall`

## Usuwanie przepisów

```zenscript
//mods.forestry.CharcoalWall.removeWall(Blok IBlock);
mods.forestry.CharcoalWall.removeWall(<minecraft:bedrock>.asBlock());


//mods.forestry.CharcoalWall.removeWallState(stan IBlockStatus);
mods.forestry.CharcoalWall.removeWall.removeWall(<blockstate:minecraft:bedrock>);


//Wnie uda się, jeśli stack nie może zostać przekonwertowany do bloku!
//mods.forestry.CharcoalWall.removeWallStack(IItemStack stack);
mods.forestry.CharcoalWall.removeWallStack(<minecraft:bedrock>);
```

## Dodanie podglądu

`ilość` określa ilość węgla drzewnego jaką ściana będzie dostarczać.

```zenscript
//mods.forestry.CharcoalWall.addWall(Blok IBlock, int amount);
mods.forestry.CharcoalWall.addWall(<minecraft:bedrock>.asBlock(), 10);


//mods.forestry.CharcoalWall. ddWallState(stan IBlockState (stan int amount);
mods.forestry.CharcoalWall.addWall.State(<blockstate:minecraft:bedrock>, 10);


//Will się nie powiedzie, jeśli stos nie może być przekonwertowany do bloku!
//mods.forestry.CharcoalWall.addWallStack(IItemStack stack, int amount);
mods.forestry.CharcoalWall.addWallStack(<minecraft:bedrock>, 10);
```