# 附魔定义

附魔定义对象是附魔效果本身，不包含等级，不过可以用于检索附魔信息。

## 导入相关包
为了避免发生一些不期而遇的问题（比如声明[数组](/AdvancedFunctions/Arrays_and_Loops)），最为安全、也是最为推荐的方式就是导入相关的包。
`import crafttweaker.enchantments.IEnchantmentDefinition;`

## 检索附魔定义
你可以通过[附魔（尖括号引用）](/Vanilla/Brackets/Bracket_Enchantment)或者[附魔](IEnchantment)检索附魔定义。

## ZenGetters/ZenSetters

| ZenGetter             | ZenSetter | 类型     |
|-----------------------|-----------|---------|
| id                    |           | 字符串   |
| name                  | name      | 字符串   |
| maxLevel              |           | 整数     |
| minLevel              |           | 整数     |
| isAllowedOnBooks      |           | 布尔值   |
| isTreasureEnchantment |           | 布尔值   |
| isCurse               |           | 布尔值   |

## ZenMethods
### 可被附魔
检测一个魔咒是否可以被附在一个物品上  
第一条检测任意情况，第二条检测该物品是否可以在附魔台上得到这个魔咒
均返回布尔值，且需要传入[物品堆](IItemStack)。
```objectivec
ench.canApply(IItemStack item);
ench.canApplyAtEnchantmentTable(IItemStack item);
```

### 获取附魔能力
检测物品获得指定魔咒的需要的附魔能力。
均返回整数且需要传入魔咒名称（整数）。
```objectivec
ench.getMinEnchantability(int level);
ench.getMaxEnchantability(int level);
```

### 附魔名称
返回魔咒名称 (例： "亡灵杀手 IV").  
返回整数且需要传入魔咒名称（整数）。
效果与[附魔](IEnchantment) `.displayName` ZenGetter相同!
```objectivec
ench.getTranslatedName(int level);
```

### 创造附魔对象
通过魔咒名称创造一个附魔对象
```objectivec
ench.makeEnchantment(int level);
ench * level;
```


## 例
```javascript
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
