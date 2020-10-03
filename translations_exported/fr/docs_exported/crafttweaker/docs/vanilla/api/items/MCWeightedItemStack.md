# MCWeightedItemStack

Un ItemStack avec une chance, généralement utilisé pour les sorties de recettes. <p> Attention, si la pile utilisée pour créer la WeightedStack était mutable, alors le réglage de taille mutera également la pile originale !

This class was added by a mod with mod-id `crafttweaker`. So you need to have this mod installed if you want to use this feature.

## Importing the class
It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zenscript
format@@0 crafttweaker.api.item.MCWeightedItemStack
```

## Implemented Interfaces
MCWeightedItemStack implémente les interfaces suivantes. That means any method available to them can also be used on this class.
- [crafttweaker.api.brackets.CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)

## Constructors
Crée manuellement la weightedItemStack. Habituellement, vous pouvez utiliser l'opérateur ou la méthode `.weight(weight)` de IItemStack, bien que
```zenscript
new crafttweaker.api.item.MCWeightedItemStack(itemStack as crafttweaker.api.item.IItemStack, weight as double);
new crafttweaker.api.item.MCWeightedItemStack(<item:minecraft:bedrock>, 0.5D);
```
| Parameter           | Type                                                              | Description                         |
| ------------------- | ----------------------------------------------------------------- | ----------------------------------- |
| format@@0 itemStack | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | La pile                             |
| weight              | double                                                            | La chance, entre 0 (0%) et 1 (100%) |



## Methods
### weight

Crée une nouvelle pile pondérée avec le poids donné

 Renvoie : `Une nouvelle WeightedItemStack`

Type de retour : [crafttweaker.api.item.MCWeightedItemStack](/vanilla/api/items/MCWeightedItemStack)

```zenscript
<item:minecraft:bedrock>.weight(0.5D).weight(newWeight as double);
<item:minecraft:bedrock>.weight(0.5D).weight(0.75D);
```

| Parameter     | Type   | Description    |
| ------------- | ------ | -------------- |
| Nouveau poids | double | Le pourcentage |



## Properties

| Name          | Type                                                              | Has Getter | Has Setter |
| ------------- | ----------------------------------------------------------------- | ---------- | ---------- |
| commandString | String                                                            | true       | false      |
| stack         | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | true       | false      |
| weight        | double                                                            | true       | false      |

## Operators
### MUL

Définit le montant de la pile. <p> Si la pile originale était mutable, elle mute également la taille de la pile originale.

 Renvoie : `Une nouvelle WeightedItemStack`

```zenscript
<item:minecraft:bedrock>.weight(0.5D) * newAmount as int
<item:minecraft:bedrock>.weight(0.5D) * 5
```

| Parameter       | Type | Description                   |
| --------------- | ---- | ----------------------------- |
| Nouveau montant | int  | La nouvelle taille de la pile |
### MOD

Crée une nouvelle pile pondérée avec le pourcentage donné

 Renvoie : `Une nouvelle WeightedItemStack`

```zenscript
<item:minecraft:bedrock>.weight(0.5D) % newWeight as int
<item:minecraft:bedrock>.weight(0.5D) % 75
```

| Parameter     | Type | Description    |
| ------------- | ---- | -------------- |
| Nouveau poids | int  | Le pourcentage |

