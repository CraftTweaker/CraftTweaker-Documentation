# Lavavajillas

La lavavajillas le permite limpiar las herramientas sucias.

Por defecto repara la durabilidad de las herramientas de vainilla y las armas solamente.

## Eliminando

## Eliminar elementos lavables coincidentes.

```zenscript
mods.cfm.Dishwasher.remove(@Optional final IIngredient item);

mods.cfm.Dishwasher.remove(<minecraft:flint_and_steel>);
// Elimina todos los elementos lavables.
mods.cfm.Dishwasher.remove();
```

## Agregando

## Añadir un elemento lavable.

```zenscript
mods.cfm.Dishwasher.add(@Nonnull final ItemStack item);

mods.cfm.Dishwasher.add(<minecraft:wooden_shovel>);
mods.cfm.Dishwasher.add(<minecraft:stone_shovel>);
mods.cfm. ishwasher.add(<minecraft:iron_shovel>);
mods.cfm.Dishwasher.add(<minecraft:diamond_shovel>);
mods.cfm.Dishwasher.add(<minecraft:shield>);
mods.cfm.Dishwasher.add(<minecraft:bow>);
```