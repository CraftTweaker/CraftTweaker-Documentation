# L'entité vivante a été attaquée

L'événement EntityLivingAttacked est lancé chaque fois qu'une entité est attaquée.  
Il peut être annulé pour empêcher l'entité de subir des dégâts.

## Classe de l'événement

You will need to cast the event in the function header as this class:  
`crafttweaker.event.EntityLivingAttackedEvent`  
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