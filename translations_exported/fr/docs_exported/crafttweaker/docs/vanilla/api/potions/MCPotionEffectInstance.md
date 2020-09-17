# format@@0 MCPotionEffectInstance

Cette classe a été ajoutée par un mod avec le mod-id `crafttweaker`. Vous devez donc avoir ce mod installé si vous voulez utiliser cette fonctionnalité.

## Importation de la classe
Il pourrait vous être nécessaire d'importer le paquet si vous rencontrez des problèmes (comme lancer un tableau), alors mieux être sûr que désolé et ajouter l'importation.
```zenscript
crafttweaker.api.potion.MCPotionEffectInstance
```

## Méthodes
### Ajouter un élément curatif

```zenscript
myMCPotionEffectInstance.addCurativeItem(stack as crafttweaker.api.item.IItemStack);
```

| Paramètre | Type de texte                                                     | Libellé                    |
| --------- | ----------------------------------------------------------------- | -------------------------- |
| empilage  | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | Aucune description fournie |


### combiner

Type de retour: booléen

```zenscript
myMCPotionEffectInstance.combine(effet comme crafttweaker.api.potion.MCPotionEffectInstance);
```

| Paramètre | Type de texte                                                                                 | Libellé                    |
| --------- | --------------------------------------------------------------------------------------------- | -------------------------- |
| effet     | [crafttweaker.api.potion.MCPotionEffectInstance](/vanilla/api/potions/MCPotionEffectInstance) | Aucune description fournie |


### Obtenir des éléments curatifs

Type de retour : Liste&lt;[crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)&gt;

```zenscript
myMCPotionEffectInstance.getCurativeItems();
```

### isCurativeItem

Type de retour: booléen

```zenscript
myMCPotionEffectInstance.isCurativeItem(stack as crafttweaker.api.item.IItemStack);
```

| Paramètre | Type de texte                                                     | Libellé                    |
| --------- | ----------------------------------------------------------------- | -------------------------- |
| empilage  | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | Aucune description fournie |


### définir des éléments curatifs

```zenscript
myMCPotionEffectInstance.setCurativeItems(items as crafttweaker.api.item.IItemStack[]);
```

| Paramètre | Type de texte                                                       | Libellé                    |
| --------- | ------------------------------------------------------------------- | -------------------------- |
| Eléments  | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)[] | Aucune description fournie |



## Propriétés

| Nom                     | Type de texte                                                                 | A un Getter | A un Setter |
| ----------------------- | ----------------------------------------------------------------------------- | ----------- | ----------- |
| ambiant                 | boolean                                                                       | vrai        | Faux        |
| amplificateur           | Indice                                                                        | vrai        | Faux        |
| durée                   | Indice                                                                        | vrai        | Faux        |
| effectName              | Chaîne de caractères                                                          | vrai        | Faux        |
| potion                  | [crafttweaker.api.potion.MCPotionEffect](/vanilla/api/potions/MCPotionEffect) | vrai        | Faux        |
| montreIcône             | boolean                                                                       | vrai        | Faux        |
| format@@0 showParticles | boolean                                                                       | vrai        | Faux        |

