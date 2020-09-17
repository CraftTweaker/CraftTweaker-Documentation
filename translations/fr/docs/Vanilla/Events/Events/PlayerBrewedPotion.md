# format@@0 PlayerBrewedPotion

L'événement PlayerBrewedPotion est lancé chaque fois qu'un joueur sort une potion du stand de brassage.

## Classe de l'événement

Vous devrez lancer l'événement dans l'en-tête de la fonction comme cette classe:  
`crafttweaker.event. layerBrewedPotionEvent`  
Vous pouvez, bien sûr, également [importer](/AdvancedFunctions/Import/) la classe avant et utiliser ce nom alors.

## Extensions d'interface de l'événement

Les événements PlayerBrewedPotion implémentent les interfaces suivantes et peuvent également appeler toutes leurs méthodes/getters/setters :

- [Evénement IPlayer](/Vanilla/Events/Events/IPlayerEvent/)

## ZenGetters

Les informations suivantes peuvent être récupérées à partir de l'événement :

| ZenGetter | Type de retour                           |
| --------- | ---------------------------------------- |
| `Joueur`  | [IPlayer](/Vanilla/Players/IPlayer/)     |
| `potion`  | [IItemStack](/Vanilla/Items/IItemStack/) |
| `main`    | chaîne de caractères                     |