# Calculator Machines

## Methods

- **[IIngredient](/Vanilla/Variable_Types/IIngredient/) input** The input.
- **[IIngredient](/Vanilla/Variable_Types/IIngredient/) output[1-2]** The outputs.

## Extraction Chamber

```zenscript
mods.calculator.extractionChamber.addRecipe(IIngredient input, IIngredient output1, IIngredient output2);
mods.calculator.extractionChamber.removeRecipe(IIngredient output, IIngredient output2);
```
or 
```zenscript
import mods.calculator.extractionChamber;

extractionChamber.addRecipe(IIngredient input, IIngredient output1, IIngredient output2);
extractionChamber.removeRecipe(IIngredient output, IIngredient output2);
```

## Restoration Chamber

```zenscript
mods.calculator.restorationChamber.addRecipe(IIngredient input, IIngredient output1);
mods.calculator.restorationChamber.removeRecipe(IIngredient output);
```
or
```zenscript
import mods.calculator.restorationChamber;

restorationChamber.addRecipe(IIngredient input, IIngredient output1);
restorationChamber.removeRecipe(IIngredient output);
```

## Reassembly Chamber

```zenscript
mods.calculator.reassemblyChamber.addRecipe(IIngredient input, IIngredient output1);
mods.calculator.reassemblyChamber.removeRecipe(IIngredient output);
```
or
```zenscript
import mods.calculator.reassemblyChamber;

reassemblyChamber.addRecipe(IIngredient input, IIngredient output1);
reassemblyChamber.removeRecipe(IIngredient output);
```

## Precision Chamber

```zenscript
mods.calculator.precisionChamber.addRecipe(IIngredient input, IIngredient output1, IIngredient output2);
mods.calculator.precisionChamber.removeRecipe(IIngredient output1, IIngredient output2);
```
or
```zenscript
import mods.calculator.precisionChamber;

precisionChamber.addRecipe(IIngredient input, IIngredient output1, IIngredient output2);
precisionChamber.removeRecipe(IIngredient output1, IIngredient output2);
```

## Processing Chamber

```zenscript
mods.calculator.processingChamber.addRecipe(IIngredient input, IIngredient output1);
mods.calculator.processingChamber.removeRecipe(IIngredient output);
```
or
```zenscript
import mods.calculator.processingChamber;

processingChamber.addRecipe(IIngredient input, IIngredient output1);
processingChamber.removeRecipe(IIngredient output);
```

## Fabrication Chamber

Not fully implimented, only takes one input.

```zenscript
mods.calculator.fabricationChamber.addRecipe(IIngredient input, IIngredient output1);
mods.calculator.fabricationChamber.removeRecipe(IIngredient input);
```
or
```zenscript
import mods.calculator.fabricationChamber;

fabricationChamber.addRecipe(IIngredient input, IIngredient output1);
fabricationChamber.removeRecipe(IIngredient input);
```