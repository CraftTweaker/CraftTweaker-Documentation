# Rafineria

Rafineria jest konstrukcją wieloblokową, która wykorzystuje ciepło do konwersji płynu wejściowego na dwie lub więcej płynów wyjściowych. Wieloblok składa się z dwóch do czterech (włącznie) bloków rafineryjnych, a liczba możliwych płynów wyjściowych jest ograniczona liczbą bloków rafinerii w budowie.

Przed PneumaticCraft: Ponowne ciśnienie v0.9.0, minimalna temperatura dla każdego przepisu rafineryjnego (tj. temperatury, w której rozpoczyna się przetwarzanie) wynosiła zawsze 373K lub 100°C. Jednakże w v0.9.0 i później możliwe jest określenie minimalnej temperatury przy dodawaniu przepisu na rafinerię.

Rafineria rozpocznie przetwarzanie płynów w minimalnej temperaturze receptury i będzie działać szybciej w miarę wzrostu temperatury.

Zauważ, że możliwe jest posiadanie dwóch lub więcej przepisów z tym samym wejściem, o ile liczba wyjść jest inna. W takim przypadku zostanie zastosowany przepis prowadzący do wyprodukowania możliwie najpełniejszych produktów (biorąc pod uwagę liczbę bloków rafinerii w blokach wieloblokowych).

## Dzwonienie

Możesz wywołać pakiet rafineryjny używając `mods.pneumaticcraft.refinery`.

## Usuwanie

Ta funkcja usuwa pierwszy przepis, który znajdzie pasujący do wszystkich danych [ISkładnik](/Vanilla/Variable_Types/IIngredient/) `wyjść`:

```zenscript
mods.pneumaticcraft.refinery.removeRecipe(IIngredient[]),
```

Ta funkcja usuwa pierwszy przepis, który znajdzie pasujący do podanego [składnika](/Vanilla/Variable_Types/IIngredient/) `wejścia`:

```zenscript
mods.pneumaticcraft.refinery.removeRecipes(dane wejściowe);
```

Ta funkcja usunie *wszystkie* przepisy rafinerii:

```zenscript
mods.pneumaticcraft.refinery.removeAllRecipes();
```

## Dodawanie

Te funkcje dodają nowy przepis do rafinerii:

```zenscript
// Dodaj przepis z domyślną minimalną temperaturą 373K (100°C)
mods.pneumaticcraft.refinery. ddRecipe(ILiquidStack, ILiquidStack[] wyjście);

// (v0.9.0+ wymagane) Dodaj przepis z określoną minimalną temperaturą
mody. rafineria pneumatyczna. ddRecipe(int minimumTemperature, ILiquidStack inputt, ILiquidStack[]),


// Przykład: oba przepisy używają wody jako wejścia
// Pierwszy przepis będzie używany w 2-blokowej rafinerii
modów. rafineria pneumatyczna. ddRecipe(<liquid:water> * 10, [<liquid:lava> * 2, <liquid:oil> * 5]);
// Drugi przepis będzie używany w rafinerii złożonej z 3 lub 4 bloków,
// i wymaga również minimalnej temperatury 473K lub 200°C
. pneumaticcraft.refinery.addRecipe(473, <liquid:water> * 10, [<liquid:lava> * 2, <liquid:oil> * 5, <liquid:lpg> * 2]);
```