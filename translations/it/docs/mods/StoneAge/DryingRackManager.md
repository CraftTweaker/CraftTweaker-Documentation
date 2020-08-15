# Rack Di Essiccazione

## Pacchetto
`import mods.stone_age.DryingRackManager;`

## Metodi
- **String name** Recipe name
- **[IItemStack](/Vanilla/Items/IItemStack/) output**
- **[Ingresso IIngrediente](/Vanilla/Variable_Types/IIngredient/)**
- **int dryingTime** Drying time in ticks
- **String group** Recipe group

## Addizione

```zenscript
<recipetype:stone_age:drying_rack>.addRecipe(String name, IItemStack output, IIngredient input, int dryingTime, @OptionalString String group)

<recipetype:stone_age:drying_rack>.addRecipe("dried_meat", <item:minecraft:cooked_mutton>, <item:minecraft:mutton>, 1200, "foods");

DryingRackManager.INSTANCE.addRecipe("dried_meat", <item:minecraft:cooked_mutton>, <item:minecraft:mutton>, 1200, "foods");
```
