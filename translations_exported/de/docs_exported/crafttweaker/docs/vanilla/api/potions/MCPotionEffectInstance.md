# MCPotionEffectInstance

## Diese Klasse importieren

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.potion.MCPotionEffectInstance;
```


## Implemented Interfaces
MCPotionEffectInstance implements the following interfaces. That means all methods defined in these interfaces are also available in MCPotionEffectInstance

- Comparable&lt;[MCPotionEffectInstance](/vanilla/api/potions/MCPotionEffectInstance)&gt;

## Methoden

:::group{name=addCurativeItem}

Return Type: void

```zenscript
MCPotionEffectInstance.addCurativeItem(stack as IItemStack) as void
```

| Parameter | Type                                        | Beschreibung            |
| --------- | ------------------------------------------- | ----------------------- |
| stack     | [IItemStack](/vanilla/api/items/IItemStack) | No Description Provided |


:::

:::group{name=combine}

Return Type: boolean

```zenscript
MCPotionEffectInstance.combine(effect as MCPotionEffectInstance) as boolean
```

| Parameter | Type                                                                  | Beschreibung            |
| --------- | --------------------------------------------------------------------- | ----------------------- |
| effect    | [MCPotionEffectInstance](/vanilla/api/potions/MCPotionEffectInstance) | No Description Provided |


:::

:::group{name=getCurativeItems}

Return Type: stdlib.List&lt;[IItemStack](/vanilla/api/items/IItemStack)&gt;

```zenscript
// MCPotionEffectInstance.getCurativeItems() as stdlib.List<IItemStack>

myMCPotionEffectInstance.getCurativeItems();
```

:::

:::group{name=isCurativeItem}

Return Type: boolean

```zenscript
MCPotionEffectInstance.isCurativeItem(stack as IItemStack) as boolean
```

| Parameter | Type                                        | Beschreibung            |
| --------- | ------------------------------------------- | ----------------------- |
| stack     | [IItemStack](/vanilla/api/items/IItemStack) | No Description Provided |


:::

:::group{name=setCurativeItems}

Return Type: void

```zenscript
MCPotionEffectInstance.setCurativeItems(items as IItemStack[]) as void
```

| Parameter | Type                                          | Beschreibung            |
| --------- | --------------------------------------------- | ----------------------- |
| items     | [IItemStack](/vanilla/api/items/IItemStack)[] | No Description Provided |


:::


## Properties

| Name          | Type                                                  | Has Getter | Has Setter | Beschreibung            |
| ------------- | ----------------------------------------------------- | ---------- | ---------- | ----------------------- |
| ambient       | boolean                                               | true       | false      | No Description Provided |
| amplifier     | int                                                   | true       | false      | No Description Provided |
| duration      | int                                                   | true       | false      | No Description Provided |
| effectName    | string                                                | true       | false      | No Description Provided |
| potion        | [MCPotionEffect](/vanilla/api/potions/MCPotionEffect) | true       | false      | No Description Provided |
| showIcon      | boolean                                               | true       | false      | No Description Provided |
| showParticles | boolean                                               | true       | false      | No Description Provided |

