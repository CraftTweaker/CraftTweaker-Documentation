# Établi

## Types de recettes

Il y a trois types de recettes pour fabriquer des tables :

- **Sans forme :** Une recette sans forme est une recette où la position des objets d'entrée dans la grille de fabrication n'a pas d'importance.
- **Formé :** Une recette formée est une recette où la position des objets doit être exacte.
- **Formé en miroir :** Une recette miroir est comme des recettes en forme mais reflète la recette le long des axes horizontaux ou verticaux.

## Ajout d'une recette

_Lorsque vous ajoutez une recette, assurez-vous que vos noms de recettes sont uniques!_

### Ajout de recettes sans forme

`craftingTable.addShapeless(recetteNom, sortie, ingrédients, recetteFunction);`

- `nom de recette` &lt;chaîne>
- `sortie` <[IItemStack](/vanilla/api/items/IItemStack)>
- `ingrédients` <[Ingrédient](/vanilla/api/items/IIngredient)[]>
- `recipeFunction` (facultatif) <[RecipeFunctionArray](/vanilla/api/recipe/RecipeFunctionArray)>

Ajoute une recette [sans forme](#recipe-types) à la table de fabrication. En tant que les recettes [sans forme](#recipe-types) ignorent la position des éléments d'entrée, l'ordre des éléments lors de la création de la recette n'a pas d'importance non plus.

Les recettes [sans forme](#recipe-types) peuvent avoir jusqu'à 9 entrées, mais ceux qui ont 4 entrées ou moins peuvent également être fabriqués dans la grille d'inventaire 2x2.

Les recettes du tableau d'artisanat peuvent aussi produire plus d'une quantité de l'objet de sortie. Ceci peut être réalisé en utilisant l'opérateur de multiplication [IItemStack](/vanilla/api/items/IItemStack/#mul) sur l'élément de sortie.

```zenscript
TableFabrication. ddShapeless("shapeless_example_1", <item:minecraft:grass>, [<item:minecraft:wheat_seeds>, <item:minecraft:dirt>]);

// Une recette sans forme peut avoir jusqu'à 9 entrées
// Cela démontre également que plus d'une sortie peut être utilisée. Dans cet exemple, 8 herbes seront produites.
craftingTable.addShapeless("shapeless_example_2", <item:minecraft:grass> * 8, [<item:minecraft:wheat_seeds>, <item:minecraft:dirt>, <item:minecraft:dirt>, <item:minecraft:dirt>, <item:minecraft:dirt>, <item:minecraft:dirt>, <item:minecraft:dirt>, <item:minecraft:dirt>, <item:minecraft:dirt>]);
```

_Voir [Utilisation des fonctions de recettes](#using-recipe-functions) pour des exemples sur la façon d'utiliser les fonctions de recettes._

### Ajout de recettes en forme et en forme miroir

`craftingTable.addShaped(recetteNom, sortie, ingrédients, recetteFunction);`

`craftingTable.addShapedMirrored(recetteNom, sortie, ingrédients, recetteFunction);`

- `nom de recette` &lt;chaîne>
- `sortie` <[IItemStack](/vanilla/api/items/IItemStack)>
- `ingrédients` <[Ingrédient](/vanilla/api/items/IIngredient)[][]>
- `recipeFunction` (facultatif) <[RecipeFunctionMatrix](/vanilla/api/recipe/RecipeFunctionMatrix)>

Ajoute une recette [en forme](#recipe-types) (ou [en miroir](#recipe-types), selon la fonction) au tableau de fabrication. L'ordre des objets lors de la création de la recette détermine la position de chaque objet dans la grille de fabrication.

Faire de la recette une recette [en miroir](#recipe-types) à la place permet plus de flexibilité au joueur lors de l'ajout des objets à la grille de fabrication.

Les recettes [en forme de](#recipe-types) et de [en miroir](#recipe-types) peuvent être fabriquées dans une grille de fabrication 2x2 (inventaire) ou 3x3.

Les recettes du tableau d'artisanat peuvent aussi produire plus d'une quantité de l'objet de sortie. Ceci peut être réalisé en utilisant l'opérateur de multiplication [IItemStack](/vanilla/api/items/IItemStack/#mul) sur l'élément de sortie.

```zenscript
// Ajout d'une recette de forme
fabriqueTable. ddShaped("shaped_example_1", <item:minecraft:arrow>, [
    [<item:minecraft:diamond>, <item:minecraft:diamond>],
    [<item:minecraft:air>, <item:minecraft:flint>],
    [<item:minecraft:air>, <item:minecraft:flint>]
]);

// Ajout d'une recette 2x2 en forme (cela peut également être fait en miroir)
craftingTable. ddShaped("shaped_example_2", <item:minecraft:diamond_axe>, [
    [<item:minecraft:diamond>, <item:minecraft:diamond>],
    [<item:minecraft:diamond>, <item:minecraft:stick>]
]);

// Ajout d'une recette miroir en forme
craftingTable. ddShapedMirrored("shaped_mirror_example_1", <item:minecraft:arrow> * 2, [
    [<item:minecraft:diamond>, <item:minecraft:diamond>],
    [<item:minecraft:air>, <item:minecraft:flint>],
    [<item:minecraft:air>, <item:minecraft:flint>]
]);
```

_Voir [Utilisation des fonctions de recettes](#using-recipe-functions) pour des exemples sur la façon d'utiliser les fonctions de recettes._

## Utiliser les fonctions de Recette

Une fonction de recette permet une sortie déterminée par le programme. Cela peut être particulièrement utile lorsque vous avez besoin de certaines informations de l'élément d'entrée, comme les dommages de l'objet ou d'autres données NBT.

_Comme les recettes façonnées et formées Mirrored sont similaires, les exemples n'incluent que les recettes formées. Vous pouvez traiter n'importe quel exemple en utilisant `addShaped` comme la même chose que `addShapedMirrored`._

### Utiliser RecipeFunctionArray dans une recette sans forme

`recipeFunction` <[RecipeFunctionArray](/vanilla/api/recipe/RecipeFunctionArray)>

`(usualOut as IItemStack, entrates as IItemStack[]) =>{};`

- `usualOut` <[IItemStack](/vanilla/api/items/IItemStack)>
- `entrées` <[IItemStack](/vanilla/api/items/IItemStack)[]> Tableau d'inputs ordonné le męme que défini dans la recette d'origine

```zenscript
importer crafttweaker.api.item.IItemStack;

craftingTable. ddShapeless("shapeless_func_example_1", <item:minecraft:diamond> * 9, [<item:minecraft:dirt>, <item:minecraft:stick>], (usualOut as IItemStack, inputs as IItemStack[]) => {
    // Vérifie si <item:minecraft:dirt> a un nom d'affichage de "bloc diamant totalement réel"
    if (entrées[0]. isplayName == "totally real diamond block") {
        // Retourne <item:minecraft:diamond> * 9
        return usualOut;
    }

    // Sinon, retourne <item:minecraft:clay> avec un nom d'affichage de "Diamant"
    retour <item:minecraft:clay>. etDisplayName("Diamant");
});
```

### Utiliser RecipeFunctionMatrix dans une recette Shaped/Mirrored

`recipeFunction` <[RecipeFunctionMatrix](/vanilla/api/recipe/RecipeFunctionMatrix)>

`(usualOut as IItemStack, entrates as IItemStack[][]) =>{};`

- `usualOut` <[IItemStack](/vanilla/api/items/IItemStack)>
- `entrées` <[IItemStack](/vanilla/api/items/IItemStack)[][]> Tableau d'inputs ordonné le męme que défini dans la recette originale. Une entrée peut être trouvée en définissant la ligne, puis la colonne (`inputs[0][1]` pour obtenir l'élément dans la première ligne, deuxième colonne).

```zenscript
importer crafttweaker.api.item.IItemStack;

craftingTable. ddShaped("shapeed_func_example_1", <item:minecraft:diamond_block>, [
        [<item:minecraft:clay_ball>, <item:minecraft:clay_ball>, <item:minecraft:clay_ball>],
        [<item:minecraft:clay_ball>, <item:minecraft:diamond>, <item:minecraft:clay_ball>],
        [<item:minecraft:clay_ball>, <item:minecraft:clay_ball>, <item:minecraft:clay_ball>]
    ], (usualOut as IItemStack, inputs as IItemStack[][]) => {
        var counter = 0;
        // Vérifie si tous les <item:minecraft:clay_ball> ont un nom d'affichage de "Diamant"
        pour la ligne dans les entrées {
            pour la recetteItem à la ligne {
                if (<item:minecraft:clay_ball>. atches(recettes) && recette. isplayName == "Diamant") {
                    // Si l'élément de recette est <item:minecraft:clay_ball> et a un nom de "Diamant" incrémentez le compteur
                    compteur++;
                }
            }
        }

        // Si nous avons 8 <item:minecraft:clay_ball> avec un nom de "Diamant"
        if (compteur == 8) {
            if (entrées[1][1]. isplayName == "Special Diamond") {
                // If <item:minecraft:diamond> has a display name of "Special Diamond"
                // Return 2 <item:minecraft:diamond_block>
                return usualOut * 2;
            } else {
                // Retourne <item:minecraft:diamond_block>
                return usualOut;
            }
        }

        // Sinon, retourner <item:minecraft:clay> avec un nom d'affichage de "Bloc Diamant"
        retour <item:minecraft:clay>. etDisplayName("Bloc Diamant");
});
```

### Utilisation avancée

#### Fonctions en tant que variable

Les fonctions de recette peuvent être assignées à une variable vous permettant de faire facilement la même fonction pour plusieurs recettes.

Sans forme:

```zenscript
Importer crafttweaker.api.item.

ItemStack; 

 var exampleShapelessRecipeVarFunction comme fonction(usualOut comme IItemStack, entrées sous la forme IItemStack[]) comme IItemStack = (habituellement) => {
    if(entrées[0]. isplayName == "bloc diamant totalement réel" ){
        return usualOut;
    }

    retour <item:minecraft:clay>. etDisplayName("Diamond");
};

// entrées[0] dans exampleShapelessRecipeVarFunction sera <item:minecraft:dirt>
craftingTable. ddShapeless("shapeless_varfunc_example_1", <item:minecraft:diamond> * 9, [<item:minecraft:dirt>, <item:minecraft:stick>], exampleShapelessRecipeVarFunction);

// entrées[0] dans exampleShapelessRecipeVarFunction sera <item:minecraft:cobblestone>
craftingTable. ddShapeless("shapeless_varfunc_example_2", <item:minecraft:diamond> * 9, [<item:minecraft:cobblestone>, <item:minecraft:dirt>], exampleShapelessRecipeVarFunction);
```

Ombré/Miroir:

```zenscript
Importer crafttweaker.api.item.

ItemStack; 

 var exampleShapedRecipeVarFunction en tant que fonction(usualOut en tant que IItemStack, entrées comme IItemStack[][]) comme IItemStack = (usualOut comme IItemStack, entrées comme IItemStack[][]) => {
    var counter = 0;
    // Vérifie si tous les <item:minecraft:clay_ball> ont un nom d'affichage de "Diamant"
    pour la ligne dans les entrées {
        pour la recetteItem dans la ligne {
            if (<item:minecraft:clay_ball>. atches(recettes) && recette. isplayName == "Diamant") {
                // Si l'élément de recette est <item:minecraft:clay_ball> et a un nom de "Diamant" incrémentez le compteur
                compteur++;
            }
        }
    }

    // Si nous avons 8 <item:minecraft:clay_ball> avec un nom de "Diamant"
    if (compteur == 8) {
        if (entrées[1][1]. isplayName == "Special Diamond") {
            // Si <item:minecraft:diamond> a un nom d'affichage de "Special Diamond"
            // Retourne 2 <item:minecraft:diamond_block>
            return usualOut * 2;
        } else {
            // Retourne <item:minecraft:diamond_block>
            return usualOut;
        }
    }

    // Sinon, retour <item:minecraft:clay> avec un nom d'affichage de "Bloc Diamant"
    retour <item:minecraft:clay>. etDisplayName("Bloc Diamant");
};

craftingTable. ddShaped("shapeed_func_example_3", <item:minecraft:diamond_block>, [
    [<item:minecraft:clay_ball>, <item:minecraft:clay_ball>, <item:minecraft:clay_ball>],
    [<item:minecraft:clay_ball>, <item:minecraft:diamond>, <item:minecraft:clay_ball>],
    [<item:minecraft:clay_ball>, <item:minecraft:clay_ball>, <item:minecraft:clay_ball>]
], exampleShapedRecipeVarFunction);

craftingTable. ddShaped("shapeed_func_example_4", <item:minecraft:diamond_block>, [
    [<item:minecraft:clay_ball>, <item:minecraft:clay_ball>, <item:minecraft:clay_ball>],
    [<item:minecraft:clay_ball>, <item:minecraft:diamond>, <item:minecraft:clay_ball>],
    [<item:minecraft:clay_ball>, <item:minecraft:clay_ball>, <item:minecraft:clay_ball>]
], exampleShapedRecipeVarFunction);
```

## Suppression d'une recette

### Supprimer une recette par nom

`craftingTable.removeByName(nom de recette);`

- `nom de recette` &lt;chaîne>

Supprime la recette qui correspond au nom fourni.

```zenscript
craftingTable.removeByName("minecraft:sugar_from_sugar_cane");
```

### Supprimer les recettes par sortie

`craftingTable.removeRecipe(output);`

- `sortie` <[IItemStack](/vanilla/api/items/IItemStack)>

Supprime toutes les recettes où le résultat de sortie est le [IItemStack](/vanilla/api/items/IItemStack) fourni.

```zenscript
craftingTable.removeRecipe(<item:minecraft:stick>);
```

### Supprimer les recettes par ID de mod

`craftingTable.removeByModid(modId);`

- `modId` &lt;chaîne>

Supprime toutes les recettes ajoutées par le mod fourni.

```zenscript
craftingTable.removeByModid("minecraft");
```

#### Exclure les recettes de la suppression de l'ID du mod

`craftingTable.removeByModid(modId, exclusionFilter);`

- `modId` &lt;chaîne>
- `filtre d'exclusion` <[Filtre de recette](/vanilla/api/recettes/recettesFilter)>
  - `name` &lt;string> Le nom de la recette courante est en cours de vérification. _L'id du mod ne sera pas inclus_

Supprime toutes les recettes ajoutées par le mod fourni. Les recettes sont exclues si le résultat de l'exclusionFilter renvoie vrai pour le nom de la recette.

```zenscript
craftingTable.removeByModid("minecraft", (name) => {
    // Vérifie si le nom de la recette correspond à "minecraft:red_bed_from_white_bed"
    return name == "red_bed_from_white_bed";
});
```

Les recettes multiples peuvent également être exclues. Une façon d'y parvenir est la suivante:

```zenscript
// Un tableau de noms de recettes en tant que chaînes de caractères
var minecraftExclusions as string[] = [
    "acacia_slab",
    "red_bed_from_white_bed",
    "sugar_from_sugar_cane"
];

table d'artisanat. emoveByModid("minecraft", (nom) => {
    retourne le nom dans minecraftExclusions;
});
```

### Supprimer les recettes par Regex

`craftingTable.removeByRegex(regex);`

- `regex` &lt;chaîne>

Supprime toutes les recettes qui correspondent à la chaîne regex.

```zenscript
// Supprime les recettes telles que "minecraft:green_carpet", "minecraft:lime_carpet_from_white_carpet", et "minecraft:white_carpet"
craftingTable.removeByRegex("minecraft:.*_carpet");
```

### Supprimer toutes les recettes

`craftingTable.removeAll();`

Supprime toutes les recettes de table d'artisanat.

```zenscript
craftingTable.removeAll();
```
