# Fabrication Chamber
## Non completamente implicito, richiede solo un input.

## Pacchetto
```zenscript
import mods.calculator.fabricationChamber;
```

## Metodi
- **[Ingresso IIngrediente](/Vanilla/Variable_Types/IIngredient/)** L'input.
- **[IIngrediente](/Vanilla/Variable_Types/IIngredient/) output** Gli output.


## Addizione
```zenscript
fabricationChamber.addRecipe(IIngredient input, IIngredient output);
```

## Rimozione
```zenscript
fabricationChamber.removeRecipe(IIngredient input);
```