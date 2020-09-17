# Kompresor

## Pakiet

`importuj mods.ic2.Compressor;`

## Metody

- **[IItemStack](/Vanilla/Items/IItemStack/) output**
- **[Składnik](/Vanilla/Variable_Types/IIngredient/) wejście**

## Dodanie

```zenscript
mods.ic2.Compressor.addRecipe(wyjście IItemStack, Wejście IIngredienta);

mods.ic2.Compressor.addRecipe(<minecraft:diamond_block>, <minecraft:dirt> * 64);
```

## Usuwanie

- Jeśli używasz eksperymentalnego Ic2, aby usunąć przepis, po prostu usuń odpowiedni wiersz w `config/ic2/compressor.ini`
- Jeśli używasz Ic2 Classic, aby usunąć przepis, po prostu wyłącz odpowiedni przepis w `config/ic2/ic2machineRecipes.json`.