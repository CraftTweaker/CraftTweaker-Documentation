# Rozpuszczalnik

## Pakiet
`mods.alchemistry.Rozpuszczalnik`

## Metody
- **[IItemStack](/Vanilla/Items/IItemStack/) wejście** - Wprowadzenie przepisu.
- **wartość logiczna Prawdopodobieństwa** - Wartość logiczna obliczeń prawdopodobieństwa
- **int rolls** - Możliwość ról
- **probabilityGroups** - tablica tablic z podwójnym podwójnym, a następnie # z [IItemStack](/Vanilla/Items/IItemStack/)s. Podwójne odnosi się do prawdopodobieństwa jego grupy.

## Dodanie
```zenscript
mods.alchemistry.Dissolver.addRecipe(dane wejściowe składników boolean relativeProbability, rolki do intów, Object[][] probabilityGroups);
mods.alchemistry.Dissolver.addRecipe(<minecraft:dye:9>, false, 5,
[[10, <minecraft:stone>], 
 [20, <minecraft:sand>,<minecraft:iron_ore>]]);
```

## Usuwanie
```zenscript
mods.alchemistry.Dissolver.removeRecipe(Input);
mods.alchemistry.Dissolver.removeRecipe(<minecraft:ender_pearl>);

mods.alchemistry.b. „oprogramowanie” specjalnie zaprojektowane lub zmodyfikowane do „rozwoju”, „produkcji” lub „użytkowania” sprzętu wyszczególnionego w pozycjach 2B001, 2B006, 2B009, 2B109, 2B109, 2B109, 2B109, 2B109, 2B109, 2B109, 2B109, 2B109, 2B109, 2B109, 2B109, 2B109, 2B109, 2B109, 2B109, 2B109, 2B109, 2B109, 2B109, 2B109, 2B109, 2B109, 2B109, 2B109, 2B109, 2B109, 2B109, 2B109, 2B109, 2B109, 2B109, 2B109, 2B109, 2B109, 2B109, 2B109, 2B109, 2B109, 2B109, 2B109, 2B109, 2B109, 2B109, 2B109, 2B109, 2B109, 2B109, 2B109, 2B109, 2B109, 2B109, 2B109, 2B109, 2B109,
```

# Uwagi
Aby ułatwić rozwój istniejących przepisów dotyczących rozpuszczania, istnieje polecenie, po prostu /dissolver, który pobierze przepis na słabsze rzemieślniki na trzymany przedmiot i skopiuje go do schowka

Jeśli względne prawdopodobieństwo jest prawdziwe, każde prawdopodobieństwo będzie obliczane na podstawie sumy wszystkich prawdopodobieństw. W powyższym przykładzie oznaczałoby to powstanie 33,3 % szans na wyjście z każdej rolki i 66. % szans na wyjście piasku i rudy żelaza na każdą rolkę.

Jeżeli względne prawdopodobieństwo jest fałszywe, wówczas liczby te są bezwzględnymi procentami, tj. 10% szans na wydobycie kamienia i 20% szans na wydobycie piasku i rudy żelaza (niezależnie od tego, czy kamień został wyprodukowany czy nie). Obsługiwane są prawdopodobieństwa zmiennoprzecinkowe, więc 4,5 oznaczałoby to 4,5%

