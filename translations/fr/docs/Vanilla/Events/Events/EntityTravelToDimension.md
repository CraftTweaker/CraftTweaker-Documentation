# TravelTravelTo Dimension

L'événement EntityTravelToDimension est lancé chaque fois qu'une entité est sur le point de voyager dans une autre dimension. Si annulée, l'entité est empêchée de voyager.

## Notes

`event.dimension` contient la dimension à laquelle l'entité est sur le point de voyager.

## Classe de l'événement
You will need to cast the event in the function header as this class:  
`crafttweaker.event.EntityTravelToDimensionEvent` You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## Extensions d'interface de l'événement
Les événements EntityTravelToDimension implémentent les interfaces suivantes et peuvent également appeler toutes leurs méthodes/getters/setters :

- [ILivingEvent](/Vanilla/Events/Events/ILivingEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)

## ZenGetters/ZenSetters
Les informations suivantes peuvent être récupérées/définies pendant l'événement :

| ZenGetter | Type de retour |
| --------- | -------------- |
| `cote`    | Indice         |
