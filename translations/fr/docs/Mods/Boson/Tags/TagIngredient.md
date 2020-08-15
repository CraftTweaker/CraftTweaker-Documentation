# `Ingrédient`

Un `TagIngrédient` est une implémentation `IIngrédient` qui vous permet d'utiliser un [`Tag`](/Mods/Boson/Tags/Tag/) dans les recettes. Vous ne pouvez accéder à ces données qu'à partir de l'extérieur du chargeur de balises [`` loader](/Mods/Boson/Loaders/Tags/). Pour plus d'informations concernant les balises et comment les obtenir, reportez-vous à [cette page](/Mods/Boson/Tags/Concept/).

## Détails de la classe
La classe est située dans le paquet `net.thesilkminer.mc.boson.zen.tag` , faisant `net.thesilkminer.mc.boson.zen.tag.TagIngredient` son nom entièrement qualifié pour l'importation.

## Créer une nouvelle instance
Reportez-vous à [la documentation du gestionnaire de parenthèses](/Mods/Boson/Tags/BracketHandler/).

## `Ingrédient`
Puisque `TagIngredient` est un `IIngrédient`, il fournit un accès à toutes les propriétés et méthodes de cette interface. Reportez-vous à la page de documentation de sur [`IIngrédient`](/Vanilla/Variable_Types/IIngredient/) pour plus de détails. Cette page de documentation ne décrit que les ajouts et les bizarreries qui sont spécifiques à cette classe.

## Propriétés
Un `TagIngredient` fournit un accès en lecture seule à un ensemble supplémentaire de propriétés, comme décrit dans le tableau suivant :

| Nom de la propriété | Type de texte                                       | Libellé                                                                           |
| ------------------- | --------------------------------------------------- | --------------------------------------------------------------------------------- |
| `tagName`           | [`Chaîne de noms SpacedString`](/Mods/Boson/Names/) | Nom qui identifie de manière unique l'étiquette à laquelle se réfère ce composant |

## Exemple

```zenscript
val anyLingot = <tag-items:forge:ingots>;
valez n'importe quelle Laine = <tag-items:minecraft:wool>;

recettes.addShaped("laine d'infused_ingot", <contenttweaker:wool_infused_ingot>, [[anyIngot, anyWool], [anyWool, anyIngot]]);
```
