# MCOpen

Cette classe a été ajoutée par un mod avec le mod-id `crafttweaker`. Vous devez donc avoir ce mod installé si vous voulez utiliser cette fonctionnalité.

## Importation de la classe
Il pourrait vous être nécessaire d'importer le paquet si vous rencontrez des problèmes (comme lancer un tableau), alors mieux être sûr que désolé et ajouter l'importation.
```zenscript
crafttweaker.api.event.entity.player.PlayerContainerEvent.MCOpen
```

## Constructeurs
```zenscript
new crafttweaker.api.event.entity.player.PlayerContainerEvent.MCOpen(handler as function.Consumer<crafttweaker.api.event.entity.player.PlayerContainerEvent.MCOpen>);
```
| Paramètre | Type de texte                                                                                                                                       | Libellé                    |
| --------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- |
| handler   | function.Consumer<[crafttweaker.api.event.entity.player.PlayerContainerEvent.MCOpen](/vanilla/api/event/entity/player/PlayerContainerEvent/MCOpen)> | Aucune description fournie |



## Méthodes
### Lecteur d'entité

Retourne [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity)

```zenscript
myMCOpen.getEntityPlayer();
```

### Obtenir un joueur

Renvoie : `Joueur`

Retourne [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity)

```zenscript
myMCOpen.getPlayer();
```

### Il y a un résultat

Détermine si cet événement attend une valeur de résultat significative. Remarque : Les événements avec l'annotation HasResult auront automatiquement ajouté cette méthode pour retourner true.

Retourne un booléen

```zenscript
myMCOpen.hasResult();
```

### est annulable

Détermine si cette fonction est annulable du tout. Renvoie : `Si l'accès à setAnnulled devrait être autorisé
 Note:
 Les événements avec l'annotation annulable auront automatiquement ajouté cette méthode pour retourner true.`

Retourne un booléen

```zenscript
myMCOpen.isCancelable();
```

### est annulé

Détermine si cet événement est annulé et doit arrêter d'exécuter. Renvoie : `L'état actuel annulé`

Retourne un booléen

```zenscript
myMCOpen.isCancled();
```

### setAnnulé

```zenscript
myMCOpen.setCancled(annuler comme booléen);
```

| Paramètre | Type de texte | Libellé                    |
| --------- | ------------- | -------------------------- |
| annuler   | boolean       | Aucune description fournie |



