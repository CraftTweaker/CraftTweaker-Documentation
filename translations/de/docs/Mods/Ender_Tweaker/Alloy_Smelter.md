# Legierungsschmelzer

## Paket

`import mods.enderio.AlloySmelter;`

## Methoden

- **[IItemStack](/Vanilla/Items/IItemStack/) Ausgabe** Das Ergebnis des Rezeptes.
- **[Ingredient](/Vanilla/Variable_Types/IIngredient/)[] Input** Die Zutaten. Muss zwischen 1 und 3 Zutaten sein.
- **int Energiekosten** Wie viel FE das Rezept verwendet. Standard ist 5000.
- **float xp** Der xp wird aus diesem Rezept vergeben. Darf nicht negativ sein.

## Addition

```zenscript
mods.enderio.AlloySmelter.addRecipe(IItemStack Ausgabe, IIngredient[] Eingabe, @Optional int energyCost, @Optional float xp);

mods.enderio.AlloySmelter.addRecipe(<minecraft:iron_ingot>, [<minecraft:sand>, <minecraft:gravel>, <minecraft:brick>]);
```

## Entfernen

```zenscript
mods.enderio.AlloySmelter.removeRecipe(IItemStack Ausgabe);

mods.enderio.AlloySmelter.removeRecipe(<enderio:item_alloy_ingot:7>);
```