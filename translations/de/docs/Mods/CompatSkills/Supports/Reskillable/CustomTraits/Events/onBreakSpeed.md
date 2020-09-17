### onBreakSpeed

| Setter/Getter/Methode | Methodennamen                | Namen                     | Input/Output                                            |
|:--------------------- |:---------------------------- |:------------------------- | ------------------------------------------------------- |
| Getriebe              | getBlockState();             | blockState();             | Gibt [IBlockState zurück](/Vanilla/Blocks/IBlockState/) |
| Getriebe              | getBlock();                  | block();                  | Gibt einen [IBlock](/Vanilla/Blocks/IBlock/) zurück     |
| Getriebe              | getOriginalSpeed();          | originalSpeed();          | Gibt einen Float zurück                                 |
| Getriebe              | getNewSpeed();               | newSpeed();               | Gibt einen Float zurück                                 |
| Setter                | setNewSpeed(float newSpeed); | newSpeed(float newSpeed); | Nimmt einen Float                                       |

    var test = mods.compatskills.TraitCreator.createTrait("test", 2, 3, "compatskills:banana", 1, "compatskills:banana|5");
    
    test.onBreakSpeed = function(event as crafttweaker.event.PlayerBreakSpeedEvent) {
    ...
    };