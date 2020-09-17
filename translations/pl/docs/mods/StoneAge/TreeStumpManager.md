# Pień Drzewa

## Pakiet
`import mods.stone_age.TreeStumpManager;`

## Metody
- **Nazwa ciągu** Nazwa przepisu
- **[IItemStack](/Vanilla/Items/IItemStack/) output**
- **[Narzędzie ISkładnik](/Vanilla/Variable_Types/IIngredient/)**
- **[Składnik](/Vanilla/Variable_Types/IIngredient/) wejście**
- **int ChopTimes** Czasy chipów
- **Grupa ciągów** Grupa przepisów

## Dodanie

```zenscript
<recipetype:stone_age:tree_stump>.addRecipe(Nazwa ciągu, wyjście IItemStack, narzędzie IIngredient, Wejście IIngredient, ChopTimes, @OptionalString Group)

<recipetype:stone_age:tree_stump>. ddRecipe("oak_planks", <item:minecraft:oak_planks>, <item:minecraft:iron_axe>, <item:minecraft:oak_log>, 2);
TreeStumpManager.INSTANCE.addRecipe("oak_planks", <item:minecraft:oak_planks>, <item:minecraft:iron_axe>, <item:minecraft:oak_log>, 2);
```
