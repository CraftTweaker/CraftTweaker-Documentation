# EntityStruckByLightning

L'événement EntityStruckByLightning est lancé chaque fois qu'un éclair est sur le point de frapper une entité.

## Classe de l'événement

Vous devrez lancer l'événement dans l'en-tête de la fonction comme cette classe:  
`crafttweaker.event. ntityStruckByLightningEvent`  
Vous pouvez, bien sûr, également [importer](/AdvancedFunctions/Import/) la classe avant et utiliser ce nom alors.

## Extensions d'interface de l'événement

Les événements LivingEntityUseItem implémentent les interfaces suivantes et peuvent également appeler toutes leurs méthodes/getters/setters :

- [ILivingEvent](/Vanilla/Events/Events/ILivingEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)

## ZenGetters/ZenSetters

Les informations suivantes peuvent être récupérées/définies pendant l'événement :

| ZenGetter | Type de retour                        |
| --------- | ------------------------------------- |
| `foudre`  | [IEntity](/Vanilla/Entities/IEntity/) |