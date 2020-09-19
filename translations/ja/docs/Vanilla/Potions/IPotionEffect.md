# 反射エフェクト

An IPotionEffect is an [IPotion](/Vanilla/Potions/IPotion/) that also has a duration and an amplifier (strength) parameter.  
You can get them from an [IPotion](/Vanilla/Potions/IPotion/) object.

## パッケージのインポート

It might be required for you to import the package if you encounter any issues (like casting an [Array](/AdvancedFunctions/Arrays_and_Loops/)), so better be safe than sorry and add the import.  
`import crafttweaker.potions.IPotionEffect;`

## ZenGetter

| ZenGetter                          | タイプ                                            |
| ---------------------------------- | ---------------------------------------------- |
| 期間                                 | int                                            |
| ポーション                              | [アイポーション](/Vanilla/Potions/IPotion/)           |
| doesShowParticles                  | bool                                           |
| アンプ                                | int                                            |
| curativeItems                      | List<[IItemStack](/Vanilla/Items/IItemStack/)> |
| effectName                         | 文字列                                            |
| isAmbient                          | bool                                           |
| isPotionDurationMax (また ZenSetter) | bool                                           |

## ZenMethods

### アイテムはキュレーションアイテムです

[IItemStack](/Vanilla/Items/IItemStack/)を使用します。  
bool を返す

```zenscript
isCurativeItem(IItemStack item);
```

### エンティティに対するエフェクトの実行

[IEntity](/Vanilla/Entities/IEntity/) またはそのサブクラスを使用します (例: [IPlayer](/Vanilla/Players/IPlayer/)).  
void (nothing) を返します。

```zenscript
performEffect(IEntity Entity)
```