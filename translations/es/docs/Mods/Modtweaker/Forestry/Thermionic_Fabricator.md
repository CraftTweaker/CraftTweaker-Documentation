# Tela termiónica

ModTweaker te permite añadir o eliminar recetas de tejidos termiónicos forestales

## Llamando

Puedes llamar al paquete usando `mods.forestry.ThermionicFabricator`

## Receta/Eliminación del reparto

```zenscript
//mods.forestry.ThermionicFabricator.removeCast(producto IIngredient);
mods.forestry.ThermionicFabricator.removeCast(<forestry:thermionic_tubes:5>);
```

## Adición de receta/reparto

```zenscript
//mods.forestry.ThermionicFabricator.addCast(Salida ItemStack, IIngredient[][] ingredientes, ILiquidStack liquidStack, @Plan opcional ItemStack);
mods.forestry.ThermionicFabricator. ddCast(<minecraft:glass_pane> * 4, [[<minecraft:dirt>,null,null],[null,null,null],[null,null,null]], <liquid: glass> * 200);
mods.forestry. hermionicFabricator.addCast(<minecraft:stained_glass:3>, [[<ore:dyeLightBlue>,null,null],[null,null,null],[null,null,null]], <liquid: glass> * 144, <forestry:wax_cast>);
```

## Eliminación de Fundición

```zenscript
//mods.forestry.ThermionicFabricator.removeFunditing(IIngredient itemInput);
mods.forestry.ThermionicFabricator.removeFundition(<minecraft:sand>);

```

## Adición de Fundición

Puedes añadir cada líquido en el juego como resultado de la fundición, pero actualmente sólo `<liquid:glass>` es recomendado debido a errores que ocurren con otros líquidos.

```zenscript
//mods.forestry.ThermionicFabricator.addFunting(ILiquidStack liquidStack, ItemStack itemInput, int meltingPoint);
mods.forestry.ThermionicFabricator.addworelting(<liquid:glass> * 120, <minecraft:stone>, 500);
```