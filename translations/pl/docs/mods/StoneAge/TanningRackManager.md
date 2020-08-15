# Tanning Rack

## Pakiet
`import mods.stone_age.TanningRackManager;`

## Metody
- **String name** Recipe name
- **[IItemStack](/Vanilla/Items/IItemStack/) output**
- **[Składnik](/Vanilla/Variable_Types/IIngredient/) wejście**
- **[IIngredient](/Vanilla/Variable_Types/IIngredient/) tool**
- **String group** Recipe group

## Dodanie

```zenscript
<recipetype:stone_age:tanning_rack>.addRecipe(String name, IItemStack output, IIngredient input, IIngredient tool, @OptionalString String group)

<recipetype:stone_age:tanning_rack>.addRecipe("leather", <item:minecraft:leather>, <item:minecraft:rotten_flesh>, <item:minecraft:iron_sword>, "leather");
TanningRackManager.INSTANCE.addRecipe("leather", <item:minecraft:leather>, <item:minecraft:rotten_flesh>, <item:minecraft:iron_sword>, "leather");
```
