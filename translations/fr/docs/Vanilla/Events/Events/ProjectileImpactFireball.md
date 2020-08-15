# format@@0 ProjectileImpactFireball

Cet événement est déclenché chaque fois qu'une boule de feu affecte une entité mais avant que les dégâts, etc, soient calculés. C'est **annulable**, et si annulé, l'impact ne sera pas traité.

Les valeurs d'accélération de l'entité Fireball sont disponibles via zengetters.

## Importation de la classe
Il peut être nécessaire de [importer](/AdvancedFunctions/Import/) la classe pour éviter les erreurs.  
`importer crafttweaker.event.ProjectileImpactFireballEvent ;`

## Étendre l'événement IEntityEvent
Les événements ProjectileImpactFireball implémentent les interfaces suivantes et peuvent également appeler toutes leurs méthodes/getters/setters :

- [Evénement IProjectile](/Vanilla/Events/Events/IProjectileEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)

## ZenGetters et ZenSetters

Les informations suivantes peuvent être récupérées à partir de l'événement :

| ZenGetter                 | ZenSetter                 | Type de texte                                             |
| ------------------------- | ------------------------- | --------------------------------------------------------- |
| `boule de feu`            |                           | [IEntity](/Vanilla/Entities/IEntity/)                     |
| `Tireur`                  |                           | [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/) |
| `accélération unnamed@@0` | `accélération unnamed@@0` | double                                                    |
| `accélérationY`           | `accélérationY`           | double                                                    |
| `accelerationZ`           | `accelerationZ`           | double                                                    |
