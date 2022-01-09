# MCPotionEffectInstance

Questa classe è stata aggiunta da una mod con ID `crafttweaker`. Perciò, è necessario avere questa mod installata per poter utilizzare questa funzione.

## Importare la Classe
Potrebbe essere necessario importare il pacchetto, se si incontrano dei problemi (come castare un vettore), quindi meglio essere sicuri e aggiungere la direttiva di importazione.
```zenscript
crafttweaker.api.potion.MCPotionEffectInstance
```

## Metodi
### addCurativeItem

```zenscript
myMCPotionEffectInstance.addCurativeItem(stack as crafttweaker.api.item.IItemStack);
```

| Parametro | Tipo                                                              | Descrizione                 |
| --------- | ----------------------------------------------------------------- | --------------------------- |
| stack     | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | Nessuna descrizione fornita |


### combine

Restituisce un booleano

```zenscript
myMCPotionEffectInstance.combine(effect as crafttweaker.api.potion.MCPotionEffectInstance);
```

| Parametro | Tipo                                                                                          | Descrizione                 |
| --------- | --------------------------------------------------------------------------------------------- | --------------------------- |
| effect    | [crafttweaker.api.potion.MCPotionEffectInstance](/vanilla/api/potions/MCPotionEffectInstance) | Nessuna descrizione fornita |


### getCurativeItems

Returns List<[crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)>

```zenscript
myMCPotionEffectInstance.getCurativeItems();
```

### isCurativeItem

Restituisce un booleano

```zenscript
myMCPotionEffectInstance.isCurativeItem(stack as crafttweaker.api.item.IItemStack);
```

| Parametro | Tipo                                                              | Descrizione                 |
| --------- | ----------------------------------------------------------------- | --------------------------- |
| stack     | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | Nessuna descrizione fornita |


### setCurativeItems

```zenscript
myMCPotionEffectInstance.setCurativeItems(items as crafttweaker.api.item.IItemStack[]);
```

| Parametro | Tipo                                                                | Descrizione                 |
| --------- | ------------------------------------------------------------------- | --------------------------- |
| items     | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)[] | Nessuna descrizione fornita |



## Proprietà

| Nome          | Tipo                                                                          | Ha Getter | Ha Setter |
| ------------- | ----------------------------------------------------------------------------- | --------- | --------- |
| ambient       | boolean                                                                       | sì        | no        |
| amplifier     | int                                                                           | sì        | no        |
| duration      | int                                                                           | sì        | no        |
| effectName    | String                                                                        | sì        | no        |
| potion        | [crafttweaker.api.potion.MCPotionEffect](/vanilla/api/potions/MCPotionEffect) | sì        | no        |
| showIcon      | boolean                                                                       | sì        | no        |
| showParticles | boolean                                                                       | sì        | no        |

