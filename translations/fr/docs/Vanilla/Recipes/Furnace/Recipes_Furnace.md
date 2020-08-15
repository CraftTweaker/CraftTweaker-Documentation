# Fourneau

CraftTweaker vous permet de `Ajouter` et `Retirer` recettes de fours et de changer la valeur de carburant des objets.

## Recettes

### Retirer

Il y a deux façons d'enlever les recettes de four, être:

```zenscript
Supprimer(sortie Ingrédient)
```

Et

```zenscript
furnace.remove(IIngrédient, entrée IIngrédient);
```

La première syntaxe est plus flexible avec les recettes qui sont retirées et supprimera toutes les recettes de fours qui affichent la sortie `` donnée.  
La seconde syntaxe est plus stricte avec les recettes qui sont retirées et supprimera toutes les recettes de fours qui affichent la `sortie` donnée et a une entrée de `entrée`.

Il y a aussi une troisième façon de supprimer les recettes de fours, bien que celle-ci supprimera TOUTES les recettes de fours enregistrées dans le jeu.

```zenscript
Retirer tout ();
```

### Ajouter

Il y a 2 commandes pour ajouter des recettes de four :

```zenscript
furnace.addRecipe(sortie IItemStack, entrée IIngrédient);
```

Et

```zenscript
furnace.addRecipe(sortie IItemStack, entrée IIngrédient, double xp);
```

La première syntaxe ajoute une recette de fourneau qui donnera 0 xp sur la fonte.

La seconde syntaxe va ajouter une recette de fourneau qui donnera `xp` xp sur fondu.

## Carburant

### Régler

La commande pour définir les valeurs de carburant est :

```zenscript
furnace.setFuel(IIngredient input, int burnTime);
```

Cela définira la valeur de la gravure de `entrée` à `burnTime` en ticks. Minecraft brûle du charbon pour 1600 ticks, 80 secondes, 8 objets. 1 objet dans un four à minecraft prend 200 ticks à compléter.

Définir le `temps de combustion` à `0` empêchera l'entrée `` d'être un élément de carburant.

### Obtenir

La commande pour récupérer la valeur du carburant d'un article est :

```zenscript
furnace.getFuel(IItemStack item); 
```

Retourne la valeur de gravure sous la forme d'un entier

## Exemples

### Retirer

Ceci supprimera toutes les recettes de fours qui donnent `<minecraft:glass>`.

```zenscript
furnace.remove(<minecraft:glass>);
```

Cela supprimera toutes les recettes de fours `<minecraft:quartz>` qui utilisent `<minecraft:quartz_ore>` comme entrée.

```zenscript
furnace.remove(<minecraft:quartz>, <minecraft:quartz_ore>);
```

### Ajouter

Cela ajoutera une recette de four qui affichera un `<minecraft:golden_apple>` quand un `<minecraft:apple>` est fondu.

```zenscript
furnace.addRecipe(<minecraft:golden_apple>, <minecraft:apple>);
```

Cela ajoutera une recette de fourneau qui affichera un `<minecraft:speckled_melon>` quand un `<minecraft:melon>` est fondu et donnera au joueur 1500 points xp.

```zenscript
furnace.addRecipe(<minecraft:speckled_melon>, <minecraft:melon>, 1500 );
```

### Carburant

Cela définira la valeur de carburant de `<minecraft:rotten_flesh>` à `100`.

```zenscript
furnace.setFuel(<minecraft:rotten_flesh>, 100);
```

## Autres fonctionnalités

### Obtenir toutes les recettes de fours enregistrées

```zenscript
four.tout;
```

Retourne une liste [`<IFurnaceRecipe>`](/Vanilla/Recipes/Furnace/IFurnaceRecipe/).