# Millstone

## Pakiet
`importuj mods.stone_age.Menedżer kamieniołomów;`

## Metody
- **Nazwa ciągu** Nazwa przepisu
- **[IItemStack](/Vanilla/Items/IItemStack/) output**
- **[Składnik](/Vanilla/Variable_Types/IIngredient/) wejście**
- **int activateCount** Aktywuj liczbę kamieni millstone
- **Grupa ciągów** Grupa przepisów

## Dodanie

```zenscript
<recipetype:stone_age:millstone>.addRecipe(Nazwa ciągu, wyjście IItemStack, Wejście IIngredient, int activateCount, @OptionalString String group)

<recipetype:stone_age:millstone>. ddRecipe("cukier", <item:minecraft:sugar>, <item:minecraft:sugar_cane>, 2, "jedzenie");
MillstoneManager.INSTANCE.addRecipe("cukier", <item:minecraft:sugar>, <item:minecraft:sugar_cane>, 2, "jedzenie");
```
