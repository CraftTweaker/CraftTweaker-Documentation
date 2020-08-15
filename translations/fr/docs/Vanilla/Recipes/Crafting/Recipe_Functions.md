# Fonctions de Recette

# Fonction de recette

Certaines recettes prennent en charge des fonctions personnalisées pour déterminer leur sortie par programme.  
Cela peut être particulièrement utile si vous avez besoin de certaines informations de l'élément d'entrée, comme la valeur de dommage.  
Il s'agit d'une soi-disant fonction IRecipeFunction.

## Exemple de réparation d'une pioche

```zenscript
val diaPick = <minecraft:diamond_pickaxe>;

//nous commençons normal, en écrivant
recipes.addShapeless("pickrepair",diaPick,

//suivi du tableau d'entrée. Un changement cependant - nous marquons la pioche diamant, donc nous pouvons l'utiliser dans la fonction plus tard
[diaPick. nyDamage().marked("mark"),<minecraft:diamond>],

//maintenant nous commençons à déclarer la fonction. 
//Il faut 3 paramètres, un pour la sortie, un pour les entrées et un pour les informations de fabrication. 
//Nous n'aurons besoin que du paramètre d'entrée.
function(out, ins, cInfo){

    //maintenant nous retournons la pioche avec soit 0 DMG soit les dégâts courants -10, ce qui est plus élevé. Cela vise à prévenir les dommages négatifs.
    retourne ins.mark.withDamage(max(0,ins.mark.damage - 10));
}, 
//Nous n'avons pas besoin d'une recetteAction ici donc il suffit de la définir à null
null);
```

## Comment configurer une fonction IRecipection

Comme vous avez pu le voir dans l'exemple ci-dessus, il y a une fonction avec 3 paramètres :  
Vous n'avez pas à les appeler de cette façon, ils peuvent avoir n'importe quel nom.

`out` est la sortie de la recette et un objet IItemStack.  
`ins` est une carte avec les marques comme des clés et les entrées marquées comme des valeurs.  
`cInfo` est un objet ICraftingInfo

La fonction doit retourner la IItemStack que la recette doit afficher.

Vous pouvez invalider une recette en renvoyant `null` pour qu'elle ne puisse pas être fabriquée sous certaines conditions.

Modifier les `ins` ici est une mauvaise idée, cette fonction déclenche pour chaque changement dans la grille de fabrication, pas quand elle tire réellement le résultat.

# format@@0 IRecipeAction

Mais CraftTweaker va au-delà du simple calcul de vos sorties en utilisant des fonctions.  
Avec une fonction IRecipeAction, vous pouvez également déterminer ce qui doit se passer quand un utilisateur fabrique l'objet.  
Un objet IRecipeAction vient après une fonction IRecipeFunction!

```zenscript
val stone = <minecraft:stone>;

recettes.addShapeless("experiencestone",stone,[stone,stone,stone,stone,stone],
//IrecipeFunction, retourne simplement la sortie, cela ne nous intéresse pas cette fois.
function(out,ins,cInfo){
    return out;
},
//IRecipeAction
function(out,cInfo,player){
    player.xp += 1;
});
```

Cela donne au joueur qui exécute la recette 1 niveau à chaque fois que l'artisanat est terminé. Encore une fois, nous avons une fonction avec 3 paramètres :  
`out` est la sortie de la recette et un objet IItemStack.  
`cInfo` est un objet ICraftingInfo  
`joueur` est le joueur qui effectue la recette et un objet [IPlayer](/Vanilla/Players/IPlayer/).