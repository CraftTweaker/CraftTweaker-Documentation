# Evénement d'impact IProjectile

Cette interface est étendue par tous les événements liés aux projectiles (tels que les boules de feu, les flèches et les objets jetables).

## Importation de la classe
Il peut être nécessaire de [importer](/AdvancedFunctions/Import/) la classe pour éviter les erreurs.  
`importer crafttweaker.event.IProjectileImpactEvent ;`

## Étendre l'événement IEntityEvent
Cette interface étend [IEntityEvent](/Vanilla/Events/Events/IEntityEvent/), ce qui signifie que toutes les fonctionnalités qu'IEntityEvent offre sont également présentes dans IProjectileImpactEvent.

## ZenGetters

| Nom        | Type de type                                               |
| ---------- | ---------------------------------------------------------- |
| `rayTrace` | [Résultat de l'IRayTrace](/Vanilla/World/IRayTraceResult/) |
