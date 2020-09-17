# format@@0 EntityLivingDeathDrops

L'événement EntityLivingDeathDrops est lancé lorsque la mort d'une entité fait apparaître des objets.  
Il peut être annulé pour empêcher l'entité de lâcher quoi que ce soit.

## Classe de l'événement

Vous devrez lancer l'événement dans l'en-tête de la fonction comme cette classe:  
`crafttweaker.event. ntityLivingDeathDropsEvent`  
Vous pouvez, bien sûr, également [importer](/AdvancedFunctions/Import/) la classe avant et utiliser ce nom alors.

## Extensions d'interface de l'événement

Les événements PlayerDeathDrops implémentent les interfaces suivantes et peuvent également appeler toutes leurs méthodes/getters/setters :

- [ILivingEvent](/Vanilla/Events/Events/ILivingEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)

## ZenGetters

Les informations suivantes peuvent être récupérées à partir de l'événement :

| ZenGetter                   | Type de retour                                               |
| --------------------------- | ------------------------------------------------------------ |
| `gouttes`                   | [`Liste<IEntityItem>`](/Vanilla/Entities/IEntityItem/) |
| `Source de dommage`         | [IDamageSource](/Vanilla/Damage/IDamageSource/)              |
| `format@@0 isRécemment Hit` | booléen                                                      |
| `niveau de pillage`         | Indice                                                       |

## Modification des objets

Vous pouvez soit ajouter au Droplist soit le remplacer complètement par un nouveau:

```zenscript
event.drops = //référence à la liste IEntityItem .

//event.addItem(élément IItemStack);
event.addItem(<minecraft:iron_ingot>);

//event.addItem(IEntityItem iten);
event.addItem(<minecraft:iron_ingot>.createEntityItem(event.player.world, event.player.position));
```