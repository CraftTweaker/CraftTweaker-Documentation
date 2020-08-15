# Evénement IPlayer

Cette interface est étendue par tous les événements qui ont un joueur.  
Cela signifie que vous pouvez utiliser l'accessoire ci-dessous pour accéder au joueur.

## Importation de la classe

Il peut être nécessaire de [importer](/AdvancedFunctions/Import/) la classe pour éviter les erreurs.  
`importer crafttweaker.event.IPlayerEvent ;`

## Étendre l'événement ILivingEvent

Cette interface étend [ILivingEvent](/Vanilla/Events/Events/ILivingEvent/), ce qui signifie que toutes les fonctionnalités proposées par ILivingEvent sont également présentes dans IPlayerEvent

## ZenGetters

| Nom    | Type de type                         |
| ------ | ------------------------------------ |
| Joueur | [IPlayer](/Vanilla/Players/IPlayer/) |