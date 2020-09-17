# ILogger

Classe de base utilisée pour interfacer avec le fichier crafttweaker.log et d'autres loggers (comme le joueur logger).

Cette classe a été ajoutée par un mod avec le mod-id `crafttweaker`. Vous devez donc avoir ce mod installé si vous voulez utiliser cette fonctionnalité.

## Importation de la classe
Il pourrait vous être nécessaire d'importer le paquet si vous rencontrez des problèmes (comme lancer un tableau), alors mieux être sûr que désolé et ajouter l'importation.
```zenscript
crafttweaker.api.ILogger
```

## Méthodes
### debug

Enregistre un message de débogage.

```zenscript
logger.debug(message comme String);
logger.debug("message");
```

| Paramètre | Type de texte        | Libellé                |
| --------- | -------------------- | ---------------------- |
| message   | Chaîne de caractères | message à enregistrer. |


### Erreur

Enregistre un message d'erreur.

```zenscript
logger.error(message comme String);
logger.error("message");
```

| Paramètre | Type de texte        | Libellé                |
| --------- | -------------------- | ---------------------- |
| message   | Chaîne de caractères | message à enregistrer. |


### Infos

Enregistre un message d'information.

```zenscript
logger.info(message comme String);
logger.info("message");
```

| Paramètre | Type de texte        | Libellé                |
| --------- | -------------------- | ---------------------- |
| message   | Chaîne de caractères | message à enregistrer. |


### avertissement

Enregistre un message d'avertissement.

```zenscript
logger.warning(message comme String);
logger.warning("message");
```

| Paramètre | Type de texte        | Libellé                |
| --------- | -------------------- | ---------------------- |
| message   | Chaîne de caractères | message à enregistrer. |



