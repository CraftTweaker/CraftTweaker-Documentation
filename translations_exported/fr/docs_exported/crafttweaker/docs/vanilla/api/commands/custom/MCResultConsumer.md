# Résultat MC: Consommateur

Cette classe a été ajoutée par un mod avec le mod-id `crafttweaker`. Vous devez donc avoir ce mod installé si vous voulez utiliser cette fonctionnalité.

## Importation de la classe
Il pourrait vous être nécessaire d'importer le paquet si vous rencontrez des problèmes (comme lancer un tableau), alors mieux être sûr que désolé et ajouter l'importation.
```zenscript
crafttweaker.api.commands.custom.MCResultConsumer
```

## Interface fonctionnelle

Cette classe est une interface fonctionnelle. Cela signifie que vous pouvez utiliser la notation lambda pour créer une instance de celle-ci. La notation lambda ressemble à :
```zenscript
(commandContext, succès, résultat) =>{}
```
## Méthodes
### sur commande terminée

```zenscript
myMCResultConsumer.onCommandComplete(commandContext as crafttweaker.api.commands.custom.MCCommandContext, success as boolean, result as int);
```

| Paramètre            | Type de texte                                                                                      | Libellé                    |
| -------------------- | -------------------------------------------------------------------------------------------------- | -------------------------- |
| Contexte de commande | [crafttweaker.api.commands.custom.MCCommandContext](/vanilla/api/commands/custom/MCCommandContext) | Aucune description fournie |
| Réussi               | boolean                                                                                            | Aucune description fournie |
| résultat             | Indice                                                                                             | Aucune description fournie |



