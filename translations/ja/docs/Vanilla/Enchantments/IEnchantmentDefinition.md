# IEnchantmentDefinition

IEnchantmentDefinitionは実際のエンチャントであり、レベルを表すものではありませんが、エンチャントに関する情報を取得するためにこれを使用することができます。

## パッケージのインポート

It might be required for you to import the package if you encounter any issues (like casting an [Array](/AdvancedFunctions/Arrays_and_Loops/)), so better be safe than sorry and add the import.  
`import crafttweaker.enchantments.IEnchantmentDefinition;`

## そのようなオブジェクトを取得しています

このようなオブジェクトは、 [エンチャントのブラケットハンドラ](/Vanilla/Brackets/Bracket_Enchantment/) または [IEnchantment](/Vanilla/Enchantments/IEnchantment/) オブジェクトから取得できます。

## ZenGetters/ZenSetters

| ZenGetter             | ZenSetter | タイプ      |
| --------------------- | --------- | -------- |
| id                    |           | int型     |
| 名前                    | 名前        | 文字列      |
| maxLevel              |           | int      |
| minLevel              |           | int      |
| isAllowedOnBooks      |           | boolean型 |
| isTreasureEnchantment |           | boolean型 |
| isCurse               |           | boolean型 |
| registryName          |           | 文字列      |

## ZenMethods

### 適用できません

Checks if the enchantment can be put on the item.  
First method checks in general, second checks if the item can be enchanted to this enchantment using the enchantment Table.  
Both return a bool and require an [IItemStack](/Vanilla/Items/IItemStack/) as input parameter.

```zenscript
ench.canApply(IItemStack item);
ench.canApplyAtEnchantmentTable(IItemStack item);
```

### getEnchantability

アイテムが与えられたレベルでエンチャントに必要なエンチャント性をチェックします。  
両方のメソッドはintを返し、エンチャントのレベルをintパラメータとして取ります。

```zenscript
ench.getMinEnchantability(int level);
ench.getMaxEnchantability(int level);
```

### 翻訳者名

Returns the translated name (e.g. "smite IV").  
Returns a string and requires the level of the enchantment as int parameter.  
Does the same as [IEnchantment's](/Vanilla/Enchantments/IEnchantment/) `.displayName` ZenGetter!

```objectzenscriptivec
ench.getTranslatedName(int level);
```

### エンチャントをする

EnchantmentDefinition にレベルを与えることで、 [IEnchantment](/Vanilla/Enchantments/IEnchantment/) を作成できます。

```zenscript
ench.makeEnchantment(int level);
ench * level;
```

### 他のIEnchantmentDefinitionオブジェクトと比較

You can use the `==` operator to check if two enchantments are the same.  
This means if they have the same id.

```zenscript
if(enchA == enchB)
    print("Same!");
```

## 例

```zenscript
import crafttweaker.enchantments.IEnchantmentDefinition;
import crafttweaker.data.IData;

val array as IEnchantmentDefinition[] = [<enchantment:minecraft:protection>,<enchantment:minecraft:fire_protection>,<enchantment:minecraft:feather_falling>,<enchantment:minecraft:blast_protection>,<enchantment:minecraft:projectile_protection>,<enchantment:minecraft:respiration>,<enchantment:minecraft:aqua_affinity>];

var map as IData = {};

for ench in array {
    map += ench.makeEnchantment(3).makeTag();
}

print(map.asString());


recipes.addShapeless("Supo", <minecraft:golden_sword>.withTag(map), [<minecraft:iron_sword>, <minecraft:golden_sword>]);

```