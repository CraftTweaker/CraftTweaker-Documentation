# `Classe`

Une classe `` identifie une seule instance de type qui est exposée à ZenScript. Almost everything in ZenScript is, in fact, an instance of a class, be it an `IItemStack` (which is an instance of that class) or an array of strings (which is an instance of `string[]`).

## Détails de la classe
La classe est située dans le paquet `zenscriptx.reflect` , faisant de `zenscriptx.reflect.Class` le nom complet pour l'importation.

## Créer une nouvelle instance
La seule façon possible de créer une nouvelle instance de la classe `` est de passer par l'une des deux méthodes statiques, qui prennent soit le nom de la classe soit un objet à inspecter. Le snippe qui suit montre les signatures des deux méthodes qui peuvent être utilisées :

```zenscript
function byName(name as string) as Class?;
function from(instance as any) as Class?;
```

Les deux méthodes sont autorisées à retourner `null` (comme montré par le `?` à la fin du type) car il y a la possibilité pour certaines classes de ne pas avoir d'équivalent ZenScript ou sont littéralement incapables d'être représentées comme des instances de `Classe`.

Voici quelques exemples d'utilisation des deux méthodes d'usine:

```zenscript
Class.byName("crafttweaker.item.IItemStack"); # retourne une classe qui représente la classe
IItemStack. rom(<blockstate:minecraft:pumpkin>); # retourne une classe qui représente la classe IBlockState
. yName("123"); # retourne null car aucune classe avec ce nom n'existe (ou ne peut exister)
```

## Propriétés
Une classe `` fournit un accès en lecture seule à un certain ensemble de propriétés, comme décrit dans le tableau suivant :

| Nom de la propriété | Type de texte          | Libellé                                                                                                                                           |
| ------------------- | ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| `simpleName`        | `chaîne de caractères` | Nom "Shortest" qui peut être utilisé pour se référer à la classe (i.e. `IItemStack` pour `crafttweaker. tem.IItemStack`, `chaîne` pour `chaîne`)  |
| `Nom qualifié`      | `chaîne de caractères` | Nom complet qui identifie de manière unique cette classe dans l'environnement ZenScript (c'est-à-dire `crafttweaker.item.IItemStack` ou `string`) |

## Méthodes
`La classe` fournit également un accès à une méthode unique qui permet la conversion en l'équivalent "natif" (reportez-vous à [`Classe native`](/Mods/Boson/Reflection/NativeClass/) pour plus d'informations). La signature de la méthode est la suivante:

```zenscript
function toNativeClass() en tant que classe Native?;
```

La méthode peut renvoyer `null` parce que tous les types ZenScript ne peuvent pas avoir un équivalent natif, e.g. certains tableaux associatifs peuvent ne pas être parfaitement représentés dans un environnement natif, nécessitant un peu de manging.
