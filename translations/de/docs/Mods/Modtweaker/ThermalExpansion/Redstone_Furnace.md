# Redstone-Ofen

## Paket

`mods.thermalexpansion.RedstoneFurnace`

## Addition

```zenscript
//mods.thermalexpansion.RedstoneFurnace.addRecipe(IItemStack-Ausgabe, IItemStack-Eingabe, Int-Energie);
mods.thermalexpansion.RedstoneFurnace.addRecipe(<minecraft:gold_ingot>, <minecraft:iron_ingot>, 3600);
```

## Entfernen

```zenscript
//mods.thermalexpansion.RedstoneFurnace.removeRecipe(IItemStack Eingabe);
mods.thermalexpansion.RedstoneFurnace.removeRecipe(<minecraft:gold_ore>);
```

## Pyrolitische Erweiterung

***Beachte, dass die Energie mit `1.5` multipliziert wird. Wenn du `2000` Energie angibst, kostet das Rezept tatsächlich `3000` RF. Wenn Sie `1500`angeben, kostet dies ebenfalls `2250` RF.***

Beispielrezept zur Umwandlung von Kohle in Kohle und erzeugt dabei 250 MB Kreosot Öl.

```zenscript
//mods.thermalexpansion.RedstoneFurnace.addPyrolysisRecipe(IItemStack Output, IItemStack Input, int Energie, int creosote);
mods.thermalexpansion.RedstoneFurnace.addPyrolysisRecipe(<thermalfoundation:material:802>, <minecraft:coal:1>, 2000, 250);
```

## Pyrolitische Augment-Entfernung

Entfernt das Rezept um Kohle in Kohle umzuwandeln.

```zenscript
//mods.thermalexpansion.RedstoneFurnace.removePyrolysisRecipe(IItemStack input);
mods.thermalexpansion.RedstoneFurnace.removePyrolysisRecipe(<minecraft:coal>);
```