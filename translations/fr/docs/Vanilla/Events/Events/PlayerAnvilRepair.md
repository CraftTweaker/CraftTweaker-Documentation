# format@@0 PlayerAnvilRepair

L'événement PlayerAnvilRepair est lancé chaque fois qu'un joueur fabrique quelque chose dans l'enclume.  
Vous pouvez changer les chances que l'enclume soit endommagée.

## Classe de l'événement

Vous devrez lancer l'événement dans l'en-tête de la fonction comme cette classe:  
`crafttweaker.event. layerAnvilRepairEvent`  
Vous pouvez, bien sûr, également [importer](/AdvancedFunctions/Import/) la classe avant et utiliser ce nom alors.

## Extensions d'interface de l'événement

Les événements PlayerAnvilRepair implémentent les interfaces suivantes et peuvent également appeler toutes leurs méthodes/getters/setters :

- [Evénement IPlayer](/Vanilla/Events/Events/IPlayerEvent/)

## ZenGetters

Les informations suivantes peuvent être récupérées à partir de l'événement :

| ZenGetter           | ZenSetter           | Type de retour                           |
| ------------------- | ------------------- | ---------------------------------------- |
| `Joueur`            |                     | [IPlayer](/Vanilla/Players/IPlayer/)     |
| `itemInput`         |                     | [IItemStack](/Vanilla/Items/IItemStack/) |
| `Ingrédient`        |                     | [IItemStack](/Vanilla/Items/IItemStack/) |
| `itenResult`        |                     | [IItemStack](/Vanilla/Items/IItemStack/) |
| `Chance de rupture` | `Chance de rupture` | flottant                                 |