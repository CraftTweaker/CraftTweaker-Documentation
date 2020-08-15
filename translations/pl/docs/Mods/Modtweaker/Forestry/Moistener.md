# Wilgotność

ModTweaker pozwala na dodawanie lub usuwanie przepisów dotyczących wilgotności leśnej

## Dzwonienie

Możesz wywołać pakiet używając `mods.forestry.Moistener`

## Usuwanie przepisów

```zenscript
//mods.forestry.Moistener.removeRecipe(IIngredient output);
mods.forestry.Moistener.removeRecipe(<minecraft:stonebrick:1>);
```

## Dodanie

```zenscript
//mods.forestry.Moistener.addRecipe(wyjście IItemStack, wstęp IItemStack, wstęp do pakowania w czasie); 
mods.forestry.Moistener.addRecipe(<minecraft:mycelium>, <minecraft:grass>, 60); 
```

## Wydobycie paliwa

```zenscript
//mods.forestry.Moistener.removeFuel(IIngredient moistenerItem);
mods.forestry.Moistener.removeFuel(<minecraft:wheat>);

```

## Dodanie paliwa

```zenscript
//mods.forestry.Moistener.addFuel(IItemStack itemem, IItemStack product, int moistenerValue, int stage);
mods.forestry.Moistener.addFuel(<minecraft:gold_ingot>, <minecraft:iron_ingot>, 20, 2);
```

| Parametr         | Typ                                      | Opis                                                                                          |
| ---------------- | ---------------------------------------- | --------------------------------------------------------------------------------------------- |
| element          | [IItemStack](/Vanilla/Items/IItemStack/) | Przedmiot do uzyskania ważnego paliwa dla wilgoci                                             |
| produkt          | [IItemStack](/Vanilla/Items/IItemStack/) | Obiekt, który pozostawia miejsce robocze wilgoci (np. pszenica uformowana lub mrożona).       |
| Wartość wilgotna | odcień                                   | Ile tej pozycji przyczynia się do końcowego produktu nawilżającego.                           |
| etap             | odcień                                   | Na jakim etapie stanowi ten produkt. Zasoby z niższą wartością etapu zostaną zużyte najpierw. |