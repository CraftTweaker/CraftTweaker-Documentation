# Pila de carbón

ModTweaker te permite añadir o quitar recetas de carbón forestal

## Llamando

You can call the package using `mods.forestry.CharcoalWall`

## Receta eliminada

```zenscript
//mods.forestry.CharcoalWall.removeWall(bloque IBloc);
mods.forestry.CharcoalWall.removeWall(<minecraft:bedrock>.asBlock());


//mods.forestry.CharcoalWall.removeWallState(estado IBlockState);
mods.forestry.CharcoalWall.removeWallState(<blockstate:minecraft:bedrock>);


//¡Falla si la pila no puede ser convertida a bloque!
//mods.forestry.CharcoalWall.removeWallStack(IItemStack stack);
mods.forestry.CharcoalWall.removeWallStack(<minecraft:bedrock>);
```

## Adición de Reipe

`cantidad` indica la cantidad de carbón que proporcionará la pared.

```zenscript
//mods.forestry.CharcoalWall.addWall(bloque IBlock, int amount);
mods.forestry.CharcoalWall.addWall(<minecraft:bedrock>.asBlock(), 10);


//mods.forestry.CharcoalWall. ddWallState(estado de IBlockState, int amount);
mods.forestry.CharcoalWall.addWallState(<blockstate:minecraft:bedrock>, 10);


//¡Fallará si la pila no puede ser convertida a un bloque!
//mods.forestry.CharcoalWall.addWallStack(IItemStack stack, int amount);
mods.forestry.CharcoalWall.addWallStack(<minecraft:bedrock>, 10);
```