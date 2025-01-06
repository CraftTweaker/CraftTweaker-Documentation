# IEnchantmentDefinition

An IEnchantmentDefinition is the actual Enchantment, it does not posess a level, but you can use this to retrieve information on the Enchantment.  

## Importing the package
It might be required for you to import the package if you encounter any issues (like casting an [Array](/AdvancedFunctions/Arrays_and_Loops/)), so better be safe than sorry and add the import.  
`import crafttweaker.enchantments.IEnchantmentDefinition;`

## Retrieving such an object
You can retrieve such an object from the [Enchantment Bracket handler](/Vanilla/Brackets/Bracket_Enchantment/) or from an [IEnchantment](/Vanilla/Enchantments/IEnchantment/) object.

## ZenGetters/ZenSetters

| ZenGetter             | ZenSetter | Type    |
|-----------------------|-----------|---------|
| id                    |           | int     |
| name                  | name      | string  |
| maxLevel              |           | int     |
| minLevel              |           | int     |
| isAllowedOnBooks      |           | boolean |
| isTreasureEnchantment |           | boolean |
| isCurse               |           | boolean |
| registryName          |           | string  |

## ZenMethods
### CanApply
Checks if the enchantment can be put on the item.  
First method checks in general, second checks if the item can be enchanted to this enchantment using the enchantment Table.  
Both return a bool and require an [IItemStack](/Vanilla/Items/IItemStack/) as input parameter.
```zenscript
ench.canApply(IItemStack item);
ench.canApplyAtEnchantmentTable(IItemStack item);
```

### getEnchantability
Checks what enchantability the item must have for the Enchantment at the given level.  
Both methods return an int and take the level of the enchantment as int parameter.
```zenscript
ench.getMinEnchantability(int level);
ench.getMaxEnchantability(int level);
```

### TranslatedName
Returns the translated name (e.g. "smite IV").  
Returns a string and requires the level of the enchantment as int parameter.  
Does the same as [IEnchantment's](/Vanilla/Enchantments/IEnchantment/) `.displayName` ZenGetter!
```zenscript
ench.getTranslatedName(int level);
```

### make Enchantment
By giving an EnchantmentDefinition a level you can make an [IEnchantment](/Vanilla/Enchantments/IEnchantment/) out of it:
```zenscript
ench.makeEnchantment(int level);
ench * level;
```

### Compare with other IEnchantmentDefinition objects
You can use the `==` operator to check if two enchantments are the same.  
This means if they have the same id.
```zenscript
if(enchA == enchB)
    print("Same!");
```


## Example
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