# Répartiteur MC:

Cette classe a été ajoutée par un mod avec le mod-id `crafttweaker`. Vous devez donc avoir ce mod installé si vous voulez utiliser cette fonctionnalité.

## Importation de la classe
Il pourrait vous être nécessaire d'importer le paquet si vous rencontrez des problèmes (comme lancer un tableau), alors mieux être sûr que désolé et ajouter l'importation.
```zenscript
crafttweaker.api.commands.custom.MCCommandDispatcher
```

## Méthodes
### est égal à

Type de retour: booléen

```zenscript
myMCCommandDispatcher.equals(o as Object);
```

| Paramètre | Type de texte | Libellé                    |
| --------- | ------------- | -------------------------- |
| o         | Objet         | Aucune description fournie |


### exécuter

Type de retour: int

```zenscript
myMCCommandDispatcher.execute(parse as crafttweaker.api.commands.custom.MCParseResults);
```

| Paramètre | Type de texte                                                                                  | Libellé                    |
| --------- | ---------------------------------------------------------------------------------------------- | -------------------------- |
| parse     | [crafttweaker.api.commands.custom.MCParseResults](/vanilla/api/commands/custom/MCParseResults) | Aucune description fournie |



Type de retour: int

```zenscript
myMCCommandDispatcher.execute(input as String, source as crafttweaker.api.commands.custom.MCCommandSource);
```

| Paramètre | Type de texte                                                                                    | Libellé                    |
| --------- | ------------------------------------------------------------------------------------------------ | -------------------------- |
| input     | Chaîne de caractères                                                                             | Aucune description fournie |
| source    | [crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource) | Aucune description fournie |



Type de retour: int

```zenscript
myMCCommandDispatcher.execute(input as com.mojang.brigadier.StringReader, source as crafttweaker.api.commands.custom.MCCommandSource);
```

| Paramètre | Type de texte                                                                                    | Libellé                    |
| --------- | ------------------------------------------------------------------------------------------------ | -------------------------- |
| input     | com.mojang.brigadier.StringReader                                                                | Aucune description fournie |
| source    | [crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource) | Aucune description fournie |


### trouver des Ambiguités

```zenscript
myMCCommandDispatcher.findAmbiguities(consumer as crafttweaker.api.commands.custom.MCAmbiguityConsumer);
```

| Paramètre    | Type de texte                                                                                            | Libellé                    |
| ------------ | -------------------------------------------------------------------------------------------------------- | -------------------------- |
| consommateur | [crafttweaker.api.commands.custom.MCAmbiguityConsumer](/vanilla/api/commands/custom/MCAmbiguityConsumer) | Aucune description fournie |


### trouver un nœud

Type de retour : [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)

```zenscript
myMCCommandDispatcher.findNode(path as Collection<String>);
```

| Paramètre      | Type de texte                        | Libellé                    |
| -------------- | ------------------------------------ | -------------------------- |
| chemin d'accès | Collection&lt;String&gt; | Aucune description fournie |


### getAllUsage

Type de retour: String[]

```zenscript
myMCCommandDispatcher.getAllUsage(node as crafttweaker.api.commands.custom.MCCommandNode, source as crafttweaker.api.commands.custom.MCCommandSource, restricted as boolean);
```

| Paramètre | Type de texte                                                                                    | Libellé                    |
| --------- | ------------------------------------------------------------------------------------------------ | -------------------------- |
| Nœud      | [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)     | Aucune description fournie |
| source    | [crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource) | Aucune description fournie |
| restreint | boolean                                                                                          | Aucune description fournie |


### Obtenir des suggestions de complétion

Type de retour : [crafttweaker.api.commands.custom.MCSuggestions](/vanilla/api/commands/custom/MCSuggestions)

```zenscript
myMCCommandDispatcher.getCompletionSuggestions(parse comme crafttweaker.api.commands.custom.MCParseResults);
```

| Paramètre | Type de texte                                                                                  | Libellé                    |
| --------- | ---------------------------------------------------------------------------------------------- | -------------------------- |
| parse     | [crafttweaker.api.commands.custom.MCParseResults](/vanilla/api/commands/custom/MCParseResults) | Aucune description fournie |



Type de retour : [crafttweaker.api.commands.custom.MCSuggestions](/vanilla/api/commands/custom/MCSuggestions)

```zenscript
myMCCommandDispatcher.getCompletionSuggestions(parse comme crafttweaker.api.commands.custom.MCParseResults, curseur comme int);
```

| Paramètre | Type de texte                                                                                  | Libellé                    |
| --------- | ---------------------------------------------------------------------------------------------- | -------------------------- |
| parse     | [crafttweaker.api.commands.custom.MCParseResults](/vanilla/api/commands/custom/MCParseResults) | Aucune description fournie |
| cursor    | Indice                                                                                         | Aucune description fournie |


### getPath

Type de retour : Collection&lt;String&gt;

```zenscript
myMCCommandDispatcher.getPath(cible comme crafttweaker.api.commands.custom.MCCommandNode);
```

| Paramètre | Type de texte                                                                                | Libellé                    |
| --------- | -------------------------------------------------------------------------------------------- | -------------------------- |
| target    | [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode) | Aucune description fournie |


### getRoot

Type de retour : [crafttweaker.api.commands.custom.MCRootCommandNode](/vanilla/api/commands/custom/MCRootCommandNode)

```zenscript
myMCCommandDispatcher.getRoot();
```

### getSmartUsage

Type de retour : String[[crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)]

```zenscript
myMCCommandDispatcher.getSmartUsage(node as crafttweaker.api.commands.custom.MCCommandNode, source as crafttweaker.api.commands.custom.MCCommandSource);
```

| Paramètre | Type de texte                                                                                    | Libellé                    |
| --------- | ------------------------------------------------------------------------------------------------ | -------------------------- |
| Nœud      | [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)     | Aucune description fournie |
| source    | [crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource) | Aucune description fournie |


### hashCode

Type de retour: int

```zenscript
myMCCommandDispatcher.hashCode();
```

### parse

Type de retour : [crafttweaker.api.commands.custom.MCParseResults](/vanilla/api/commands/custom/MCParseResults)

```zenscript
myMCCommandDispatcher.parse(commande comme String, source comme crafttweaker.api.commands.custom.MCCommandSource);
```

| Paramètre | Type de texte                                                                                    | Libellé                    |
| --------- | ------------------------------------------------------------------------------------------------ | -------------------------- |
| commande  | Chaîne de caractères                                                                             | Aucune description fournie |
| source    | [crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource) | Aucune description fournie |



Type de retour : [crafttweaker.api.commands.custom.MCParseResults](/vanilla/api/commands/custom/MCParseResults)

```zenscript
myMCCommandDispatcher.parse(commande com.mojang.brigadier.StringReader, source en tant que crafttweaker.api.commands.custom.MCCommandSource);
```

| Paramètre | Type de texte                                                                                    | Libellé                    |
| --------- | ------------------------------------------------------------------------------------------------ | -------------------------- |
| commande  | com.mojang.brigadier.StringReader                                                                | Aucune description fournie |
| source    | [crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource) | Aucune description fournie |


### s'inscrire

Type de retour : [crafttweaker.api.commands.custom.MCLiteralCommandNode](/vanilla/api/commands/custom/MCLiteralCommandNode)

```zenscript
myMCCommandDispatcher.register(commande comme crafttweaker.api.commands.custom.MCLiteralArgumentBuilder);
```

| Paramètre | Type de texte                                                                                                      | Libellé                    |
| --------- | ------------------------------------------------------------------------------------------------------------------ | -------------------------- |
| commande  | [crafttweaker.api.commands.custom.MCLiteralArgumentBuilder](/vanilla/api/commands/custom/MCLiteralArgumentBuilder) | Aucune description fournie |


### Consommateur

```zenscript
myMCCommandDispatcher.setConsumer(consumer as crafttweaker.api.commands.custom.MCResultConsumer);
```

| Paramètre    | Type de texte                                                                                      | Libellé                    |
| ------------ | -------------------------------------------------------------------------------------------------- | -------------------------- |
| consommateur | [crafttweaker.api.commands.custom.MCResultConsumer](/vanilla/api/commands/custom/MCResultConsumer) | Aucune description fournie |


### toString

Type de retour: chaîne de caractères

```zenscript
myMCCommandDispatcher.toString();
```


## Opérateurs
### EQUALES

```zenscript
myMCCommandDispatcher == o en tant qu'objet
```

| Paramètre | Type de texte | Libellé                    |
| --------- | ------------- | -------------------------- |
| o         | Objet         | Aucune description fournie |

## Pistolet

| Type de résultat     | Est implicite |
| -------------------- | ------------- |
| Chaîne de caractères | vrai          |

