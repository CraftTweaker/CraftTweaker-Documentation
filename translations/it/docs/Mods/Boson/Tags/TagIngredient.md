# `TagIngrediente`

Un `TagIngredient` è un'implementazione `IIngrediente` che consente di utilizzare un [`Tag`](/Mods/Boson/Tags/Tag/) nelle ricette. Puoi accedere a questi dati solo al di fuori dei tag [`` loader](/Mods/Boson/Loaders/Tags/). Per ulteriori informazioni sui tag e su come ottenerli, fai riferimento a [questa pagina](/Mods/Boson/Tags/Concept/).

## Dettagli Classe
La classe è situata nel pacchetto `net.thesilkminer.mc.boson.zen.tag` , rendendo `net.thesilkminer.mc.boson.zen.tag.TagIngredient` il suo nome completamente qualificato per l'importazione.

## Creare una nuova istanza
Fare riferimento a [la documentazione del gestore di parentesi](/Mods/Boson/Tags/BracketHandler/).

## `IIngrediente`
Dal momento che `TagIngredient` è un `IIngrediente`, fornisce l'accesso a tutte le proprietà e i metodi di quell'interfaccia. Consultare alla pagina di documentazione di [`IIngrediente`](/Vanilla/Variable_Types/IIngredient/) per maggiori dettagli. Questa pagina di documentazione delinea solo aggiunte e stranezze che sono particolari di questa classe.

## Proprietà
Un `TagIngredient` fornisce accesso in sola lettura a un insieme di proprietà aggiuntive, come indicato nella tabella seguente:

| Nome Proprietà | Tipo                                     | Descrizione                                                                   |
| -------------- | ---------------------------------------- | ----------------------------------------------------------------------------- |
| `tagName`      | [`NameSpacedString`](/Mods/Boson/Names/) | Nome che identifica univocamente il tag a cui si riferisce questo ingrediente |

## Esempio

```zenscript
val anyIngot = <tag-items:forge:ingots>;
val anyWool = <tag-items:minecraft:wool>;

recipes.addShaped("wool_infused_ingot", <contenttweaker:wool_infused_ingot>, [[anyIngot, anyWool], [anyWool, anyIngot]]);
```
