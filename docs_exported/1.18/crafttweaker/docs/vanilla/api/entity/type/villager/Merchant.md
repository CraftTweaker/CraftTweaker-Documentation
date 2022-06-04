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

Return Type: void

```zenscript
Merchant.notifyTrade(offer as MerchantOffer) as void
```

| Parameter | Type | Description |
|-----------|------|-------------|
| offer | [MerchantOffer](/vanilla/api/villager/MerchantOffer) | No Description Provided |


:::

:::group{name=notifyTradeUpdated}

Return Type: void

```zenscript
Merchant.notifyTradeUpdated(stack as ItemStack) as void
```

| Parameter | Type | Description |
|-----------|------|-------------|
| stack | [ItemStack](/vanilla/api/item/ItemStack) | No Description Provided |


:::

:::group{name=openTradingScreen}

Return Type: void

```zenscript
Merchant.openTradingScreen(player as Player, displayName as Component, level as int) as void
```

| Parameter | Type | Description |
|-----------|------|-------------|
| player | [Player](/vanilla/api/entity/type/player/Player) | No Description Provided |
| displayName | [Component](/vanilla/api/text/Component) | No Description Provided |
| level | int | No Description Provided |


:::

:::group{name=setTradingPlayer}

Return Type: void

```zenscript
Merchant.setTradingPlayer(player as Player?) as void
```

| Parameter | Type | Description |
|-----------|------|-------------|
| player | [Player](/vanilla/api/entity/type/player/Player)? | No Description Provided |


:::

:::group{name=showProgressBar}

Return Type: boolean

```zenscript
// Merchant.showProgressBar() as boolean

myMerchant.showProgressBar();
```

:::


## Properties

| Name | Type | Has Getter | Has Setter | Description |
|------|------|------------|------------|-------------|
| canRestock | boolean | true | false | No Description Provided |
| isClientSide | boolean | true | false | No Description Provided |
| notifyTradeSound | [SoundEvent](/vanilla/api/sound/SoundEvent) | true | false | No Description Provided |
| offers | [MerchantOffers](/vanilla/api/villager/MerchantOffers) | true | false | No Description Provided |
| showProgressBar | boolean | true | false | No Description Provided |
| tradingPlayer | [Merchant](/vanilla/api/entity/type/villager/Merchant) | true | true | No Description Provided |
| villagerXp | int | true | false | No Description Provided |

