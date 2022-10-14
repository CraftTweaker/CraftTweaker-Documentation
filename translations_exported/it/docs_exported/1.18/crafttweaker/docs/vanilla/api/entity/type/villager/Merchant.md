# Merchant

## Importare la Classe

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.entity.type.villager.Merchant;
```


## Metodi

:::group{name=canRestock}

Return Type: boolean

```zenscript
// Merchant.canRestock() as boolean

myMerchant.canRestock();
```

:::

:::group{name=getNotifyTradeSound}

Return Type: [SoundEvent](/vanilla/api/sound/SoundEvent)

```zenscript
// Merchant.getNotifyTradeSound() as SoundEvent

myMerchant.getNotifyTradeSound();
```

:::

:::group{name=getOffers}

Return Type: [MerchantOffers](/vanilla/api/villager/MerchantOffers)

```zenscript
// Merchant.getOffers() as MerchantOffers

myMerchant.getOffers();
```

:::

:::group{name=getTradingPlayer}

Return Type: [Player](/vanilla/api/entity/type/player/Player)?

```zenscript
// Merchant.getTradingPlayer() as Player?

myMerchant.getTradingPlayer();
```

:::

:::group{name=getVillagerXp}

Return Type: int

```zenscript
// Merchant.getVillagerXp() as int

myMerchant.getVillagerXp();
```

:::

:::group{name=isClientSide}

Return Type: boolean

```zenscript
// Merchant.isClientSide() as boolean

myMerchant.isClientSide();
```

:::

:::group{name=notifyTrade}

```zenscript
Merchant.notifyTrade(offer as MerchantOffer)
```

| Parametro | Tipo                                                 |
| --------- | ---------------------------------------------------- |
| offer     | [MerchantOffer](/vanilla/api/villager/MerchantOffer) |


:::

:::group{name=notifyTradeUpdated}

```zenscript
Merchant.notifyTradeUpdated(stack as ItemStack)
```

| Parametro | Tipo                                     |
| --------- | ---------------------------------------- |
| stack     | [ItemStack](/vanilla/api/item/ItemStack) |


:::

:::group{name=openTradingScreen}

```zenscript
Merchant.openTradingScreen(player as Player, displayName as Component, level as int)
```

| Parametro   | Tipo                                             |
| ----------- | ------------------------------------------------ |
| player      | [Player](/vanilla/api/entity/type/player/Player) |
| displayName | [Component](/vanilla/api/text/Component)         |
| level       | int                                              |


:::

:::group{name=setTradingPlayer}

```zenscript
Merchant.setTradingPlayer(player as Player?)
```

| Parametro | Tipo                                              |
| --------- | ------------------------------------------------- |
| player    | [Player](/vanilla/api/entity/type/player/Player)? |


:::

:::group{name=showProgressBar}

Return Type: boolean

```zenscript
// Merchant.showProgressBar() as boolean

myMerchant.showProgressBar();
```

:::


## Proprietà

| Nome             | Tipo                                                   | Ha Getter | Ha Setter |
| ---------------- | ------------------------------------------------------ | --------- | --------- |
| canRestock       | boolean                                                | sì        | no        |
| isClientSide     | boolean                                                | sì        | no        |
| notifyTradeSound | [SoundEvent](/vanilla/api/sound/SoundEvent)            | sì        | no        |
| offers           | [MerchantOffers](/vanilla/api/villager/MerchantOffers) | sì        | no        |
| showProgressBar  | boolean                                                | sì        | no        |
| tradingPlayer    | [Merchant](/vanilla/api/entity/type/villager/Merchant) | sì        | sì        |
| villagerXp       | int                                                    | sì        | no        |

