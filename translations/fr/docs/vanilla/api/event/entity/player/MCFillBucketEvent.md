# format@@0 MCFillBucketEvent

Cette classe a été ajoutée par un mod avec le mod-id `crafttweaker`. Vous devez donc avoir ce mod installé si vous voulez utiliser cette fonctionnalité.

## Importation de la classe
Il pourrait vous être nécessaire d'importer le paquet si vous rencontrez des problèmes (comme lancer un tableau), alors mieux être sûr que désolé et ajouter l'importation.
```zenscript
format@@0 crafttweaker.api.event.entity.player.MCFillBucketEvent
```

## Constructeurs
```zenscript
new crafttweaker.api.event.entity.player.MCFillBucketEvent(handler as function.Consumer<crafttweaker.api.event.entity.player.MCFillBucketEvent>);
```
| Paramètre | Type de texte                                                                                                                   | Libellé                    |
| --------- | ------------------------------------------------------------------------------------------------------------------------------- | -------------------------- |
| handler   | function.Consumer<[crafttweaker.api.event.entity.player.MCFillBucketEvent](/vanilla/api/event/entity/player/MCFillBucketEvent)> | Aucune description fournie |



## Méthodes
### Obtenir un seau vide

Retourne [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
myMCFillBucketEvent.getEmptyBucket();
```

### Lecteur d'entité

Retourne [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity)

```zenscript
myMCFillBucketEvent.getEntityPlayer();
```

### format@@0 getFilledBucket

Retourne [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
myMCFillBucketEvent.getFilledBucket();
```

### Obtenir un joueur

Renvoie : `Joueur`

Retourne [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity)

```zenscript
myMCFillBucketEvent.getPlayer();
```

### Il y a un résultat

Détermine si cet événement attend une valeur de résultat significative. Remarque : Les événements avec l'annotation HasResult auront automatiquement ajouté cette méthode pour retourner true.

Retourne un booléen

```zenscript
monMCFillBucketEvent.hasResult();
```

### est annulable

Détermine si cette fonction est annulable du tout. Renvoie : `Si l'accès à setAnnulled devrait être autorisé
 Note:
 Les événements avec l'annotation annulable auront automatiquement ajouté cette méthode pour retourner true.`

Retourne un booléen

```zenscript
myMCFillBucketEvent.isCancelable();
```

### est annulé

Détermine si cet événement est annulé et doit arrêter d'exécuter. Renvoie : `L'état actuel annulé`

Retourne un booléen

```zenscript
monMCFillBucketEvent.est annulé ();
```

### setAnnulé

```zenscript
myMCFillBucketEvent.setCancled(cancel as boolean);
```

| Paramètre | Type de texte | Libellé                    |
| --------- | ------------- | -------------------------- |
| annuler   | boolean       | Aucune description fournie |


### format@@0 setFilledBucket

```zenscript
myMCFillBucketEvent.setFilledBucket(arg0 as crafttweaker.api.item.IItemStack);
```

| Paramètre | Type de texte                                                     | Libellé                    |
| --------- | ----------------------------------------------------------------- | -------------------------- |
| arg0      | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | Aucune description fournie |



