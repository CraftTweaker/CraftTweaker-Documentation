# Trockenrausch

## Paket
`import mods.stone_age.DryingRackManager;`

## Methoden
- **String name** Recipe name
- **[IItemStack](/Vanilla/Items/IItemStack/) output**
- **[IIngredient](/Vanilla/Variable_Types/IIngredient/) Eingabe**
- **int dryingTime** Drying time in ticks
- **String group** Recipe group

## Addition

```zenscript
<recipetype:stone_age:drying_rack>.addRecipe(String name, IItemStack output, IIngredient input, int dryingTime, @OptionalString String group)

<recipetype:stone_age:drying_rack>.addRecipe("dried_meat", <item:minecraft:cooked_mutton>, <item:minecraft:mutton>, 1200, "foods");

DryingRackManager.INSTANCE.addRecipe("dried_meat", <item:minecraft:cooked_mutton>, <item:minecraft:mutton>, 1200, "foods");
```
