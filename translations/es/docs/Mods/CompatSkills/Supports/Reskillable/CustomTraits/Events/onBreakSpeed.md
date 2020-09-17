### onBreakSpeed

| Setter/Getter/Method | Nombres del método           | Nombres                   | Input/Output                                            |
|:-------------------- |:---------------------------- |:------------------------- | ------------------------------------------------------- |
| Obtén                | getBlockState();             | blockState();             | Devuelve un [IBlockState](/Vanilla/Blocks/IBlockState/) |
| Obtén                | getBlock();                  | bloque();                 | Devuelve un [IBlock](/Vanilla/Blocks/IBlock/)           |
| Obtén                | getOriginalSpeed();          | originalSpeed();          | Devuelve un float                                       |
| Obtén                | getNewSpeed();               | nueva();                  | Devuelve un float                                       |
| Setter               | setNewSpeed(float newSpeed); | newSpeed(float newSpeed); | Toma un float                                           |

    var test = mods.compatskills.TraitCreator.createTrait("test", 2, 3, "compatskills:banana", 1, "compatskills:banana|5");
    
    test.onBreakSpeed = function(event as crafttweaker.event.PlayerBreakSpeedEvent) {
    ...
    };