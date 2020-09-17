# Pile de charbon de bois

ModTweaker vous permet d'ajouter ou de supprimer des recettes du mur de bois de bois

## Appel en cours

You can call the package using `mods.forestry.CharcoalWall`

## Suppression de la recette

```zenscript
//mods.forestry.CharcoalWall.removeWall(IBlock block);
mods.forestry.CharcoalWall.removeWall(<minecraft:bedrock>.asBlock());


//mods.forestry.CharcoalWall.removeWallState(IBlockState state);
mods.forestry.CharcoalWall.removeWallState(<blockstate:minecraft:bedrock>);


//échouera si la pile ne peut pas être convertie en un bloc !
//mods.forestry.CharcoalWall.removeWallStack(IItemStack stack);
mods.forestry.CharcoalWall.removeWallStack(<minecraft:bedrock>);
```

## Ajout de Reipe

`amount` indique la quantité de charbon que le mur fournira.

```zenscript
//mods.forestry.CharcoalWall.addWall(IBlock block, int amount);
mods.forestry.CharcoalWall.addWall(<minecraft:bedrock>.asBlock(), 10);


//mods.forestry.CharcoalWall. ddWallState(IBlockState state, int amount);
mods.forestry.CharcoalWall.addWallState(<blockstate:minecraft:bedrock>, 10);


//échouera si la pile ne peut pas être convertie en bloc!
//mods.forestry.CharcoalWall.addWallStack(IItemStack stack, int amount);
mods.forestry.CharcoalWall.addWallStack(<minecraft:bedrock>, 10);
```