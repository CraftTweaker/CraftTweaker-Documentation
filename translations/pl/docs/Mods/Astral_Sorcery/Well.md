# Lekkie

Możesz dodawać i usuwać Lightwell Liquefications

## Dzwonienie

Możesz wywołać pakiet WellRecipe używając `mods.astralsorcery.Lightwell`.

## Usuwanie

Ta funkcja usuwa pierwszy przepis, który znajdzie zwrot dostarczonego [ILiquidStack](/Vanilla/Liquids/ILiquidStack/) `wyjścia` przy użyciu dostarczonego [IItemStack](/Vanilla/Items/IItemStack/) `wejścia`. Jeśli istnieje wiele receptur, które zwracają podaną wartość, musisz zadzwonić do tej metody wielokrotnie!

Możesz ustawić wyjście na `null` tylko przez stos wejściowy

```zenscript
//mods.astralsorcery.Lightwell.removeLiquefaction(wejście IItemStack, wyjście ILiquidStack);
mods.astralsorcery.Lightwell.removeLiquefaction(<astralsorcery:itemcraftingcomponent:0>, null);
```

## Dodanie

```zenscript
//mods.astralsorcery.Lightwell.addLiquefaction(IItemStack inputt, ILiquidStack output, float productionMultiplier, float shatterMultiplier, int colorhex);
mods.astralsorcery.Lightwell.addLiquefaction(<minecraft:dirt>, <liquid:water>, 1, 0.2, 0);
```

| Parametr           | Typ parametru                                  | Opis                                                                                                                                                                    |
| ------------------ | ---------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| input              | [IItemStack](/Vanilla/Items/IItemStack/)       | Element wejściowy                                                                                                                                                       |
| wyjście            | [ILiquidStack](/Vanilla/Liquids/ILiquidStack/) | Zwrócona płynność. Tylko typ ilości płynów, ilość będzie (jak domyślna jasna) zależeć od rzeczy takich jak dzień/noc i tak dalej…                                       |
| outputMultiplier   | zmiennoprzecinkowe                             | Mnożnik stosowany wraz z zebraną gwiazdką do obliczenia ilości płynu wyjściowego. Zazwyczaj 0,3 - 1.2 (tak: nie pisz jak 200 tutaj, jeśli chcesz pozostać rozsądnym :P) |
| Mnożnik fragmentów | zmiennoprzecinkowe                             | Im wyższy mnożnik, tym mniejsza szansa na zaznaczenie elementu katalizatora.                                                                                            |
| kolor-HEX          | odcień                                         | Kod koloru użyty dla cząsteczek wokół przedmiotu podwieszającego.                                                                                                       |