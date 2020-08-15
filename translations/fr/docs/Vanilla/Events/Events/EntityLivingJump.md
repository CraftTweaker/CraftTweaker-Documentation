# format@@0 EntityLivingJump

L'événement EntityLivingJump est lancé chaque fois qu'une entité saute.

## Classe de l'événement

Vous devrez lancer l'événement dans l'en-tête de la fonction comme cette classe:  
`crafttweaker.event. ntityLivingJumpEvent`  
Vous pouvez, bien sûr, également [importer](/AdvancedFunctions/Import/) la classe avant et utiliser ce nom alors.

## Extensions d'interface de l'événement

Les événements PlayerDeathDrops implémentent les interfaces suivantes et peuvent également appeler toutes leurs méthodes/getters/setters :

- [ILivingEvent](/Vanilla/Events/Events/ILivingEvent/)