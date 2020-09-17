# MCItemTooltipEvent

Cette classe a été ajoutée par un mod avec le mod-id `crafttweaker`. Vous devez donc avoir ce mod installé si vous voulez utiliser cette fonctionnalité.

## Importation de la classe
Il pourrait vous être nécessaire d'importer le paquet si vous rencontrez des problèmes (comme lancer un tableau), alors mieux être sûr que désolé et ajouter l'importation.
```zenscript
format@@0 crafttweaker.api.event.entity.player.MCItemTooltipEvent
```

## Constructeurs
```zenscript
new crafttweaker.api.event.entity.player.MCItemTooltipEvent(handler as function.Consumer<crafttweaker.api.event.entity.player.MCItemTooltipEvent>);
```
| Paramètre | Type de texte                                                                                                                     | Libellé                    |
| --------- | --------------------------------------------------------------------------------------------------------------------------------- | -------------------------- |
| handler   | function.Consumer<[crafttweaker.api.event.entity.player.MCItemTooltipEvent](/vanilla/api/event/entity/player/MCItemTooltipEvent)> | Aucune description fournie |



## Méthodes
### Lecteur d'entité

Cet événement est déclenché avec un joueur nul au démarrage lors du remplissage des arborescences de recherche pour les infobulles.

Retourne [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity)

```zenscript
myMCItemTooltipEvent.getEntityPlayer();
```

### getItemStack

L'ItemStack avec l'info-bulle.

Retourne [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
myMCItemTooltipEvent.getItemStack();
```

### Obtenir un joueur

Renvoie : `Joueur`

Retourne [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity)

```zenscript
myMCItemTooltipEvent.getPlayer();
```

### Il y a un résultat

Détermine si cet événement attend une valeur de résultat significative. Remarque : Les événements avec l'annotation HasResult auront automatiquement ajouté cette méthode pour retourner true.

Retourne un booléen

```zenscript
monMCItemTooltipEvent.ha result();
```

### est annulable

Détermine si cette fonction est annulable du tout. Renvoie : `Si l'accès à setAnnulled devrait être autorisé
 Note:
 Les événements avec l'annotation annulable auront automatiquement ajouté cette méthode pour retourner true.`

Retourne un booléen

```zenscript
myMCItemTooltipEvent.isCancelable();
```

### est annulé

Détermine si cet événement est annulé et doit arrêter d'exécuter. Renvoie : `L'état actuel annulé`

Retourne un booléen

```zenscript
L'événement myMCItemTooltipEvent.est annulé();
```

### setAnnulé

```zenscript
myMCItemTooltipEvent.setCancled(cancel as boolean);
```

| Paramètre | Type de texte | Libellé                    |
| --------- | ------------- | -------------------------- |
| annuler   | boolean       | Aucune description fournie |



