# Événement d'insertion de l'élément MCEntité

Cette classe a été ajoutée par un mod avec le mod-id `crafttweaker`. Vous devez donc avoir ce mod installé si vous voulez utiliser cette fonctionnalité.

## Importation de la classe
Il pourrait vous être nécessaire d'importer le paquet si vous rencontrez des problèmes (comme lancer un tableau), alors mieux être sûr que désolé et ajouter l'importation.
```zenscript
format@@0 crafttweaker.api.event.entity.player.MCEntityItemPickupEvent
```

## Constructeurs
```zenscript
new crafttweaker.api.event.entity.player.MCEntityItemPickupEvent(handler as function.Consumer<crafttweaker.api.event.entity.player.MCEntityItemPickupEvent>);
```
| Paramètre | Type de texte                                                                                                                               | Libellé                    |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- |
| handler   | function.Consumer<[crafttweaker.api.event.entity.player.MCEntityItemPickupEvent](/vanilla/api/event/entity/player/MCEntityItemPickupEvent)> | Aucune description fournie |



## Méthodes
### Lecteur d'entité

Retourne [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity)

```zenscript
monMCEntityItemPickupEvent.getEntityPlayer();
```

### Obtenir un joueur

Renvoie : `Joueur`

Retourne [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity)

```zenscript
monMCEntityItemPickupEvent.getPlayer();
```

### Il y a un résultat

Détermine si cet événement attend une valeur de résultat significative. Remarque : Les événements avec l'annotation HasResult auront automatiquement ajouté cette méthode pour retourner true.

Retourne un booléen

```zenscript
monMCEntityItemPickupEvent.a résultat();
```

### est annulable

Détermine si cette fonction est annulable du tout. Renvoie : `Si l'accès à setAnnulled devrait être autorisé
 Note:
 Les événements avec l'annotation annulable auront automatiquement ajouté cette méthode pour retourner true.`

Retourne un booléen

```zenscript
monMCEntityItemPickupEvent.isCancelable();
```

### est annulé

Détermine si cet événement est annulé et doit arrêter d'exécuter. Renvoie : `L'état actuel annulé`

Retourne un booléen

```zenscript
monMCEntityItemPickupEvent.isCancled();
```

### setAnnulé

```zenscript
myMCEntityItemPickupEvent.setCancled(cancel as boolean);
```

| Paramètre | Type de texte | Libellé                    |
| --------- | ------------- | -------------------------- |
| annuler   | boolean       | Aucune description fournie |



