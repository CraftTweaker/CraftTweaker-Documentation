### onBlockDrops

| Setter/Getter/Methode | Methodennamen                      | Namen                           | Input/Output                                                        |
|:--------------------- |:---------------------------------- |:------------------------------- | ------------------------------------------------------------------- |
| Getriebe              | getDropChance();                   | dropChance();                   | Gibt einen Float zurück                                             |
| Setter                | setDropChance(float dropChance);   | dropChance(float dropChance);   | Nimmt einen Float                                                   |
| Getriebe              | getFortuneLevel();                 | fortuneLevel();                 | Gibt eine Ganzzahl zurück                                           |
| Getriebe              | getDrops();                        | drops();                        | Gibt eine Liste von [IItemStack zurück](/Vanilla/Items/IItemStack/) |
| Setter                | setDrops(Liste<iitemstack> drops); | drops(Liste<iitemstack> drops); | Nimmt eine Liste von [IItemStack](/Vanilla/Items/IItemStack/)       |
| Methode               | addItem(IItemStack itemStack);     | addItem(IItemStack itemStack);  | Takes an [IItemStack](/Vanilla/Items/IItemStack/)                   |
| Getriebe              | isSilkTouch();                     | silkTouch();                    | Gibt einen Booleschen zurück                                        |
| Getriebe              | isPlayer();                        | isPlayer();                     | Gibt einen Booleschen zurück                                        |
| Getriebe              | getPlayer();                       | spieler();                      | Gibt einen [IPlayer](/Vanilla/Players/IPlayer/) zurück              |

    var test = mods.compatskills.TraitCreator.createTrait("test", 2, 3, "compatskills:banana", 1, "compatskills:banana|5");
    
    test.onBlockDrops = function(event as crafttweaker.event.BlockHarvestDropsEvent) {
    ...
    };