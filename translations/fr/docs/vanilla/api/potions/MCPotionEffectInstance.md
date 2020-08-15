# MCPotionEffectInstance

This class was added by a mod with mod-id `crafttweaker`. So you need to have this mod installed if you want to use this feature.

## Importation de la classe
It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zenscript
crafttweaker.api.potion.MCPotionEffectInstance
```

## Méthodes
### addCurativeItem

```zenscript
myMCPotionEffectInstance.addCurativeItem(stack as crafttweaker.api.item.IItemStack);
```

| Paramètre | Type de texte                                                     | Libellé                 |
| --------- | ----------------------------------------------------------------- | ----------------------- |
| empilage  | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | No description provided |


### combine

Returns boolean

```zenscript
myMCPotionEffectInstance.combine(effect as crafttweaker.api.potion.MCPotionEffectInstance);
```

| Paramètre | Type de texte                                                                                 | Libellé                 |
| --------- | --------------------------------------------------------------------------------------------- | ----------------------- |
| effect    | [crafttweaker.api.potion.MCPotionEffectInstance](/vanilla/api/potions/MCPotionEffectInstance) | No description provided |


### getCurativeItems

Returns List<[crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)>

```zenscript
myMCPotionEffectInstance.getCurativeItems();
```

### isCurativeItem

Returns boolean

```zenscript
myMCPotionEffectInstance.isCurativeItem(stack as crafttweaker.api.item.IItemStack);
```

| Paramètre | Type de texte                                                     | Libellé                 |
| --------- | ----------------------------------------------------------------- | ----------------------- |
| empilage  | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | No description provided |


### setCurativeItems

```zenscript
myMCPotionEffectInstance.setCurativeItems(items as crafttweaker.api.item.IItemStack[]);
```

| Paramètre | Type de texte                                                       | Libellé                 |
| --------- | ------------------------------------------------------------------- | ----------------------- |
| Eléments  | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)[] | No description provided |



## Propriétés

| Nom           | Type de texte                                                                 | Has Getter | Has Setter |
| ------------- | ----------------------------------------------------------------------------- | ---------- | ---------- |
| ambient       | boolean                                                                       | vrai       | Faux       |
| amplificateur | Indice                                                                        | vrai       | Faux       |
| durée         | Indice                                                                        | vrai       | Faux       |
| effectName    | Chaîne de caractères                                                          | vrai       | Faux       |
| potion        | [crafttweaker.api.potion.MCPotionEffect](/vanilla/api/potions/MCPotionEffect) | vrai       | Faux       |
| showIcon      | boolean                                                                       | vrai       | Faux       |
| showParticles | boolean                                                                       | vrai       | Faux       |

