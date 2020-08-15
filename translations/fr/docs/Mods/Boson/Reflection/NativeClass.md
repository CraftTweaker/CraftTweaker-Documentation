# `Classe native`

Une `NativeClass` identifie l'instance d'une classe de l'environnement backend qui est derrière ZenScript. Dans le cas de CraftTweaker, `NativeClass` représente donc une classe Java.

## Détails de la classe
La classe est située dans le paquet `zenscriptx.reflect` , faisant de `zenscriptx.reflect.NativeClass` le nom complet pour l'importation.

## Créer une nouvelle instance
La seule façon possible de créer une nouvelle instance de `NativeClass` est de passer par l'une des deux méthodes statiques, qui prennent soit le nom de la classe soit un objet à inspecter. Le snippe qui suit montre les signatures des deux méthodes qui peuvent être utilisées :

```zenscript
function byName(name as string) as NativeClass?;
function fromZen(instance as any) as NativeClass?;
```

Les deux méthodes sont autorisées à retourner `null` (comme montré par le `?` à la fin du type) car il y a la possibilité que certaines classes n'existent pas ou n'aient pas de contrepartie d'arrière-plan. En fait, certains tableaux associatifs particuliers peuvent être non représentables dans le backend et nécessitent un peu de mangling pour être utilisés correctement.

Voici quelques exemples d'utilisation des deux méthodes d'usine:

```zenscript
NativeClass.byName("crafttweaker.api.item.IItemStack"); # retourne la classe Native avec le nom donné
NativeClass. romZen(<blockstate:minecraft:pumpkin>); # retourne la classe NativeClass qui correspond à la classe IBlockState ZenScript
NativeClass. yName("123"); # retourne null car aucune classe native avec ce nom ne peut exister
```

## Propriétés
Une `NativeClass` fournit un accès en lecture seule à un certain ensemble de propriétés, comme décrit dans le tableau suivant :

| Nom de la propriété | Type de texte          | Libellé                                                                                                                                                        |
| ------------------- | ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `simpleName`        | `chaîne de caractères` | Nom "Shortest" qui peut être utilisé pour se référer à la classe (i.e. `IItemStack` pour `crafttweaker. pi.item.IItemStack`, `String` pour `java.lang.String`) |
| `Nom qualifié`      | `chaîne de caractères` | Nom complet qui identifie de manière unique cette classe dans l'environnement backend (c'est-à-dire `crafttweaker.api.item.IItemStack` ou `java.lang.String`)  |

## Méthodes
`NativeClass` fournit également un accès à une méthode unique qui permet de convertir en l'équivalent ZenScript (reportez-vous à la [`Classe`](/Mods/Boson/Reflection/Class/) pour plus d'informations). La signature de la méthode est la suivante:

```zenscript
function toClass() en tant que classe ?;
```

La méthode peut retourner `null` car toutes les classes natives ne peuvent pas avoir une représentation dans ZenScript. En fait, il y a certaines parties du backend qui ne sont pas exposées aux utilisateurs de ZenScript, comme `org.apache.commons. ang3.BitField`, qui ne peut donc pas être représenté via un objet ZenScript `Classe`.
