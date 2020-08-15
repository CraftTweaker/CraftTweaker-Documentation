# Evénement de niveau d'enchantement

L'événement EnchantmentLevelSet est lancé lorsque les niveaux des trois enchantements potentiels sont générés dans la table d'enchantement.

## Notes

`event.enchantRow` liste la ligne (1-3) de la table d'enchantement, tandis que `event.originalLevel` représente le niveau original de la ligne. `event.power` est la valeur cumulative des étagères entourant la table d'enchantement, tandis que `event.item` est l'objet enchanté.

`event.level` peut être modifié arbitrairement pour une valeur comprise entre 0 & 30.

## Classe de l'événement
Vous devrez lancer l'événement dans l'en-tête de la fonction comme cette classe:  
`crafttweaker.event. nchantmentLevelSetEvent`  
Vous pouvez, bien sûr, également [importer](/AdvancedFunctions/Import/) la classe avant et utiliser ce nom alors.

## Extensions d'interface de l'événement
Les événements EnchantmentLevelSet implémentent les interfaces suivantes et peuvent également appeler toutes leurs méthodes/getters/setters :

- [IEventPositionnable](/Vanilla/Events/Events/IEventPositionable/)

## ZenGetters

| ZenGetter              | ZenSetter | Type de retour                           |
| ---------------------- | --------- | ---------------------------------------- |
| `monde`                |           | [IWorld](/Vanilla/World/IWorld/)         |
| `Ligne d'enchantement` |           | Indice                                   |
| `Électricité`          |           | Indice                                   |
| `Élément`              |           | [IItemStack](/Vanilla/Items/IItemStack/) |
| `niveau initial`       |           | Indice                                   |
| `niveau`               | `niveau`  | Indice                                   |
