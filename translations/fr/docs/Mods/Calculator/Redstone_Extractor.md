# Extracteur de Redstone

## Paquet
```zenscript
Importer mods.calculator.redstone;
```

## Méthodes

- **[Ingrédient](/Vanilla/Variable_Types/IIngredient/) d'entrée** L'entrée.
- **valeur int** La quantité d'entrée ajoute à cette machine.


## Ajout
```zenscript
redstone.addRecipe(IIngredient input, int value);
```

## Retirer
```zenscript
redstone.removeRecipe(IIngredient input);
```