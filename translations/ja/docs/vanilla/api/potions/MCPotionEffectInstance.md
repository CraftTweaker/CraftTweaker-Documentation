# MCPotionEffectInstance

crafttweakerのmod-idを持つmodによって追加されているクラスです。 従って、この機能を利用する場合はこのmodをインストールする必要があります。

## クラスのインポート
問題が発生した場合には、インポートが必要になります。とはいえ、お手数ですが予めインポートしておくほうが安全です。
```zenscript
crafttweaker.api.potion.MCPotionEffectInstance
```

## メソッド
### addCurativeItem

```zenscript
myMCPotionEffectInstance.addCurativeItem(stack as crafttweaker.api.item.IItemStack);
```

| パラメータ | タイプ                                                               | 説明           |
| ----- | ----------------------------------------------------------------- | ------------ |
| スタック  | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | 説明が提供されていません |


### 結合

戻り値ブール値

```zenscript
myMCPotionEffectInstance.combine(effecer.api.potion.MCPotionEffectInstance);
```

| パラメータ | タイプ                                                                                           | 説明           |
| ----- | --------------------------------------------------------------------------------------------- | ------------ |
| 効果    | [crafttweaker.api.potion.MCPotionEffectInstance](/vanilla/api/potions/MCPotionEffectInstance) | 説明が提供されていません |


### getCurativeItems

戻り値 List<[crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)>

```zenscript
myMCPotionEffectInstance.getCurativeItems();
```

### isCurativeItem

戻り値ブール値

```zenscript
myMCPotionEffectInstance.isCurativeItem(stack as crafttweaker.api.item.IItemStack);
```

| パラメータ | タイプ                                                               | 説明           |
| ----- | ----------------------------------------------------------------- | ------------ |
| スタック  | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | 説明が提供されていません |


### setCurativeItems

```zenscript
myMCPotionEffectInstance.setCurativeItems(items as crafttweaker.api.item.IItemStack[] []);
```

| パラメータ | タイプ                                                                 | 説明           |
| ----- | ------------------------------------------------------------------- | ------------ |
| 項目    | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)[] | 説明が提供されていません |



## プロパティー

| 名称            | タイプ                                                                           | ゲッターあり | セッターあり |
| ------------- | ----------------------------------------------------------------------------- | ------ | ------ |
| ambient       | boolean型                                                                      | true   | false  |
| アンプ           | int                                                                           | true   | false  |
| 期間            | int                                                                           | true   | false  |
| effectName    | 文字列型                                                                          | true   | false  |
| ポーション         | [crafttweaker.api.potion.MCPotionEffect](/vanilla/api/potions/MCPotionEffect) | true   | false  |
| showIcon      | boolean型                                                                      | true   | false  |
| showParticles | boolean型                                                                      | true   | false  |

