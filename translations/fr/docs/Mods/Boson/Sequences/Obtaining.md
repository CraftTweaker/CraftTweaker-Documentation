# Obtenir `Séquence`s

## Aperçu
Obtenir une `Séquence` est un processus en deux étapes : il faut d'abord obtenir une référence à un constructeur de séquence de type correct, puis appeler le constructeur en passant soit une liste d'éléments du type donné, soit un tableau prêt à l'emploi du type donné terminera le processus de construction.

Certaines intégrations CraftTweaker peuvent également fournir un moyen d'obtenir une `Séquence` soit directement soit via une méthode. Dans ce cas , il n'est pas nécessaire de faire une invocation de constructeur. D'un autre côté, le type générique ne sera pas spécifié explicitement nécessitant que l'utilisateur fasse une note mentale du type de retour.

## Étape 1 : Le constructeur
Référencement d'un constructeur `Séquence` se fait via un gestionnaire spécial de parenthèses, qui a la syntaxe suivante :

```zenscript
<sequence:CLASSNAME>
```

Dans le snippet ci-dessus, `CLASSNAME` représente soit le nom court ou le nom entièrement qualifié de la classe pour laquelle cette séquence sera générique. En des mots plus simples, cela définira quel type d'éléments la séquence sera en mesure de stocker lorsque le constructeur sera appelé.

Prenons les deux exemples suivants :

```zenscript
<sequence:IItemStack> # 1
<sequence:crafttweaker.item.IIngredient> # 2
```

L'expression de séquence marquée avec `# 1` retournera une référence à un constructeur pour une séquence qui pourra contenir des instances de `IItemStack`. Notez que cela nécessite que la classe soit importée dans le script courant pour fonctionner.

L'expression de séquence marquée avec `# 2` retournera une référence à un constructeur pour une séquence qui sera capable de contenir n'importe quel type d' `Ingrédient`, ce qui signifie qu'il acceptera `IItemStack`s, mais aussi `IOreDictEntr`ies ou tout autre implémentation personnalisée `Ingrédient`.

**IMPORTANT :** Ce type initial n'influencera que le type de séquence courant. Il est toujours possible de changer le type stocké plus tard dans cette séquence via n'importe quel appel `Séquence`-type convertissant des appels, comme `carte`. Plus d'informations sont disponibles dans la documentation de la classe [](/Mods/Boson/Sequences/Docs/).

## Étape 2 : Invoquer le constructeur
Puisque les gestionnaires de parenthèses n'invoquent pas le constructeur, mais simplement le référence, il est maintenant nécessaire d'appeler directement le constructeur . Cela peut être fait via une syntaxe normale d'invocation, sauf que cela se fait par un gestionnaire de crochets et non par un nom de méthode.

Le constructeur d'une séquence est un vararg, ce qui signifie qu'il peut accepter n'importe quel nombre d'arguments, aussi longtemps qu'il s'agit de tous les types génériques donnés dans la référence du constructeur. Par exemple, le gestionnaire de parenthèses `<sequence:IItemStack>` ne pourra pas accepter un `<ore:ingotCopper>` dans son constructeur, car un `IOreDictEntry` n'est pas un `IItemStack`.

Il est possible de ne fournir aucun argument au constructeur, auquel cas la séquence sera vide.

Il est également possible de fournir un tableau lui-même ou une référence à un tableau, sous la forme d'une méthode ou d'une variable. Dans ce cas, le tableau ne sera accepté que si le type correspond à `CLASSNAME[]`, où `CLASSNAME` est le nom du type d'objets dans la séquence. Notez que ce comportement **peut nécessiter** une option expérimentale pour être activée. Reportez-vous au Préprocesseur de marqueurs expérimentaux [](/Mods/Boson/Preprocessor/Exp/) pour plus d'informations.

Ce qui suit est un snippet de code qui montre comment ce qui précède est appliqué en code.

```zenscript
val emptySequence = <sequence:string>();
val sequenceWithStacks = <sequence:IItemStack>(<minecraft:iron_ingot>, <minecraft:gold_nugget>, <minecraft:apple>);
Séquence val des Recettes = <sequence:ICraftingRecipe>(recettes. ll); # requiert que -Esao soit spécifié
```

## Et ensuite?
Maintenant que la `Séquence` a été construite, reportez-vous à [la documentation de la classe](/Mods/Boson/Sequences/Docs/) pour une liste des méthodes supportées.
