# Garbownica

## Pakiet
`importuj mods.stone_age.TanningRackManager;`

## Metody
- **Nazwa ciągu** Nazwa przepisu
- **[IItemStack](/Vanilla/Items/IItemStack/) output**
- **[Składnik](/Vanilla/Variable_Types/IIngredient/) wejście**
- **[Narzędzie ISkładnik](/Vanilla/Variable_Types/IIngredient/)**
- **Grupa ciągów** Grupa przepisów

## Dodanie

```zenscript
<recipetype:stone_age:tanning_rack>.addRecipe(Nazwa ciągu, wyjście IItemStack, Wejście IIngredient, Narzędzie IIngredient, @OptionalString String group)

<recipetype:stone_age:tanning_rack>. ddRecipe("skóra", <item:minecraft:leather>, <item:minecraft:rotten_flesh>, <item:minecraft:iron_sword>, "skóra");
TanningRackManager.INSTANCE.addRecipe("skóra", <item:minecraft:leather>, <item:minecraft:rotten_flesh>, <item:minecraft:iron_sword>, "skóra");
```
