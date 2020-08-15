# Fermentator

ModTweaker pozwala na dodanie lub usunięcie przepisów leśnego Fermentera

## Dzwonienie

Możesz wywołać pakiet używając `mods.forestry.Fermenter`

## Usuwanie przepisów

```zenscript
//mods.forestry.Fermenter.removeRecipe(Input);
mods.forestry.Fermenter.removeRecipe(<minecraft:reeds>);
mods.forestry.Fermenter.removeRecipe(<liquid:water>);
```

## Dodawanie przepisów

```zenscript
//mods.forestry.Fermenter.addRecipe(ILiquidStack fluidOutput, zasoby IItemStack, ILiquidStack fluidInput, int fermentationValue, fluidOutputModifier);
mods.forestry.Fermenter.addRecipe(<liquid:lava>, <minecraft:obsidian>, <liquid:water>, 1000, 0.5);
```

Ilość wytworzenia płynów: wartość fermentacji * płynna Moc wyjściowa

| Parametr            | Typ                                            | opis                                               |
| ------------------- | ---------------------------------------------- | -------------------------------------------------- |
| fluidOutput         | [ILiquidStack](/Vanilla/Liquids/ILiquidStack/) | Wyjście przepisu                                   |
| zasób               | [IItemStack](/Vanilla/Items/IItemStack/)       | Przedmiot Przepisu                                 |
| fluidInput          | [ILiquidStack](/Vanilla/Liquids/ILiquidStack/) | Płynne wejście przepisu                            |
| Wartość fermentacji | odcień                                         | Wymagana ilość inputFluid na materiale organicznym |
| Modyfikator płynu   | odcień                                         | Mnożnik wyjściowy                                  |

## Wydobycie paliwa

```zenscript
//mods.forestry.Fermenter.removeFuel(IIngredient fermenterItem);
mods.forestry.Fermenter.removeFuel(<forestry:fertilizer_compound>);

```

## Dodanie paliwa

```zenscript
//mods.forestry.Fermenter.addFuel(element IItemStack, int fermentPerCycle, int burnDuration);
mods.forestry.Fermenter.addFuel(<minecraft:leaves:1>, 100, 5);
```

| Parametr           | Typ                                      | Opis                                                                           |
| ------------------ | ---------------------------------------- | ------------------------------------------------------------------------------ |
| element            | [IItemStack](/Vanilla/Items/IItemStack/) | Przedmiot do uzyskania ważności paliwa dla fermentatora                        |
| fermentacyjny cykl | odcień                                   | Ile sfermentuje się w cyklu pracy, tj. ile płynów wejściowych jest zużywane.   |
| Czas spalania      | odcień                                   | Ilość cykli pracy w pojedynczym elemencie tego paliwa trwa przed wygaśnięciem. |