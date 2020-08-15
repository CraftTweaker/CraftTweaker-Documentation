# format@@0 MCCriticalHitEvent

Cette classe a été ajoutée par un mod avec le mod-id `crafttweaker`. Vous devez donc avoir ce mod installé si vous voulez utiliser cette fonctionnalité.

## Importation de la classe
Il pourrait vous être nécessaire d'importer le paquet si vous rencontrez des problèmes (comme lancer un tableau), alors mieux être sûr que désolé et ajouter l'importation.
```zenscript
format@@0 crafttweaker.api.event.entity.player.MCCriticalHitEvent
```

## Constructeurs
```zenscript
new crafttweaker.api.event.entity.player.MCCriticalHitEvent(handler as function.Consumer<crafttweaker.api.event.entity.player.MCCriticalHitEvent>);
```
| Paramètre | Type de texte                                                                                                                     | Libellé                    |
| --------- | --------------------------------------------------------------------------------------------------------------------------------- | -------------------------- |
| handler   | function.Consumer<[crafttweaker.api.event.entity.player.MCCriticalHitEvent](/vanilla/api/event/entity/player/MCCriticalHitEvent)> | Aucune description fournie |



## Méthodes
### getDamageModifier

Le modificateur de dégâts pour le coup.<br> C'est par défaut 1.5F pour les coups ciritcal et 1F pour les coups normaux .

Renvoie un flottant

```zenscript
myMCCriticalHitEvent.getDamageModifier();
```

### Lecteur d'entité

Retourne [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity)

```zenscript
myMCCriticalHitEvent.getEntityPlayer();
```

### getOldDamageModifier

Le modificateur de dégâts orignaux pour le coup de coup de toutes les modifications.<br> C'est 1.5F pour les coups ciritals et 1F pour les coups normaux.

Renvoie un flottant

```zenscript
myMCCriticalHitEvent.getOldDamageModifier();
```

### Obtenir un joueur

Renvoie : `Joueur`

Retourne [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity)

```zenscript
myMCCriticalHitEvent.getPlayer();
```

### Il y a un résultat

Détermine si cet événement attend une valeur de résultat significative. Remarque : Les événements avec l'annotation HasResult auront automatiquement ajouté cette méthode pour retourner true.

Retourne un booléen

```zenscript
myMCCriticalHitEvent.hasResult();
```

### est annulable

Détermine si cette fonction est annulable du tout. Renvoie : `Si l'accès à setAnnulled devrait être autorisé
 Note:
 Les événements avec l'annotation annulable auront automatiquement ajouté cette méthode pour retourner true.`

Retourne un booléen

```zenscript
myMCCriticalHitEvent.isCancelable();
```

### est annulé

Détermine si cet événement est annulé et doit arrêter d'exécuter. Renvoie : `L'état actuel annulé`

Retourne un booléen

```zenscript
monMCCriticalHitEvent est annulé ();
```

### isVanillaCritical

Renvoie vrai si ce coup a été critique par la vanille

Retourne un booléen

```zenscript
myMCCriticalHitEvent.isVanillaCritical();
```

### setAnnulé

```zenscript
myMCCriticalHitEvent.setCancled(cancel as boolean);
```

| Paramètre | Type de texte | Libellé                    |
| --------- | ------------- | -------------------------- |
| annuler   | boolean       | Aucune description fournie |


### format@@0 setDamageModifier

Ce paramètre définit le multiplicateur de dégâts pour le coup. Si vous le mettez à 0, alors les particules sont toujours générées mais ne sont pas endommagées.

```zenscript
myMCCriticalHitEvent.setDamageModifier(mod comme float);
```

| Paramètre | Type de texte | Libellé                    |
| --------- | ------------- | -------------------------- |
| mod       | flottant      | Aucune description fournie |



