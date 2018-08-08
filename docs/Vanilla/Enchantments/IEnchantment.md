# IEnchantment

An IEnchantment essentially is an [IEnchantmentDefinition](/Vanilla/Enchantments/IEnchantmentDefinition/) and an enchantment level.  

## Importing the package
It might be required for you to import the package if you encounter any issues (like casting an [Array](/AdvancedFunctions/Arrays_and_Loops/)), so better be safe than sorry and add the import.  
`import crafttweaker.enchantments.IEnchantment;`

## ZenGetters/ZenSetters

| ZenGetter   | ZenSetter   | Type                                             |
|-------------|-------------|--------------------------------------------------|
| definition  |             | [IEnchantmentDefinition](/Vanilla/Enchantments/IEnchantmentDefinition/) |
| level       |             | int                                              |
| displayName | displayName | String                                           |

## ZenMethods
### Retrieve the Enchantment as NBT
You might want to get the Enchantment's NBT-Tag.  
You can either cast it as [IData](/Vanilla/Data/IData/) or use the method: 
```
ench.makeTag();
ench as crafttweaker.data.IData;
```