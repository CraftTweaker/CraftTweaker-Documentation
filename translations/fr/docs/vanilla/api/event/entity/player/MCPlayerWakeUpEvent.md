# MCPlayerWakeUpEvent

Cette classe a été ajoutée par un mod avec le mod-id `crafttweaker`. Vous devez donc avoir ce mod installé si vous voulez utiliser cette fonctionnalité.

## Importation de la classe
Il pourrait vous être nécessaire d'importer le paquet si vous rencontrez des problèmes (comme lancer un tableau), alors mieux être sûr que désolé et ajouter l'importation.
```zenscript
crafttweaker.api.event.entity.player.MCPlayerWakeUpEvent
```

## Constructeurs
```zenscript
new crafttweaker.api.event.entity.player.MCPlayerWakeUpEvent(handler as function.Consumer<crafttweaker.api.event.entity.player.MCPlayerWakeUpEvent>);
```
| Paramètre | Type de texte                                                                                                                       | Libellé                    |
| --------- | ----------------------------------------------------------------------------------------------------------------------------------- | -------------------------- |
| handler   | function.Consumer<[crafttweaker.api.event.entity.player.MCPlayerWakeUpEvent](/vanilla/api/event/entity/player/MCPlayerWakeUpEvent)> | Aucune description fournie |



## Méthodes
### Lecteur d'entité

Retourne [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity)

```zenscript
myMCPlayerWakeUpEvent.getEntityPlayer();
```

### Obtenir un joueur

Renvoie : `Joueur`

Retourne [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity)

```zenscript
myMCPlayerWakeUpEvent.getPlayer();
```

### Il y a un résultat

Détermine si cet événement attend une valeur de résultat significative. Remarque : Les événements avec l'annotation HasResult auront automatiquement ajouté cette méthode pour retourner true.

Retourne un booléen

```zenscript
myMCPlayerWakeUpEvent.hasResult();
```

### est annulable

Détermine si cette fonction est annulable du tout. Renvoie : `Si l'accès à setAnnulled devrait être autorisé
 Note:
 Les événements avec l'annotation annulable auront automatiquement ajouté cette méthode pour retourner true.`

Retourne un booléen

```zenscript
myMCPlayerWakeUpEvent.isCancelable();
```

### est annulé

Détermine si cet événement est annulé et doit arrêter d'exécuter. Renvoie : `L'état actuel annulé`

Retourne un booléen

```zenscript
myMCPlayerWakeUpEvent.isCanceled();
```

### setAnnulé

```zenscript
myMCPlayerWakeUpEvent.setCancled(cancel as boolean);
```

| Paramètre | Type de texte | Libellé                    |
| --------- | ------------- | -------------------------- |
| annuler   | boolean       | Aucune description fournie |


### format@@0 shouldSetSpawn

Indique si le sommeil du joueur a été considéré comme réussi. Dans la vanille, ceci est utilisé pour déterminer si le tronçon de spawn doit être réglé à la position du lit.

Retourne un booléen

```zenscript
myMCPlayerWakeUpEvent.shouldSetSpawn();
```

### Mettre à jour le monde

Indique si le serveur doit être informé des changements de veille. Cela ne sera faux que si le serveur est considéré comme "à jour" déjà parce que, par exemple, il a lancé l'appel.

Retourne un booléen

```zenscript
myMCPlayerWakeUpEvent.updateWorld();
```

### WakeImmédiatement

Utilisé pour l'animation de réveil. C'est faux si le joueur est considéré comme « dormeur » et que l'overlay doit s'effondrer.

Retourne un booléen

```zenscript
myMCPlayerWakeUpEvent.wakeImmediately();
```


