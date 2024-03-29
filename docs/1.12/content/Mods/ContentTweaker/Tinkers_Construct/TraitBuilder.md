# Custom Traits

Using this package you can create trait that you can then put on your tools!

## Importing the class
It might be required for you to import the class if you encounter any issues (like casting an [Array](/AdvancedFunctions/Arrays_and_Loops/)), so better be safe than sorry and add the import.  
`import mods.contenttweaker.tconstruct.TraitBuilder;`

## Creating a trait

First and foremost, you will need to create a trait builder.  
This can be done using the static function:
```zenscript
//create(String identifier, int color, @Optional int maxLevel, @Optional int countPerLevel)
val myTrait = mods.contenttweaker.tconstruct.TraitBuilder.create("kindlich_test", 0xffaadd, 100, 20);
```

The `identifier` has to be unique!  
For the `color`, it is suggested that you use the hexadecimal notation as shown above.  
`maxLevel` is the maximum level the trait can become, and will default to 0.  
`countPerLevel` is how many sublevels the trait can have (like Redstone which has 50).

After you've finished all modifications below, you will need to register your trait.  
This can be done using the `register` method, which will return a [Representation](/Mods/ContentTweaker/Tinkers_Construct/Trait/) of the new trait.
```zenscript
myTrait.register();
```

After registering, you can still modify the builder, the trait itself can no longer be modified.  
That way you can create multiple similar traits easily.


## Modifier Items

If you combine the given ingredient together with a tool in a tinker's tool forge, you can apply the trait as modifier.  
```zenscript
//myTrait.addItem(IIngredient item, @Optional(1) int amountNeeded, @Optional(1) int amountMatched));
myTrait.addItem(<item:minecraft:iron_pickaxe>);
myTrait.addItem(<item:minecraft:iron_block>, 4, 2);

//myTrait.removeItem(IItemStack stack);
myTrait.removeItem(<item:minecraft:iron_pickaxe>);
```

- `item` is the item that is matched against. You can use [Item Conditions](/Vanilla/Items/Item_Conditions/) but no Transformers.  
- `amountNeeded` is the amount of items that is matched against. You can split them over all the slots the toolforge provides, which also allows you to go above 64. In the example above, you need 4 iron blocks per addition. Defaults to 1.
- `amountMatched` is the amount of trait points added per `amountNeeded`. In the example above four iron blocks give two trait points. Defaults to 1.
- If you use the `remove function`, it will remove all trait ingredients that match for the item.

## Properties

You can set and get these properties using the names given:

| Name                 | Type    |
|----------------------|---------|
| color                | int     |
| countPerLevel        | int     |
| hidden               | bool    |
| identifier           | string  |
| localizedDescription | string  |
| localizedName        | string  |
| maxLevel             | int     |


## Calculated Properties

Some properties will need to be calculated.  
You can set the given property functions: 

### CanApplyTogether

Check if a trait can be added to a tool that already has another trait or [enchantment](/Vanilla/Enchantments/IEnchantmentDefinition/).
```zenscript
myTrait.canApplyTogetherTrait = function(TraitRepresentation thisTrait, String otherTrait){....};
myTrait.canApplyTogetherEnchantment = function(TraitRepresentation thisTrait, IEnchantmentDefinition enchant){....};
```

### Extra info

The returned String[] will be displayed as extra information in the tool station.  
```zenscript
myTrait.extraInfo = function(TraitRepresentation thisTrait, IItemStack item, IData tag){....};
```


## Adding Functionality

Now that you have created a trait you need to make it modify something, don't you?  
That's what the trait event handlers are for:  
They are called whenever a user does something with the tool containing the trait.

Below you will see all possible handlers, together with information on what they return and how to write the function for them. Remember that you will have to replace `myTrait` with your own variable name.  
Also, you only have to use the handlers that you need, you don't need empty handlers only so that you have filled everything.

<details>
	<summary>All Handlers in a nutshell</summary>
	<ul>
		<li>[onUpdate](#onupdate)</li>
		<li>[getMiningSpeed](#getminingspeed)</li>
		<li>[beforeBlockBreak](#beforeblockbreak)</li>
		<li>[afterBlockBreak](#afterblockbreak)</li>
		<li>[onBlockHarvestDrops](#onblockharvestdrops)</li>
		<li>[calcCrit](#calccrit)</li>
		<li>[calcDamage](#calcdamage)</li>
		<li>[onHit](#onhit)</li>
		<li>[calcKnockBack](#calcknockback)</li>
		<li>[afterHit](#afterhit)</li>
		<li>[onBlock](#onblock)</li>
		<li>[onPlayerHurt](#onplayerhurt)</li>
		<li>[onToolDamage](#ontooldamage)</li>
		<li>[onToolHeal](#ontoolheal)</li>
		<li>[onToolRepair](#ontoolrepair)</li>
	</ul>
</details>

### onUpdate
Called each tick by the tool is loaded (that means in the player's inventory).  
Parameters:

- A [Trait Representation](/Mods/ContentTweaker/Tinkers_Construct/Trait/) representing the currently used `trait`.
- An [IItemStack](/Vanilla/Items/IItemStack/) representing the used `tool`
- An [IWorld](/Vanilla/World/IWorld/) representing the `world`
- An [IEntity](/Vanilla/Entities/IEntity/) representing the `owner`
- An int representing the `itemSlot`
- A boolean that describes if the tool currently `isSelected`

__Returns nothing.__

Created using:
```zenscript
myTrait.getMiningSpeed = function(trait, tool, world, owner, itemSlot, isSelected) {
	//CODE
};
``` 


### getMiningSpeed
Called when a block is mined.  
Be careful as this event is also be caught by vanilla blockBreak handlers.  
Parameters: 

- A [Trait Representation](/Mods/ContentTweaker/Tinkers_Construct/Trait/) representing the currently used `trait`.
- An [IItemStack](/Vanilla/Items/IItemStack/) representing the used `tool`
- A [PlayerBreakSpeedEvent](/Vanilla/Events/Events/PlayerBreakSpeed/)

__Returns nothing.__

Created using:
```zenscript
myTrait.getMiningSpeed = function(trait, tool, event) {
	//CODE
};
``` 


### beforeBlockBreak
Called just before a block is broken.  
Be careful as this event is also be caught by vanilla blockBreak handlers.  
Parameters: 

- A [Trait Representation](/Mods/ContentTweaker/Tinkers_Construct/Trait/) representing the currently used `trait`.
- An [IItemStack](/Vanilla/Items/IItemStack/) representing the used `tool`
- A [BlockBreakEvent](/Vanilla/Events/Events/BlockBreak/)

__Returns nothing.__

Created using:
```zenscript
myTrait.beforeBlockBreak = function(trait, tool, event) {
	//CODE
};
```

### afterBlockBreak
Called after the block has been destroyed.  
Parameters: 

- A [Trait Representation](/Mods/ContentTweaker/Tinkers_Construct/Trait/) representing the currently used `trait`.
- An [IItemStack](/Vanilla/Items/IItemStack/) representing the used `tool`
- An [IWorld](/Vanilla/World/IWorld/) representing the `world`
- An [IBlockPos](/Vanilla/World/IBlockPos/) representing the `blockPos`
- An [IBlockState](/Vanilla/Blocks/IBlockState/) representing the broken `block`
- An [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/) representing the `miner`
- A bool representing if the mining `wasEffective`

__Returns nothing.__

Created using:
```zenscript
myTrait.afterBlockBreak = function(trait, tool, world, blockstate, blockPos, miner, wasEffective) {
	//CODE
};
```

### onBlockHarvestDrops
Called whenever a block has been broken.  
Be careful as this event is also called by vanilla onBlockHarvestBreak handlers.  
Unlike the vanilla handler however, this handler will only be executed when a player broke the block.  
Parameters:

- A [Trait Representation](/Mods/ContentTweaker/Tinkers_Construct/Trait/) representing the currently used `trait`.
- An [IItemStack](/Vanilla/Items/IItemStack/) representing the used `tool`
- A [BlockHarvestDropsEvent](/Vanilla/Events/Events/BlockHarvestDrops/)

__Returns nothing__

Created using:
```zenscript
myTrait.onBlockHarvestDrops = function(trait, tool, event) {
	//CODE
};
```

### calcCrit
Called before the damage done to the entity is calculated to determine whether it will be a crit or not.  
Returning `false` will not stop a hit that is already a crit from being so.  
Parameters:

- A [Trait Representation](/Mods/ContentTweaker/Tinkers_Construct/Trait/) representing the currently used `trait`.
- An [IItemStack](/Vanilla/Items/IItemStack/) representing the used `tool`
- An [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/) representing the `attacker`
- An [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/) representing the `target`

__Returns a bool__ that is `true` if the hit should crit, false whenever else.

Created using:
```zenscript
myTrait.calcCrit = function(trait, tool, attacker, target) {
	//CODE
	return true; //or false
};
```

### calcDamage
Called when an entity is hit, but still before the damage is dealt and before the crit damage is added.  
The crit damage will be calculated off the result of this.  
Parameters:

- A [Trait Representation](/Mods/ContentTweaker/Tinkers_Construct/Trait/) representing the currently used `trait`.
- An [IItemStack](/Vanilla/Items/IItemStack/) representing the used `tool`
- An [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/) representing the `attacker`
- An [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/) representing the `target`
- A float representing the tool's `originalDamage` (unmodified tool damage)
- A float representing the tool's `newDamage` (the damage the tool will do up until this point, can be originalDamage, or already be modified by other traits).
- A boolean that represents if the hit `isCritical`

__Returns a float__ representing the new damage. Otherwise return `newDamage`

Created using
```zenscript
myTrait.calcDamage = function(trait, tool, attacker, target, originalDamage, newDamage, isCritical) {
	//CODE
	return newDamage; //Or your modified value
};
```

### onHit
Called when an entity is hit, just before the damage is dealt.  
All damage calculation has already been done at this point.  
Parameters:

- A [Trait Representation](/Mods/ContentTweaker/Tinkers_Construct/Trait/) representing the currently used `trait`.
- An [IItemStack](/Vanilla/Items/IItemStack/) representing the used `tool`
- An [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/) representing the `attacker`
- An [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/) representing the `target`
- A float representing the tool's `damage` (includung critdamage)
- A boolean that represents if the hit `isCritical`

__Returns nothing__

Created using
```zenscript
myTrait.onHit = function(trait, tool, attacker, target, damage, isCritical) {
	//CODE
};
```

### calcKnockBack
Called after an entity is hit to modify the applied knockback.    
Parameters:

- A [Trait Representation](/Mods/ContentTweaker/Tinkers_Construct/Trait/) representing the currently used `trait`.
- An [IItemStack](/Vanilla/Items/IItemStack/) representing the used `tool`
- An [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/) representing the `attacker`
- An [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/) representing the `target`
- A float representing the tool's `damage` (including crit)
- A float representing the tool's `originalKnockback` (unmodified tool knockback)
- A float representing the tool's `newKnockback` (the knockBack the tool will do up until this point, can be originalKnockback, or already be modified by other traits).
- A boolean that represents if the hit `isCritical`

__Returns a float__ representing the new knockback. Otherwise return `newKnockback`

Created using
```zenscript
myTrait.calcDamage = function(trait, tool, attacker, target, damage, originalKnockBack, newKnockBack, isCritical) {
	//CODE
	return newDamage; //Or your modified value
};
```

### afterHit
Called after an entity is hit and after the damage is dealt.  
Parameters:

- A [Trait Representation](/Mods/ContentTweaker/Tinkers_Construct/Trait/) representing the currently used `trait`.
- An [IItemStack](/Vanilla/Items/IItemStack/) representing the used `tool`
- An [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/) representing the `attacker`
- An [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/) representing the `target`
- A float representing the tool's `dealtDamage`
- A bool representing if the hit `wasCritical`
- A bool representing if the entity `wasHit`. Can be false if the entity was invulnerable or had some other ways of exacing the damage.

__Returns nothing__

Created using
```zenscript
mytrait.afterHit = function(trait, tool, attacker, target, damageDealt, wasCritical, wasHit) {
	//CODE
};
```

### onBlock
Called when the player holding the tool blocks the attack.  
Otherwise `onHit` will be called.  
Parameters:

- A [Trait Representation](/Mods/ContentTweaker/Tinkers_Construct/Trait/) representing the currently used `trait`.
- An [IItemStack](/Vanilla/Items/IItemStack/) representing the used `tool`
- An [IPlayer](/Vanilla/Players/IPlayer/) representing the `player`
- An [EntityLivingHurtEvent](/Vanilla/Events/Events/EntityLivingHurt/)

__Returns nothing__

Created using
```zenscript
myTrait.onBlock = function(trait, tool, player, event) {
	//CODE
};
```

### onPlayerHurt
Called when the player holding the tool DID NOT BLOCK the attack.  
Otherwise `onBlock` will be called.  
Parameters:

- A [Trait Representation](/Mods/ContentTweaker/Tinkers_Construct/Trait/) representing the currently used `trait`.
- An [IItemStack](/Vanilla/Items/IItemStack/) representing the used `tool`
- An [IPlayer](/Vanilla/Players/IPlayer/) representing the `player`
- An [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/) representing the `attacker`
- An [EntityLivingHurtEvent](/Vanilla/Events/Events/EntityLivingHurt/)

__Returns nothing__

Created using
```zenscript
myTrait.onPlayerHurt = function(trait, tool, player, event) {
	//CODE
};
```


### onToolDamage
Called before the tools durability is getting decreased.  
Parameters:

- A [Trait Representation](/Mods/ContentTweaker/Tinkers_Construct/Trait/) representing the currently used `trait`.
- An [IItemStack](/Vanilla/Items/IItemStack/) representing the used `tool`
- An int representing the `unmodifiedAmount` of durability to be reduced.
- An int representing the `newAmount` of durability to be reduced, which can already be modified by other traits.
- An [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/) representing the current tool `holder`

__Returns an int__ representing the new amount. Otherwise return `newAmount`

Created using
```zenscript
myTrait.onToolDamage = function(trait, tool, unmodifiedAmount, newAmount, holder) {
	//CODE
	return newAmount; //Or your modified value
};
```


### calcToolHeal
Called before the tools durability is getting increased.  
Parameters:

- A [Trait Representation](/Mods/ContentTweaker/Tinkers_Construct/Trait/) representing the currently used `trait`.
- An [IItemStack](/Vanilla/Items/IItemStack/) representing the used `tool`
- An int representing the `unmodifiedAmount` of durability to be increased.
- An int representing the `newAmount` of durability to be increased, which can already be modified by other traits.
- An [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/) representing the current tool `holder`

__Returns an int__ representing the new amount. Otherwise return `newAmount`

Created using
```zenscript
myTrait.calcToolHeal = function(trait, tool, unmodifiedAmount, newAmount, holder) {
	//CODE
	return newAmount; //Or your modified value
};
```


### onToolRepair
Called before the tool is getting repaired with tis repair material.  
Not to be confused with `onToolHeal` which is called afterwards.  
Will be called multiple times if multiple items are used at once.  
Parameters: 

- A [Trait Representation](/Mods/ContentTweaker/Tinkers_Construct/Trait/) representing the currently used `trait`.
- An [IItemStack](/Vanilla/Items/IItemStack/) representing the `tool` to be repaired
- An int representing the `amount` of durability to be increased.

__Returns nothing__

Created using
```zenscript
myTrait.onToolRepair = function(trait, tool, amount) {
	//CODE
};
```



## Example
```zenscript
#loader contenttweaker
#modloaded tconstruct

val testTrait = mods.contenttweaker.tconstruct.TraitBuilder.create("kindlich_test");
testTrait.color = 0xffaadd;
testTrait.maxLevel = 100;
testTrait.countPerLevel = 20;
testTrait.addItem(<item:minecraft:iron_pickaxe>);
testTrait.addItem(<item:minecraft:iron_block>, 4, 2);
testTrait.localizedName = "Whooooooooo";
testTrait.localizedDescription = "This is fun! Sadly, it doesn't do anything... \u2639";
testTrait.afterHit = function(thisTrait, tool, attacker, target, damageDealt, wasCrit, wasHit) {
	attacker.heal(damageDealt);
};
testTrait.register();
```
