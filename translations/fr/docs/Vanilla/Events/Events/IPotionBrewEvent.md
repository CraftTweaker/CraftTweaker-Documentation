# format@@0 IPotionBrewEvent

Cet événement est prolongé par tous les événements impliquant le stand de brassage, mais pas la fonction basée sur le joueur pour extraire des objets du stand de brassage.

## Importation de la classe
Il peut être nécessaire de [importer](/AdvancedFunctions/Import/) la classe pour éviter les erreurs.  
`importer crafttweaker.event.IPotionBrewEvent ;`

## Que peut-on faire d'eux?

| ZenGetter  | ZenSetter | Type de type |
| ---------- | --------- | ------------ |
| `Longueur` |           | Indice       |

## Méthodes

- [IItemStack](/Vanilla/Items/IItemStack/) `getItem()`

Retourne l'IItemStack contenu dans la liste des éléments du tableau spécifié. Renvoie un IItemStack vide si l'index spécifié est supérieur à `longueur`.

- `setItem(int,` [`IItemStack`](/Vanilla/Items/IItemStack/) `)`

Remplace la pile d'objet à l'index spécifié par l'élément spécifié. Si l'index est plus grand que la longueur du tableau d'éléments, rien ne se produira.
