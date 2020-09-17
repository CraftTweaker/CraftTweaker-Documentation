# Mieszalnik z tworzywa sztucznego

Tworzywo miksera jest maszyną posiadającą dwie funkcje:

* Do stałych płynów z tworzyw sztucznych w postaci ciekłej lub stałej, przy użyciu czerwonych, zielonych i niebieskich barwników do barwienia arkuszy.
* Wytapianie blach plastikowych w płyny plastikowy. Wymaga to minimalnej temperatury 150 °C (423K).

Wsparcie CraftTweaker dodaje możliwość określenia dowolnej pozycji i płynnej kombinacji do celów topienia lub zestalania. Możliwe jest określenie, że przedmioty powinny być stopione, płyny powinny być zestalane tylko lub w celu umożliwienia procesu dwukierunkowego.

Podczas gdy celem zestalania może być dowolny przedmiot, najbardziej sensowne jest użycie tutaj kolorowych przedmiotów. ponieważ barwniki są zawsze używane, niezależnie od tego, czy pozycja wyjściowa jest kolorowa.

## Dzwonienie

Pakiet Plastic Mixer można wywołać `mods.pneumaticcraft.plasticmixer`.

## Usuwanie

Ta funkcja usuwa pierwszy przepis, który znalazł z podanym [ILiquidStack](/Vanilla/Liquids/ILiquidStack/) `wejścia`:

```zenscript
mods.pneumaticcraft.plasticmixer.removeRecipe(ILiquidStack);
// Przykład
mods.pneumaticcraft.plasticmixer.removeRecipe(<liquid:plastic>);
```

Ta funkcja usuwa *wszystkie* Plastic Mixer przepisy:

```zenscript
mods.pneumaticcraft.plasticmixer.removeAllRecipes();
```

## Dodawanie

Następujące funkcje mogą być używane do dodawania przepisów do TPP:

```zenscript
// Dodaj dwukierunkowy przepis (temperatura w Kelvin)
mods.pneumaticcraft.plasticmixer.addRecipe(ciecz ILiquidStack, temperatura IItemStack, temperatura int);

// Dodaj przepis umożliwiający zestalanie tylko
mods.pneumaticcraft.plasticmixer. ddSolidifyOnlyRecipe(ILiquidStack płynny Input, IItemStack itemOutput);

// Dodaj przepis umożliwiający tylko topienie (temperatura w Kelvin)
mods.pneumaticcraft.plasticmixer. ddMeltOnlyRecipe(IItemStack itemInput, ILiquidStack fluidOutput, temperatura int);

// Przykład: konwertuj 100mB Lava do/z betonu (melt at 573K)
mody. Airaticcraft.plasticmixer.addRecipe(<liquid:lava> * 100, <minecraft:concrete>, 573);

// Przykład: konwersja oleju 2000 mB na plastikowe (ale nie zezwalaj na wytapianie z tyłu)
mods.pneumaticcraft.plasticmixer. ddSolidifyOnlyRecipe(<liquid:oil> * 2000, <pneumaticcraft:plastic>);

// Przykład: przekonwertuj Plastic na 100mB Oil w 473K (ale nie zezwalaj na stałe difying)
mody. neumaticcraft.plasticmixer.addMeltOnlyRecipe(<pneumaticcraft:plastic>, <liquid:oil> * 100, 473);
```