# IEventCancelable

Cette interface est étendue par tous les événements qui peuvent être annulés.  
Cela signifie que vous pouvez les annuler en utilisant CrT ou vérifier s'ils ont été annulés.

Notez que les événements qui ont été annulés avant que CrT ne les reçoive ne seront pas vérifiés par les gestionnaires.  
De plus, si vous enregistrez plusieurs gestionnaires et que l'un d'entre eux annule l'événement, les autres gestionnaires CrT le recevront toujours!

## Importation de la classe

Il peut être nécessaire de [importer](/AdvancedFunctions/Import/) la classe pour éviter les erreurs.  
`importer crafttweaker.event.IEventCancelable;`

## Que peut-on faire d'eux?

- `event.cancel();` Méthode, renvoie vide (rien).
- `event.cancceleled;` Getter, renvoie un bool.
- `event.cancceled = true;` Réglage