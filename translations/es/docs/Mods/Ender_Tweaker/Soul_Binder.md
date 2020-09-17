# Binder de Almas

## Paquete

`importar mods.enderio.SoulBinder;`

## Método

- **[ItemStack](/Vanilla/Items/IItemStack/) muestra** El resultado de la receta.
- **[IIngrediente](/Vanilla/Variable_Types/IIngredient/) entrada** El ingrediente principal (no alma vial).
- **Entidades de cadena[]** Entidades permitidas que deben estar presentes en un vial de alma para que esta receta funcione.
- **int xp** El coste de la experiencia para esta receta
- **int energyCost** Cuánto utiliza la receta. Por defecto es 5000.

## Adicional

```zenscript
mods.enderio.SoulBinder.addRecipe(salida IIItemStack, entrada IIngredient, String[] entidades, int energyCost);

mods.enderio.SoulBinder.addRecipe(<minecraft:nether_star>, <minecraft:bone>, ["minecraft:skeleton"], 50000);
```

## Eliminar

```zenscript
mods.enderio.SoulBinder.removeRecipe(Salida IItemStack);

mods.enderio.SoulBinder.removeRecipe(<enderio:item_material:19>);
```