# Cámara de extracción

## Paquete
```zenscript
importar mods.calculator.extractionChamber;
```

## Metodos

- **[IIngrediente](/Vanilla/Variable_Types/IIngredient/) entrada** La entrada.
- **[IIngrediente](/Vanilla/Variable_Types/IIngredient/) salida[1-2]** Las salidas.

## Adicional
```zenscript
extractionChamber.addRecipe(entrada IIngredient, salida IIngredient1, salida IIngredient2);
```

## Eliminar
```zenscript
extractionChamber.removeRecipe(salida IIngredient, salida IIngredient2);
```