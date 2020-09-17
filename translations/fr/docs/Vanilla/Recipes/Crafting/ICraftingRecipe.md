# Recette de fabrication

Une recette ICraftingRecipe est une recette de table artisanale de la façon dont ZS la voit.

## Importation de la classe

Il peut être nécessaire de [importer](/AdvancedFunctions/Import/) la classe pour éviter les erreurs.  
`importer crafttweaker.recipes.ICraftingRecipe`

## Méthodes Zen/Getters

### Obtenir des ingrédients

Renvoie un [Igredient](/Vanilla/Variable_Types/IIngredient/)[] ou un Ingrédient [](/Vanilla/Variable_Types/IIngredient/)[][]

```zenscript
rec.ingredients1D
rec.ingredients2D
```

### Get standart output

Retourne l'ouptut comme [IItemStack](/Vanilla/Items/IItemStack/). Attention, peut être null !

```zenscript
Sortie rec.fr
```

### Vérifier les conditions

Chacun d'entre eux renvoie un booléen

```zenscript
rec.hasTransformers;
rec.hasRecipeAction;
rec.hasRecipeFunction;
rec.hidden;
rec.shaped;
```

### Domaine de la ressource

Fondamentalement, la modification du mod qui a ajouté la recette.

```zenscript
rec.resourceDomain;
rec.fullResourceDomain;
```

### Ingrédients

Retourne la liste des ingrédients comme [IIngrédient](/Vanilla/Variable_Types/IIngredient/)\[] ou [IIngrédient](/Vanilla/Variable_Types/IIngredient/)\[]\[] respectivement.

```zenscript
rec.ingredients1D;
rec.ingredients2D;
```

### Sortie

La sortie [IItemStack](/Vanilla/Items/IItemStack/) de la recette.

```zenscript
rec.output;
```

### À la chaîne de caractères

```zenscript
rec.commandString;
rec.toCommandString();

rec.name;
rec.getName();
```