# Four à four

Le four est un four multibloc utilisé pour le traitement rapide des blocs de construction, qui peuvent être acquis en fondant quelque chose dans un four.

## Paquet
`mods.atum.Kiln;`

## Liste noire

Les recettes de fours sont basées sur les recettes de fours à la vanille, en plus de construire des blocs. La liste noire est un moyen pour vous de minimiser davantage les recettes saisies dans le four à vanille.

`mods.atum.Kiln.blacklist(id);`

- `id` Un identifiant d'espace de noms pour le bloc/élément d'entrée qui doit être mis en liste noire.

Supprime le(s) recette(s) avec l'objet/bloc spécifié dans les recettes que le four tirera du four à vanille

```zenscript
mods.atum.Kiln.blacklist("minecraft:cobblestone");
```

## Ajout d'une recette

`mods.atum.Kiln.addRecipe(entrée, sortie, expérience, @cookTime);`

- `input` [IItemStack](/vanilla/api/items/IItemStack)
- `output` [IItemStack](/vanilla/api/items/IItemStack)
- `expérience` Nombre flottant
- `cookTime` Nombre entier (si laissé vide, il sera par défaut à 75)

Ajoute une recette avec l'entrée spécifiée, sortie, expérience & temps de cuisson

```zenscript
mods.atum.Kiln.addRecipe(<item:atum:dirty_bone_block>, <item:atum:alabaster>, 0.2);
```

## Suppression d'une recette

Les méthodes d'enlèvement ne fonctionnent que pour les recettes ajoutées spécifiquement pour le four par Atum (Ou d'autres mods) Par défaut dans Atum, cela ne sera que la recette de bloc Marl to White Ceramic Tile Block. Si vous souhaitez supprimer autre chose, vous êtes probablement à la recherche de la liste noire (documentation ci-dessus)

### Supprimer les recettes par sortie

`mods.atum.Kiln.removeRecipeByOutput(output);`

- `output` [IItemStack](/vanilla/api/items/IItemStack)

Supprime toutes les recettes où le résultat de sortie est le [IItemStack](/vanilla/api/items/IItemStack) fourni.

```zenscript
mods.atum.Kiln.removeRecipeByOutput(<item:atum:marl>);
```

### Supprimer les recettes par sortie & Entrée

`mods.atum.Kiln.removeRecipeByOutputInput(sortie, entrée);`

- `output` [IItemStack](/vanilla/api/items/IItemStack)
- `input` [IItemStack](/vanilla/api/items/IItemStack)

Supprime la recette spécifique, avec la sortie & entrée spécifiée

```zenscript
mods.atum.Kiln.removeRecipeByOutputInput(<item:atum:cermic_white>, <item:atum:marl>);
```

### Autres méthodes de suppression

Voir [Gestionnaires de recettes](/recipes/recipe_managers) pour d'autres façons de supprimer les recettes de roue tournante
