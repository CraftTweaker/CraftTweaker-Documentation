# Clic droit sur l'élément

Cette classe a été ajoutée par un mod avec le mod-id `crafttweaker`. Vous devez donc avoir ce mod installé si vous voulez utiliser cette fonctionnalité.

## Importation de la classe
Il pourrait vous être nécessaire d'importer le paquet si vous rencontrez des problèmes (comme lancer un tableau), alors mieux être sûr que désolé et ajouter l'importation.
```zenscript
format@@0 crafttweaker.api.event.entity.player.PlayerInteractEvent.MCRightClickItem
```

## Constructeurs
```zenscript
new crafttweaker.api.event.entity.player.PlayerInteractEvent.MCRightClickItem(handler as function.Consumer<crafttweaker.api.event.entity.player.PlayerInteractEvent.MCRightClickItem>);
```
| Paramètre | Type de texte                                                                                                                                                         | Libellé                    |
| --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- |
| handler   | function.Consumer<[crafttweaker.api.event.entity.player.PlayerInteractEvent.MCRightClickItem](/vanilla/api/event/entity/player/PlayerInteractEvent/MCRightClickItem)> | Aucune description fournie |



## Méthodes
### Lecteur d'entité

Retourne [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity)

```zenscript
myMCRightClickItem.getEntityPlayer();
```

### getFace

Renvoie : `Le visage impliqué dans cette interaction. Pour toutes les interactions avec les non-blocs, cela renverra nulle.`

Retourne [crafttweaker.api.util.Direction](/vanilla/api/util/Direction)

```zenscript
myMCRightClickItem.getFace();
```

### getItemStack

Renvoie : `La pile de contenu impliquée dans cette interaction, {` @code ItemStack.EMPTY} si la main était vide.

Retourne [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
myMCRightClickItem.getItemStack();
```

### Obtenir un joueur

Renvoie : `Joueur`

Retourne [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity)

```zenscript
myMCRightClickItem.getPlayer();
```

### getPos

Si l'interaction était sur une entité, sera un BlockPos centré sur l'entité. Si l'interaction était sur un bloc, sera la position de ce bloc. Sinon, sera un BlockPos centré sur le joueur. Ne sera jamais nul. Renvoie : `La position impliquée dans cette interaction.`

Retourne [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos)

```zenscript
myMCRightClickItem.getPos();
```

### Il y a un résultat

Détermine si cet événement attend une valeur de résultat significative. Remarque : Les événements avec l'annotation HasResult auront automatiquement ajouté cette méthode pour retourner true.

Retourne un booléen

```zenscript
myCCdrotItem.h_result();
```

### est annulable

Détermine si cette fonction est annulable du tout. Renvoie : `Si l'accès à setAnnulled devrait être autorisé
 Note:
 Les événements avec l'annotation annulable auront automatiquement ajouté cette méthode pour retourner true.`

Retourne un booléen

```zenscript
myCCCDrotClickItem.isCancelable();
```

### est annulé

Détermine si cet événement est annulé et doit arrêter d'exécuter. Renvoie : `L'état actuel annulé`

Retourne un booléen

```zenscript
myMCRightClickItem.isCancled();
```

### setAnnulé

```zenscript
myMCRightClickItem.setCancled(cancel as boolean);
```

| Paramètre | Type de texte | Libellé                    |
| --------- | ------------- | -------------------------- |
| annuler   | boolean       | Aucune description fournie |



