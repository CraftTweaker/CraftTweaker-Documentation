# Composición

## Paquete
```zenscript
mods.exnihilocreatio.Compost
```

## Métodos

- **[IIngrediente](/Vanilla/Variable_Types/IIngredient/) entrada** La entrada.
- **Probabilidad flotante** La probabilidad debe estar entre 0-1.
- **Color de cadena** El color es hex.
- **[ItemStack](/Vanilla/Items/IItemStack/) muestra** El resultado de la receta.

## Adicional

No toma arreglos para IIngredient.

```zenscript
mods.exnihilocreatio.Compost.addRecipe(IIngredient, Float chance, String color, IItemStack);

mods.exnihilocreatio.Compost.addRecipe(<ore:woodPlank>, 0.25, "63452D", <minecraft:log>);
```

## Eliminar

```zenscript
Compost.removeAll();
```