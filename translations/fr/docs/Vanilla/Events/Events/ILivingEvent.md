# ILivingEvent

Cette interface est étendue par tous les événements qui peuvent avoir une entité vivante centrale.

## Importation de la classe

Il peut être nécessaire de [importer](/AdvancedFunctions/Import/) la classe pour éviter les erreurs.  
`importer crafttweaker.event.ILivingEvent ;`

## Étendre l'événement IEntityEvent

Cette interface étend [IEntityEvent](/Vanilla/Events/Events/IEntityEvent/), ce qui signifie que toutes les fonctionnalités que IEntityEvent offre sont également présentes dans ILivingEvent

## ZenGetters

| Nom              | Type de type                                              |
| ---------------- | --------------------------------------------------------- |
| entityLivingBase | [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/) |