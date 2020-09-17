# EntityLivingFall

L'événement EntityLivingFall est lancé chaque fois qu'une entité est sur le point de tomber.  
Il peut être annulé pour empêcher l'entité de tomber.

## Classe de l'événement

Vous devrez lancer l'événement dans l'en-tête de la fonction comme cette classe:  
`crafttweaker.event. ntityLivingFallEvent`  
Vous pouvez, bien sûr, aussi [importer](/AdvancedFunctions/Import/) la classe avant et utiliser ce nom alors.

## Extensions d'interface de l'événement

Les événements PlayerDeathDrops implémentent les interfaces suivantes et peuvent également appeler toutes leurs méthodes/getters/setters :

- [ILivingEvent](/Vanilla/Events/Events/ILivingEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)

## ZenGetter/ZenSetter

| ZenGetter                | ZenSetter                | Type de texte |
| ------------------------ | ------------------------ | ------------- |
| disance                  | disance                  | flottant      |
| Multiplicateur de dégâts | Multiplicateur de dégâts | flottant      |