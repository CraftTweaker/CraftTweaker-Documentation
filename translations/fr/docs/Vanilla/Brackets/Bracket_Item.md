# Gestionnaire de la tranche d'article

Le gestionnaire de parenthèses vous donne accès aux Objets du jeu. Il est uniquement possible d'obtenir des objets enregistrés dans le jeu, ainsi l'ajout ou la suppression de mods peuvent causer des problèmes si vous référencez les éléments du mod dans un gestionnaire de tranches ITem.

Les éléments sont référencés dans le gestionnaire de bracket d'article par la même manière :

```zenscript
<modid:itemname>
```

La modification de `` étant la modification du mod auquel appartient l'objet, et `itemname` étant le nom de l'élément, Il est recommandé d'utiliser `/ct hand` pour obtenir le nom correct de l'objet.

Mais en général, c'est comme ça :

```zenscript
<item:modid:itemname:meta>
```

Avec l'élément `` comme première entrée, il dit spécifiquement "Ceci doit être un objet !" à CT.  
Comme vous l'avez vu ci-dessus : facultatif.  
Habituellement, vous n'aurez jamais besoin de cela, à moins de traiter plusieurs gestionnaires de parenthèses personnalisées.  
`modifier` est la modification du mod auquel appartient l'article.  
`itemname` est le nom de l'objet, utilisez /ct hand pour obtenir le nom correct.  
`meta` est la méta valeur de l'objet (valeur de dégâts, types, etc.). Ceci est un nombre entier.  
Vous pouvez également utiliser un caractère générique `*` pour traiter toutes les valeurs de méta.  
Également facultatif : Si elle est laissée en dehors, elle sera 0.

Normalement, cela retournera un objet IItemStack.  
Veuillez vous référer à [l'entrée wiki respective](/Vanilla/Items/IItemStack/) pour plus d'informations.

## Exemples

Un exemple du gestionnaire de brackets d'article serait :

```zenscript
//pomme
<minecraft:apple>

//charbon
<minecraft:coal>
<minecraft:coal:0>

//charbon de bois
<minecraft:coal:1>

//à la fois au charbon et au charbon de bois
<minecraft:coal:*>
<item:minecraft:coal:*>
```

Cela vous donnera accès à l'élément `Apple`.