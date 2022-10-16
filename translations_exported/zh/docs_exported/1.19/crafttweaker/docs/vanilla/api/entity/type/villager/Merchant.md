# Merchant

## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.entity.type.villager.Merchant;
```


## 使用方式

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

| 参数    | 类型                                                   |
| ----- | ---------------------------------------------------- |
| offer | [MerchantOffer](/vanilla/api/villager/MerchantOffer) |


:::

:::group{name=notifyTradeUpdated}

```zenscript
Merchant.notifyTradeUpdated(stack as ItemStack)
```

| 参数 | 类型                                  |
| -- | ----------------------------------- |
| 堆叠 | [物品应用](/vanilla/api/item/ItemStack) |


:::

:::group{name=openTradingScreen}

```zenscript
Merchant.openTradingScreen(player as Player, displayName as Component, level as int)
```

| 参数          | 类型                                               |
| ----------- | ------------------------------------------------ |
| player      | [Player](/vanilla/api/entity/type/player/Player) |
| displayName | [Component](/vanilla/api/text/Component)         |
| level       | int                                              |


:::

:::group{name=setTradingPlayer}

```zenscript
Merchant.setTradingPlayer(player as Player?)
```

| 参数     | 类型                                                |
| ------ | ------------------------------------------------- |
| player | [Player](/vanilla/api/entity/type/player/Player)? |


:::

:::group{name=showProgressBar}

Return Type: boolean

```zenscript
// Merchant.showProgressBar() as boolean

myMerchant.showProgressBar();
```

:::


## 参数

| 名称               | 类型                                                     | 可获得  | 可设置   |
| ---------------- | ------------------------------------------------------ | ---- | ----- |
| canRestock       | 布尔值                                                    | true | false |
| isClientSide     | 布尔值                                                    | true | false |
| notifyTradeSound | [SoundEvent](/vanilla/api/sound/SoundEvent)            | true | false |
| offers           | [MerchantOffers](/vanilla/api/villager/MerchantOffers) | true | false |
| showProgressBar  | 布尔值                                                    | true | false |
| tradingPlayer    | [Merchant](/vanilla/api/entity/type/villager/Merchant) | true | true  |
| villagerXp       | int                                                    | true | false |

