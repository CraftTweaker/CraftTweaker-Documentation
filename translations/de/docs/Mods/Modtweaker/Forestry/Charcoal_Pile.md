# Holzkohlehaufen

ModTweaker erlaubt es dir, Holzkohle Wandrezepte hinzuzufügen oder zu entfernen

## Anruf

You can call the package using `mods.forestry.CharcoalWall`

## Rezept entfernen

```zenscript
//mods.forestry.CharcoalWall.removeWall(IBlock Block);
mods.forestry.CharcoalWall.removeWall(<minecraft:bedrock>.asBlock());


//mods.forestry.CharcoalWall.removeWallState(IBlockState state);
mods.forestry.CharcoalWall.removeWallState(<blockstate:minecraft:bedrock>);


//Wird fehlschlagen, wenn der Stapel nicht in einen Block umgewandelt werden kann!
//mods.forestry.CharcoalWall.removeWallStack(IItemStack stack);
mods.forestry.CharcoalWall.removeWallStack(<minecraft:bedrock>);
```

## Reipe-Zusatz

`Betrag` gibt die Menge an Holzkohle an, die die Mauer zur Verfügung stellt.

```zenscript
//mods.forestry.CharcoalWall.addWall(IBlock Block, int Menge);
mods.forestry.CharcoalWall.addWall(<minecraft:bedrock>.asBlock(), 10);


//mods.forestry.CharcoalWall. ddWallState(IBlockState statet);
mods.forestry.CharcoalWall.addWallState(<blockstate:minecraft:bedrock>, 10);


//Wird fehlschlagen, wenn der Stapel nicht in einen Block umgewandelt werden kann!
//mods.forestry.CharcoalWall.addWallStack(IItemStack stack, int amount);
mods.forestry.CharcoalWall.addWallStack(<minecraft:bedrock>, 10);
```