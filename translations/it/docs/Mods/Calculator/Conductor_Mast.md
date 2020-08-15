# Avvisatore Di Conduttore

## Pacchetto
```zenscript
import mods.calculator.conductorMast;
```

## Metodi

- **[Ingresso IIngrediente](/Vanilla/Variable_Types/IIngredient/)** L'input.
- **[IIngrediente](/Vanilla/Variable_Types/IIngredient/) output** L'output.
- **Int powercost** The cost of power per processo.

## Addizionale
```zenscript
conduttorMast.addRecipe(IIngredient input, int powercost, IIngredient output);
```

## Rimozione
```zenscript
conductorMast.removeRecipe(IIngredient output);
```