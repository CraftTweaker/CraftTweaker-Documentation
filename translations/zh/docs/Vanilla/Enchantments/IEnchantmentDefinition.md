# IEnchantment定义

IEnchantmentDefine 是实际的附魔，它没有一个等级，但您可以使用它来检索附魔上的信息。

## 导入相关包

如果您遇到任何问题，可能需要导入软件包(例如铸造一个 [数组](/AdvancedFunctions/Arrays_and_Loops/)), 这样比抱歉更安全并添加导入。  
`导入craftweaper.enchantments.IEnchantmentDefinition；`

## 正在获取此对象

您可以从 [附魔约束处理器](/Vanilla/Brackets/Bracket_Enchantment/) 或从 [IEnchantation](/Vanilla/Enchantments/IEnchantment/) 对象中检索到这样一个物体。

## ZenGetters/ZenSetters

| ZenGetter       | ZenSetter | 类型      |
| --------------- | --------- | ------- |
| id              |           | 整数      |
| 名称              | 名称        | string  |
| 最大级别            |           | 整数      |
| minLevel        |           | 整数      |
| isAlleedOnBooks |           | boolean |
| 宝石附魔器           |           | boolean |
| isCurse         |           | boolean |
| registryName    |           | 字符串     |

## ZenMethods

### 取消应用

检查是否可以将附魔放在物品上。  
第一个方法检查，第二个检查是否可以使用附魔表将物品附魔到这个附魔处。  
两者都返回了布尔值，需要一个 [IItemStack](/Vanilla/Items/IItemStack/) 作为输入参数。

```zenscript
ench.canApply(IItemStack item);
ench.canApplyAtEnchantmentTable(IItemStack item);
```

### getEnchanability

检查物品在给定级别上对附魔必须具有什么附魔性。  
这两种方法都返回了一个整数并将附魔的水平作为整数参数。

```zenscript
ench.getMinEnchantability(int level);
ench.getMaxEnchangability(int level);
```

### 翻译名称

返回已翻译的名称 (例如"smite IV")。  
返回一个字符串并要求附魔级别作为整数参数。  
与 [IEnchant's](/Vanilla/Enchantments/IEnchantment/) `.displayname` ZenGetter!

```objectzenscriptivec
ench.getTranslatedName(int level);
```

### 制作附魔器

By giving an EnchantmentDefinition a level you can make an [IEnchantment](/Vanilla/Enchantments/IEnchantment/) out of it:

```zenscript
ench.makeEnchantment(int level);
ench * 级别;
```

### 与其他 IEnchantmentDefinition 对象比较

您可以使用 `==` 操作员来检查两个附魔是否相同。  
这意味着如果他们有相同的 id。

```zenscript
if(enchA == enchB)
    打印("萨米!");
```

## 例子

```zenscript
导入 craftweeker.enchantments.IEnchantmentDefinition;
导入 craftweaper.data. 数据;

个数组为 IEnchantmentDefinition[] = [<enchantment:minecraft:protection>,<enchantment:minecraft:fire_protection>,<enchantment:minecraft:feather_falling>,<enchantment:minecraft:blast_protection>,<enchantment:minecraft:projectile_protection>,<enchantment:minecraft:respiration>,<enchantment:minecraft:aqua_affinity>]；

var map as IData = {};

for ench in ar阵列中。
    map += ench。 akeEnchantment(3).makeTag();
}

print(map.asString();


配方.addShapeless("Supo", <minecraft:golden_sword>.withTag(map), [<minecraft:iron_sword>, <minecraft:golden_sword>]);

```