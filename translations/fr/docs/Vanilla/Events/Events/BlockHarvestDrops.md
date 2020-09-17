# format@@0 BlockHarvestDropsEvent

L'événement BlockHarvestDrops est lancé chaque fois qu'un bloc est sur le point de lâcher ses objets.  
Vous pouvez modifier la liste de blocage ainsi que la chance de drop globale. Réglez ce dernier à 1 si vous faites toutes les chances de manipulation à l'avance.

## Classe de l'événement

Vous devrez lancer l'événement dans l'en-tête de la fonction comme cette classe:  
`crafttweaker.event. lockHarvestDropsEvénement`  
Vous pouvez, bien sûr, également [importer](/AdvancedFunctions/Import/) la classe avant et utiliser ce nom alors.

## Extensions d'interface de l'événement

Les événements BlockHarvestDrops implémentent les interfaces suivantes et peuvent également appeler toutes leurs méthodes/getters/setters :

- [Évènement IBlock](/Vanilla/Events/Events/IBlockEvent/)

## ZenGetters

Les informations suivantes peuvent être récupérées à partir de l'événement :

| ZenGetter              | ZenSetter              | Type de texte                                      |
| ---------------------- | ---------------------- | -------------------------------------------------- |
| `Joueur`               |                        | [IPlayer](/Vanilla/Players/IPlayer/)               |
| `isPlayer`             |                        | booléen                                            |
| `Touche en soie`       |                        | booléen                                            |
| `niveau de chance`     |                        | Indice                                             |
| `gouttes`              | `gouttes`              | Liste <[IItemStack](/Vanilla/Items/IItemStack/)\> |
| `format@@0 dropChance` | `format@@0 dropChance` | flottant                                           |

## Ajout d'un élément à la liste

Vous pouvez soit ajouterAssigner la liste ou utiliser la méthode pour ajouter un élément à la liste:

```zenscript
event.drops += <minecraft:coal>;
event.addItem(<minecraft:coal>);
```