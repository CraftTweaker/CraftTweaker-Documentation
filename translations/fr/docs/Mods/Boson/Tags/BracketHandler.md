# Le gestionnaire de pont

Le gestionnaire de brackets est le seul moyen d'obtenir un tag.

## Syntaxe
La syntaxe de ce gestionnaire de parenthèses est extrêmement facile à suivre, et en même temps il permet une grande variété de possibilités dans lesquelles la balise doit être retournée par le gestionnaire de crochets.

```zenscript
<tag-TYPE:NAMESPACE:NAME>
```

Dans le code ci-dessus snippet, les pièces dans toutes les majuscules sont les bits que le développeur peut personnaliser et représentent la cible qui sera retournée.

`TYPE` identifie le type [de balise](/Mods/Boson/Tags/TagType/) qui sera créé. Le type doit être l'un des mnémoniques qui identifient un type d'étiquette. Reportez-vous à la page liée pour une liste de types de balises valides.

`NAMESPACE` identifie l'espace de nom d'une balise, c'est-à-dire l'ID du mod qui possède la balise. Dans la plupart des cas, l'espace de noms sera soit `forge` ou `minecraft`, mais il est également possible d'utiliser d'autres espaces de noms, e. pour les tags spécifiques à un mod.

`NOM` représente le nom du tag qui doit être obtenu.

Reportez-vous à la section Comportement pour savoir quelle est la réponse de ce gestionnaire de parenthèses.

## Comportement
Contrairement aux autres gestionnaires de parenthèses présents dans CraftTweaker, le comportement de ce gestionnaire de parenthèses diffère selon le chargeur qui traite le script dans lequel se trouve le gestionnaire de parenthèses.

### Le chargeur de balises ``
If the bracket handler is referenced in a script loaded by the [`tags` loader](/Mods/Boson/Loaders/Tags/), it will return a [`Tag`](/Mods/Boson/Tags/Tag/). Cela permet de manipuler les éléments qui sont contenus dans la balise elle-même. Reportez-vous à la documentation de la classe pour plus d'informations.

### Le chargeur `preinit`
Si le gestionnaire d'accolades est référencé dans un script chargé par le chargeur `preinit` , il lancera une exception, puisque les balises sont chargées plus tard dans le cycle de vie de Minecraft, à savoir juste avant que les recettes soient enregistrées.

### Tous les autres chargeurs
Si le gestionnaire de parenthèses est référencé dans un script chargé par l'un des autres chargeurs, y compris le `recipeevent par défaut` un, puis il retournera un [`TagIngredient`](/Mods/Boson/Tags/TagIngredient/). Cela ne permet pas de manipuler le contenu du tag, mais permet d'utiliser la balise dans les recettes et autres invocations de méthodes qui nécessitent une instance de [`Ingrédient`](/Vanilla/Variable_Types/IIngredient/) comme paramètre.

## Exemple d'utilisation

Ce premier exemple démontre l'utilisation d'un `TagIngredient` pour ajouter une nouvelle recette. Notez l'utilisation de la balise `items` de type :

```zenscript
val tagIngredient = <tag-items:forge:ingots/iron>;
recettes.addShapelessRecipe("test", <minecraft:iron_ingot> * 3, [tagIngredient, tagIngredient, tagIngredient]);
```

Ce deuxième exemple montre la manipulation d'un `Tag` de type `blocs`:

```zenscript
#loader tags
tag val = <tag-blocks:minecraft:enderman_holdable>;
tag.add("minecraft:iron_block" en tant que NameSpacedString);
```
