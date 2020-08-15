# MCPickupXp

Cette classe a été ajoutée par un mod avec le mod-id `crafttweaker`. Vous devez donc avoir ce mod installé si vous voulez utiliser cette fonctionnalité.

## Importation de la classe
Il pourrait vous être nécessaire d'importer le paquet si vous rencontrez des problèmes (comme lancer un tableau), alors mieux être sûr que désolé et ajouter l'importation.
```zenscript
crafttweaker.api.event.entity.player.PlayerXpEvent.MCPickupXp
```

## Constructeurs
```zenscript
new crafttweaker.api.event.entity.player.PlayerXpEvent.MCPickupXp(handler as function.Consumer<crafttweaker.api.event.entity.player.PlayerXpEvent.MCPickupXp>);
```
| Paramètre | Type de texte                                                                                                                                 | Libellé                    |
| --------- | --------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- |
| handler   | function.Consumer<[crafttweaker.api.event.entity.player.PlayerXpEvent.MCPickupXp](/vanilla/api/event/entity/player/PlayerXpEvent/MCPickupXp)> | Aucune description fournie |



## Méthodes
### Lecteur d'entité

Retourne [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity)

```zenscript
monMCPickupXp.getEntityPlayer();
```

### Obtenir un joueur

Renvoie : `Joueur`

Retourne [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity)

```zenscript
monMCPickupXp.getPlayer();
```

### Il y a un résultat

Détermine si cet événement attend une valeur de résultat significative. Remarque : Les événements avec l'annotation HasResult auront automatiquement ajouté cette méthode pour retourner true.

Retourne un booléen

```zenscript
myMCPickupXp.hasResult();
```

### est annulable

Détermine si cette fonction est annulable du tout. Renvoie : `Si l'accès à setAnnulled devrait être autorisé
 Note:
 Les événements avec l'annotation annulable auront automatiquement ajouté cette méthode pour retourner true.`

Retourne un booléen

```zenscript
monMCPickupXp.est annulable();
```

### est annulé

Détermine si cet événement est annulé et doit arrêter d'exécuter. Renvoie : `L'état actuel annulé`

Retourne un booléen

```zenscript
monMCPickupXp.est annulé();
```

### setAnnulé

```zenscript
monMCPickupXp.setCancled(annuler comme booléen);
```

| Paramètre | Type de texte | Libellé                    |
| --------- | ------------- | -------------------------- |
| annuler   | boolean       | Aucune description fournie |



