# MCPotionEffectInstance

This class was added by a mod with mod-id `crafttweaker`. So you need to have this mod installed if you want to use this feature.

## Importing the class
It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zenscript
crafttweaker.api.potion.MCPotionEffectInstance
```

## Methods
### addCurativeItem

```zenscript
myMCPotionEffectInstance.addCurativeItem(stack as crafttweaker.api.item.IItemStack);
```

| Parameter | Type                                                              | Description             |
| --------- | ----------------------------------------------------------------- | ----------------------- |
| stack     | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | No description provided |


### combine

Returns boolean

```zenscript
myMCPotionEffectInstance.combine(effect as crafttweaker.api.potion.MCPotionEffectInstance);
```

| Parameter | Type                                                                                          | Description             |
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

| Parameter | Type                                                              | Description             |
| --------- | ----------------------------------------------------------------- | ----------------------- |
| stack     | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | No description provided |


### setCurativeItems

```zenscript
myMCPotionEffectInstance.setCurativeItems(items as crafttweaker.api.item.IItemStack[]);
```

| Parameter | Type                                                                | Description             |
| --------- | ------------------------------------------------------------------- | ----------------------- |
| items     | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)[] | No description provided |



## Properties

| Name          | Type                                                                          | Has Getter | Has Setter |
| ------------- | ----------------------------------------------------------------------------- | ---------- | ---------- |
| ambient       | boolean                                                                       | true       | false      |
| amplifier     | int                                                                           | true       | false      |
| duration      | int                                                                           | true       | false      |
| effectName    | String                                                                        | true       | false      |
| potion        | [crafttweaker.api.potion.MCPotionEffect](/vanilla/api/potions/MCPotionEffect) | true       | false      |
| showIcon      | boolean                                                                       | true       | false      |
| showParticles | boolean                                                                       | true       | false      |

