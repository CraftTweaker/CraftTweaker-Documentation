# Machine à canne

## Paquet

```zenscript
Importer mods.ic2.CanningMachine ;
```

### Liste des ids des effets
* 1 : faim (Chair pourrie) (80% de chance)
* 2 : Poison (Œil de pierre)
* 3 : Faim (Poulet cru) (30% de chance)
* 4 : Pomme dorée
* 5 : Pomme Notch
* 6: Corus Fruit

## Méthodes

### Register Items For Effect (int id, IItemstack... inputs)


```zenscript
mods.ic2.CanningMachine.registerItemsForEffect(int id, IItemstack... entrées);    

mods.ic2.CanningMachine.registerItemsForEffect(4, <minecraft:fish>);
```

- **[IItemStack](/Vanilla/Items/IItemStack/)... ** Les entrées obtenant la nourriture peuvent être activées.
- **int id** L'effectID que vous voulez appliquer aux éléments spécifiés. Les identifiants d'effet valides sont les suivants :

### Supprimer l'ID de l'effet (int id, boolean deleteItems)
```zenscript    
mods.ic2.CanningMachine.deleteEffectId(int id, boolean deleteItems);

mods.ic2.CanningMachine.deleteEffectId(5, false);
```

- **int id** L'effectID que vous voulez supprimer de remplis peut. Reportez-vous à ce qui précède pour les identifiants d'effet valides.
- **boolean deleteItems** S'il faut supprimer des éléments avec cet effet de la canette archivée. Actuellement, ce booléen peut ne pas fonctionner.

### Enregistrer la valeur du carburant (int FuelValue, IItemStack entrée)
```zenscript
mods.ic2.CanningMachine.registerFuelValue(int fuelValue, IItemStack input);

mods.ic2.CanningMachine.registerFuelValue(10, <minecraft:diamond_block>);

mods.ic2.CanningMachine.registerFuelValue(1274, <ic2:itemmisc:102>); //Auparavant avait une valeur de 2548.
```

- **int carburantValeur** Combien de carburant l'élément spécifié vaut la valeur.
- **[IItemStack](/Vanilla/Items/IItemStack/) entrer** L'élément pour enregistrer la valeur du carburant. Il peut même être des éléments avec des valeurs existantes, auquel cas la valeur précédemment spécifiée sera écrasée. Note: doit être un itemstack, aucun oredict autorisé.

### Registre du Multiplicateur de Carburant (Float FuelMultiplier, IItemStack)
```zenscript
mods.ic2.CanningMachine.registerFuelMultiplier(float fuelMultiplier, IItemStack input);

mods.ic2.CanningMachine.registerFuelMultiplier(0.5f, <minecraft:diamond>);
```

- **float fuel Multiplier** Quel pourcentage la valeur d'entrée précédente est augmentée. par exemple 1 = 100%, 0,5 = 50%, 0 = 0%, ect.
- **[IItemStack](/Vanilla/Items/IItemStack/) entrer** L'élément pour enregistrer le multiplicateur de carburant. Il peut même être des éléments avec des multiplicateurs existants, auquel cas le multiplicateur précédemment spécifié sera écrasé. Note: doit être un itemstack, aucun oredict autorisé.

### Supprimer le Carburant (entrée IItemStack)
```zenscript
mods.ic2.CanningMachine.deleteItemFuel(IItemStack input);

mods.ic2.CanningMachine.deleteItemFuel(<ic2:itemmisc:102>);
```

- **[IItemStack](/Vanilla/Items/IItemStack/) entrée** L'élément à retirer d'être une entrée pour le combustible.

Voir [ici](https://github.com/TinyModularThings/IC2Classic/wiki/Fuel-Cans) pour plus d'informations sur le fonctionnement des canettes de carburant.

### Ajouter une recette de Canning (sortie IItemStack, remplissage IIngrédient, conteneur IItemStack)
```zenscript
mods.ic2.CanningMachine.addCanningRecipe(sortie IItemStack, remplissage IIngrédient, conteneur IItemStack);  

mods.ic2.CanningMachine.addCanningRecipe(<minecraft:emerald>, <minecraft:diamond>, <minecraft:bucket>);
```
- **[IItemStack](/Vanilla/Items/IItemStack/) sortie** Le produit
- **[IItemStack](/Vanilla/Items/IItemStack/) container** La pile à remplir
- **[Ingrédient](/Vanilla/Variable_Types/IIngredient/) remplissage** L'ingrédient avec lequel est rempli dans le conteneur

