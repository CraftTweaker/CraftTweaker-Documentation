# IEnchantmentDefinition

An IEnchantmentDefinition is the actual Enchantment, it does not posess a level, but you can use this to retrieve information on the Enchantment.  

## Importing the package
It might be required for you to import the package if you encounter any issues (like casting an [Array](/AdvancedFunctions/Arrays_and_Loops)), so better be safe than sorry and add the import.  
`import crafttweaker.enchantments.IEnchantmentDefinition;`

## ZenGetters/ZenSetters

| ZenGetter             | ZenSetter | Type    |
|-----------------------|-----------|---------|
| id                    |           | string  |
| name                  | name      | string  |
| maxLevel              |           | int     |
| minLevel              |           | int     |
| isAllowedOnBooks      |           | boolean |
| isTreasureEnchantment |           | boolean |
| isCurse               |           | boolean |

## ZenMethods
### CanApply
Checks if the enchantment can be put on the item.  
First method checks in general, second checks if the item can be enchanted to this enchantment using the enchantment Table.  
Both return a bool and require an [IItemStack](IItemStack) as input parameter.
```
ench.canApply(IItemStack item);
ench.canApplyAtEnchantmentTable(IItemStack item);
```

### getEnchantability
Checks what enchantability the item must have for the Enchantment at the given level.  
Both methods return an int and take the level of the enchantment as int parameter.
```
ench.getMinEnchantability(int level);
ench.getMaxEnchantability(int level);
```

### TranslatedName
Returns the translated name (e.g. "smite IV").  
Returns a string and requires the level of the enchantment as int parameter.  
Does the same as [IEnchantment's](IEnchantment) `.displayName` ZenGetter!
```
ench.getTranslatedName(int level);
```

### make Enchantment
By giving an EnchantmentDefinition a level you can make an [IEnchantment's](IEnchantment) out of it:
```
ench.makeEnchantment(int level);
ench * level;
```