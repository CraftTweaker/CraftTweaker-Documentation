# Extraction Chamber

## Pacchetto
```zenscript
import mods.calculator.extractionChamber;
```

## Metodi

- **[IIngredient](/Vanilla/Variable_Types/IIngredient/) input** The input.
- **[IIngredient](/Vanilla/Variable_Types/IIngredient/) output[1-2]** The outputs.

## Addizione
```zenscript
extractionChamber.addRecipe(IIngredient input, IIngredient output1, IIngredient output2);
```

## Rimozione
```zenscript
extractionChamber.removeRecipe(IIngredient output, IIngredient output2);
```