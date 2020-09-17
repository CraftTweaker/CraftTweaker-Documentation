# IProcessableEvent

Cette interface est étendue par tous les événements qui peuvent être traités.  
Ces événements doivent être définis comme traités après que tout ce pour quoi ils sont faits a été terminé et que les autres gestionnaires d'événements ne doivent plus modifier l'événement.  
Gardez à l'esprit qu'ils peuvent encore !

## Importation de la classe

Il peut être nécessaire de [importer](/AdvancedFunctions/Import/) la classe pour éviter les erreurs.  
`importer crafttweaker.event.IPlayerEvent ;`

## Qu'est-ce que l'on peut faire avec celles-ci

- `event.process();` méthode, renvoie vide (rien)
- `event.processed;` getter, renvoie un bool