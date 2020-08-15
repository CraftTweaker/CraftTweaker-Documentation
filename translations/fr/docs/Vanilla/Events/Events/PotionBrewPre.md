# format@@0 PotionBrewPre

Cet événement est déclenché juste avant la cuisson de la vanille, et, si **annulé**, empêchera la cuisson de se produire. En cas d'annulation mais de modification des éléments, alors [PotionBrewPostEvent](/Vanilla/Events/Events/PotionBrewPost/) sera automatiquement déclenché. Cela permet un simulacre de brassage "modded".

**Note**: cet événement est déclenché à droite lorsque les calculs de la recette ont lieu, lorsque le "minuteur" atteint "progrès maximum".

## Classe de l'événement
You will need to cast the event in the function header as this class:  
`crafttweaker.event.PotionBrewPreEvent` You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## Extensions d'interface de l'événement
Les événements PotionBrewPre implémentent les interfaces suivantes et peuvent également appeler toutes leurs méthodes/getters/setters :

- [format@@0 IPotionBrewEvent](/Vanilla/Events/Events/IPotionBrewEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)
