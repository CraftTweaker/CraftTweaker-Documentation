# IItemUtils

The ItemUtils interface provides various item utils.  
It can be accessed using the `items` keyword.

## Creating Potions
The createPotions function allows you to create custom potions.  
Returns the potion as [IItemStack](/Vanilla/Items/IItemStack).  
As the Parameter for this function is a vararg, you can either provide one Object[][] or many Object[].  
In both cases each Object[] needs to contain

1. An [IPotion](/Vanilla/Potions/IPotion)
2. An int describing the effect amplifier/strength
3. An int describing the effect duration.  

If an Object[] is not of this length or not in this order, it will be ignored.

```JAVA
//createPotion(Object[]...);
//createPotion([effect,strength,duration],[effect2, strength2,duration2],...);
//createPotion([[effect,strength,duration],[effect2, strength2,duration2],...]);
val potion = itemUtils.createPotion([[<potion:minecraft:strength>, 1, 1]]);
```

## Get Items by name
These two functions both return an [IItemStack](/Vanilla/Items/IItemStack)[] containing all matching items.  
The first checks against the items' registry names, the 2nd uses the unlocalized names.

```Java
//getItemsByRegexRegistryName(String Regex)
itemUtils.getItemsByRegexRegistryName(".*sword.*"); // all things that have sword in the name
itemUtils.getItemsByRegexRegistryName(".*thermal.*"); // all thermal expansion/foundation/dynamics items

//getItemsByRegexUnlocalizedName(String Regex)
itemUtils.getItemsByRegexUnlocalizedName(".*pink.*"); // pink things!! <3
```

## Create Spawn egg
The createSpawnEgg function allows you to create custom mod spawn eggs.  
The customNBT is OPTIONAL and can override the entity tag.  
Returns the spawn eff as [IItemStack](/Vanilla/Items/IItemStack).

```JAVA
//createSpawnEgg(entity, @optional customNBT)
//NBT overrides entity (this creates a creeper egg!)
val egg = itemUtils.createSpawnEgg(<entity:minecraft:sheep>, {EntityTag:{id:"minecraft:creeper",NoAI:1 as byte,PersistenceRequired:1 as byte}});
```
