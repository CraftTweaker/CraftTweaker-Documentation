# Interagir avec wagon

MinecartInteractEvent est lancé chaque fois qu'un joueur commence à interagir avec un minecart. L'événement est **annulable**, ce qui empêchera l'ouverture du conteneur.

## Classe de l'événement
Vous devrez lancer l'événement dans l'en-tête de la fonction comme cette classe:  
`crafttweaker.event. inecartInteractEvent`  
Vous pouvez, bien sûr, également [importer](/AdvancedFunctions/Import/) la classe avant et utiliser ce nom alors.

## Extensions d'interface de l'événement
Les événements MinecartInteract implémentent les interfaces suivantes et peuvent également appeler toutes leurs méthodes/getters/setters :

- [format@@0 IMinecartEvent](/Vanilla/Events/Events/IMinecartEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)


## ZenGetters

| ZenGetter | Type de texte                            |
| --------- | ---------------------------------------- |
| `Joueur`  | [IPlayer](/Vanilla/Players/IPlayer/)     |
| `Élément` | [IItemStack](/Vanilla/Items/IItemStack/) |
| `main`    | Chaîne de caractères                     |
