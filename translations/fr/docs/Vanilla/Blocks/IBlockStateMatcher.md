# IBlockStateMatcher

Un objet IBlockStateMatcher peut être utilisé pour faire correspondre un objet [IBlockState](/Vanilla/Blocks/IBlockState/) à un ensemble de exigences ou un ensemble d'états de blocs correspondants.

## Importation du paquet

Il peut être nécessaire d'importer le paquet si vous rencontrez des problèmes (comme lancer un [Tableau](/AdvancedFunctions/Arrays_and_Loops/) ou utiliser le statique `. méthode reate()` ), donc mieux vaut être sûr que désolé et ajouter l'importation.  
`import crafttweaker.block.IBlockStateMatcher ;`

## Correspondance d'un état de verrouillage spécifique

Chaque [IBlockState](/Vanilla/Blocks/IBlockState/) est également un IBlockStateMatcher qui ne correspond qu'à lui-même.

## Correspondance de tout Etat de Bloc pour un Bloc Spécifique

Vous pouvez utiliser la méthode [IBlockState](/Vanilla/Blocks/IBlockState/) `matchBlock()` pour créer un IBlockStateMatcher qui correspond à n'importe quel état de bloc possible pour ce bloc.

## Calling an IBlockStateMatcher

Il y a plusieurs méthodes qui retournent un IBlockStateMatcher

- À l'aide de `IBlockStateMatcher.create()`.
- Utilisation de la méthode `withMatchedValuesForProperty()` sur un autre IBlockStateMatcher.
- OU deux IBlockStateMatchers ensemble pour obtenir un assortisseur composé.
- Création d'un [IBlockState](/Vanilla/Blocks/IBlockState/), tous les objets IBlockState sont IBlockStateMatchers.

## Matchs composés

Lors de l'utilisation de OU (`|`) pour combiner IBlockStateMatchers, IBlockStateMatcher résultant n'est plus lié à un bloc sous-jacent spécifique, comme ce serait avec un [IBlockState](/Vanilla/Blocks/IBlockState/) ou un IBlockStateMatcher créé à l'aide de `IBlockStateMatcher. méthode reate()`. Au lieu de cela, le matcher correspond à n'importe quel blockstate qui aurait été assorti par n'importe lequel des matchers combinés.

Parce que ce blockstate n'est pas lié à un bloc spécifique, il n'est pas possible d'utiliser la méthode `withMatchedValuesForProperty()` pour récupérer un autre IBlockStateMatcher.

### création statique

`création statique IBlockStateMatcher (IBlockState... blockStates);` Parameters:

- [IBlockState](/Vanilla/Blocks/IBlockState/)... blockStates → Zéro ou plus de blockstates pour correspondre avec ce matcher. 

Renvoie un IBlockStateMatcher pour correspondre au ou aux états de blocs spécifiés.

- Si zéro `blocStates` sont fournis, ce matcher ne correspondra jamais à aucun blockstats. 
- Si un seul blockstate est fourni dans `blockStates`, l'IBlockStateMatcher résultant fera correspondre *n'importe quel blockstate* du bloc sous-jacent IBlockState fourni avec les valeurs de propriété acceptées comme correspondance. La méthode `withMatchedValuesForProperty` peut être utilisée pour ajouter des exigences plus spécifiques pour les propriétés. 
- Si plusieurs `blocStates` sont fournis, l'IBlockStateMatcher résultant est le même que l'utilisation de l'opérateur OR (`|`) avec chacun des IBlockStates fournis.

## Méthodes Zen

### correspondances

`correspondances booléennes (IBlockState blockState);`  
Paramètres:

- [IBlockState](/Vanilla/Blocks/IBlockState/) blockState → L'objet blockstate à faire correspondre avec

Renvoie un booléen qui représente si le blockstate correspond aux exigences de ce matcher.  
Vous pouvez également utiliser `A a B` qui représente `A.matches(B)`.

### Obtenir ou ajouter les propriétés autorisées

*(Ces méthodes ne sont autorisées que sur les instances IBlockStateMatcher non composées)*

    IBlockStateMatcher withMatchedValuesForProperty(String name, String... valeurs);
    Liste<String> getMatchedValuesForProperty(String name);
    Map<String, List<String>> getMatchedProperties();
    

Paramètres:

- Nom de la chaîne → Le nom de la propriété
- Chaîne de caractères... valeurs → Une ou plusieurs valeurs que la propriété d'un IBlockState correspondant peut avoir.

Renvoie un nouvel IBlockStateMatcher avec les mêmes exigences de propriété que ce IBlockStateMatcher à l'exception du nom de la propriété spécifiée ``, qui autorisera maintenant n'importe laquelle des valeurs `spécifiées` en tant qu'entrée correspondante.

### getMatchingBlockStates

`Collection<IBlockState> getMatchingBlockStates();` Returns a collection of every [IBlockState](/Vanilla/Blocks/IBlockState/) with any combination of properties that match this IBlockStateMatcher. Cette liste peut contenir des blocages qui ne sont pas possibles de passer par des moyens de jeu normaux. (Ex: `IBlockStateMatcher. reate(<blockstate:minecraft:log>)` retournera un IBlockStateMatcher qui correspond aux logs avec la propriété `axis=none`, avoir des textures d'écorce sur les 6 côtés.)

### Vérifier si un BlockState est un état composé

`booléen isCompound()`

« Fait ce que vous attendez. »

### Obtenir une représentation de la chaîne de commande

`Chaîne de commande ZenGetter`

Retourne une chaîne d'expression de gestionnaire de bracket, si nécessaire, jumelée avec les appels `withMatchedValueForProperty()` .  
N'oubliez pas cependant que les appels de méthodes retournées n'ont pas `""` autour des paramètres.  
Donc si vous voulez copier ce résultat, vous devrez l'ajouter manuellement aux arguments !