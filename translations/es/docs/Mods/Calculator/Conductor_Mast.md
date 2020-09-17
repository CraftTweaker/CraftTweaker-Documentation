# Máscara de conductor

## Paquete
```zenscript
importar mods.calculator.conductorMast;
```

## Metodos

- **[IIngrediente](/Vanilla/Variable_Types/IIngredient/) entrada** La entrada.
- **[IIngrediente](/Vanilla/Variable_Types/IIngredient/) salida** La salida.
- **Int power cost** The cost of power per process.

## Añadido
```zenscript
conductorMast.addRecipe(entrada IIngredient, int powercost, salida IIngredient);
```

## Eliminar
```zenscript
conductorMast.removeRecipe(salida IIngredient);
```