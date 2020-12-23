# MCPotionEffectInstance

This class was added by a mod with mod-id `crafttweaker`. So you need to have this mod installed if you want to use this feature.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zenscript
import crafttweaker.api.potion.MCPotionEffectInstance;
```


## Implemented Interfaces
MCPotionEffectInstance implements the following interfaces. That means all methods defined in these interfaces are also available in MCPotionEffectInstance

- Comparable&lt;[MCPotionEffectInstance](/vanilla/api/potion/MCPotionEffectInstance)&gt;
## Methods

### addCurativeItem

Return Type: void

```zenscript
MCPotionEffectInstance.addCurativeItem(stack as IItemStack) as void
```
| Parameter | Type | Description |
|-----------|------|-------------|
| stack | [IItemStack](/vanilla/api/items/IItemStack) | No Description Provided |
### combine

Return Type: boolean

```zenscript
MCPotionEffectInstance.combine(effect as MCPotionEffectInstance) as boolean
```
| Parameter | Type | Description |
|-----------|------|-------------|
| effect | [MCPotionEffectInstance](/vanilla/api/potion/MCPotionEffectInstance) | No Description Provided |
### getCurativeItems

Return Type: stdlib.List&lt;[IItemStack](/vanilla/api/items/IItemStack)&gt;

```zenscript
MCPotionEffectInstance.getCurativeItems() as stdlib.List<IItemStack>
myMCPotionEffectInstance.getCurativeItems();
```
### isCurativeItem

Return Type: boolean

```zenscript
MCPotionEffectInstance.isCurativeItem(stack as IItemStack) as boolean
```
| Parameter | Type | Description |
|-----------|------|-------------|
| stack | [IItemStack](/vanilla/api/items/IItemStack) | No Description Provided |
### setCurativeItems

Return Type: void

```zenscript
MCPotionEffectInstance.setCurativeItems(items as IItemStack[]) as void
```
| Parameter | Type | Description |
|-----------|------|-------------|
| items | [IItemStack](/vanilla/api/items/IItemStack)[] | No Description Provided |

## Properties

| Name | Type | Has Getter | Has Setter |
|------|------|------------|------------|
| ambient | boolean | true | false |
| amplifier | int | true | false |
| duration | int | true | false |
| effectName | string | true | false |
| potion | [MCPotionEffect](/vanilla/api/potion/MCPotionEffect) | true | false |
| showIcon | boolean | true | false |
| showParticles | boolean | true | false |

