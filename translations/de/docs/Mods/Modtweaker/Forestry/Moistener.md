# Feuchter

ModTweaker ermöglicht das Hinzufügen oder Entfernen von forstwirtschaftlichen Moistener-Rezepten

## Anruf

You can call the package using `mods.forestry.Moistener`

## Rezept entfernen

```zenscript
//mods.forestry.Moistener.removeRecipe(IIngrediente Ausgabe);
mods.forestry.Moistener.removeRecipe(<minecraft:stonebrick:1>);
```

## Addition

```zenscript
//mods.forestry.Moistener.addRecipe(IItemStack Output, IItemStack Input, int packagingTime); 
mods.forestry.Moistener.addRecipe(<minecraft:mycelium>, <minecraft:grass>, 60); 
```

## Brennstoffentnahme

```zenscript
//mods.forestry.Moistener.removeFuel(IIngredient moistenerItem);
mods.forestry.Moistener.removeFuel(<minecraft:wheat>);

```

## Kraftstoffzusatz

```zenscript
//mods.forestry.Moistener.addFuel(IItemStack item, IItemStack product, int moistenerValue, int stage);
mods.forestry.Moistener.addFuel(<minecraft:gold_ingot>, <minecraft:iron_ingot>, 20, 2);
```

| Parameter         | Type                                     | Beschreibung                                                                                            |
| ----------------- | ---------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| eintrag           | [IItemStack](/Vanilla/Items/IItemStack/) | Gegenstand, um ein gültiger Brennstoff für den Feistener zu werden                                      |
| produkt           | [IItemStack](/Vanilla/Items/IItemStack/) | Gegenstand, der den Arbeitsschlitz des Feuchtemittels verlässt (z.B. Schimmelweizen oder Mulch).        |
| Feuchtigkeitswert | int                                      | Wie viel dieser Artikel zum Endprodukt des Feuchtigers beiträgt.                                        |
| stadium           | int                                      | Welche Phase dieses Produkts darstellt. Ressourcen mit niedrigerem Stufenwert werden zuerst verbraucht. |