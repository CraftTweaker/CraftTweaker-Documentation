# Recettes

## Types de recettes

Il y a plusieurs types de recettes :

### Recettes formées

Les recettes formées sont des recettes, là où elles sont importantes, dans quel emplacement. Par exemple, vous ne pouvez pas simplement arranger 7 lingots de fer pour créer des jambières de fer. La forme importe, donc c'est une recette formée.

### Recette en miroir

Les recettes miroir sont des recettes en forme. La seule différence est que la recette peut être reflétée le long des axes horizontaux ou verticaux.

### Recettes sans forme

Les recettes sans forme sont des recettes, où seuls les objets que vous mettez dans la matière de la grille d'artisanat, alors que la forme n'est pas importante. Par exemple, le bleu et le jaune créent une teinture verte. Cette recette ne se soucie pas de l'endroit où vous avez mis quel objet.

## Supprimer les recettes

Il y a plusieurs façons de retirer des recettes.

### Enlever

```zenscript
recettes.remove(output, NBTMatch);
```

This will crafting table recipes for the given `output`.  
If `NBTMatch` is true, it will only remove recipes that result in items with the same NTB-Data as provided

`La sortie` est un [ingrédient](/Vanilla/Variable_Types/IIngredient/).  
`NBTMatch` est un boolan et facultatif (sera le même que false s'il n'est pas spécifié).

### Enlever la forme

```zenscript
recettes.removeShaped(sortie, entrées) ;
```

Celle-ci est plus stricte sur laquelle les recettes à supprimer et ne supprimera que les recettes formées qui fabriquent `sortie` avec `entrée`.

`output` is an [IIngredient](/Vanilla/Variable_Types/IIngredient/)  
`inputs` is an [IIngredient](/Vanilla/Variable_Types/IIngredient/)\[]\[\\] (e.g.[[iron,iron,iron],[iron,null,iron],[iron,null,iron]])

De plus, `entrées` est facultatif. Si elle est omise, la fonction fera la même chose que `recipe.remove`, bien qu'elle ne supprimera que les recettes formées.  
`les entrées` peuvent contenir des caractères génériques : `[[<*>,<*>,<*>],[<*>,<*>,<*>],[<*>,<*>,<*>]]` recommanderait une recette dont les objets, tant que chaque emplacement est rempli, n'ont pas d'importance.

### Supprimer sans forme

```zenscript
recettes.removeShapeless(sortie, entrées, joker) ;
```

Celle-ci est plus stricte sur laquelle les recettes à supprimer et ne supprimera que les recettes informe qui fabriquent `sortie` avec `entrée`.  
Si `le joker` est vrai, il retirera les recettes sans forme qui fabriquent `la sortie` avec `d'entrée` et autres, éléments non spécifiés (par exemple, vous pouvez désactiver toutes les recettes sans forme qui contiennent, entre autres, Lapis comme ingrédient).

`la sortie` est un [IIngrédient](/Vanilla/Variable_Types/IIngredient/)  
`entrées` est un [Ingrédient](/Vanilla/Variable_Types/IIngredient/)[]  
`joker` est un boolan et facultatif (sera le même que faux si non spécifié)

De plus, `entrées` est facultatif. Si elle est omise, la fonction fera la même chose que `recipe.remove`, bien qu'elle ne supprimera que des recettes sans forme.

### Retirer tout

Supprime toutes les recettes d'artisanat dans le jeu.  
Un peu trop tué, n'est-ce pas?

```zenscript
recettes.removeAll();
```

### Supprimer par nom

Comme 1.12 introduit des recettes de nommage, vous pouvez également supprimer des recettes une fois que vous connaissez leur nom. Vous pouvez également utiliser regex pour supprimer plusieurs recettes à la fois. Et non, si vous ne savez pas ce que sont les expressions régulières, je ne vais pas l'expliquer ici !

```zenscript
recipes.removeByRegex("name[1-9]");
recipes.removeByRecipeName("modid:recipename");
```

### Supprimer par mod

Vous pouvez également supprimer toutes les recettes qui ont été ajoutées par le mod spécifié.  
Vous devez fournir la modification du mod en tant que chaîne.

```zenscript
recipes.removeByMod("modularmachinery");
```

## Ajouter des recettes

### Notes sur 1.12

Le 1.12, chaque recette ajoutée nécessite un identifiant UNIQUE, car l'équipe de développement forge le voulait ainsi.  
Cela signifie que toutes les fonctions ajoutées nécessitent maintenant un nom `de paramètre supplémentaire` au début (qui ne peut pas être omis).  
Cela signifie `recette.addShaped(sortie,entrée));` est maintenant `recette. ddShaped(name,output,input);`  
Toutes les autres fonctionnalités restent les mêmes. Rappelez-vous que `name` doit être unique !  
`name` est une chaîne.

### Ajouté à Shaped

```zenscript
//pre-1.12
recettes.addShaped(output,inputs,function,action);

//1.12
recipes.addShaped(name,output,inputs,function,action);
```

Cela crée une recette formée pour la sortie `` en utilisant `entrées` en tant qu'Ingrédients.  
Si une fonction `` est ajoutée en tant que troisième paramètre, vous pouvez également utiliser une fonction pour déterminer la sortie.  
Si une fonction `` est ajoutée comme paramètre avant, vous pouvez également déterminer, ce qui se passera si l'objet est fabriqué.

`name` is a string and needs to be unique but is also optional `output` is an [IItemStack](/Vanilla/Items/IItemStack/)  
`inputs` is an [IIngredient](/Vanilla/Variable_Types/IIngredient/)\[]\[\\] (see below)  
`function` is a IRecipeFunction. Veuillez vous référer à la [entrée wiki respectueuse](/Vanilla/Recipes/Crafting/Recipe_Functions/#irecipefunction) pour plus d'informations sur les fonctions.  
`action` est une IRecipeAction. Veuillez vous référer à [l'entrée wiki respectueuse](/Vanilla/Recipes/Crafting/Recipe_Functions/#irecipeaction) pour plus d'informations sur les actions.

`les entrées` sont un Ingrédient [dimensionnel](/Vanilla/Variable_Types/IIngredient/) 2 tableaux.  
Donc la recette des Jambières de Fer serait écrite sous la forme de `[[fer,fer,fer],[fer,fer,fer,fer,] ull, fer]]`  
Si cela semble confus, essayez de scinder les tableaux en un tableau par ligne

```zenscript
fer val = <minecraft:iron_ingot>;
jambières val = <minecraft:iron_leggings>;

recettes.addShaped("CTLeggings", jambières,
 [[fer,fer,
  [fer,fer,fer], 
 [fer,fer,fer],
  [fer,null,fer,fer,] [fer,null,fer]]);
```

### Ajouter ShapedMirrored

```zenscript
//Normale syntaxe pré 1.12
recipes.addShapedMirrored(output,inputs,function,action);

//Syntaxe recommandée 1.12
recipes.addShapedMirrored(name,output,inputs,function,action);
```

Identique à `addShaped`, seulement que la recette créée de cette façon est une recette miroir .

### addShapeless

```zenscript
//Normale prre 1.12 syntaxe
recipes.addShapeless(output,inputs,function,action)

//Syntaxe recommandée 1.12
recipes.addShapeless(name,output,inputs,function,action)
```

Cela crée une recette sans forme pour la sortie `` en utilisant `entrées` en tant qu'Ingrédients.  
Si une fonction `` est ajoutée en tant que troisième paramètre, vous pouvez également utiliser une fonction pour déterminer la sortie.  
Si une fonction `` est ajoutée comme paramètre avant, vous pouvez également déterminer, ce qui se passera si l'objet est fabriqué.

`Nom` is a string and needs to be unique `output` is an [IItemStack](/Vanilla/Items/IItemStack/)  
`inputs` is an [IIngredient](/Vanilla/Variable_Types/IIngredient/)[] (e.g. [<minecraft:dye:1>,<minecraft:dye:2>])  
`fonction` est une fonction IRecipeFunction. Veuillez vous référer à [l'entrée wiki respectueuse](/Vanilla/Recipes/Crafting/Recipe_Functions/#irecipefunction) pour plus d'informations sur les fonctions. C'est facultatif.  
`Action` est une IRecipeAction. Veuillez vous référer à [l'entrée wiki respectueuse](/Vanilla/Recipes/Crafting/Recipe_Functions/#irecipeaction) pour plus d'informations sur les actions. C'est facultatif.

### addHidden

```zenscript
addHiddenShapeless(String name, IItemStack output, IIngredient[] ingredients, @Optional IRecipeFunction function, @Optional IRecipeAction action);
addHiddenShaped(String name, IItemStack output, IIngredient[][] ingredients, @Optional IRecipeFunction function, @Optional IRecipeAction action, @Optional boolean mirrored);
```

Cela crée une recette sans forme pour la sortie `` en utilisant `entrées` comme Ingrédients qui est nommé `nom`.  
Si une fonction `` est ajoutée en tant que troisième paramètre, vous pouvez également utiliser une fonction pour déterminer la sortie.  
Si une fonction `action` est ajoutée comme paramètre avant, vous pouvez également déterminer, ce qui se passera si l'objet est fabriqué.  
Pour la variante sans forme, vous pouvez également définir si la recette est `miroir`, si elle est omise, elle ne le sera pas.

## Autres fonctionnalités

### Obtenez toutes les recettes d'artisanat enregistrées.

Vous pouvez l'utiliser pour obtenir une liste [`<ICraftingRecipe>`](/Vanilla/Recipes/Crafting/ICraftingRecipe/) qui contient TOUTES les recettes d'artisanat enregistrées.

    recettes.toutes;
    

### Obtenez toutes les recettes pour un ingrédient donné

You can use this to get a [`List<ICraftingRecipe>`](/Vanilla/Recipes/Crafting/ICraftingRecipe/) that contains ALL registered crafting recipes for the given [IIngredient](/Vanilla/Variable_Types/IIngredient/).

    //recettes.getRecipesFor(IIngredient ingredient);
    recipes.getRecipesFor(<minecraft:iron_ingot>);
    

### Remplacer tous les ingrédients de l'objet par un autre

Vous pouvez l'utiliser pour remplacer tous les [ingrédients](/Vanilla/Variable_Types/IIngredient/) dans une recette par une autre, par exemple toutes les bâtons avec des pierres. Il accepte également un troisième paramètre optionnel qui correspond à nouveau aux sorties de recettes. Si la recette

    //recettes.replaceAllOccurences(IIngrédient de remplacer, IIngrédient remplaceWith, @Optional Igredient forOutput);
    
    //remplace chaque bâton par des recettes de pierre
    . eplaceAllOccurences(<minecraft:stick>, <minecraft:stone>);
    
    //Utilise explicitement n'importe quelle sortie, remplace les lingots d'or par des blocs d'or
    recettes. eplaceAllOccurences(<ore:ingotGold>, <ore:blockGold>, <*>);
    
    
    //Remplace seulement dans les recettes avec une épée en diamant comme résultat
    recettes. eplaceAllOccurences(<ore:gemDiamond>, <ore:blockDiamond>, <minecraft:diamond_sword>);
    
    
    //conditions de travail aussi -> remplace dans les recettes pour n'importe quelle sortie de recette sauf tnt
    recettes. eplaceAllOccurences(<ore:gunpowder>, <minecraft:tnt>, <*>. nly(function(item) {
        return !isNull(item) & !<minecraft:tnt>.matches(item);
    }));
    

### Fabrication

Vous pouvez même fabriquer à partir de `recettes`! La fonction retournera un [IItemStack](/Vanilla/Items/IItemStack/) ou `null` selon qu'une recette est trouvée ou non.

    //recettes.craft(IItemStack[][]contenu);
    recettes.craft([[<minecraft:iron_ingot>]]);