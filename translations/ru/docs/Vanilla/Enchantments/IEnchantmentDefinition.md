# IEnchantmentDefinition

An IEnchantmentDefinition is the actual Enchantment, it does not posess a level, but you can use this to retrieve information on the Enchantment.

## Импорт пакета

Может потребоваться импортировать пакет, если вы обнаруживаете какие-либо проблемы (вроде приведения типа [массива](/AdvancedFunctions/Arrays_and_Loops/)), поэтому в качестве меры предосторожности лучше добавить импорт:  
`import crafttweaker.enchantments.IEnchantmentDefinition;`

## Получение такого объекта

You can retrieve such an object from the [Enchantment Bracket handler](/Vanilla/Brackets/Bracket_Enchantment/) or from an [IEnchantment](/Vanilla/Enchantments/IEnchantment/) object.

## Геттеры/сеттеры

| Геттер                | Сеттер | Тип     |
| --------------------- | ------ | ------- |
| id                    |        | int     |
| name                  | name   | string  |
| maxLevel              |        | int     |
| minLevel              |        | int     |
| isAllowedOnBooks      |        | boolean |
| isTreasureEnchantment |        | boolean |
| isCurse               |        | boolean |
| registryName          |        | string  |

## Методы

### canApply

Checks if the enchantment can be put on the item.  
First method checks in general, second checks if the item can be enchanted to this enchantment using the enchantment Table.  
Both return a bool and require an [IItemStack](/Vanilla/Items/IItemStack/) as input parameter.

```objectivec
ench.canApply(IItemStack item);
ench.canApplyAtEnchantmentTable(IItemStack item);
```

### getEnchantability

Checks what enchantability the item must have for the Enchantment at the given level.  
Both methods return an int and take the level of the enchantment as int parameter.

```objectivec
ench.getMinEnchantability(int level);
ench.getMaxEnchantability(int level);
```

### getTranslatedName

Returns the translated name (e.g. "smite IV").  
Returns a string and requires the level of the enchantment as int parameter.  
Does the same as [IEnchantment's](/Vanilla/Enchantments/IEnchantment/) `.displayName` ZenGetter!

```objectivec
ench.getTranslatedName(int level);
```

### makeEnchantment

By giving an EnchantmentDefinition a level you can make an [IEnchantment](/Vanilla/Enchantments/IEnchantment/) out of it:

```objectivec
ench.makeEnchantment(int level);
ench * level;
```

### Сравнение с другими объектами IEnchantmentDefinition

You can use the `==` operator to check if two enchantments are the same.  
This means if they have the same id.

```objectivec
if(enchA == enchB)
    print("Same!");
```

## Example

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