# Commandes personnalisées

Cette classe a été ajoutée par un mod avec le mod-id `crafttweaker`. Vous devez donc avoir ce mod installé si vous voulez utiliser cette fonctionnalité.

## Importation de la classe
Il pourrait vous être nécessaire d'importer le paquet si vous rencontrez des problèmes (comme lancer un tableau), alors mieux être sûr que désolé et ajouter l'importation.
```zenscript
crafttweaker.api.commands.custom.CustomCommands
```

## Méthodes
### Argument

Type de retour : [crafttweaker.api.commands.custom.MCRequiredArgumentBuilder](/vanilla/api/commands/custom/MCRequiredArgumentBuilder)

```zenscript
crafttweaker.api.commands.custom.CustomCommands.argument(name as String);
```

| Paramètre | Type de texte        | Libellé                    |
| --------- | -------------------- | -------------------------- |
| Nom       | Chaîne de caractères | Aucune description fournie |


### littéral

Type de retour : [crafttweaker.api.commands.custom.MCLiteralArgumentBuilder](/vanilla/api/commands/custom/MCLiteralArgumentBuilder)

```zenscript
crafttweaker.api.commands.custom.CustomCommands.literal(name as String);
```

| Paramètre | Type de texte        | Libellé                    |
| --------- | -------------------- | -------------------------- |
| Nom       | Chaîne de caractères | Aucune description fournie |


### Enregistrer la commande

```zenscript
crafttweaker.api.commands.custom.CustomCommands.registerCommand(builder comme crafttweaker.api.commands.custom.MCLiteralArgumentBuilder);
```

| Paramètre    | Type de texte                                                                                                      | Libellé                    |
| ------------ | ------------------------------------------------------------------------------------------------------------------ | -------------------------- |
| constructeur | [crafttweaker.api.commands.custom.MCLiteralArgumentBuilder](/vanilla/api/commands/custom/MCLiteralArgumentBuilder) | Aucune description fournie |



