# Krümmern

## Paket
```zenscirpt
mods.exnihilocreatio.Crook
```
## Methoden

- **[Ingredient](/Vanilla/Variable_Types/IIngredient/) Input** Die Eingabe.
- **[IItemStack](/Vanilla/Items/IItemStack/) belohnen** den Gegenstand, der eine Chance hat zu fallen.
- **Schwebende Chance** zwischen 0-1.
- **Schicksalschance** Chance zwischen 0-1.

## Addition

```zenscript
mods.exnihilocreatio.Crook.addRecipe(IIngredient, IItemStack, Float, Float);

mods.exnihilocreatio.Crook.addRecipe(<minecraft:log>, <minecraft:plank>, 0.25, 0.5);
```

## Entfernen

```zenscript
mods.exnihilocreatio.Crook.removeAll();
```