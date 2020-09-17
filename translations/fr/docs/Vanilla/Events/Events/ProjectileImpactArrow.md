# format@@0 ProjectileImpactFrow

Cet événement est déclenché chaque fois qu'une flèche de projectile affecte une entité mais avant que les dégâts, etc, soient calculés. C'est **annulable**, et si annulé, l'impact ne sera pas traité.

Diverses valeurs de la flèche d'entité sont disponibles via zengetters, et peuvent être modifiées afin d'ajuster les dégâts, la force de recul, le statut de ramassage et déterminer (ou forcer) un coup critique.

## Importation de la classe
Il peut être nécessaire de [importer](/AdvancedFunctions/Import/) la classe pour éviter les erreurs.  
`importer crafttweaker.event.ProjectileImpactArrowEvent ;`

## Étendre l'événement IEntityEvent
Les événements ProjectileImpactArrow implémentent les interfaces suivantes et peuvent également appeler toutes leurs méthodes/getters/setters :

- [Evénement IProjectile](/Vanilla/Events/Events/IProjectileEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)

## ZenGetters et ZenSetters

Les informations suivantes peuvent être récupérées à partir de l'événement :

| ZenGetter             | ZenSetter                               | Type de texte                           |
| --------------------- | --------------------------------------- | --------------------------------------- |
| `flèche`              |                                         | [IEntity](/Vanilla/Entities/IEntity/)   |
| `Tireur`              |                                         | [IEntity](/Vanilla/Entities/IEntity/)   |
| `endommagement`       | `endommagement`                         | double                                  |
|                       | `Force du back-arrière arrière arrière` | int (défini seulement, pas d'accesseur) |
| `isCritique`          | `isCritique`                            | boolean                                 |
| `Statut du ramassage` |                                         | Chaîne de caractères                    |

## Méthodes supplémentaires

- `format@@0 setPickupDisallowed()`

Empêche la collecte de la flèche en toutes circonstances.

- `setPickupAutorisé()`

Permet de ramasser la flèche à partir de l'endroit où l'entité a atterri.

- `setPickupCreative()`

Ne permet de ramasser la flèche que si le joueur est en mode créatif.
