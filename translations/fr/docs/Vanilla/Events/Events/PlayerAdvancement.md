# Avancement des joueurs

L'Evénement d'avancement des joueurs est lancé chaque fois qu'un joueur reçoit un Avancement.

## Classe de l'événement

Vous devrez lancer l'événement dans l'en-tête de la fonction comme cette classe:  
`crafttweaker.event. layerAdvancementEvent`  
Vous pouvez, bien sûr, également [importer](/AdvancedFunctions/Import/) la classe avant et utiliser ce nom alors.

## Extensions d'interface de l'événement

Les événements PlayerAdvancement implémentent les interfaces suivantes et peuvent également appeler toutes leurs méthodes/getters/setters :

- [Evénement IPlayer](/Vanilla/Events/Events/IPlayerEvent/)

## ZenGetters

Les informations suivantes peuvent être récupérées à partir de l'événement :

| ZenGetter | Type de retour       |
| --------- | -------------------- |
| `id`      | chaîne de caractères |

## Id

En dehors de la fonctionnalité que le PlayerEvent expose vous pouvez obtenir l'ID de l'avancement en tant que chaîne.

Cela peut par exemple être une chaîne de caractères comme

```zenscript
"minecraft:story/mine_diamond"
```