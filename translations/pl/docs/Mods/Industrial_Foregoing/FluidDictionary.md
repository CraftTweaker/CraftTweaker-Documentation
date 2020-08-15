# Słownik płynny

### Importowanie

```zenscript
importuj mods.industrialforegoing.FluidDictionary;
```

### Dodawanie

Potrzebuje nazwy płynu jako wejścia, nazwy płynu jako wyjścia i współczynnika konwersji. Stopa jest taka, jak wiele mb z początku zostanie przekształcone w wynik wyjściowy. (InputMB * stopa = OutputMB)

```zenscript
FluidDictionary.add(wejście ciągu, wyjście ciągu, podwójna szybkość);

FluidDictionary.add("essence", "xpjuce", 1);
```

### Usuwanie

Potrzebuje nazwy płynu jako wejścia, nazwy płynu jako wyjścia.

```zenscript
FluidDictionary.remove(wejście ciągu, wyjście ciągu);

FluidDictionary.remove("esence", "xpjuice");
```