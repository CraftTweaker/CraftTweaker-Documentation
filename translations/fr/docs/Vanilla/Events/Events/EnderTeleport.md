# Téléportation de l'Ender

L'événement EnderTeleport est lancé chaque fois qu'un enderman ou un shulker se téléporte.  
Il est également tiré chaque fois qu'un joueur se téléporte en utilisant une enderpearl (il est possible que d'autres mods allument également cet événement.)

## Classe de l'événement

Vous devrez lancer l'événement dans l'en-tête de la fonction comme cette classe:  
`crafttweaker.event. nderTeleportEvent`  
Vous pouvez, bien sûr, également [importer](/AdvancedFunctions/Import/) la classe avant et utiliser ce nom alors.

## Extensions d'interface de l'événement

Les événements LivingEntityUseItem implémentent les interfaces suivantes et peuvent également appeler toutes leurs méthodes/getters/setters :

- [ILivingEvent](/Vanilla/Events/Events/ILivingEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)

## ZenGetters/ZenSetters

Les informations suivantes peuvent être récupérées/définies pendant l'événement :

| ZenGetter           | ZenSetter           | Type de texte |
| ------------------- | ------------------- | ------------- |
| `targetX`           | `targetX`           | double        |
| `targetY`           | `targetY`           | double        |
| `format@@0 targetZ` | `format@@0 targetZ` | double        |
| `Dégâts d'attaque`  | `Dégâts d'attaque`  | flottant      |