# État de l'IBlock

Un objet IBlockState représente l'état actuel d'un bloc.

## Importation du paquet

Il pourrait vous être nécessaire d'importer le paquet si vous rencontrez des problèmes, donc mieux vaut être sûr que désolé et ajouter l'importation.  
`importer crafttweaker.block.IBlockState;`

## Appel d'un IBlockState

Il y a plusieurs méthodes qui retournent un IBlockState

- Utilisation du [gestionnaire de crochets](/Vanilla/Brackets/Bracket_BlockState/) `<blockstate:minecraft:log:variant=spruce>`
- Utilisation de la méthode statique `IBlockState.getBlockState()`. (Voir ci-dessous pour plus d'informations)
- Utiliser la méthode `getMatchingBlockStates()` sur un objet [IBlockStateMatcher](/Vanilla/Blocks/IBlockStateMatcher/) pour récupérer un tableau d'IBlockStates.
- Utilisation de la méthode `withProperty()` sur un autre objet IBlockStatet.

## Résoudre un état de blocage lors de l'exécution

Il peut y avoir des moments où votre script peut compter sur l'interaction avec un bloc d'un mod qui n'a pas encore été chargé. comme les événements à l'intérieur des blocs dans ContentTweaker ou un autre chargeur de scripts pré-init. Si vous essayez d'utiliser un [gestionnaire de tranches](/Vanilla/Brackets/Bracket_BlockState/) pour un bloc qui n'a pas encore été enregistré, le gestionnaire échouera à résoudre et votre script ne fonctionnera pas.

Pour éviter cela, vous pouvez utiliser la méthode statique `IBlockState.getBlockState()` pour résoudre un IBlockState à l'exécution.

### getBlockState statique

`statique IBlockState getBlockState(String blockname, String... properties)` Parameters:

- String blockname → Une chaîne de caractères au format "modid:blockname" telle qu'elle apparaîtra dans le gestionnaire de crochets [BlockState](/Vanilla/Brackets/Bracket_BlockState/)
- Chaîne de caractères... propriétés → Zéro ou plus de chaînes de `"name=value"` paires de propriétés à appliquer à cet état de bloc. Toutes les propriétés non spécifiées utiliseront la même valeur que dans le blockstate par défaut pour le nom du bloc spécifié.

Renvoie un IBlockState du `blockname` spécifié avec les propriétés `spécifiées`, ou le blockstate par défaut si aucune propriété n'est spécifiée.

## Extension des propriétés IBlock

IBlockState étend [IBlockProperties](/Vanilla/Blocks/IBlockProperties/). Cela signifie que toutes les méthodes qui sont disponibles pour les objets [IBlockProperties](/Vanilla/Blocks/IBlockProperties/) sont également disponibles pour les objets IBlockStatet.

## Étendre IBlockStateMatcher

IBlockState étend [IBlockStateMatcher](/Vanilla/Blocks/IBlockStateMatcher/). Cela signifie que toutes les méthodes disponibles pour les objets [IBlockStateMatcher](/Vanilla/Blocks/IBlockStateMatcher/) sont également disponibles pour les objets IBlockStatet.

## Méthodes Zen et ZenGetters

| ZenGetter          | Type de retour                          | Libellé                                                                                    |
| ------------------ | --------------------------------------- | ------------------------------------------------------------------------------------------ |
| Bloquer            | [Verrouillage](/Vanilla/Blocks/IBlock/) | Renvoie le bloc référencé                                                                  |
| meta               | Indice                                  | Renvoie les métadonnées du bloc référencé                                                  |
| Chaîne de commande | chaîne de caractères                    | Renvoie un [Bracket Handler](/Vanilla/Brackets/Bracket_BlockState/) possible pour cet état |

## Méthodes Zen

### est remplaçable

`booléen isReplaceable(IWorld world, IBlockPos pos);`  
Paramètres:

- [IWorld](/Vanilla/World/IWorld/) monde → Le monde à vérifier
- [IBlockPos](/Vanilla/World/IBlockPos/) pos → La position du bloc

Retourne un booléen qui sait si le bloc peut être remplacé ou non.

### Obtention ou changement de propriétés

Vous pouvez obtenir une liste de toutes les propriétés enregistrées, soit en tant que liste avec tous les noms de propriétés, soit en tant que carte qui fait correspondre les propriétés à leur valeur.  
Vous pouvez également vérifier quelles valeurs sont possibles pour un nom de propriété donné.  
Vous pouvez également utiliser `withProperty` pour créer un nouvel objet IBlockState avec cette propriété modifiée.

```zenscript
Liste<String> getPropertyNames();
String getPropertyValue(String name);
List<String> getAllowedValuesForProperty(String name);

IBlockState withProperty(String name, String value);
```

### Comparaison de deux objets IBlockState

Vous pouvez soit utiliser `int compare(IBlockState autre);` ou les jetons ZenCompare `==` `!=`.  
Les différents types de retour sont cependant :

- `state.compare(autre)` renvoie une int qui est 0 si elles sont égales
- `état == autre` renvoie un booléen qui est vrai d'entre eux sont égaux

### Obtenir un Blockstate Matcher explicite

Renvoie un [IBlockStateMatcher](/Vanilla/Blocks/IBlockStateMatcher/) qui correspond au bloc donné.

```zenscript
IBlockStateMatcher matchBlock();
```