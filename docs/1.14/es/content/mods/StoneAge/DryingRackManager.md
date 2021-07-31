# Drying Rack

## Package
`import mods.stone_age.DryingRackManager;`

## Metodos
- **String name** Recipe name
- **[IItemStack](/vanilla/api/items/IItemStack) output**
- **[IIngredient](/Vanilla/Variable_Types/IIngredient/) input**
- **int dryingTime** Drying time in ticks
- **String group** Recipe group

## Suma

```zenscript
<recipetype:stone_age:drying_rack>.addRecipe(String name, IItemStack output, IIngredient input, int dryingTime, @OptionalString String group)

<recipetype:stone_age:drying_rack>.addRecipe("dried_meat", <item:minecraft:cooked_mutton>, <item:minecraft:mutton>, 1200, "foods");

DryingRackManager.INSTANCE.addRecipe("dried_meat", <item:minecraft:cooked_mutton>, <item:minecraft:mutton>, 1200, "foods");
```
