# Chambre de Fabrication
## Pas entièrement implicite, ne prend qu'une seule entrée.

## Paquet
```zenscript
Importer mods.calculator.fabricationChamber;
```

## Méthodes
- **[Ingrédient](/Vanilla/Variable_Types/IIngredient/) d'entrée** L'entrée.
- **[Ingrédient](/Vanilla/Variable_Types/IIngredient/) sortie** Les sorties.


## Ajouter
```zenscript
fabricationChamber.addRecipe(IIngrédient entrée, sortie IIngrédient);
```

## Retirer
```zenscript
fabricationChamber.removeRecipe(IIngrédient entrée) ;
```