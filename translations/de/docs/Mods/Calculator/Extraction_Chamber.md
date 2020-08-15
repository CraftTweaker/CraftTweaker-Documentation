# Extraction Chamber

## Package
```zenscript
import mods.calculator.extractionChamber;
```

## Methoden

- **[IIngredient](/Vanilla/Variable_Types/IIngredient/) input** The input.
- **[IIngredient](/Vanilla/Variable_Types/IIngredient/) output[1-2]** The outputs.

## Addition
```zenscript
extractionChamber.addRecipe(IIngredient input, IIngredient output1, IIngredient output2);
```

## Entfernen
```zenscript
extractionChamber.removeRecipe(IIngredient output, IIngredient output2);
```