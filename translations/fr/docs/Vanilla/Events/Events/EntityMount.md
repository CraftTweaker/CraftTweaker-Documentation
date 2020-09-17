# EntityMountEvent

L'événement EntityMount est déclenché chaque fois qu'une entité est montée ou démontée. Si annulée, l'entité est empêchée de monter (ou de démonter).

## Classe de l'événement
You will need to cast the event in the function header as this class:  
`crafttweaker.event.EntityMountEvent` You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## Extensions d'interface de l'événement
Les événements EntityMountEvent implémentent les interfaces suivantes et peuvent également appeler toutes leurs méthodes/getters/setters :

- [ILivingEvent](/Vanilla/Events/Events/ILivingEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)

## ZenGetters/ZenSetters
Les informations suivantes peuvent être récupérées/définies pendant l'événement :

| ZenGetter        | Type de retour                        |
| ---------------- | ------------------------------------- |
| `monde`          | [IWorld](/Vanilla/World/IWorld/)      |
| `mountingEntity` | [IEntity](/Vanilla/Entities/IEntity/) |
| `Entité montée`  | [IEntity](/Vanilla/Entities/IEntity/) |
| `isMounting`     | boolean                               |
| `Démontage`      | boolean                               |
