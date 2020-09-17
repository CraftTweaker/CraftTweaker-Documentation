# Koło nakrętne

## Pakiet
`mods.atum.SpinningWheel;`

## Dodawanie przepisu

`mods.atum.SpinningWheel.addRecipe(wejście, wyjście, obrót);`

- `input` [IItemStack](/vanilla/api/items/IItemStack)
- `output` [IItemStack](/vanilla/api/items/IItemStack)
- `rotacje` Dowolna liczba powyżej 0

Dodaje przepis z określonym wejściem & wyjścia, który wymaga określonych obrotów aby ukończyć przepis

```zenscript
mods.atum.SpinningWheel.addRecipe(<item:atum:scroll>, <item:minecraft:string>, 3);
```

## Usuwanie przepisu

### Usuń przepisy przez wyjście

`mods.atum.SpinningWheel.removeRecipeByOutput(wyjście);`

- `output` [IItemStack](/vanilla/api/items/IItemStack)

Usuwa wszystkie przepisy, w których wynik wyjściowy jest dostarczonym [IItemStack](/vanilla/api/items/IItemStack).

```zenscript
mods.atum.SpinningWheel.removeRecipeByOutput(<item:atum:linen_thread>);
```

### Usuń przepisy przez wyjście & Wejście

`mods.atum.SpinningWheel.removeRecipeByOutputInput(wyjście, wejście);`

- `output` [IItemStack](/vanilla/api/items/IItemStack)
- `input` [IItemStack](/vanilla/api/items/IItemStack)

Usuwa konkretny przepis z określonym wyjściem & wejście

```zenscript
mods.atum.SpinningWheel.removeRecipeByOutputInput(<item:atum:linen_thread>, <item:atum:flax>);
```

### Inne metody usuwania

Zobacz [Menadżerów przepisów](/recipes/recipe_managers) dla innych sposobów usunięcia przepisów na kołach
