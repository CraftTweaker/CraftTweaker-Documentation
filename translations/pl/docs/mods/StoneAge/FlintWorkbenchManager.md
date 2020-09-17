# Krzemieślniczy stół warsztatowy

## Pakiet
`import mods.stone_age.FlintWorkbenchManager;`

## Metody
- **Nazwa ciągu** Nazwa przepisu
- **[IItemStack](/Vanilla/Items/IItemStack/) output**
- **[Składnik](/Vanilla/Variable_Types/IIngredient/)[] inputMatrix**
- **[Narzędzie](/Vanilla/Variable_Types/IIngredient/) Składnik** Narzędzie do wytwarzania
- **Grupa ciągów** Grupa przepisów

## Dodanie

```zenscript
<recipetype:stone_age:flint_workbench>.addRecipe(Nazwa ciągu, wyjście IItemStack, IIngredient[][] inputMatrix, IIngredient tool, @OptionalString String group)

<recipetype:stone_age:flint_workbench>. ddRecipe("cobblestone", <item:minecraft:cobblestone>, [[<item:minecraft:dirt>, <item:minecraft:dirt]], <item:minecraft:emerald>);
FlintWorkbenchManager.INSTANCE.addRecipe("cobblestone", <item:minecraft:cobblestone>, [[<item:minecraft:dirt>, <item:minecraft:dirt]], <item:minecraft:emerald>);
```
