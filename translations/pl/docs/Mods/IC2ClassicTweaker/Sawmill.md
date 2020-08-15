# Tartak

## Pakiet

```java
importuj mods.ic2.Tartak;
```

## Metody

- **[IItemStack](/Vanilla/Items/IItemStack/) output**
- **[Składnik](/Vanilla/Variable_Types/IIngredient/) wejście**

### Dodanie

```zenscript
mods.ic2.Sawmill.addRecipe(wyjście IItemStack, Wejście IIngredienta);

mods.ic2.Sawmill.addRecipe(<minecraft:diamond_block>, <minecraft:dirt> * 64);
```

### Usuwanie

Aby usunąć już istniejący przepis, po prostu wyłącz odpowiedni przepis w `config/ic2/ic2machineRecipes.json`.