# Clic-gauche du joueur

L'événement PlayerLeftClickBlock est lancé chaque fois qu'un joueur clique sur un bloc.  
Il peut être annulé pour empêcher tout autre événement de se produire. Si le joueur maintient le clic gauche, l'événement se déclenchera à nouveau même s'il a été annulé. L'annulation de cet événement empêchera le clic gauche d'être enregistré, empêchant le cassage de bloc (mais pas en mode créatif). Si l'événement est annulé, un résultat spécifique de succès, d'échec ou de passe peut être fourni. Par défaut, le résultat est passé.

## Classe de l'événement
Vous devrez lancer l'événement dans l'en-tête de la fonction comme cette classe:  
`crafttweaker.event. layerLeftClickBlockEvent`  
Vous pouvez, bien sûr, également [importer](/AdvancedFunctions/Import/) la classe avant et utiliser ce nom alors.

## Extensions d'interface de l'événement
Les événements PlayerLeftClickBlock implémentent les interfaces suivantes et peuvent également appeler toutes leurs méthodes/getters/setters :

- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)
- [Interagir avec le joueur](/Vanilla/Events/Events/PlayerInteract/)
- [Evénement IPlayer](/Vanilla/Events/Events/IPlayerEvent/)


## ZenGetters & ZenSetters
Les informations suivantes peuvent être récupérées à partir de l'événement :

| ZenGetter                  | ZenSetter                  | Type de type                           |
| -------------------------- | -------------------------- | -------------------------------------- |
| `hitvector`                |                            | [ivector3d](/vanilla/world/ivector3d/) |
| `Bloc d'utilisation`       | `Bloc d'utilisation`       | chaîne ("allow" / "deny" / "default")  |
| `useitem`                  | `useitem`                  | chaîne ("allow" / "deny" / "default")  |
| `Résultat de l'annulation` | `Résultat de l'annulation` | chaîne ("success" / "pass" / "fail")   |

## Méthodes Zen

- `event.cancel()` définit l'événement comme annulé.
