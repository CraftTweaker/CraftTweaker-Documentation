# MCArrowLooseEvent

Cette classe a été ajoutée par un mod avec le mod-id `crafttweaker`. Vous devez donc avoir ce mod installé si vous voulez utiliser cette fonctionnalité.

## Importation de la classe
Il pourrait vous être nécessaire d'importer le paquet si vous rencontrez des problèmes (comme lancer un tableau), alors mieux être sûr que désolé et ajouter l'importation.
```zenscript
format@@0 crafttweaker.api.event.entity.player.MCArrowLooseEvent
```

## Constructeurs
```zenscript
new crafttweaker.api.event.entity.player.MCArrowLooseEvent(handler as function.Consumer<crafttweaker.api.event.entity.player.MCArrowLooseEvent>);
```
| Paramètre | Type de texte                                                                                                                   | Libellé                    |
| --------- | ------------------------------------------------------------------------------------------------------------------------------- | -------------------------- |
| handler   | function.Consumer<[crafttweaker.api.event.entity.player.MCArrowLooseEvent](/vanilla/api/event/entity/player/MCArrowLooseEvent)> | Aucune description fournie |



## Méthodes
### getBow

Retourne [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
myMCArrowLooseEvent.getBow();
```

### format@@0 getCharge

Renvoie int

```zenscript
myMCArrowLooseEvent.getCharge();
```

### Lecteur d'entité

Retourne [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity)

```zenscript
myMCArrowLooseEvent.getEntityPlayer();
```

### Obtenir un joueur

Renvoie : `Joueur`

Retourne [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity)

```zenscript
myMCArrowLooseEvent.getPlayer();
```

### hasAmmo

Retourne un booléen

```zenscript
myMCArrowLooseEvent.hasAmmo();
```

### Il y a un résultat

Détermine si cet événement attend une valeur de résultat significative. Remarque : Les événements avec l'annotation HasResult auront automatiquement ajouté cette méthode pour retourner true.

Retourne un booléen

```zenscript
monMCArrowlooseEvent.hasResult();
```

### est annulable

Détermine si cette fonction est annulable du tout. Renvoie : `Si l'accès à setAnnulled devrait être autorisé
 Note:
 Les événements avec l'annotation annulable auront automatiquement ajouté cette méthode pour retourner true.`

Retourne un booléen

```zenscript
myMCArrowlooseEvent.isCancelable();
```

### est annulé

Détermine si cet événement est annulé et doit arrêter d'exécuter. Renvoie : `L'état actuel annulé`

Retourne un booléen

```zenscript
myMCArrowLooseEvent.isCancled();
```

### setAnnulé

```zenscript
myMCArrowLooseEvent.setCancled(cancel as boolean);
```

| Paramètre | Type de texte | Libellé                    |
| --------- | ------------- | -------------------------- |
| annuler   | boolean       | Aucune description fournie |


### format@@0 setCharge

```zenscript
monMCArrowLooseEvent.setCharge(charge comme int);
```

| Paramètre | Type de texte | Libellé                    |
| --------- | ------------- | -------------------------- |
| Charger   | Indice        | Aucune description fournie |



