# Maquina de Laguna

La máquina de trabajo te permite limpiar ropa sucia.

Por defecto repara la durabilidad de la armadura de vainilla, incluyendo el Elytra.

## Eliminando

## Eliminar elementos lavables coincidentes.

```zenscript
mods.cfm.WashingMachine.remove(@Optional final IIngredient item);

mods.cfm.WashingMachine.add(<minecraft:elytra>);
mods.cfm.WashingMachine.remove(<minecraft:chainmail_helmet>);
mods. fm.WashingMachine.remove(<minecraft:chainmail_chestplate>);
mods.cfm.WashingMachine.remove(<minecraft:chainmail_leggings>);
mods.cfm.WashingMachine.remove(<minecraft:chainmail_boots>);
// Eliminar todos los elementos lavables.
mods.cfm.WashingMachine.remove();
```

## Agregando

## Añadir un elemento lavable.

```zenscript
mods.cfm.WashingMachine.add(@Nonnull final ItemStack);

mods.cfm.WashingMachine.add(<minecraft:elytra>);
mods.cfm.WashingMachine.add(<minecraft:leather_helmet>);
mods.cfm.WashingMachine.add(<minecraft:leather_chestplate>);
mods.cfm.WashingMachine.add(<minecraft:leather_leggings>);
mods.cfm.WashingMachine.add(<minecraft:leather_boots>);
```