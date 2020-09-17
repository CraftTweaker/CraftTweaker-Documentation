# Aserradero

## Paquete

```java
importar mods.ic2.Sawmill;
```

## Métodos

- **[IItemStack](/Vanilla/Items/IItemStack/) output**
- **[entrada IIngrediente](/Vanilla/Variable_Types/IIngredient/)**

### Adicional

```zenscript
mods.ic2.Sawmill.addRecipe(Salida ItemStack, entrada IIngredient);

mods.ic2.Sawmill.addRecipe(<minecraft:diamond_block>, <minecraft:dirt> * 64);
```

### Eliminar

Para eliminar una receta ya existente, simplemente desactiva la receta correspondiente en `config/ic2/ic2machineRecipes.json`.