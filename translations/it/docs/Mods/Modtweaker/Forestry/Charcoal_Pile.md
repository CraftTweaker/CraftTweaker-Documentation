# Pile Di Carbone

ModTweaker consente di aggiungere o rimuovere la silvicoltura Ricette a carbone da parete

## Chiamata

Puoi chiamare il pacchetto usando `mods.forestry.CharcoalWall`

## Rimozione Ricetta

```zenscript
//mods.forestry.CharcoalWall.removeWall(IBlock block);
mods.forestry.CharcoalWall.removeWall(<minecraft:bedrock>.asBlock());


//mods.forestry.CharcoalWall.removeWallState(IBlockState state);
mods.forestry.CharcoalWall.removeWallState(<blockstate:minecraft:bedrock>);


//Will fail if the stack cannot be converted to a block!
//mods.forestry.CharcoalWall.removeWallStack(IItemStack stack);
mods.forestry.CharcoalWall.removeWallStack(<minecraft:bedrock>);
```

## Addizione Reipe

`quantità` indica la quantità di carbone che la parete fornirà.

```zenscript
//mods.forestry.CharcoalWall.addWall(IBlock block, int amount);
mods.forestry.CharcoalWall.addWall(<minecraft:bedrock>.asBlock(), 10);


//mods.forestry.CharcoalWall. ddWallState(IBlockState state, int amount);
mods.forestry.CharcoalWall.addWallState(<blockstate:minecraft:bedrock>, 10);


//Will fail if the stack cannot be converted to a block!
//mods.forestry.CharcoalWall.addWallStack(IItemStack stack, int amount);
mods.forestry.CharcoalWall.addWallStack(<minecraft:bedrock>, 10);
```