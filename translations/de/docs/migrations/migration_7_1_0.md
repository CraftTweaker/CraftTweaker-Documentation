# Migrating Scripts to CraftTweaker 7.1

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

//Wie man nun interagiert
var myGemTagOld = <tag:forge:gems>;
myGemTagOld.addItems(<item:minecraft:bedrock>);
myGemTagOld.removeItems(<item:minecraft:diamond>);

var myGemTagNew = <tag:items:forge:gems>;
myGemTagNew.add(<item:minecraft:bedrock>);
myGemTagNew.remove(<item:minecraft:diamond>);


//IIngredient Erweiterung
var reuseOld = <tag:forge:gems>.reuse();
var reuseNew = <tag:items:forge:gems>.asIIngredient().reuse();
```


## Wrapper-Typen werden zu Vanilla-Typen

Wir haben einige interne Funktionen von CraftTweaker geändert, um Minecraft-Typen direkt zu verwenden.  
Diese Änderung sollte Ihre existierenden Skripte nicht direkt beeinflussen, wird aber einige der Integrationen, die von anderen Mods hinzugefügt wurden, zerstören.

Die kaputten Klassen werden im crafttweaker.log angezeigt. Wenn Sie feststellen, dass einige Ihrer Skripte kaputt gehen, überprüfen Sie, ob sie eine der kaputten Klassen verwenden.


## Methode zum Registrieren von EventHandlers abgeänderte Signatur

Event Listeners haben nicht mehr den Verbraucher in einem benutzerdefinierten Konstruktor.  
Stattdessen wurde die Registrierung generisch geändert.

Migrationsbeispiel:
```zenscript
import crafttweaker.api.events.CTEventManager;
import crafttweaker.api.event.entity.player.MCAnvilRepairEvent;

//Alter Weg:
CTEventManager.register(new MCAnvilRepairEvent((event) => {
     var player = event.player;
     var result = event.itemResult;
     println("Player '" + player.name + "' crafted " + result.commandString);
 }));


//Neuer Weg:
CTEventManager.register<MCAnvilRepairEvent>((event) => {
     var player = event.player;
     var result = event.itemResult;
     println("Player '" + player.name + "' crafted " + result.commandString);
 });
```


## ZenCode: Speicher-Tags sind verschwunden

Wir haben Speicher-Tags von den ZenCode-Sprachspezifikationen entfernt.  
Sie sind nicht für CraftTweaker erforderlich und haben das Debuggen erschwert.  
Die meisten Leute mussten keine Speicher-Tags verwenden, so dass wir nicht erwarten, dass Sie diesen Migrationsschritt fortsetzen müssen.

Migrationsbeispiel:
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
