### onBreakSpeed

| Setter/Getter/Method | Nomi Metodo                  | Nomi                      | Input/Output                                               |
|:-------------------- |:---------------------------- |:------------------------- | ---------------------------------------------------------- |
| Getter               | getBlockState();             | blockState();             | Restituisce un [IBlockState](/Vanilla/Blocks/IBlockState/) |
| Getter               | getBlock();                  | blocco();                 | Restituisce un [IBlock](/Vanilla/Blocks/IBlock/)           |
| Getter               | getOriginalSpeed();          | originalSpeed();          | Restituisce un Fluttuante                                  |
| Getter               | getNewSpeed();               | newSpeed();               | Restituisce un Fluttuante                                  |
| Setter               | setNewSpeed(float newSpeed); | newSpeed(float newSpeed); | Prende un galleggiante                                     |

    var test = mods.compatskills.TraitCreator.createTrait("test", 2, 3, "compatskills:banana", 1, "compatskills:banana<unk> 5");
    
    test.onBreakSpeed = function(event as crafttweaker.event.PlayerBreakSpeedEvent) {
    ...
    };