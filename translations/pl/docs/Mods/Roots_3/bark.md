### Klasa

```zenscript
importuj mods.roots.Bark;
```

#### Metody

```zenscript
Unieważnij addRecype(
  nazwa ciągu, // nazwa przepisu
  IItemStack woodLog, // odpowiednik stołu przedmiotów z kłody drewna łamanego
  IItemStack kora// stos przedmiotów typu kory, którą wytwarza ta kłoda (w tym liczba stosów)
);
```

* * *

```zenscript
usuń przepis(
  IItemStack kora // stos przedmiotów typu kory do usunięcia (z wyłączeniem rozmiaru stosu)
);
```

* * *

### Przykłady

```zenscript
importuj mods.roots.Bark;

// będzie produkował 2 piaski z bloku melona uszkodzonego nożem.
Bark.addRecipe("melon", <minecraft:melon_block>, <minecraft:sand>*2);

// usuwa dziką korę z domyślnej listy
Bark.removeRecipe(<roots:bark_wildwood>);
```