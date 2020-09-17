# Podziel swoje skrypty na wiele plików

Dobrym pomysłem jest podzielenie skryptu na wiele plików

## Problem

- Podczas pisania skryptów dla większych paczek modów, twój skrypt może wkrótce stać się dość długi i mylący.
- Debugowanie długiego skryptu może trwać naprawdę dłużej, zwłaszcza jeśli masz błąd, który nie wskazuje konkretnej linii w skrypcie.

## Co wiemy/musimy wiedzieć

- CraftTweaker może ładować pliki z wielu plików skryptu.
- CraftTweaker może nawet załadować pliki w podfolderach.
- CraftTweaker może również załadować pliki .zip, które zawierają skrypty .zs wewnątrz nich, o ile plik .zip nie jest chroniony hasłem.

## Rozwiązanie

- Podziel swoje duże skrypty na kilka mniejszych skryptów.
- Możesz na przykład utworzyć jeden skrypt dla każdego moda lub każdego programu obsługi modyfikacji.

## Przykład

```zenscript
scripts
    thermalExpansion
        Compactor.zs
        Crucible.zs
    Vanilla
        Receptury
            Remove.zs
            Shaped.zs
            Shapeless.zs
        Seeds.zs
    oreDict.zs
```

## Korzyści

- Twoje pliki skryptu stają się łatwiejsze do debugowania.
- Błąd nie powstrzyma działania całego skryptu, a zamiast tego tylko jego niewielka część.
- Osoby sprawdzające pliki skryptów mogą łatwiej orientować się

## Wady

- Musisz zachować ostrożność w kolejności ładowania skryptów (zwłaszcza jeśli jeden skrypt usunie przepis, a drugi dodaje). Sprawdź [Preprocesor Priorytetów](/AdvancedFunctions/Preprocessors/PriorityPreprocessor/) jeśli ładowanie skryptu jest problemem
- Istnieje wiele sposobów na kategoryzowanie twoich skryptów i może być mylące dla osób zewnętrznych.