# IEnchantmentDefinition

IEnchantmentDefinition - это фактическое зачарование, оно не имеет уровня, но вы можете использовать это для получения информации о зачаровании.

## Импорт пакета

Может потребоваться импортировать пакет, если вы обнаруживаете какие-либо проблемы (вроде приведения типа [массива](/AdvancedFunctions/Arrays_and_Loops/)), поэтому в качестве меры предосторожности лучше добавить импорт:  
`import crafttweaker.enchantments.IEnchantmentDefinition;`

## Получение такого объекта

Вы можете извлечь такой объект из [обработчика зачарования Bracket](/Vanilla/Brackets/Bracket_Enchantment/) или из объекта [IEnchantment](/Vanilla/Enchantments/IEnchantment/).

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

Проверяет, можно ли наложить чары на предмет.  
Первый метод вообще проверяет, можно ли зачаровать предмет с использованием Зачарок.  
Оба возвращают бул и требуют значение [IItemStack](/Vanilla/Items/IItemStack/) в качестве входного параметра.

```zenscript
ench.canApply(IItemStack item);
ench.canApplyAtEnchantmentTable(IItemStack item);
```

### getEnchantability

Проверяет, какая зачарованность должна иметь предмет для зачарования на данном уровне.  
оба метода возвращают int и принимают уровень зачарования в качестве параметра int .

```zenscript
ench.getMinEnchantability(int level);
ench.getMaxEnchantability(int level);
```

### getTranslatedName

Возвращает переведенное имя (например, "smite IV").  
Возвращает строку и требует уровень зачарования в качестве параметра int.  
То же самое, что и [IEnchant](/Vanilla/Enchantments/IEnchantment/) `.displayName` ZenGetter!

```objectzenscriptivec
ench.getTranslatedName(int level);
```

### makeEnchantment

Давая зачарование уровень вы можете сделать [зачарования](/Vanilla/Enchantments/IEnchantment/) из него:

```zenscript
ench.makeEnchantment(int level);
ench * level;
```

### Сравнение с другими объектами IEnchantmentDefinition

Вы можете использовать оператор `==` , чтобы проверить, являются ли два чара одинаковыми.  
Это означает, что они имеют одинаковый идентификатор.

```zenscript
if(enchA == enchB)
    print("То же!");
```

## Пример

```zenscript
import crafttweaker.enchantments.IEnchantmentDefinition;
import crafttweaker.data. Data;

val array as IEnchantmentDefinition[] = [<enchantment:minecraft:protection>,<enchantment:minecraft:fire_protection>,<enchantment:minecraft:feather_falling>,<enchantment:minecraft:blast_protection>,<enchantment:minecraft:projectile_protection>,<enchantment:minecraft:respiration>,<enchantment:minecraft:aqua_affinity>];

var map as IData = {};

for ench in array {
    map += ench. akeEnchant(3).makeTag();
}

print(map.asString());


recipes.addShapeless("Supo", <minecraft:golden_sword>.withTag(map), [<minecraft:iron_sword>, <minecraft:golden_sword>]);

```