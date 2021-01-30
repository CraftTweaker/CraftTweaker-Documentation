# Migriere Scripts zu CraftTweaker 7.1

CraftTweaker 7.1 hat einige Änderungen, die nicht abwärtskompatibel sind. Diese Änderungen sind sowohl in der API als auch in den Skripten zu sehen.


## MCTag wird zu MCTag&LT;T&GT;

Wir haben Tags durch ein generisches System ersetzt, das erweiterbar ist und mit zukünftigen Updates besser funktionieren wird.  
Diese Änderung wird bestehende Skripte auf zwei Arten nicht funktionstüchtig machen:

1) Die spezialisierten Zusatz- und Entnahmemethoden wurden entfernt. <br>Du verwendest jetzt `add` und `remove` anstelle von `addItems` und `addFluids` sowie die "remove" Varianten. 2) Die Syntax der Bracket-Handler benötigt nun den Tag-Typ als zusätzlichen Parameter. <br>Also wird `<tag:forge:gems>` zu `<tag:items:forge:gems>`

Die `/ct dump tags` und `/ct hand` Befehle wurden aktualisiert, um diese Änderung wiederzugeben.  
Wenn Sie eine der Erweiterungsmethoden von IIngredient von einem Item-Tag verwenden müssen, müssen Sie diese mit `.asIIngredient()` abrufen.

Migrationsbeispiel
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

The broken classes will be logged in the crafttweaker log. If you find some of your scripts breaking, check if they use one of the broken classes.


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
