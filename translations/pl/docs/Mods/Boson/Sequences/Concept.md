# Koncepcja

Pętla jest starą koncepcją i jedną z podstaw programowania: powtarzanie tego samego zestawu działań w grupie elementów, podczas filtrowania niektórych z nich lub konwersji zestawów. Lub nawet znalezienie pierwszego elementu na liście, która spełnia określony warunek lub zlicza elementy z zestawu rekursywnie.

W zakresie programowania proceduralnego i koniecznego, większość z nich została wykonana z prostym starem `dla pętli` i serią instrukcji warunkowych z ich względnymi `kontynuuj` i `przerwać`. Chociaż może to być prostsze do naśladowania, wymaga dużo kodu do prostych operacji, takich jak filtrowanie i może wytwarzać zagnieżdżone łańcuchy które mogą trwać dłużej. Ponadto nie wyraża zamiaru, chyba że w kodzie określono go z komentarzami.

Rozważ następujący kod ZenScript:

```zenscript
var nbtForMc = fałsz;

dla receptury w przepisach. ll {
    jeśli (recipe.shaped) {
        wyjście wału = przepisy. utput;
        jeśli (! sNull(wyjście)) {
            jeżeli (wyjście. efinition.owner == "minecraft") {
                val hasData = wyjście. Znacznik;
                jeśli (hasData) {
                    nbtForMc = true; przerwa
                    ;
                }
            }
        }
    }
}
```

To, co ten kod nie jest oczywiste na pierwszy rzut oka i wymaga od użytkownika przeczytania logiki do zrozumienia. Weź pod uwagę ten równoważnik zbudowany za pomocą sekwencji:

```zenscript
val nbtForMc = <sequence:ICraftingRecipe>(recipes.all)
    .filter(function (recipe) { return recipe. haped; })
    .map(function (recipe) { return recipe.output; })
    . ilterNot(function (output) { return isNull(output); })
    .filter(function (output) { return output. efinition.owner== "minecraft"; })
    .any(function (output) { return output.hasTag; });
```

Ten kod działa dokładnie tak samo i nie tylko jest bardziej zwięzły, ale również przekazuje więcej znaczenia, że łańcuch zagnieżdżonych instrukcji `jeśli`. Przyznana nie wydaje się ogólna poprawa, ze względu na prostotę przedmiotowego kodeksu, ale może okazać się przydatny dla bardziej skomplikowanych elementów logicznych.

Innym pro z powyższego kodu jest to, że ocena nie jest wykonywana do `żadnego` połączenia, co oznacza, że sekwencja może być przedłużona za pomocą dodatkowych wywołań metody i nie zostanie rozwiązana dopóki nie zostanie wywołana metoda "terminalowa" (i. . metoda , która nie zwraca `sekwencji`. To okazuje się niezwykle użyteczne, ponieważ nie ma potrzeby oceniania całości `przepisów. Wszystkie` tablice.

Aby rozpocząć i lewarować sekwencje, możesz zapoznać się zarówno z [dokumentacją klasy](/Mods/Boson/Sequences/Docs/) jak i [jak uzyskać jedną](/Mods/Boson/Sequences/Obtaining/) stron dokumentacji.
