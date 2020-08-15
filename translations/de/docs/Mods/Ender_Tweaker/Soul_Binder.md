# Seelenbinder

## Paket

`importiere mods.enderio.SoulBinder;`

## Methode

- **[IItemStack](/Vanilla/Items/IItemStack/) Ausgabe** Das Ergebnis des Rezeptes.
- **[Ingredient](/Vanilla/Variable_Types/IIngredient/) Input** Die Hauptzutat (nicht-Seele vial) Wirkung.
- **String[] Entitäten** Erlaubte Entitäten, die in einer Seele lebendig sein müssen, damit dieses Rezept funktioniert.
- **int xp** Die Erfahrungskosten für dieses Rezept
- **int Energiekosten** Wie viel FE das Rezept verwendet. Standard ist 5000.

## Addition

```zenscript
mods.enderio.SoulBinder.addRecipe(IItemStack Output, IIngredient Input, String[] Entities, int xp, int energyCost);

mods.enderio.SoulBinder.addRecipe(<minecraft:nether_star>, <minecraft:bone>, ["minecraft:skeleton"], 50000);
```

## Entfernen

```zenscript
mods.enderio.SoulBinder.removeRecipe(IItemStack Ausgabe);

mods.enderio.SoulBinder.removeRecipe(<enderio:item_material:19>);
```