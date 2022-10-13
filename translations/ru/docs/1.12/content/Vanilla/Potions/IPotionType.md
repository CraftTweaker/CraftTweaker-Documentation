# IPotionType



## Импорт пакета
It might be required for you to import the package if you encounter any issues (like casting an [Array](/AdvancedFunctions/Arrays_and_Loops/)), so better be safe than sorry and add the import.  
`import crafttweaker.potions.IPotionType;`

## Getting an IPotionType object
You can get such an object through the use of the [PotionType Bracket handler](/Vanilla/Brackets/Bracket_PotionType/)

```zenscript
<potiontype:minecraft:long_strength>;
```

## ZenGetter

| ZenGetter | Тип                                                    |
| --------- | ------------------------------------------------------ |
|           |                                                        |
| effects   | List<[IPotionEffect](/Vanilla/Potions/IPotionEffect/)> |

## ZenMethods
## Imitate the PotionType Bracket Handler
This method does the same as the [PotionType Bracket Handler](/Vanilla/Brackets/Bracket_PotionType/).
```
//fromString(String potiontype);
IPotionType.fromString("minecraft:mundane");
```
