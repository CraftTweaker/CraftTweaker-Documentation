# MobGriefing

Cet événement est déclenché chaque fois que des griefs de créatures potentielles sont sur le point de se produire. Il a un **résultat** qui détermine si le comportement par défaut se produit ou non :

- **autoriser**: le chagrin est autorisé
- **refusez**: le deuil est empêché
- **défaut**: le chagrin se produit selon la logique Vanilla.

## Classe de l'événement
Vous devrez lancer l'événement dans l'en-tête de la fonction comme cette classe:  
`crafttweaker.event. obGriefingEvent`  
Vous pouvez, bien sûr, aussi [importer](/AdvancedFunctions/Import/) la classe avant et utiliser ce nom alors.

## Extensions d'interface de l'événement
Les événements MobGriefing implémentent les interfaces suivantes et sont en mesure d'appeler toutes leurs méthodes/getters/setters aussi:

- [ILivingEvent](/Vanilla/Events/Events/ILivingEvent/)
- [IEventHasResult](/Vanilla/Events/Events/IEventHasResult/)
