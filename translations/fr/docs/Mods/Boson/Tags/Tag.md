# `Étiquette`

Un `Tag` est la représentation objet de ce qui est stocké dans un Tag en jeu. Vous ne pouvez accéder à ces données qu'à partir de dans le chargeur de balises [``](/Mods/Boson/Loaders/Tags/). Pour plus d'informations concernant les balises et comment les obtenir, reportez-vous à à [cette page](/Mods/Boson/Tags/Concept/).

## Détails de la classe
La classe est située dans le paquet `net.thesilkminer.mc.boson.zen.tag` , faisant `net.thesilkminer.mc.boson.zen.Tag` son nom entièrement qualifié pour l'importation.

## Créer une nouvelle instance
Reportez-vous à [la documentation du gestionnaire de parenthèses](/Mods/Boson/Tags/BracketHandler/).

## Propriétés
Un `Tag` fournit un accès en lecture seule à un certain ensemble de propriétés, comme décrit dans le tableau suivant :

| Nom de la propriété | Type de texte                                       | Libellé                                                             |
| ------------------- | --------------------------------------------------- | ------------------------------------------------------------------- |
| `Nom`               | [`Chaîne de noms SpacedString`](/Mods/Boson/Names/) | Nom qui identifie de manière unique ce tag                          |
| `Type de type`      | [`TagType`](/Mods/Boson/Tags/TagType/)              | Le type de ce tag                                                   |
| `Éléments`          | `[T]` (où `T` est un type générique)                | Une liste en lecture seule des éléments actuellement dans la balise |

## Méthodes

### Ajouter
L'ajout d'éléments à une balise peut être fait via un triplet de méthodes, dont les signatures sont dans le snippet qui suit:

```zenscript
function add(elements... as NameSpacedString) as void;
function addAll(elements as any[]) as void;
function addFrom(other as Tag) as void;
```

`add` est une soi-disant "méthode vararg", signifiant qu'il peut accepter autant d'arguments que souhaité, à condition qu'ils soient tous du même type . . `NameSpacedString`s. Cela vous permet de spécifier le nom du registre de l'élément que vous voulez ajouter à la balise et l'implémentation de la balise elle-même tentera de convertir le nom donné en l'objet réel.

`addAll`, d'autre part, accepte une table d'éléments et tente de les ajouter tous à la balise donnée. La table est marquée comme `any[]` en raison d'un manque de support générique sur cette entrée de méthode. Néanmoins, en essayant d'ajouter des éléments non compatibles à une balise (par exemple, ajouter des blocs à une balise de type item) entraînera la réalisation d'une opération de non-opération.

`addFrom` ajoute tout le contenu d'une balise à l'autre via une référence de balise, ce qui signifie que toute modification effectuée à la seconde balise arrive également à la première. Notez que cette opération ne réussit que si les types de balises correspondent, sinon une opération no-op sera effectuée.

Voici une liste d'exemples:

```zenscript
balise val = <tag-items:forge:ingots/iron>;

# ajouter des éléments via la balise
nom de registre. dd("minecraft:iron_ingot" en tant que NameSpacedString, "thermalfoundation:iron_ingot" en tant que NameSpacedString);

# ajoute des éléments via leur balise actuelle
. ddAll([<buildcraft:iron_ingot>] comme IItemStack[]);

# ajouter une autre balise via une référence de balise
tag.addFrom(<tag-items:customtag:other_iron_ingots>);
```

### Remplacement
Les éléments d'une balise peuvent être remplacés pleinement, ce qui signifie que tous les contenus sont d'abord effacés, alors les éléments donnés sont ajoutés au contenu de la balise. Ceci est également accompli via un triplet de méthodes, dont les signatures sont dans le snippet que suit :

```zenscript
fonction replace(elements... as NameSpacedString) as void;
function replaceAll(elements as any[]) as void;
function replaceWith(other as Tag) as void;
```

`remplacer` est une soi-disant "méthode vararg", signifiant qu'il peut accepter autant d'arguments que souhaité, à condition qu'ils soient tous du même type, i. . `NameSpacedString`s. Cela vous permet de spécifier le nom de registre de l'élément que vous voulez utiliser pour remplacer le contenu de la balise et l'implémentation de la balise elle-même essaiera de convertir le nom donné en l'objet réel.

`remplacer tous les`, par contre, accepte un tableau d'éléments et tente de remplacer le contenu de la balise donnée par le tableau. Le tableau est marqué comme `any[]` en raison d'un manque de support générique sur cette entrée de méthode. Néanmoins, en essayant de passer des éléments non compatibles à une balise (par exemple, à une balise de type item-only) entraînera une opération de "no-op" effectuée par .

`remplacer avec` remplace le contenu de la balise donnée par une référence de balise à l'autre, ce qui signifie que toute modification effectuée à la seconde balise arrive également à la première. Notez que cette opération ne réussit que si les types de balises correspondent sinon une opération "no-op" sera effectuée.

Voici une liste d'exemples:

```zenscript
balise val = <tag-items:forge:ingots/iron>;

# remplace les éléments via la balise
nom de registre. eplace("minecraft:iron_ingot" en tant que NameSpacedString, "thermalfoundation:iron_ingot" en tant que NameSpacedString);

# remplace les éléments via leur balise actuelle
. eplaceAll([<buildcraft:iron_ingot>] comme IItemStack[]);

# remplacer une autre balise via une balise de référence
tag.replaceWith(<tag-items:customtag:other_iron_ingots>);
```

### Retirer
La suppression d'éléments d'une balise peut être faite via un triplet de méthodes, dont les signatures sont dans le snippet qui suit :

```zenscript
function remove(elements... as NameSpacedString) as void;
function removeAll(elements as any[]) as void;
function removeFrom(other as Tag) as void;
```

`remove` est une soi-disant "méthode vararg", signifiant qu'il peut accepter autant d'arguments que souhaité, à condition qu'ils soient tous du même type, i. . `NameSpacedString`s. Cela vous permet de spécifier le nom du registre de l'élément que vous voulez supprimer de la balise et l'implémentation de la balise elle-même tentera de convertir le nom donné en l'objet réel.

`supprimerToutes les`, d'autre part, accepte une table d'éléments et tente de les supprimer toutes de la balise donnée. La table est marquée comme `any[]` à cause d'un manque de support générique sur cette entrée de méthode. Néanmoins, en essayant de supprimer éléments non compatibles d'une balise (par exemple, la suppression de blocs d'une balise de type item) entraînera la réalisation d'une opération d'interruption .

`enleverDe` supprime le second tag de la liste de Références de Tag du premier tag. Cela supprimera donc les éléments que le second tag porte de la liste des premiers, bien que le second tag n'aura pas son contenu effacé. Notez que cette opération ne réussit que si les types de balises correspondent, sinon une opération "no-op" sera effectuée.

Voici une liste d'exemples:

```zenscript
balise val = <tag-items:forge:ingots/iron>;

# supprime les éléments via la balise
du nom du registre. emove("minecraft:iron_ingot" en tant que NameSpacedString, "thermalfoundation:iron_ingot" en tant que NameSpacedString);

# supprimer des éléments via leur balise actuelle
. emoveAll([<buildcraft:iron_ingot>] comme IItemStack[]);

# supprimer une référence de balise
tag.removeFrom(<tag-items:customtag:other_iron_ingots>);
```

### Nettoyage
Vous pouvez également effacer le contenu d'un tag par une seule méthode. Cela supprimera tous les éléments et toutes les références d'étiquette stockées dans la balise et équivaut à remplacer une balise par un contenu vide. Cela peut être fait via une méthode qui a la signature suivante :

```zenscript
function clear() comme annulé;
```

Voici un exemple :

```zenscript
<tag-items:forge:ingots>.clear();
```

## Support Supplémentaire
Les Tags offrent également un support supplémentaire pour certaines fonctionnalités de ZenScript.

### Requêtes en cours
En utilisant la syntaxe `a` , il est possible de demander si une balise contient ou non un objet donné. Un tag peut en fait être vu comme une collection d'éléments :

```zenscript
val isContained = TAG a ELEMENT;
```

`TAG` représente l'instance de la balise à interroger. `ELEMENT` représente l'instance de l'élément que vous pourriez vouloir interroger ŕ vérifier si elle est contenue dans la balise ou non.

Notez que si les balises prennent en charge la requête de n'importe quoi (il accepte effectivement `n'importe quel`), en utilisant un élément qui n'est pas du type qui est stocké dans la balise n'a pas d'effet et va simplement court-circuiter l'évaluation à `faux`.

### Itération en cours
Les tags prennent également en charge l'itération via une boucle itérative pour la boucle, en utilisant une boucle `normale pour`. De cette façon, la nécessité d'interroger les éléments via un appel aux éléments `` est éliminée, ce qui entraîne un code plus propre.

Puisque les balises sont effectivement un ensemble, l'ordre d'itération n'est pas préservé et peut différer entre les différentes exécutions de l'itérateur . Pour cette raison, seuls les itérateurs à un seul élément sont supportés (c'est-à-dire que vous ne pouvez pas aussi demander un index d'itération lors de l'itération).

La syntaxe à utiliser est la suivante:

```zenscript
pour VARNAME dans TAG {
}
```

`VARNAME` représente le nom de la variable qui sera mise à jour à chaque boucle. `TAG` est l'instance de tag sur laquelle boucler.

## Surcharge de l'opérateur
Les balises fournissent également une certaine surcharge des opérateurs normaux de ZenScript, afin que certaines opérations puissent être faites facilement et avec caractères de moins. Chaque section héberge une table de certaines surcharges d'opérateur qui sont disponibles, avec la signification correspondante. Dans toutes les tables, `TAG` représente l'instance de balise cible, alors que `ARGx` représente l'argument *x*-th que doit être fourni.

### Opérateurs unitaires
Les opérateurs unitaires sont des opérateurs qui sont appliqués à la balise elle-même et ne prennent aucun argument.

| Opérateur | Syntaxe | Méthode équivalente | Notes |
| --------- | ------- | ------------------- | ----- |
| `-`       | `-TAG`  | `effacer`           | \-   |

### Opérateurs binaires
Les opérateurs binaires sont des opérateurs infixes qui sont appliqués entre la balise et un argument. Les opérateurs sont listés ici par ordre de priorité (plus haut signifie qu'il sera appliqué en premier).

**IMPORTANT**: sauf indication contraire, tous les opérateurs **mutent** le tag qui est passé à la surcharge, ce qui signifie que ils changent leur contenu. Prenons l'exemple suivant :

```zenscript
balise val = <tag-items:forge:ingots>;
tag & [<minecraft:iron_ingot>] comme IItemStack[];
```

À la fin de ce snippet, le contenu de la balise `` aura changé selon les règles de l'opérateur. Cela ne fait **pas** créer un nouveau tag, ni ne retourne la valeur du tag original. Le snippet de code suivant n'est en fait pas valide :

```zenscript
balise val = <tag-items:forge:ingots>;
# PAS VALIDE : ERREUR DE COMPILATION RESPONSABLE
tag = tag & [<minecraft:iron_ingot>] as IItemStack[];
```

| Opérateur | Type d'argument                                     | Syntaxe          | Méthode équivalente | Notes                                                                                    |
| --------- | --------------------------------------------------- | ---------------- | ------------------- | ---------------------------------------------------------------------------------------- |
| `+`       | `Étiquette`                                         | `TAG + ARG1`     | `ajouter depuis`    | \-                                                                                      |
| `+`       | `n'importe qui[]`                                   | `TAG + ARG1`     | `addAll`            | Le type de tableau doit être le même que le contenu du tag                               |
| `+`       | [`Chaîne de noms SpacedString`](/Mods/Boson/Names/) | `TAG + ARG1`     | `Ajouter`           | La surcharge n'accepte qu'un seul argument                                               |
| `+`       | `n'importe quel`                                    | `TAG + ARG1`     | `addAll`            | Shorthand pour un seul élément : les mêmes règles que la version du tableau s'appliquent |
| `~`       | `Étiquette`                                         | `TAG ~ ARG1`     | `ajouter depuis`    | \-                                                                                      |
| `~`       | `n'importe qui[]`                                   | `TAG ~ ARG1`     | `addAll`            | Le type de tableau doit être le même que le contenu du tag                               |
| `~`       | [`Chaîne de noms SpacedString`](/Mods/Boson/Names/) | `TAG ~ ARG1`     | `Ajouter`           | La surcharge n'accepte qu'un seul argument                                               |
| `~`       | `n'importe quel`                                    | `TAG ~ ARG1`     | `addAll`            | Shorthand pour un seul élément : les mêmes règles que la version du tableau s'appliquent |
| `&`   | `Étiquette`                                         | `TAG & ARG1` | `ajouter depuis`    | \-                                                                                      |
| `&`   | `n'importe qui[]`                                   | `TAG & ARG1` | `addAll`            | Le type de tableau doit être le même que le contenu du tag                               |
| `&`   | [`Chaîne de noms SpacedString`](/Mods/Boson/Names/) | `TAG & ARG1` | `Ajouter`           | La surcharge n'accepte qu'un seul argument                                               |
| `&`   | `n'importe quel`                                    | `TAG & ARG1` | `addAll`            | Shorthand pour un seul élément : les mêmes règles que la version du tableau s'appliquent |
| `-`       | `Étiquette`                                         | `TAG - ARG1`     | `Retirer de`        | \-                                                                                      |
| `-`       | `n'importe qui[]`                                   | `TAG - ARG1`     | `Retirer tout`      | Le type de tableau doit être le même que le contenu du tag                               |
| `-`       | [`Chaîne de noms SpacedString`](/Mods/Boson/Names/) | `TAG - ARG1`     | `Enlever`           | La surcharge n'accepte qu'un seul argument                                               |
| `-`       | `n'importe quel`                                    | `TAG - ARG1`     | `Retirer tout`      | Shorthand pour un seul élément : les mêmes règles que la version du tableau s'appliquent |
| `==`      | `Étiquette`                                         | `TAG == ARG1`    | \-                 | Agit en tant que vérification d'égalité, contenu correspondant ; ne mute pas `TAG`       |
| `()`      | \-                                                 | `TAG()`          | `Éléments`          | \-                                                                                      |
