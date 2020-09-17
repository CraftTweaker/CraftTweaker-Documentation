# LivingEntityUseItem

L'événement LivingEntityUseItem est déclenché chaque fois qu'une entité commence à utiliser un élément, cesse de le faire, une fois que le joueur a fini d'utiliser un objet et chaque tick il utilise l'objet.  
Puisque cela serait appelé beaucoup trop souvent, il y a 4 sous-événements qui ne sont appelés que dans leur cas spécifique.

## Importation de la classe

Il peut être nécessaire de [importer](/AdvancedFunctions/Import/) la classe pour éviter les erreurs.

```zenscript
//Événement de base
import crafttweaker.event.EntityLivingUseItemEvent.All;

//Événements spécifiques
import crafttweaker.event.EntityLivingUseItemEvent.Start;
import crafttweaker.event.EntityLivingUseItemEvent.Tick;
import crafttweaker.event.EntityLivingUseItemEvent.Stop;
import crafttweaker.event.EntityLivingUseItemEvent.Finish;
```

## Extensions d'interface de l'événement

Les événements LivingEntityUseItem implémentent les interfaces suivantes et peuvent également appeler toutes leurs méthodes/getters/setters :

- [ILivingEvent](/Vanilla/Events/Events/ILivingEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)

## ZenGetters/ZenSetters

Les informations suivantes peuvent être récupérées/définies pendant l'événement :

| ZenGetter  | Type de retour                           |
| ---------- | ---------------------------------------- |
| `Joueur`   | [IPlayer](/Vanilla/Players/IPlayer/)     |
| `isPlayer` | booléen                                  |
| `Élément`  | [IItemStack](/Vanilla/Items/IItemStack/) |
| `durée`    | Indice                                   |

| ZenSetter | Type de paramètre |
| --------- | ----------------- |
| `durée`   | Indice            |