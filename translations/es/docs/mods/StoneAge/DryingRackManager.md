# Rack de secado

## Paquete
`importar mods.stone_age.DryingRackManager;`

## Métodos
- **Nombre de cadena** Nombre de la receta
- **[IItemStack](/Vanilla/Items/IItemStack/) output**
- **[entrada IIngrediente](/Vanilla/Variable_Types/IIngredient/)**
- **Tiempo de secado** Tiempo de secado en ticks
- **Grupo de cadenas** Grupo de recetas

## Adicional

```zenscript
<recipetype:stone_age:drying_rack>.addRecipe(String name, IItemStack output, IIngredient input, int dryingTime, @OptionalString String group)

<recipetype:stone_age:drying_rack>. ddRecipe("dried_meat", <item:minecraft:cooked_mutton>, <item:minecraft:mutton>, 1200, "Alimentos");

DryingRackManager.INSTANCE.addRecipe("dried_meat", <item:minecraft:cooked_mutton>, <item:minecraft:mutton>, 1200, "Alimentos");
```
