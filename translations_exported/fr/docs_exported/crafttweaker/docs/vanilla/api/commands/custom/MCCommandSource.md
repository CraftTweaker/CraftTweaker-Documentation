# format@@0 MCCommandSource

Cette classe a été ajoutée par un mod avec le mod-id `crafttweaker`. Vous devez donc avoir ce mod installé si vous voulez utiliser cette fonctionnalité.

## Importation de la classe
Il pourrait vous être nécessaire d'importer le paquet si vous rencontrez des problèmes (comme lancer un tableau), alors mieux être sûr que désolé et ajouter l'importation.
```zenscript
crafttweaker.api.commands.custom.MCCommandSource
```

## Méthodes
### getName

Type de retour: chaîne de caractères

```zenscript
myMCCommandSource.getName();
```

### Obtenir un joueur

Type de retour: (@org.openzen.zencode.java.ZenCodeType.Nullable :: MCPlayerEntity)

```zenscript
myMCCommandSource.getPlayer();
```

### Obtenir les noms des joueurs

Type de retour : Collection&lt;String&gt;

```zenscript
myMCCommandSource.getPlayerNames();
```

### getTargetedEntity

Type de retour : Collection&lt;String&gt;

```zenscript
myMCCommandSource.getTargetedEntity();
```

### Obtenir des noms d'équipe

Type de retour : Collection&lt;String&gt;

```zenscript
myMCCommandSource.getTeamNames();
```

### Niveau de permission

Type de retour: booléen

```zenscript
myMCCommandSource.hasPermissionLevel(p_197034_1_ comme int);
```

| Paramètre     | Type de texte | Libellé                    |
| ------------- | ------------- | -------------------------- |
| p_197034_1_ | Indice        | Aucune description fournie |


### isPlayer

Type de retour: booléen

```zenscript
myMCCommandSource.isPlayer();
```

### Message d\'erreur d\'envoi

```zenscript
myMCCommandSource.sendErrorMessage(message as String);
```

| Paramètre | Type de texte        | Libellé                    |
| --------- | -------------------- | -------------------------- |
| message   | Chaîne de caractères | Aucune description fournie |


### sendFeedback

```zenscript
myMCCommandSource.sendFeedback(feedback as String, allowLogging as boolean);
```

| Paramètre                   | Type de texte        | Libellé                    |
| --------------------------- | -------------------- | -------------------------- |
| retour d'expérience         | Chaîne de caractères | Aucune description fournie |
| Permettre la journalisation | boolean              | Aucune description fournie |


### Les commentaires ont été désactivés

Type de retour : [crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource)

```zenscript
myMCCommandSource.withFeedback();
```

### avec le niveau de permission minimum

Type de retour : [crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource)

```zenscript
myMCCommandSource.withMinPermissionLevel(p_197026_1_ comme int);
```

| Paramètre     | Type de texte | Libellé                    |
| ------------- | ------------- | -------------------------- |
| p_197026_1_ | Indice        | Aucune description fournie |


### avec le niveau de permission

Type de retour : [crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource)

```zenscript
myMCCommandSource.withPermissionLevel(p_197033_1_ comme int);
```

| Paramètre     | Type de texte | Libellé                    |
| ------------- | ------------- | -------------------------- |
| p_197033_1_ | Indice        | Aucune description fournie |



