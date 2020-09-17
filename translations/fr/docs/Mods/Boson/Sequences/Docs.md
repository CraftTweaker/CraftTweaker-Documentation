# Documentation de classe

Une `séquence` est une liste d'éléments qui peuvent être exploités et sont évalués paresseusement. Reportez-vous à la page [Concept](/Mods/Boson/Sequences/Concept/) pour plus d'informations.

## Détails de la classe
Faire partie du projet ZenScriptX, le nom pleinement qualifié pour la classe est `zenscriptx.sequence.Sequence`.

## Créer une nouvelle instance
Reportez-vous à la page [Obtention des séquences](/Mods/Boson/Sequences/Obtaining/).

## Méthodes
Les différentes méthodes disponibles dans une séquence peuvent être divisées en quatre catégories :

- Méthodes de terminal
- Méthodes de paresseux changeantes
- Méthodes paresseux intermédiaires
- Méthodes intermédiaires

Chaque catégorie a son propre comportement et ses propres bizarreries, qui sont décrites dans la catégorie respective.

De plus, dans chaque signature de méthode, les lettres `T` et `R` font référence aux types génériques qui définissent la séquence. In particular, `T` identifies the type of the current sequence, whereas `R` identifies the type of the new sequence that gets returned in case of type-changing lazy methods.

Pour économiser de l'espace, les méthodes seront présentées dans un seul snippet dans la catégorie correspondante avec un commentaire ci-dessus indiquant ce que la méthode est censée faire, comme indiqué dans l'exemple suivant.

```zenscript
# this method does something
function method(argument as int, argument2 as bool) as double;

# this method does something else, and may return null
function method2() as bool?;
```

Dernier mais non des moindres, reportez-vous à la [liste d'interfaces fonctionnelles](/Mods/Boson/Functions/List/) si vous rencontrez un type non-primitif (e. . `Prédicez<T>` ou `Fonction<T, R>`.

### Méthodes de terminal
Les méthodes de terminaux sont des méthodes qui ne retournent pas une instance `Séquence` , mais plutôt n'importe quel autre type de données, comme `int`, `bool`, ou même rien (`vide`). De plus, ils peuvent aussi potentiellement causer l'évaluation de l'ensemble du contenu `Séquence` , bien que ce ne soit pas obligatoire, car certaines méthodes peuvent également terminer l'exécution dès que certaines conditions sont remplies. Néanmoins, cette garantie ne peut pas être faite.

Il est également impossible de continuer à fonctionner sur une `Séquence` après qu'une méthode de terminal ait été appelée, sauf si la séquence a été précédemment enregistrée dans une variable avant l'invocation de la méthode du terminal.

```zenscript
# Returns whether the given 'element' is present in the target sequence
function contains(element as T) as bool;

# Gets the element that is at the given 'index' inside the sequence, if present, otherwise throws an exception
function elementAt(index as int) as T;

# Gets the element that is at the given 'index' inside the sequence, if present, otherwise invokes 'defaultValue'
function elementAtOrElse(index as int, defaultValue as IntFunction<T>) as T;

# Gets the element that is at the given 'index' inside the sequence, if present, otherwise returns null
function elementAtOrNull(index as int) as T?;

# Returns the first element that matches the given predicate, or null if none matches
function find(predicate as Predicate<T>) as T?;

# Returns the last element that matches the given predicate, or null if none matches
function findLast(predicate as Predicate<T>) as T?;

# Returns the first element of this sequence, if present, otherwise throws an exception
function first() as T;

# Returns the first element of this sequence that matches the given predicate, if present, otherwise throws an exception
function first(predicate as Predicate<T>) as T;

# Returns the first element of this sequence, if present, otherwise returns null
function firstOrNull() as T?;

# Returns the first element of this sequence that matches the given predicate, if present, otherwise returns null
function firstOrNull(predicate as Predicate<T>) as T?;

# Returns the position at which 'element' is found within the sequence, or -1 if no such element exists in the sequence
function indexOf(element as T) as int;

# Returns the position of the first element that matches the given predicate, or -1 if none match
function indexOfFirst(predicate as Predicate<T>) as int;

# Returns the position of the last element that matches the given predicate, or -1 if none match
function indexOfLast(predicate as Predicate<T>) as int;

# Returns the last element of this sequence, if present, otherwise throws an exception
function last() as T;

# Returns the last element of this sequence that matches the given predicate, if present, otherwise throws an exception
function last(predicate as Predicate<T>) as T;

# Returns the last position at which 'element' occurs in the sequence, or -1 if no such element exists in the sequence
function lastIndexOf(element as T) as int;

# Returns the last element of this sequence, if present, otherwise returns null
function lastOrNull() as T?;

# Returns the last element of this sequence that matches the given predicate, if present, otherwise returns null
function lastOrNull(predicate as Predicate<T>) as T?;

# Returns the only element in this sequence, or throws an exception if the sequence doesn't have exactly one element
function single() as T;

# Returns the only element in this sequence that matches the given predicate, or throws an exception if no elements or more than one match
function single(predicate as Predicate<T>) as T;

# Returns the only element in this sequence, or null if the sequence doesn't have exactly one element
function singleOrNull() as T?;

# Returns the only element in this sequence that matches the given predicate, or null if no elements or more than one match
function singleOrNull(predicate as Predicate<T>) as T?;

# Converts this sequence to a list (not an array)
function toList() as [T];

# Returns whether all the elements inside this sequence match the given predicate, or true for empty sequences
function all(predicate as Predicate) as bool;

# Returns whether this sequence is not empty
function any() as bool;

# Returns whether at least one of the elements of this sequence match the given predicate
function any(predicate as Predicate<T>) as bool;

# Returns the amount of items that are present in this sequence
function count() as int;

# Returns the amount of items in this sequence that match the given predicate
function count(predicate as Predicate<T>) as int;

# Accumulates values starting from 'initial' and recursively applying 'operation' over the current status of 'initial' and the next element, saving the result back into 'initial'
function fold(initial as R, operation as BiFunction<R, T, R>) as R;

# Executes the given 'action' on every element of the sequence in order
function forEach(action as Consumer<T>) as void;

# Executes the given 'action' on every element of the sequence in order, providing access to the current index
function forEachIndexed(action as ObjIntConsumer<T>) as void;

# Returns the element that has the maximum value according to the given 'comparator', or null if the sequence is empty
function maxWith(comparator as ToIntBiFunction<T, T>) as T?;

# Returns the element that has the minimum value according to the given 'comparator', or null if the sequence is empty
function minWith(comparator as ToIntBiFunction<T, T>) as T?;

# Returns whether this sequence is empty
function none() as bool;

# Returns whether none of the elements of this sequence match the given predicate
function none(predicate as Predicate<T>) as bool;

# Returns the integer sum of all the elements of this sequence according to the given 'selector'
function sumBy(selector as ToIntFunction<T>) as int;

# Returns the floating point sum of all the elements of this sequence according to the given 'selector'
function sumByDouble(selector as ToDoubleFunction<T>) as double;

# Returns a string that represents the contents of the given sequence, converted to string via 'transform', separated with the given 'separator', and with the given 'prefix' and 'suffix'
# Moreover, the amount of elements can be limited via 'limit' (if different from -1), in which case a longer list will be truncated via the text in 'truncated'
function joinToString(
    separator as string,               # optional, default value: ", "
    prefix as string,                  # optional, default value: ""
    postfix as string,                 # optional, default value: ""
    limit as int,                      # optional, default value: -1
    truncated as string,               # optional, default value: "..."
    transformer en fonction<T, String>?  # optional, default value: null (i.e. a plain `toString` will be called on the target object)
) as string;
```

### Méthodes de paresseux changeantes
Les méthodes paresseuses changeant de type sont des méthodes qui retournent une `Séquence` de type différent plutôt que l'originale, suite au résultat d'une opération de conversion (e. . de `IItemStack` à `IBlockState`). Puisqu'ils sont paresseux, l'évaluation du contenu de la séquence ne sera faite que plus tard, lorsque la transformation a besoin de en fait à cause de l'invocation d'une méthode de terminal ou d'une méthode intermédiaire impatiente.

Puisque ces méthodes sont intermédiaires, il est possible de continuer à utiliser une `Séquence` après une invocation de ces méthodes.

```zenscript
# Transforme chaque élément de cette séquence en un autre en utilisant la fonction 'transform' donnée
function map(transformer en Function<T, R>) en séquence<R>;

# Transforme chaque élément de cette séquence en un autre en utilisant la fonction 'transform' donnée, en fournissant l'accès à l'index courant
fonction mapIndexed(transformée en BiFunction<int?, T, R>) en séquence<R>;

# Récupère chaque paire d'éléments adjacents à l'intérieur de la séquence et exécute la fonction 'transform' donnée, retournant les résultats dans une séquence
# Retourne une séquence vide si la séquence courante a moins de deux éléments
fonction zipWithNext(transformée en BiFunction<T, T, R>) en séquence<R>;
```

### Méthodes paresseux intermédiaires
Les méthodes paresseuses intermédiaires sont des méthodes qui retournent une `Séquence` du même type que la méthode actuelle, et l'évaluation de la méthode sera reportée jusqu'à ce qu'une méthode terminal ou une méthode intermédiaire soit appelée, dorénavant le nom "paresse". Pour cette raison exacte, la suppression ou l'ajout d'élément peut (et sera) ne pas être reflété dans la séquence elle-même jusqu'à ce que la séquence soit complètement évaluée. Pour cette raison, toute modification des arguments passés à la fonction peut avoir effets secondaires indésirables (surtout pour `moins` et `plus` appels).

Puisque ces méthodes sont intermédiaires, il est possible de continuer à utiliser une `Séquence` après une invocation de ces méthodes.

```zenscript
# Supprime les premiers éléments 'n' de la tête de la séquence, en les déposant effectivement de
la fonction drop(n comme int) comme Séquence<T>;

# Supprime les éléments de la tête de la séquence tant que le prédicat donné retourne 'true', les abandonnant efficacement
la fonction dropWhile(prédicat comme prédicat<T>) comme séquence<T>;

# Garde dans la séquence uniquement les éléments qui correspondent au prédicat
filtre de la fonction (prédicat comme prédicat<T>) comme séquence<T>;

# Garde dans la séquence seulement les éléments qui correspondent au prédicat donné, fournissant l'accès à l'index actuel
fonction filterIndexed(prédicat comme BiPredicate<int?, T>) comme Séquence<T>;

# Supprime de la séquence tous les éléments qui correspondent au prédicat donné
function filterNot(predicate as Predicate<T>) as Sequence<T>;

# Garde dans la séquence seulement les premiers éléments 'n', pris de la tête de la séquence
fonction take(n as int) comme Séquence<T>;

# Garde dans les éléments de séquence de sa tête tant que le prédicat donné retourne 'true'
fonction takeWhile(predicate as Predicate<T>) comme Séquence<T>;

# Supprime les éléments qui sont dupliqués dans la séquence actuelle, conserver une seule "copie" de chaque élément
function distinct() en tant que Séquence<T>;

# Supprime les éléments qui sont des doublons selon le 'sélecteur' donné dans la séquence, conserver efficacement une seule "copie" de chaque élément
# K dans cette instance représente un autre type générique qui identifie le type de la "key" qui sera utilisé pour effectuer cette opération
fonction distinctBy(sélecteur de fonction<T, K>) comme Séquence<T>;

# Exécute l'action donnée sur n'importe quel élément de la séquence, sans le terminer
fonction onEach(action en tant que consommateur<T>) comme Séquence<T>;

# Supprime les éléments donnés de la séquence, s'ils sont présents
fonctions minus(éléments comme T[]) comme Séquence<T>;

# Supprime l'élément donné de la séquence ONCE, si présent, réduire efficacement la quantité de doublons de cet élément par 1
fonction minusElement(élément en T) comme Séquence<T>;

# Ajoute les éléments donnés à la fin de la séquence
function plus(éléments comme T[]) comme Séquence<T>;

# Ajoute l'élément donné à la fin de la séquence
function plusElement(element as T) comme Séquence<T>;

# Retourne la séquence courante (effectivement un "do-nothing")
fonction asSequence() comme Séquence<T>;
```

### Méthodes intermédiaires
Les méthodes intermédiaires désireuses sont des méthodes qui retournent une `Séquence` du même type de la méthode actuelle, mais l'évaluation de la méthode ne peut pas être reportée jusqu'à ce qu'une méthode terminal soit appelée. De plus, les méthodes désireuses peuvent entraîner une évaluation de l'ensemble de la séquence appelée, jusqu'à ce moment-là, à n'importe quel moment entre leur invocation et l'invocation de la méthode du terminal. Pour cette raison, il est suggéré d'appeler des méthodes enthousiastes aussi parcimonieusement que possible et de les laisser opérer sur la plus petite quantité de données possible.

Puisque ces méthodes sont intermédiaires, il est possible de continuer à utiliser une `Séquence` après l'invocation de ces méthodes.

```zenscript
# Trie la séquence courante avec un algorithme stable, selon la sortie de la fonction de 'comparator' donnée
fonction sortedWith(comparateur: ToIntBiFunction<T, T>) comme Séquence<T>;
```

## Surcharge de l'opérateur
`La séquence`s peut supporter la surcharge de l'opérateur dans les futures révisions du langage. Reportez-vous à cette documentation pour garder à jour. Notez que la prise en charge peut nécessiter l'activation d'un drapeau spécial du compilateur : reportez-vous au [Préprocesseur des indicateurs expérimentaux](/Mods/Boson/Preprocessor/Exp/) pour plus d'informations.

## Exemple
Ce qui suit est un exemple de script qui montre quelques exemples qui peuvent être faits avec des séquences. Ce n'est nulle part une liste complète de , mais elle est davantage considérée comme une référence et une preuve de concept.

```zenscript
# Affiche le nom d'affichage des trois éléments fournis
<sequence:IItemStack>(<minecraft:iron_ingot>, <minecraft:gold_ingot>, <minecraft:bedrock> * 3)
    . ilter(function (item) { return item.displayName has "Iron"; })
    .map(function (item) { return item.displayName; })
    . orEach(function (displayName) { print(displayName); });

# Affiche comment les séquences peuvent être stockées et appelées plus tard
val x = <sequence:IItemStack>(<minecraft:iron_ingot>, <minecraft:gold_ingot>, <minecraft:bedrock> * 3)
            . ilter(function (item) { return item. isplayName a « Fer »; })
            .map(function (item) { return item. isplayName; });
x.map(function (displayName) { return displayName + displayName; })
    . orEach(function (message) { print(message); });


# Montre comment la conversion peut être répétée plus d'une fois
<sequence:IItemStack>(<minecraft:redstone>, <minecraft:bedrock>)
    . ap(function (item) { return item * 10; })
    . ap(function (item) { return item.commandString; })
    . ilter(function (commandString) { return commandString a " * "; })
    . orEach(function (b) { print(b); });

# Un autre exemple aléatoire
<sequence:IItemStack>(<minecraft:redstone>, <minecraft:bedrock>)
    . apIndexed(function (index, item) { return item * (index + 1); })
    . lus(<minecraft:gold_ingot> * 5)
    . ilterNot(function (item) { return item.displayName has "Bed"; })
    .map(function (item) { return item.commandString; })
    . orEachIndexed(function (s, index) { print("" + index + ": " + s); });

# Montre comment les fonctions surchargées comme le count work
print(<sequence:IItemStack>(<minecraft:redstone>). ount()); # Sortie 1
print(<sequence:IItemStack>(<minecraft:gold_ingot>, <minecraft:iron_ingot>).count(function (item) { return item. isplayName a « Fer »; })); # Outputs 1

# Interoperability between ZenScriptX and Boson
<sequence:IItemStack>(<minecraft:redstone>)
    . ap(function (it) { return it. efinition; })
    .map(function (it) { return it.id; })
    . ap(function (it) { return it as NameSpacedString; })
    . nEach(function (it) { print(it.asString()); })
    .map(function (it) { return it.path; })
    . orEach(function (it) { print(it); });

# Élément À saisir les éléments
val target = <sequence:IItemStack>(<minecraft:redstone>).elementAt(0);
print(target.definition.id);
```
