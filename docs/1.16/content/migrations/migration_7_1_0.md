# Migrating Scripts to CraftTweaker 7.1

CraftTweaker version 7.1 has some changes that break backwards compatibility.  
These breaking changes are in the API that addons use as well as in the types that scripts use.  
This document should give an overview of the most important changes and how pack developers can get their scripts working again.


## MCTag becomes MCTag&LT;T&GT;

We replaced Tags with a generic system that is more extensible and will work better with future updates.  
That change will break existing scripts in two ways: 

1) The specialized addition and removal methods have been removed. <br>You now use `add` and `remove` instead of `addItems`, `addFluids` and the like.
2) The syntax of the Bracket handlers now requires the tag type as an additional parameter. <br>So `<tag:forge:gems>` becomes `<tag:items:forge:gems>`

The `/ct dump tags` and `/ct hand` commands have been updated to reflect this change.  
If you need to use any of IIngredient's expansion methods from an item tag, you need to call `.asIIngredient()` first.

Migration example
```zenscript
import crafttweaker.api.tag.MCTag;
import crafttweaker.api.item.MCItemDefinition;
import crafttweaker.api.fluid.MCFluid;

var fluidTagOld = <tag:minecraft:water> as MCTag;
var itemTagOld = <tag:forge:gems> as MCTag;

var fluidTagNew = <tag:fluids:minecraft:water> as MCTag<MCFluid>;
var itemTagNew = <tag:items:forge:gems> as MCTag<MCItemDefinition>;

//How to interact
var myGemTagOld = <tag:forge:gems>;
myGemTagOld.addItems(<item:minecraft:bedrock>);
myGemTagOld.removeItems(<item:minecraft:diamond>);

var myGemTagNew = <tag:items:forge:gems>;
myGemTagNew.add(<item:minecraft:bedrock>);
myGemTagNew.remove(<item:minecraft:diamond>);


//IIngredient expansins
var reuseOld = <tag:forge:gems>.reuse();
var reuseNew = <tag:items:forge:gems>.asIIngredient().reuse();
```


## Wrapper types become vanilla types

We changed some internals workings of CraftTweaker to directly use minecraft types.  
This change should not affect your existing scripts directly, but will break some of the integrations added by other mods.

The broken classes will be logged in the crafttweaker log.
If you find some of your scripts breaking, check if they use one of the broken classes.


## Method to register EventHandlers changed signature

Event listeners no longer have the consumer in a custom constructor.  
Instead, the registitration method was changed to be generic.

Migration example:
```zenscript
import crafttweaker.api.events.CTEventManager;
import crafttweaker.api.event.entity.player.MCAnvilRepairEvent;

//Old way:
CTEventManager.register(new MCAnvilRepairEvent((event) => {
     var player = event.player;
     var result = event.itemResult;
     println("Player '" + player.name + "' crafted " + result.commandString);
 }));


//New way
CTEventManager.register<MCAnvilRepairEvent>((event) => {
     var player = event.player;
     var result = event.itemResult;
     println("Player '" + player.name + "' crafted " + result.commandString);
 });
```


## ZenCode: Storage tags are gone

We removed Storage tags from the ZenCode language Specifications for now.  
They are not required for CraftTweaker and made debugging harder.  
Most people did not need to use storage tags so we don't expect you to need to pursue this migration step.

Migration example:
```zenscript
var before = {} as string`static[string`static]`unique

var after = {} as string[string];

function funcBefore(argument as string`borrow) as string`unique {
	return argument + "!";
}

function funcAfter(argument as string) as string {
	return argument + "!";
}
```
