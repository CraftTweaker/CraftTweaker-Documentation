# Kocioł

Opakowanie z kociołem jest używane do dodawania/usuwania receptury na kocioł. Zauważ, że jeśli kocioł jest ustawiony na `prosty` w konfiguracji, tylko przepisy wykorzystujące wodę będą mogły być wytworzone, ale wszystkie przepisy będą nadal wyświetlane w JEI.

## Dzwonienie

Możesz wywołać pakiet Cauldron używając `mods.inspirations.Cauldron`

## Płyny

Inspiracje zawierają trzy typy przepisów używając płynów: te, które przekształcają przedmiot przy użyciu płynu, te, które przekształcają płyn przy użyciu elementu, oraz te, które dodają wypełnianie płynem przy użyciu elementu. Podczas gdy wszystkie osoby obsługujące zbierają płyny, tylko rodzaj płynu będzie miał wpływ na przepis. Inspiracje kocioły używają systemu waniliowego trzech butelek w kocionie, tak więc ilości są traktowane w innym parametrze.

### Dodawanie płynów

Dodaje przepis konwertujący element wejściowy do elementu wyjściowego przy użyciu płynu.

* Wprowadzany przedmiot obsługuje rozmiary stosu aby wymagał określonego rozmiaru.
* Poziomy określają, ile poziomów jest zużywanych przez przepis. Obsługa 0-3, niewykonanie zobowiązania 1
* Gotowanie określa, czy kocioł musi zostać umieszczony nad ogniem na recepturę. Może być prawdą, aby go wymagać, fałsz, aby nie posiadać ognia, lub null (domyślnie) aby go zignorować.

```zenscript
//mods.inspirations.Cauldron.addFluidRecipe(wyjście IItemStack, IIngredient input, płynny ILiquidStack, @Opcjonalny poziom int, @Opcjonalny worek logiczny);
mods.inspirations. auldron.addFluidRecipe(<minecraft:blaze_rod>, <minecraft:blaze_powder> * 2, <liquid:lava>);
mods.inspirations.Cauldron.addFluidRecipe(<minecraft:water_bucket>, <minecraft:ice>, <liquid:lava>, 1, true);
```

### Usuwanie płynów

Usuwa istniejący przepis płynny z kotła.

```zenscript
//mods.inspirations.Cauldron.removeFluidRecipe(IIngredient output, @Optional IIngredient input, @Optional ILiquidStack fluid)
mods.inspirations.Cauldron.removeFluidRecipe(<minecraft:beetroot_soup>);
```

### Dodanie płynu

Dodaje przepis konwertujący płyn do płynu wyjściowego za pomocą elementu.

* Wprowadzany przedmiot obsługuje rozmiary stosu aby wymagał określonego rozmiaru.
* Maksymalny poziom określa maksymalną ilość płynu dozwolonego dla tej transformacji. Służy do tego, aby przepisy miały tańszą wersję, jeśli kocioł zawiera mniej płynu.
* Gotowanie określa, czy kocioł musi zostać umieszczony nad ogniem na recepturę. Może być prawdą, aby go wymagać, fałsz, aby nie posiadać ognia, lub null (domyślnie) aby go zignorować.

```zenscript
//mods.inspirations.Cauldron.addFluidTransform(ILiquidStack output, IIngredient input, ILiquidStack fluid, @Optional int maxLevels, @Optional boolean boiling);
mods.inspirations.Cauldron.addFluidTransform(<liquid:lava>, <minecraft:blaze_powder>, <liquid:water>, 2, false);
```

### Usuwanie płynów przemiany

Usuwa istniejący przepis przekształcający płyn z kotła. Wyjście to `IIngredient` ale obsługuje tylko stos płynów lub wildcard.

```zenscript
//mods.inspirations.Cauldron.removeFluidTransform(Identyczne wyjście [IIngredient input, [IFluidStack fluid]]);
mods.inspirations.Cauldron.removeFluidTransform(<liquid:beetroot_soup>, <minecraft:beetroot>, <liquid:water>);
```

### Wypełnij przepis dodając

Dodaje przepis wypełniający kocioł dostarczonym płynem..

* Wprowadzany przedmiot obsługuje rozmiary stosu aby wymagał określonego rozmiaru.
* Poziomy określają, ile receptury wypełnia kocioł. Wartość domyślna 1 jeśli nie została podana.
* Pojemnik określa przedmiot zwrócony po wykonaniu tego przepisu. Jeśli żadne nie jest podane, domyślnie nie zwraca nic.

```zenscript
//mods.inspirations.Cauldron.addFillRecipe(IIngredient inputt, ILiquidStack fluid, @Optional int levels @Optional IItemStack container);
mods.inspirations.Cauldron.addFillRecipe(<ore:gemDiamond>, <liquid:water>, 2, <minecraft:emerald>);
mods.inspirations.Cauldron.addFillRecipe(<minecraft:emerald>, <liquid:lava>);
```

### Wypełnij usunięcie przepisu

Usuwa istniejący przepis wypełnienia z kociołu.

```zenscript
//mods.inspirations.Cauldron.removeFillRecipe(IIngredient inputt, @Optional ILiquidStack fluid);
mods.inspirations.Cauldron.removeFillRecipe(<minecraft:beetroot_soup>);
mods.inspirations.Cauldron.removeFillRecipe(<*>, <liquid:mushroom_stew>);
```

## Alarmy i Mikstury

Inspiracje zawierają dwa rodzaje receptur na mikstury za pomocą mikstur: receptury browarne, które zmieniają miksturę z jednego typu na drugi. i receptury na mikstury, które zmieniają przedmiot używając mikstury.

Skoro przepisy przyjmują bezpośrednio `Miksturę`zamiast `Miksturę`parametrami mikstury są ciągi. Listę wszystkich rodzajów mikstur można uzyskać za pomocą polecenia `/ct inspirations mikstury`.

### Dodanie piwa

Dodaje przepis konwertujący miksturę wejściową do mikstury wyjściowej za pomocą odczynnika.

```zenscript
//mods.inspirations.Cauldron.addBrewingRecipe(wyjście ciągu, wejście ciągu, odczynnik IIngredienta);
mods.inspirations.Cauldron.addBrewingRecipe("minecraft:invisibility", "minecraft:thick", <minecraft:diamond>);
mods.inspirations.Cauldron.addBrewingRecipe("minecraft:healing", "minecraft:thick", <ore:gemEmerald>);
```

### Usuwanie piwa

Usuwa istniejący przepis piwowarski z kociołu. Zarówno wejściowe, jak i wyjściowe mogą być ustawione na wartość zerową, aby działać jako karta wieloznaczna.

```zenscript
//mods.inspirations.Cauldron.removeBrewingRecipe(String output, @Optional String input, @Optional String reagent);
mods.inspirations.Cauldron.removeBrewingRecipe("inspirations:haste");
mods.inspirations.Cauldron.removeBrewingRecipe("minecraft:awkward", "minecraft:water", <minecraft:nether_wart>);
```

### Dodanie przepisu na miksturę

Dodaje przepis konwertujący element wejściowy do elementu wyjściowego za pomocą mikstury.

* Poziomy określają, ile poziomów jest zużywanych przez przepis. Obsługa 0-3, niewykonanie zobowiązania 1
* Gotowanie określa, czy kocioł musi zostać umieszczony nad ogniem na recepturę. Może być prawdą, aby go wymagać, fałsz, aby nie posiadać ognia, lub null (domyślnie) aby go zignorować.

```zenscript
//mods.inspirations.Cauldron.addPotionRecipe(IItemStack output, IIngredient input, String potion, @Optional int levels @Optional boolean boiling);
mods.inspirations.Cauldron.addPotionRecipe(<minecraft:golden_apple>, <minecraft:apple>, , "minecraft:regeneration", 2); 
```

### Usuwanie receptury mikstur

Usuwa istniejący przepis na mikstury z kociołu. Domyślnie nie istnieją przepisy na mikstury, ale dodatki mogą dodać przepis.

```zenscript
//mods.inspirations.Cauldron.removePotionRecipe(Ingredient output, @Optional IIngredient input, @Optional String potion);
```

## Barwniki

Inspiracje zawierają tylko jeden typ receptury barwnika do przekształcenia przedmiotu za pomocą barwnika. Przepisy barwnikowe przyjmują kolor ciągu znaków, który reprezentuje wartość z `EnumDyeColor`. Aby uzyskać listę wszystkich wartości, podano polecenie `/ct inspirations dyes`.

### Dodawanie

Dodaje przepis konwertujący dane wejściowe na dane wyjściowe przy użyciu barwnika zużywającego jeden poziom barwionej wody.

```zenscript
//mods.inspirations.Cauldron.addDyeRecipe(IItemStack output, IIngredient input, Barwnik String);
mods.inspirations.Cauldron.addDyeRecipe(<minecraft:diamond>, <minecraft:emerald>, "blue");
mods.inspirations.Cauldron.addDyeRecipe(<minecraft:emerald>, <minecraft:diamond>, "lime");
```

### Usuwanie

Usuwa istniejący przepis na barwnik z kociołu.

```zenscript
//mods.inspirations.Cauldron.removeDyeRecipe(IIngredient output, @Optional IIngredient input, @Optional String bare)
mods.inspirations.Cauldron.removeDyeRecipe(<*>, <*>, "blue");
mods.inspirations.Cauldron.removeDyeRecipe(<inspirations:carpeted_trapdoor_white>);
```