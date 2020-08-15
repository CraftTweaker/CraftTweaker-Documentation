# Mast du Conducteur

## Paquet
```zenscript
Importer mods.calculator.conductorMast ;
```

## Méthodes

- **[Ingrédient](/Vanilla/Variable_Types/IIngredient/) d'entrée** L'entrée.
- **[Ingrédient](/Vanilla/Variable_Types/IIngredient/) sortie** La sortie.
- **Int powercost** Le coût de puissance par processus.

## Ajout
```zenscript
conductorMast.addRecipe(IIngrédient, int powercost, sortie IIngrédient);
```

## Retirer
```zenscript
conductorMast.removeRecipe(IIngredient sortie);
```