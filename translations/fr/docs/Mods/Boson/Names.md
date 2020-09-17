# Noms dans Boson

Dans Minecraft, la plupart des objets sont identifiés par des noms uniques. Par exemple, les éléments utilisent leur nom de registre pour être identifiés de manière unique et il ne peut exister plus d'un élément avec le même nom de registre.

La plupart des noms dans Minecraft suivent une structure rigide, identifiée par une chaîne avec un espace de noms et un chemin séparés par un point virgule (par ex. `minecraft:iron_ingot`, où `minecraft` est l'espace de noms et `iron_ingot` est le chemin). Dans CraftTweaker, la plupart de ces noms sont représentés comme des chaînes brutes, mais au sein de Boson, cela est mal lu. En fait, l'utilisation d'une chaîne de caractères `brute` peut perturber la question de savoir si un appel de méthode attend une chaîne avec un espace de noms ou sans. Pour cette raison, Boson a séparé l'utilisation de chaînes non espacées de noms et d'espaces.

Les chaînes non espacées de noms sont représentées comme des instances de la chaîne ``, parmi toutes les API Boson. Pour plus d'informations, reportez-vous à la documentation ZenScript.

Les chaînes de noms sont représentées comme des instances de `NameSpacedString`, parmi toutes les API Boson. Pour plus d'informations sur la façon d'obtenir de telles chaînes, reportez-vous à la section suivante.

## `Chaîne de noms` Documentation
La classe `NameSpacedString` réside dans le paquet `net.thesilkminer.mc.boson.zen.naming`.

### Création d'une nouvelle instance
Il y a deux façons de créer un `NameSpacedString`: utiliser la méthode usine ou lancer une chaîne de caractères ``.

La méthode d'usine est l'approche suggérée. Étant donné qu'il s'agit d'une méthode statique, elle peut être appelée directement sur l'instance de la classe . Voici la signature de la méthode et un exemple de son utilisation:

```zenscript
function from(nameSpace en tant que chaîne?, chemin en tant que chaîne) comme NameSpacedString;
```

```zenscript
NameSpacedString.from("minecraft", "iron_ingot"); // équivalent à minecraft:iron_ingot
NameSpacedString.from(null, "iron_ingot"); // utilise l'espace de noms par défaut 'minecraft'
```

La méthode de casting repose à la place sur un cast explicite d'une chaîne `` à un `NameSpacedString` utilisant l'opérateur `comme` dans ZenScript :

```zenscript
"minecraft:iron_ingot" en tant que NameSpacedString;
```

### Propriétés
Un `NameSpacedString` fournit un accès en lecture seule à ses espaces de noms et à son chemin via ses propriétés :

| Nom de la propriété | Type de texte          | Libellé                                                                                    |
| ------------------- | ---------------------- | ------------------------------------------------------------------------------------------ |
| `Espace de noms`    | `chaîne de caractères` | Récupère la portion de l'espace de noms de la `NameSpacedString` (par exemple `minecraft`) |
| `chemin d'accès`    | `chaîne de caractères` | Récupère la portion de chemin de la `NameSpacedString` (par exemple `iron_ingot`)          |

### Méthodes

#### `asString`
Un `NameSpacedString` peut être reconverti en une chaîne de caractères normale `` en utilisant la méthode `asString`. Voici la signature de la méthode et un exemple de son utilisation:

```zenscript
la fonction asString() en tant que chaîne ;
```

```zenscript
val nss = NameSpacedString("minecraft", "iron_ingot");
println(nss.asString()); // Affiche 'minecraft:iron_ingot' dans le log
```
