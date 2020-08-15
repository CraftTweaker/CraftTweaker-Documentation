# Sägewerk

## Paket

```java
importieren mods.ic2.Sägewerk
```

## Methoden

- **[IItemStack](/Vanilla/Items/IItemStack/) output**
- **[IIngredient](/Vanilla/Variable_Types/IIngredient/) Eingabe**

### Addition

```zenscript
mods.ic2.Säge.addRecipe(IItemStack-Ausgabe, IIngredient);

mods.ic2.Sägemill.addRecipe(<minecraft:diamond_block>, <minecraft:dirt> * 64);
```

### Entfernen

Um ein bereits vorhandenes Rezept zu entfernen, deaktivieren Sie einfach das entsprechende Rezept in `config/ic2/ic2machineRecipes.json`.