# Merchant

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.entity.type.villager.Merchant;
```


## Methods

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

| Parameter |                         Type                         |
|-----------|------------------------------------------------------|
| offer     | [MerchantOffer](/vanilla/api/villager/MerchantOffer) |


:::

:::group{name=notifyTradeUpdated}

```zenscript
Merchant.notifyTradeUpdated(stack as ItemStack)
```

| Parameter |                   Type                   |
|-----------|------------------------------------------|
| stack     | [ItemStack](/vanilla/api/item/ItemStack) |


:::

:::group{name=openTradingScreen}

```zenscript
Merchant.openTradingScreen(player as Player, displayName as Component, level as int)
```

|  Parameter  |                       Type                       |
|-------------|--------------------------------------------------|
| player      | [Player](/vanilla/api/entity/type/player/Player) |
| displayName | [Component](/vanilla/api/text/Component)         |
| level       | int                                              |


:::

:::group{name=setTradingPlayer}

```zenscript
Merchant.setTradingPlayer(player as Player?)
```

| Parameter |                       Type                        |
|-----------|---------------------------------------------------|
| player    | [Player](/vanilla/api/entity/type/player/Player)? |


:::

:::group{name=showProgressBar}

Return Type: boolean

```zenscript
// Merchant.showProgressBar() as boolean

myMerchant.showProgressBar();
```

:::


## Properties

|       Name       |                          Type                          | Has Getter | Has Setter |
|------------------|--------------------------------------------------------|------------|------------|
| canRestock       | boolean                                                | true       | false      |
| isClientSide     | boolean                                                | true       | false      |
| notifyTradeSound | [SoundEvent](/vanilla/api/sound/SoundEvent)            | true       | false      |
| offers           | [MerchantOffers](/vanilla/api/villager/MerchantOffers) | true       | false      |
| showProgressBar  | boolean                                                | true       | false      |
| tradingPlayer    | [Merchant](/vanilla/api/entity/type/villager/Merchant) | true       | true       |
| villagerXp       | int                                                    | true       | false      |

