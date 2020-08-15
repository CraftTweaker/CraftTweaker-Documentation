# MinecartCollision

MinecartCollisionEvent est tiré chaque fois qu'un minecart entre en collision avec une entité.

## Classe de l'événement
Vous devrez lancer l'événement dans l'en-tête de la fonction comme cette classe:  
`crafttweaker.event. inecartCollisionEvent`  
Vous pouvez, bien sûr, également [importer](/AdvancedFunctions/Import/) la classe avant et utiliser ce nom alors.

## Extensions d'interface de l'événement
MinecartCollision Events implémente les interfaces suivantes et peut également appeler toutes leurs méthodes/getters/setters :

- [format@@0 IMinecartEvent](/Vanilla/Events/Events/IMinecartEvent/)

## ZenGetters

| ZenGetter   | Type de texte                         |
| ----------- | ------------------------------------- |
| `collision` | [IEntity](/Vanilla/Entities/IEntity/) |
