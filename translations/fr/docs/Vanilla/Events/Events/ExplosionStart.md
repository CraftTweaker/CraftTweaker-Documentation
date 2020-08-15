# Début de l'explosion

L'événement ExplosionStart est lancé peu avant le début d'une explosion. Si annulée, l'explosion ne se produira pas.

## Classe de l'événement
Vous devrez lancer l'événement dans l'en-tête de la fonction comme cette classe:  
`crafttweaker.event. xplosionStartEvent`  
Vous pouvez, bien sûr, également [importer](/AdvancedFunctions/Import/) la classe avant et utiliser ce nom alors.

## Extensions d'interface de l'événement
Les événements ExplosionStart implémentent les interfaces suivantes et peuvent également appeler toutes leurs méthodes/getters/setters :

- [format@@0 IExplosionEvent](/Vanilla/Events/Events/IExplosionEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)
