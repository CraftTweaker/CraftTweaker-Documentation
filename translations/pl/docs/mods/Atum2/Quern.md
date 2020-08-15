# Quern

## Pakiet
`mods.atum.Quern;`

## Dodawanie przepisu

`mods.atum.Quern.addRecipe(wejście, wyjście, rotacje);`

- `input` [IItemStack](/vanilla/api/items/IItemStack)
- `output` [IItemStack](/vanilla/api/items/IItemStack)
- `rotacje` Dowolna liczba powyżej 0

Dodaje przepis z określonym wejściem & wyjścia, który wymaga określonej rotacji aby zakończyć zapytanie

```zenscript
mods.atum.Quern.addRecipe(<item:atum:fertile_soil>, <item:atum:fertile_soil_pile>, 3);
```

## Usuwanie przepisu

### Usuń przepisy przez wyjście

`mods.atum.Quern.removeRecipeByOutput(output);`

- `output` [IItemStack](/vanilla/api/items/IItemStack)

Usuwa wszystkie przepisy, w których wynik wyjściowy jest dostarczonym [IItemStack](/vanilla/api/items/IItemStack).

```zenscript
mods.atum.Quern.removeRecipeByOutput(<item:atum:emmer_flour>);
```

### Usuń przepisy przez wyjście & Wejście

`mods.atum.Quern.removeRecipeByOutputInput(wyjście, wejście);`

- `output` [IItemStack](/vanilla/api/items/IItemStack)
- `input` [IItemStack](/vanilla/api/items/IItemStack)

Usuwa konkretny przepis z określonym wyjściem & wejście

```zenscript
mods.atum.Quern.removeRecipeByOutputInput(<item:atum:emmer_flour>, <item:atum:emmer>);
```

### Inne metody usuwania

Zobacz [Menadżerów przepisów](/recipes/recipe_managers) dla innych sposobów usunięcia przepisów Quern
