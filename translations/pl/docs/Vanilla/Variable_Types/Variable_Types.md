# Typy zmiennych

Ponieważ z pewnością wysłałeś już trochę zmiennymi i wartościami, musisz się zastanawiać, Jak CraftTweaker wie, czy ma do czynienia z liczbą całkowitą, przedmiotem, czy też wpisem oreDic?

Najprostszym sposobem zgłoszenia zmiennej jest użycie ```nazwa var = wartość;```. Stwarza to zmienność i nadaje jej wartość, którą uważa za najbardziej odpowiednią dla sytuacji.

## Przesyłanie zmiennej na określony typ

Bardziej skomplikowane skrypty mogą wymagać rzucenia zmiennej jako określonego typu. Na przykład byłoby to nieudane:

```zenscript
test var;

test = <minecraft:dirt>;
recipes.remove(test);
```

Dlaczego więc to nie powiedzie się? Dzieje się tak, ponieważ CT rzuca zmienne, którym nie podano wartości startowej do typu IAny. Ten typ został stworzony w celu ułatwienia niektórych osób zajmujących się obsługą receptur, choć nigdy tak naprawdę nie został wdrożony, a więc czasami przynosi więcej szkód niż dobrze. Początkowo był to typ który może mieć formę większości innych typów, więc nie musisz zmieniać zmiennych przez cały czas, ale interfejs nigdy nie został zaimplementowany.

Wróć do tematu: Jak możemy rozwiązać ten problem? Przelewając test zmienny na ```IItemStack```, który jest rodzajem używanym dla przedmiotów. Niestety, niektóre rodzaje muszą zostać najpierw zaimportowane, a to jest jeden z nich.

```zenscript
importuj crafttweaker.item.IItemStack;
test var jako IItemStack;

test = <minecraft:dirt>;
recipes.remove(test);
```

## Lista typów zmiennych

Oto (niekompletna) lista większości zmiennych

| Nazwa (Nazwa w CT)                               | Wyjaśnienie                                                                                                            | Przykład                                               | Importuj                                    |
| ------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ | ------------------------------------------- |
| Liczba całkowita (int)                           | Liczby całkowite są liczbami całkowitymi (np. 1,2,3,...), zakrętkami o 2 147 483 647                                   | `test var = 10 jako int;`                              |                                             |
| [IItemStack](/Vanilla/Items/IItemStack/)         | Pojedyncze elementy                                                                                                    | `test var = <minecraft:dirt> jako IItemStack;`   | importuj crafttweaker.item.IItemStack;      |
| [Składnik](/Vanilla/Variable_Types/IIngredient/) | Pojedyncze lub wiele elementów (np. `<minecraft:dirt>`, `<ore:ingotIron>`,...)                             | `test var = <minecraft:dirt> jako IIngredient;`  | importuj crafttweaker.item.ISkładnik;       |
| [IOreDictentry](/Vanilla/OreDict/IOreDictEntry/) | Wiele przedmiotów z OreDict (np. `<ore:ingotIron>`, `<ore:ingotGold>`,...)                                 | `test var = <ore:ingotIron> jako IOreDictEntry;` | importuj crafttweaker.oredict.IOreDictEntry |
| Wartość logiczna (bool)                          | Wartości logiczne są prawdziwe lub fałszywe.                                                                           | `test var = wynik fałszywy jako bool;`                 |                                             |
| bajt (bajty)                                     | Wartości bajtów są liczbami całkowitymi od 0 do 255 ()                                                                 | `test var = 125 jako bajt;`                            |                                             |
| Pływający punkt (pływający)                      | Ułamki dziesiętne                                                                                                      | `test var = 1,25 w postaci pływaka;`                   |                                             |
| Podwójna precyzja (podwójna)                     | Podobnie jak zmienne punkty, dość precyzyjniejsze i z większą liczbą                                                   | `test var = 1,25 jako dwukrotne;`                      |                                             |
| Długie (długie)                                  | Podobnie jak liczba całkowita, ale z większym zakresem liczbowym (zazwyczaj jest to tylko liczba całkowita)            | `test var = 30 jako długi;`                            |                                             |
| Null (null)                                      | Null, nic, nada. Nie naprawdę typ, ale nadal przydatny                                                                 | `test var = null;`                                     |                                             |
| Krótki (krótki)                                  | Podobnie jak liczba całkowita, ale z mniejszym zakresem liczb                                                          | `test var = 16 jako krótkie;`                          |                                             |
| Ciąg znaków (ciąg)                               | Ciąg znaków to tekst. Tutaj zwykle nie będziesz potrzebował "jak", ponieważ cokolwiek w "s jest automatycznie ciągiem. | `test var = "Hello World!" jako ciąg znaków;`          |                                             |
| Unieważniona (unieważniona)                      | Nawet mniej niż null. Prawdopodobnie będziesz potrzebował tylko typu unieważnienia w przypadku funkcji                 | `badanie var jako nieważne;`                           |                                             |
| [ILiquidStack](/Vanilla/Liquids/ILiquidStack/)   | Tak samo jak IItemStack, tylko dla płynów                                                                              | `test var = <liquid:water> jako ILiquidStack;`   | import crafttweaker.płyn.ILiquidStack;      |