# ProjectileImpactThrowable

Cet événement est déclenché chaque fois qu'un projectile jetable affecte une entité mais avant que les dégâts, etc, soient calculés. C'est **annulable**, et si annulé, l'impact ne sera pas traité.

## Importation de la classe
Il peut être nécessaire de [importer](/AdvancedFunctions/Import/) la classe pour éviter les erreurs.  
`importer crafttweaker.event.ProjectileImpactThrowableEvent ;`

## Étendre l'événement IEntityEvent
ProjectileImpactThrowable Events implémente les interfaces suivantes et peut également appeler toutes leurs méthodes/getters/setters :

- [Evénement IProjectile](/Vanilla/Events/Events/IProjectileEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)

## ZenGetters et ZenSetters

Les informations suivantes peuvent être récupérées à partir de l'événement :

| ZenGetter      | ZenSetter | Type de texte                                             |
| -------------- | --------- | --------------------------------------------------------- |
| `boule de feu` |           | [IEntity](/Vanilla/Entities/IEntity/)                     |
| `Tireur`       |           | [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/) |
