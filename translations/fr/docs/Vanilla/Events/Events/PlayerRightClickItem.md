# Clic-droit sur un objet

L'événement PlayerRightClickItem est lancé peu de temps avant le lancement de la fonctionnalité d'un objet. Il n'est pas tiré si le joueur cible un bloc ou une entité. Elle peut être annulée pour éviter tout autre événement. Si l'événement est annulé, un résultat spécifique d'autorisation, de refus ou de passage peut être fourni. Par défaut, le résultat est passé.

## Classe de l'événement
Vous devrez lancer l'événement dans l'en-tête de la fonction comme cette classe:  
`crafttweaker.event. layerRightClickItemEvent`  
Vous pouvez, bien sûr, également [importer](/AdvancedFunctions/Import/) la classe avant et utiliser ce nom alors.

## Extensions d'interface de l'événement
Les événements PlayerRightClickItem implémentent les interfaces suivantes et peuvent également appeler toutes leurs méthodes/getters/setters :

- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)
- [Interagir avec le joueur](/Vanilla/Events/Events/PlayerInteract/)

## ZenGetters & ZenSetters
Les informations suivantes peuvent être ajustées lors de l'événement.

| ZenGetter                  | ZenSetter                  | Type de type                          |
| -------------------------- | -------------------------- | ------------------------------------- |
| `Résultat de l'annulation` | `Résultat de l'annulation` | chaîne ("allow" / "deny" / "default") |
