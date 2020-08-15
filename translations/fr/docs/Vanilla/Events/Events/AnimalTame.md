# AnimalTame

Cet événement est tiré pour déterminer si un animal va être apprivoisé. Si annulé, **l'apprivoisement ne réussit pas**. Dans le cas contraire, il sert simplement de notification des apprivoisements qui ont lieu.

## Classe de l'événement
Vous devrez lancer l'événement dans l'en-tête de la fonction comme cette classe:  
`crafttweaker.event. nimalTameEvent`  
Vous pouvez, bien sûr, également [importer](/AdvancedFunctions/Import/) la classe avant et utiliser ce nom alors.

## Extensions d'interface de l'événement
AnimalTame Events implémente les interfaces suivantes et peut également appeler toutes leurs méthodes/getters/setters :

- [Evénement IPlayer](/Vanilla/Events/Events/IPlayerEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)


## ZenGetters/ZenSetters
Les informations suivantes peuvent être récupérées/définies pendant l'événement :

| ZenGetter | ZenSetter | Type de texte                                     |
| --------- | --------- | ------------------------------------------------- |
| `animal`  |           | [IEntityAnimal](/Vanilla/Entities/IEntityAnimal/) |
| `animal`  |           | [IEntityAnimal](/Vanilla/Entities/IEntityAnimal/) |
| `Joueur`  |           | [IPlayer](/Vanilla/Players/IPlayer/)              |
