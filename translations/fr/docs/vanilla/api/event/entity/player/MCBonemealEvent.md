# format@@0 MCBonemealEvent

Cette classe a été ajoutée par un mod avec le mod-id `crafttweaker`. Vous devez donc avoir ce mod installé si vous voulez utiliser cette fonctionnalité.

## Importation de la classe
Il pourrait vous être nécessaire d'importer le paquet si vous rencontrez des problèmes (comme lancer un tableau), alors mieux être sûr que désolé et ajouter l'importation.
```zenscript
format@@0 crafttweaker.api.event.entity.player.MCBonemealEvent
```

## Constructeurs
```zenscript
new crafttweaker.api.event.entity.player.MCBonemealEvent(handler as function.Consumer<crafttweaker.api.event.entity.player.MCBonemealEvent>);
```
| Paramètre | Type de texte                                                                                                               | Libellé                    |
| --------- | --------------------------------------------------------------------------------------------------------------------------- | -------------------------- |
| handler   | function.Consumer<[crafttweaker.api.event.entity.player.MCBonemealEvent](/vanilla/api/event/entity/player/MCBonemealEvent)> | Aucune description fournie |



## Méthodes
### getBlock

Retourne [crafttweaker.api.block.MCBlockState](/vanilla/api/blocks/MCBlockState)

```zenscript
myMCBonemealEvent.getBlock();
```

### Lecteur d'entité

Retourne [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity)

```zenscript
myMCBonemealEvent.getEntityPlayer();
```

### Obtenir un joueur

Renvoie : `Joueur`

Retourne [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity)

```zenscript
myMCBonemealEvent.getPlayer();
```

### getPos

Retourne [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos)

```zenscript
myMCBonemealEvent.getPos();
```

### getStack

Retourne [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
myMCBonemealEvent.getStack();
```

### Il y a un résultat

Détermine si cet événement attend une valeur de résultat significative. Remarque : Les événements avec l'annotation HasResult auront automatiquement ajouté cette méthode pour retourner true.

Retourne un booléen

```zenscript
myMCBonemealEvent.hasResult();
```

### est annulable

Détermine si cette fonction est annulable du tout. Renvoie : `Si l'accès à setAnnulled devrait être autorisé
 Note:
 Les événements avec l'annotation annulable auront automatiquement ajouté cette méthode pour retourner true.`

Retourne un booléen

```zenscript
myMCBonemealEvent.isCancelable();
```

### est annulé

Détermine si cet événement est annulé et doit arrêter d'exécuter. Renvoie : `L'état actuel annulé`

Retourne un booléen

```zenscript
monMCBonemealEvent est annulé ();
```

### setAnnulé

```zenscript
myMCBonemealEvent.setCancled(cancel as boolean);
```

| Paramètre | Type de texte | Libellé                    |
| --------- | ------------- | -------------------------- |
| annuler   | boolean       | Aucune description fournie |



