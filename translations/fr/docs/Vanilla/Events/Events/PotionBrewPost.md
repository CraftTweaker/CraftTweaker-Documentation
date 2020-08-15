# Poteau-brasseur

Cet événement est cuit immédiatement après qu'une potion ait été « brassée » par l'entité de tuiles de la table de brassage, lorsque les éléments de sortie ont déjà été remplacés. Si la [PotionBrewPreEvent](/Vanilla/Events/Events/PotionBrewPre/) a été annulée mais que les objets présents dans le stand de brassage ont été modifiés, cet événement sera également déclenché.

Si le pré-événement est annulé sans modifier les itemstacks, cet événement ne sera pas déclenché ****.

## Classe de l'événement
You will need to cast the event in the function header as this class:  
`crafttweaker.event.PotionBrewPostEvent` You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## Extensions d'interface de l'événement
Les événements PotionBrewPost implémentent les interfaces suivantes et peuvent également appeler toutes leurs méthodes/getters/setters :

- [format@@0 IPotionBrewEvent](/Vanilla/Events/Events/IPotionBrewEvent/)
