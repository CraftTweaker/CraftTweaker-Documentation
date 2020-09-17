# Piec

Piec jest blokiem wieloskładnikowym wykorzystywanym do szybkiego przetwarzania bloków budowlanych, który można nabyć poprzez wytapianie czegoś w piecu.

## Pakiet
`mods.atum.Kiln;`

## Czarna lista

Przepisy dotyczące pieców opierają się na przepisach dotyczących pieców waniliowych, sortując wszystko poza budową bloków. Czarna lista jest dla Ciebie sposobem na dalsze zminimalizowanie ilości przepisów przechwyconych z pieca wanilii.

`mods.atum.Kiln.blacklist(id);`

- `id` ID przedziału nazw dla wpisu/elementu, który powinien być na czarnej liście.

Usuwa recepturę z określonego przedmiotu/bloku z receptur, którą Piec wyciągnie z pieca vanilla

```zenscript
mods.atum.Kiln.blacklist("minecraft:cobblestone");
```

## Dodawanie przepisu

`mods.atum.Kiln.addRecipe(wejście, wyjście, doświadczenie, @Opcjonalne cookTime);`

- `input` [IItemStack](/vanilla/api/items/IItemStack)
- `output` [IItemStack](/vanilla/api/items/IItemStack)
- `doświadczenie` Liczba zmiennoprzecinkowa
- `cookTime` Liczba całkowita (jeśli pozostanie pusta, domyślnie do 75)

Dodaje przepis z określonym wejściem, wyjściem, doświadczeniem & czas gotowania

```zenscript
mods.atum.Kiln.addRecipe(<item:atum:dirty_bone_block>, <item:atum:alabaster>, 0.2);
```

## Usuwanie przepisu

Metody usuwania działają tylko dla przepisów dodanych specjalnie do pieca przez Atum (lub inne modyfikacje) Domyślnie w Atum będzie to tylko przepis Marl do Białego bloku płytek ceramicznych. Jeśli chcesz usunąć coś innego, prawdopodobnie szukasz czarnej listy (Dokumentacja powyżej)

### Usuń przepisy przez wyjście

`mods.atum.Kiln.removeRecipeByOutput(wyjście);`

- `output` [IItemStack](/vanilla/api/items/IItemStack)

Usuwa wszystkie przepisy, w których wynik wyjściowy jest dostarczonym [IItemStack](/vanilla/api/items/IItemStack).

```zenscript
mods.atum.Kiln.removeRecipeByOutput(<item:atum:marl>);
```

### Usuń przepisy przez wyjście & Wejście

`mods.atum.Kiln.removeRecipeByOutputInput(wyjście, wejście);`

- `output` [IItemStack](/vanilla/api/items/IItemStack)
- `input` [IItemStack](/vanilla/api/items/IItemStack)

Usuwa konkretny przepis z określonym wyjściem & wejście

```zenscript
mods.atum.Kiln.removeRecipeByOutputInput(<item:atum:cermic_white>, <item:atum:marl>);
```

### Inne metody usuwania

Zobacz [Menadżerów przepisów](/recipes/recipe_managers) dla innych sposobów usunięcia przepisów na kołach
