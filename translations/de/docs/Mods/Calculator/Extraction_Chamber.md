# Absaugkammer

## Paket
```zenscript
importieren mods.calculator.extractionChamber;
```

## Methoden

- **[Ingredient](/Vanilla/Variable_Types/IIngredient/) Input** Die Eingabe.
- **[IIngredient](/Vanilla/Variable_Types/IIngredient/) Ausgabe[1-2]** Die Ausgänge.

## Addition
```zenscript
extractionChamber.addRecipe(IIngrediente Eingabe, IIngrediente Output1, IIngrediente Output2);
```

## Entfernen
```zenscript
extractionChamber.removeRecipe(IIngrediente Ausgabe, IIngredient2);
```