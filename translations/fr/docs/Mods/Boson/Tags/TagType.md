# `TagType`

Un `TagType` identifie le type d'élément qui peut être stocké dans une balise [`donnée`](/Mods/Boson/Tags/Tag/). Il héberge également des données supplémentaires en lecture seule qui identifient un certain ensemble de mnémoniques qui aident à identifier un type d'une manière plus humaine.

## Détails de la classe
La classe est située dans le paquet `net.thesilkminer.mc.boson.zen.tag` , faisant `net.thesilkminer.mc.boson.zen.tag.TagType` son nom complet pour l'importation.

## Créer une nouvelle instance
Il n'est pas possible de créer une nouvelle instance d'un type de balise brute à partir de CraftTweaker. Il est néanmoins possible d'obtenir le type d'une balise `donnée` via ses propriétés. Reportez-vous à la documentation de [ `Tag`](/Mods/Boson/Tags/Tag/) pour plus d'informations .

### Instances connues `TagType`
Boson par défaut crée déjà un certain ensemble de types de tags, qui peut être utilisé dans les gestionnaires de crochets [](/Mods/Boson/Tags/BracketHandler/) pour obtenir des instances de `Tag`s ou `TagIngredient`s. Ces mnémoniques sont écrits dans le tableau qui suit :

| Mnémonique | Objets stockés                                     |
| ---------- | -------------------------------------------------- |
| `blocs`    | [`État de l'IBlock`](/Vanilla/Blocks/IBlockState/) |
| `fluides`  | (non accessible via CraftTweaker)                  |
| `Eléments` | [`IItemStack`](/Vanilla/Items/IItemStack/)         |

## Propriétés
Un `TagType` fournit un accès en lecture seule à un certain ensemble de propriétés, comme décrit dans le tableau suivant :

| Nom de la propriété      | Type de texte                                                          | Libellé                                                                                                   |
| ------------------------ | ---------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `directoryName`          | `chaîne de caractères`                                                 | Nom du répertoire où les tags JSONs sont dans un pack de données                                          |
| `Nom`                    | `chaîne de caractères`                                                 | Mnémonique qui identifie le type de balise donné ; utilisé dans les gestionnaires des crochets de balises |
| `classType`              | [`Classe`](/Mods/Boson/Reflection/Class/)                              | Type d'objets stockés dans le tag                                                                         |
| `Fonction de conversion` | [`Fonction<NameSpacedString, any>`](/Mods/Boson/Functions/List/) | Convertit les noms en éléments de balises                                                                 |
