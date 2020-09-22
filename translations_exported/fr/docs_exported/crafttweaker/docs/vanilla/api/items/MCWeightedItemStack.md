# MCWeightedItemStack

Un ItemStack avec une chance, généralement utilisé pour les sorties de recettes. <p> Attention, si la pile utilisée pour créer la WeightedStack était mutable, alors le réglage de taille mutera également la pile originale !

Cette classe a été ajoutée par un mod avec le mod-id `crafttweaker`. Vous devez donc avoir ce mod installé si vous voulez utiliser cette fonctionnalité.

## Importation de la classe
Il pourrait vous être nécessaire d'importer le paquet si vous rencontrez des problèmes (comme lancer un tableau), alors mieux être sûr que désolé et ajouter l'importation.
```zenscript
format@@0 crafttweaker.api.item.MCWeightedItemStack
```

## Interfaces implémentées
MCWeightedItemStack implémente les interfaces suivantes. Cela signifie que toutes les méthodes disponibles peuvent également être utilisées dans cette classe.
- [crafttweaker.api.brackets.CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)

## Constructeurs
Crée manuellement la weightedItemStack. Habituellement, vous pouvez utiliser l'opérateur ou la méthode `.weight(weight)` de IItemStack, bien que
```zenscript
new crafttweaker.api.item.MCWeightedItemStack(itemStack as crafttweaker.api.item.IItemStack, weight as double);
new crafttweaker.api.item.MCWeightedItemStack(<item:minecraft:bedrock>, 0.5D);
```
| Paramètre           | Type de texte                                                     | Libellé                             |
| ------------------- | ----------------------------------------------------------------- | ----------------------------------- |
| format@@0 itemStack | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | La pile                             |
| Poids               | double                                                            | La chance, entre 0 (0%) et 1 (100%) |



## Méthodes
### Poids

Crée une nouvelle pile pondérée avec le poids donné

 Renvoie : `Une nouvelle WeightedItemStack`

Type de retour : [crafttweaker.api.item.MCWeightedItemStack](/vanilla/api/items/MCWeightedItemStack)

```zenscript
<item:minecraft:bedrock>.weight(0.5D).weight(newWeight as double);
<item:minecraft:bedrock>.weight(0.5D).weight(0.75D);
```

| Paramètre     | Type de texte | Libellé        |
| ------------- | ------------- | -------------- |
| Nouveau poids | double        | Le pourcentage |



## Propriétés

| Nom                | Type de texte                                                     | A un Getter | A un Setter |
| ------------------ | ----------------------------------------------------------------- | ----------- | ----------- |
| Chaîne de commande | Chaîne de caractères                                              | vrai        | Faux        |
| empilage           | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | vrai        | Faux        |
| Poids              | double                                                            | vrai        | Faux        |

## Opérateurs
### MUL

Définit le montant de la pile. <p> Si la pile originale était mutable, elle mute également la taille de la pile originale.

 Renvoie : `Une nouvelle WeightedItemStack`

```zenscript
<item:minecraft:bedrock>.weight(0.5D) * newAmount as int
<item:minecraft:bedrock>.weight(0.5D) * 5
```

| Paramètre       | Type de texte | Libellé                       |
| --------------- | ------------- | ----------------------------- |
| Nouveau montant | Indice        | La nouvelle taille de la pile |
### MOD

Crée une nouvelle pile pondérée avec le pourcentage donné

 Renvoie : `Une nouvelle WeightedItemStack`

```zenscript
<item:minecraft:bedrock>.weight(0.5D) % newWeight as int
<item:minecraft:bedrock>.weight(0.5D) % 75
```

| Paramètre     | Type de texte | Libellé        |
| ------------- | ------------- | -------------- |
| Nouveau poids | Indice        | Le pourcentage |

