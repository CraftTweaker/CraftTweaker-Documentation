# Custom Modifiers

Using this package you can create custom modifiers that you can then put on your tools!

## Importing the class
It might be required for you to import the class if you encounter any issues (like casting an [Array](/AdvancedFunctions/Arrays_and_Loops)), so better be safe than sorry and add the import.  
`import mods.tconstruct.modifiers.custom;`

## Creating a modifier

First and foremost, you will need to create a custom modifier.  
This can be done using the static function:
```
//create(String identifier, int color, @Optional int maxLevel, @Optional int countPerLevel)
val myModifier = mods.tconstruct.modifiers.custom.create("kindlich_test", 0xffaadd, 100, 20);
```

For the color, it is suggested that you use the hexadecimal notation as shown above.  
`maxLevel` is the maximum level the modifier can become, and will default to 0.  
`countPerLevel` is how many sublevels the modifier can have (like Redstone which has 50).


## Adding modifier items

If you combine the given ingredient together with a tool in a tinker's tool forge, you can apply the modifer.  
```
//myModifier.addModifierItem(IIngredient item, @Optional(1) int amountNeeded, @Optional(1) int amountMatched));
myModifier.addItem(<minecraft:iron_pickaxe>);
myModifier.addItem(<minecraft:iron_block>, 4, 2);
```

- `item` is the item that is matched against. You can use [Item Conditions](/Vanilla/Items/Item_Conditions) but no Transformers or anything else.  
- `amountNeeded` is the amount of items that is matched against. You can split them over all the slots the toolforge provides, which also allows you to go above 64. In the example above, you need 4 iron blocks per addition. Defaults to 1.
- `amountMatched` is the amount of modifier points added per `amountNeeded`. In the example above four iron blocks give two modifier points. Defaults to 1.

## Adding Functionality

First, you can decide if you want to make the modifier hidden, they are shown by default.
```
myModifier.hidden = true;
```

Now that you have created a modifier you need to make it modify something, don't you?  
That's what the modifier event handlers are for:  
They are called whenever a user does something with the tool containing the modifier.

Below you will see all possible handlers, together with information on what they return and how to write the function for them. Remember that you will have to replace `myModifier` with your own variable name.  
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

- An [IItemStack](/Vanilla/Items/IItemStack) representing the used `tool`
- An [IWorld](/Vanilla/World/IWorld) representing the `world`
- An [IEntity](/Vanilla/Entities/IEntity) representing the `owner`
- An int representing the `itemSlot`
- A boolean that describes if the tool currently `isSelected`

__Returns nothing.__

Created using:
```
myModifier.getMiningSpeed = function(tool, world, owner, itemSlot, isSelected) {
	//CODE
};
``` 


### getMiningSpeed
Called when a block is mined.  
Be careful as this event is also be caught by vanilla blockBreak handlers.  
Parameters: 

- An [IItemStack](/Vanilla/Items/IItemStack) representing the used `tool`
- A [PlayerBreakSpeedEvent](/Vanilla/Events/Events/PlayerBreakSpeed)

__Returns nothing.__

Created using:
```
myModifier.getMiningSpeed = function(tool, event) {
	//CODE
};
``` 


### beforeBlockBreak
Called just before a block is broken.  
Be careful as this event is also be caught by vanilla blockBreak handlers.  
Parameters: 

- An [IItemStack](/Vanilla/Items/IItemStack) representing the used `tool`
- A [BlockBreakEvent](/Vanilla/Events/Events/BlockBreak)

__Returns nothing.__

Created using:
```
myModifier.beforeBlockBreak = function(tool, event) {
	//CODE
};
```

### afterBlockBreak
Called after the block has been destroyed.  
Parameters: 

- An [IItemStack](/Vanilla/Items/IItemStack) representing the used `tool`
- An [IWorld](/Vanilla/World/IWorld) representing the `world`
- An [IBlockState](/Vanilla/Blocks/IBlockState) representing the broken `block`
- An [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase) representing the `miner`
- A bool representing if the mining `wasEffective`

__Returns nothing.__

Created using:
```
myModifier.afterBlockBreak = function(tool, world, blockstate, miner, wasEffective) {
	//CODE
};
```

### onBlockHarvestDrops
Called whenever a block has been broken.  
Be careful as this event is also called by vanilla onBlockHarvestBreak handlers.  
Unlike the vanilla handler however, this handler will only be executed when a player broke the block.  
Parameters:

- An [IItemStack](/Vanilla/Items/IItemStack) representing the used `tool`
- A [BlockHarvestDropsEvent](/Vanilla/Events/Events/BlockHarvestDrops)

__Returns nothing__

Created using:
```
myModifier.onBlockHarvestDrops = function(tool, event) {
	//CODE
};
```

### calcCrit
Called before the damage done to the entity is calculated to determine whether it will be a crit or not.  
Returning `false` will not stop a hit that is already a crit from being so.  
Parameters:

- An [IItemStack](/Vanilla/Items/IItemStack) representing the used `tool`
- An [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase) representing the `attacker`
- An [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase) representing the `target`

__Returns a bool__ that is `true` if the hit should crit, false whenever else.

Created using:
```
myModifier.calcCrit = function(tool, attacker, target) {
	//CODE
	return true; //or false
};
```

### calcDamage
Called when an entity is hit, but still before the damage is dealt and before the crit damage is added.  
The crit damage will be calculated off the result of this.  
Parameters:

- An [IItemStack](/Vanilla/Items/IItemStack) representing the used `tool`
- An [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase) representing the `attacker`
- An [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase) representing the `target`
- A float representing the tool's `originalDamage` (unmodified tool damage)
- A float representing the tool's `newDamage` (the damage the tool will do up until this point, can be originalDamage, or already be modified by other modifiers).
- A boolean that represents if the hit `isCritical`

__Returns a float__ representing the new damage. Otherwise return `newDamage`

Created using
```
myModifier.calcDamage = function(tool, attacker, target, originalDamage, newDamage, isCritical) {
	//CODE
	return newDamage; //Or your modified value
};
```

### onHit
Called when an entity is hit, just before the damage is dealt.  
All damage calculation has already been done at this point.  
Parameters:

- An [IItemStack](/Vanilla/Items/IItemStack) representing the used `tool`
- An [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase) representing the `attacker`
- An [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase) representing the `target`
- A float representing the tool's `damage` (includung critdamage)
- A boolean that represents if the hit `isCritical`

__Returns nothing__

Created using
```
myModifier.onHit = function(tool, attacker, target, damage, isCritical) {
	//CODE
};
```

### calcKnockBack
Called after an entity is hit to modify the applied knockback.    
Parameters:

- An [IItemStack](/Vanilla/Items/IItemStack) representing the used `tool`
- An [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase) representing the `attacker`
- An [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase) representing the `target`
- A float representing the tool's `damage` (including crit)
- A float representing the tool's `originalKnockback` (unmodified tool knockback)
- A float representing the tool's `newKnockback` (the knockBack the tool will do up until this point, can be originalKnockback, or already be modified by other modifiers).
- A boolean that represents if the hit `isCritical`

__Returns a float__ representing the new damage. Otherwise return `newDamage`

Created using
```
myModifier.calcDamage = function(tool, attacker, target, damage, originalKnockBack, newKnockBack, isCritical) {
	//CODE
	return newDamage; //Or your modified value
};
```

### afterHit
Called after an entity is hit and after the damage is dealt.  
Parameters:

- An [IItemStack](/Vanilla/Items/IItemStack) representing the used `tool`
- An [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase) representing the `attacker`
- An [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase) representing the `target`
- A float representing the tool's `dealtDamage`
- A bool representing if the hit `wasCritical`
- A bool representing if the entity `wasHit`. Can be false if the entity was invulnerable or had some other ways of exacing the damage.

__Returns nothing__

Created using
```
mytrait.afterHit = function(tool, attacker, target, damageDealt, wasCritical, wasHit) {
	//CODE
};
```

### onBlock
Called when the player holding the tool blocks the attack.  
Otherwise `onHit` will be called.  
Parameters:

- An [IItemStack](/Vanilla/Items/IItemStack) representing the used `tool`
- An [IPlayer](/Vanilla/Players/IPlayer) representing the `player`
- An [EntityLivingHurtEvent](/Vanilla/Events/Events/EntityLivingHurt)

__Returns nothing__

Created using
```
myModifier.onBlock = function(tool, player, event) {
	//CODE
};
```

### onPlayerHurt
Called when the player holding the tool DID NOT BLOCK the attack.  
Otherwise `onBlock` will be called.  
Parameters:

- An [IItemStack](/Vanilla/Items/IItemStack) representing the used `tool`
- An [IPlayer](/Vanilla/Players/IPlayer) representing the `player`
- An [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase) representing the `attacker`
- An [EntityLivingHurtEvent](/Vanilla/Events/Events/EntityLivingHurt)

__Returns nothing__

Created using
```
myModifier.onPlayerHurt = function(tool, player, event) {
	//CODE
};
```


### onToolDamage
Called before the tools durability is getting decreased.  
Parameters:

- An [IItemStack](/Vanilla/Items/IItemStack) representing the used `tool`
- An int representing the `unmodifiedAmount` of durability to be reduced.
- An int representing the `newAmount` of durability to be reduced, which can already be modified by other traits.
- An [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase) representing the current tool `holder`

__Returns an int__ representing the new amount. Otherwise return `newAmount`

Created using
```
myModifier.onToolDamage = function(tool, unmodifiedAmount, newAmount, holder) {
	//CODE
	return newAmount; //Or your modified value
};
```


### onToolHeal
Called before the tools durability is getting increased.  
Parameters:

- An [IItemStack](/Vanilla/Items/IItemStack) representing the used `tool`
- An int representing the `unmodifiedAmount` of durability to be increased.
- An int representing the `newAmount` of durability to be increased, which can already be modified by other traits.
- An [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase) representing the current tool `holder`

__Returns an int__ representing the new amount. Otherwise return `newAmount`

Created using
```
myModifier.onToolHeal = function(tool, unmodifiedAmount, newAmount, holder) {
	//CODE
	return newAmount; //Or your modified value
};
```


### onToolRepair
Called before the tool is getting repaired with tis repair material.  
Not to be confused with `onToolHeal` which is called afterwards.  
Will be called multiple times if multiple items are used at once.  
Parameters: 
- An [IItemStack](/Vanilla/Items/IItemStack) representing the `tool` to be repaired
- An int representing the `amount` of durability to be increased.

__Returns nothing__

Created using
```
myModifier.onToolRepair = function(tool, amount) {
	//CODE
};
```