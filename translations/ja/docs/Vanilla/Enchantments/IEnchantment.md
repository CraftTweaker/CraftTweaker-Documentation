# Ienchantment

IEnchantment は本質的に [IEnchantmentDefinition](/Vanilla/Enchantments/IEnchantmentDefinition/) とエンチャントレベルです。

## パッケージのインポート

It might be required for you to import the package if you encounter any issues (like casting an [Array](/AdvancedFunctions/Arrays_and_Loops/)), so better be safe than sorry and add the import.  
`import crafttweaker.enchantments.IEnchantment;`

## ZenGetters/ZenSetters

| ZenGetter   | ZenSetter   | タイプ                                                                     |
| ----------- | ----------- | ----------------------------------------------------------------------- |
| 定義          |             | [IEnchantmentDefinition](/Vanilla/Enchantments/IEnchantmentDefinition/) |
| レベル         |             | int型                                                                    |
| displayName | displayName | 文字列                                                                     |

## ZenMethods

### NBT としてエンチャントを取得

エンチャントのNBTタグを取得することができます。  
[IData](/Vanilla/Data/IData/) としてキャストするか、メソッドを使用することができます。

```zenscript
ench.makeTag();
ench as crafttweaker.data.IData;
```