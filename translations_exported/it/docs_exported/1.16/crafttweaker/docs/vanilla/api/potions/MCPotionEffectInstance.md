# MCPotionEffectInstance

## Importare la Classe

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.potion.MCPotionEffectInstance;
```


## Interfacce Implementate
MCPotionEffectInstance implements the following interfaces. That means all methods defined in these interfaces are also available in MCPotionEffectInstance

- Comparable&lt;[MCPotionEffectInstance](/vanilla/api/potions/MCPotionEffectInstance)&gt;

## Metodi

:::group{name=addCurativeItem}

Return Type: void

```zenscript
MCPotionEffectInstance.addCurativeItem(stack as IItemStack) as void
```

| Parametro | Tipo                                        | Descrizione             |
| --------- | ------------------------------------------- | ----------------------- |
| stack     | [IItemStack](/vanilla/api/items/IItemStack) | No Description Provided |


:::

:::group{name=combine}

Return Type: boolean

```zenscript
MCPotionEffectInstance.combine(effect as MCPotionEffectInstance) as boolean
```

| Parametro | Tipo                                                                  | Descrizione             |
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

| Parametro | Tipo                                        | Descrizione             |
| --------- | ------------------------------------------- | ----------------------- |
| stack     | [IItemStack](/vanilla/api/items/IItemStack) | No Description Provided |


:::

:::group{name=setCurativeItems}

Return Type: void

```zenscript
MCPotionEffectInstance.setCurativeItems(items as IItemStack[]) as void
```

| Parametro | Tipo                                          | Descrizione             |
| --------- | --------------------------------------------- | ----------------------- |
| items     | [IItemStack](/vanilla/api/items/IItemStack)[] | No Description Provided |


:::


## Proprietà

| Nome          | Tipo                                                  | Ha Getter | Ha Setter | Descrizione             |
| ------------- | ----------------------------------------------------- | --------- | --------- | ----------------------- |
| ambient       | boolean                                               | sì        | no        | No Description Provided |
| amplifier     | int                                                   | sì        | no        | No Description Provided |
| duration      | int                                                   | sì        | no        | No Description Provided |
| effectName    | string                                                | sì        | no        | No Description Provided |
| potion        | [MCPotionEffect](/vanilla/api/potions/MCPotionEffect) | sì        | no        | No Description Provided |
| showIcon      | boolean                                               | sì        | no        | No Description Provided |
| showParticles | boolean                                               | sì        | no        | No Description Provided |

