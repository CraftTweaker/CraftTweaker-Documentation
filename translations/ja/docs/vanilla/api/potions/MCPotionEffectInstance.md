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

| パラメータ | タイプ                                                               | 説明                      |
| ----- | ----------------------------------------------------------------- | ----------------------- |
| スタック  | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | No description provided |


### combine

Returns boolean

```zenscript
myMCPotionEffectInstance.combine(effect as crafttweaker.api.potion.MCPotionEffectInstance);
```

| パラメータ  | タイプ                                                                                           | 説明                      |
| ------ | --------------------------------------------------------------------------------------------- | ----------------------- |
| effect | [crafttweaker.api.potion.MCPotionEffectInstance](/vanilla/api/potions/MCPotionEffectInstance) | No description provided |


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

| パラメータ | タイプ                                                               | 説明                      |
| ----- | ----------------------------------------------------------------- | ----------------------- |
| スタック  | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | No description provided |


### setCurativeItems

```zenscript
myMCPotionEffectInstance.setCurativeItems(items as crafttweaker.api.item.IItemStack[]);
```

| パラメータ | タイプ                                                                 | 説明                      |
| ----- | ------------------------------------------------------------------- | ----------------------- |
| 項目    | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)[] | No description provided |



## プロパティー

| 名称            | タイプ                                                                           | Has Getter | Has Setter |
| ------------- | ----------------------------------------------------------------------------- | ---------- | ---------- |
| ambient       | boolean型                                                                      | true       | false      |
| アンプ           | int                                                                           | true       | false      |
| 期間            | int                                                                           | true       | false      |
| effectName    | 文字列型                                                                          | true       | false      |
| ポーション         | [crafttweaker.api.potion.MCPotionEffect](/vanilla/api/potions/MCPotionEffect) | true       | false      |
| showIcon      | boolean型                                                                      | true       | false      |
| showParticles | boolean型                                                                      | true       | false      |

