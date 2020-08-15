# format@@0 PlayerDeathDrops

L'Evénement JoueurDeathDrops est lancé chaque fois que les objets d'un joueur tombent au sol en raison de la mort du joueur.

## Classe de l'événement

Vous devrez lancer l'événement dans l'en-tête de la fonction comme cette classe:  
`crafttweaker.event. layerDeathDropsEvent`  
Vous pouvez, bien sûr, également [importer](/AdvancedFunctions/Import/) la classe avant et utiliser ce nom alors.

## Extensions d'interface de l'événement

Les événements PlayerDeathDrops implémentent les interfaces suivantes et peuvent également appeler toutes leurs méthodes/getters/setters :

- [Evénement IPlayer](/Vanilla/Events/Events/IPlayerEvent/)

## ZenGetters

Les informations suivantes peuvent être récupérées à partir de l'événement :

| ZenGetter           | Type de retour                                               |
| ------------------- | ------------------------------------------------------------ |
| `Joueur`            | [IPlayer](/Vanilla/Players/IPlayer/)                         |
| `Eléments`          | [`Liste<IEntityItem>`](/Vanilla/Entities/IEntityItem/) |
| `Source de dommage` | [IDamageSource](/Vanilla/Damage/IDamageSource/)              |

## Modification des objets

Vous pouvez soit ajouter au Droplist soit le remplacer complètement par un nouveau:

```zenscript
event.items = //référence à la liste IEntityItem .

//event.addItem(élément IItemStack);
event.addItem(<minecraft:iron_ingot>);

//event.addItem(IEntityItem iten);
event.addItem(<minecraft:iron_ingot>.createEntityItem(event.player.world, event.player.position));
```