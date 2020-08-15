# EntityLivingDeath

L'événement EntityLivingDeath est lancé chaque fois qu'une entité est sur le point de mourir.  
Il peut être annulé pour laisser l'entité vivre.

## Classe de l'événement

Vous devrez lancer l'événement dans l'en-tête de la fonction comme cette classe:  
`crafttweaker.event. ntityLivingDeathEvent`  
Vous pouvez, bien sûr, également [importer](/AdvancedFunctions/Import/) la classe avant et utiliser ce nom alors.

## Extensions d'interface de l'événement

Les événements PlayerDeathDrops implémentent les interfaces suivantes et peuvent également appeler toutes leurs méthodes/getters/setters :

- [ILivingEvent](/Vanilla/Events/Events/ILivingEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)

## ZenGetters

| ZenGetter         | Type de texte                                   |
| ----------------- | ----------------------------------------------- |
| Source de dommage | [IDamageSource](/Vanilla/Damage/IDamageSource/) |