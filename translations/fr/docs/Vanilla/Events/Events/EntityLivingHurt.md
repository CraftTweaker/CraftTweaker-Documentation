# L'entité est en vie

L'événement EntityLivingHurt est lancé chaque fois qu'une entité est sur le point d'être blessée.  
Il peut être annulé pour empêcher l'entité d'être blessée.

## Classe de l'événement

You will need to cast the event in the function header as this class:  
`crafttweaker.event.EntityLivingHurtEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## Extensions d'interface de l'événement

Les événements PlayerDeathDrops implémentent les interfaces suivantes et peuvent également appeler toutes leurs méthodes/getters/setters :

- [ILivingEvent](/Vanilla/Events/Events/ILivingEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)

## ZenGetters

| ZenGetter         | Type de texte                                   |
| ----------------- | ----------------------------------------------- |
| Source de dommage | [IDamageSource](/Vanilla/Damage/IDamageSource/) |
| montant           | flottant                                        |