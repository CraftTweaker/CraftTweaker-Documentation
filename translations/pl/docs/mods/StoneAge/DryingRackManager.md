# Suszarnia

## Pakiet
`importuj mods.stone_age.Menadżer SuchekRack;`

## Metody
- **Nazwa ciągu** Nazwa przepisu
- **[IItemStack](/Vanilla/Items/IItemStack/) output**
- **[Składnik](/Vanilla/Variable_Types/IIngredient/) wejście**
- **int dryingTime** Czas suszenia w tickach
- **Grupa ciągów** Grupa przepisów

## Dodanie

```zenscript
<recipetype:stone_age:drying_rack>.addRecipe(Nazwa ciągu, wyjście IItemStack, IIngredient input, int dryingTime, @OptionalString String group)

<recipetype:stone_age:drying_rack>. ddRecipe("dried_meat", <item:minecraft:cooked_mutton>, <item:minecraft:mutton>, 1200, "foods");

DryingRackManager.INSTANCE.addRecipe("dried_meat", <item:minecraft:cooked_mutton>, <item:minecraft:mutton>, 1200, "foods");
```
