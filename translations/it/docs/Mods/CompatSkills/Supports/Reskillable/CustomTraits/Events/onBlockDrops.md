### onBlockDrops

| Setter/Getter/Method | Nomi Metodo                             | Nomi                                 | Input/Output                                                      |
|:-------------------- |:--------------------------------------- |:------------------------------------ | ----------------------------------------------------------------- |
| Getter               | getDropChance();                        | dropChance();                        | Restituisce un galleggiante                                       |
| Setter               | setDropChance(galleggiante dropChance); | dropChance(galleggiante dropChance); | Prende un galleggiante                                            |
| Getter               | getFortuneLevel();                      | forteLevel();                        | Restituisce un Intero                                             |
| Getter               | getDrops();                             | drops();                             | Restituisce una lista di [IItemStack](/Vanilla/Items/IItemStack/) |
| Setter               | setDrops(Elenco<iitemstack> drops);     | drops(Elenco<iitemstack> drops);     | Prende una lista di [IItemStack](/Vanilla/Items/IItemStack/)      |
| Metodo               | addItem(IItemStack itemStack);          | addItem(IItemStack itemStack);       | Takes an [IItemStack](/Vanilla/Items/IItemStack/)                 |
| Getter               | isSilkTouch();                          | silkTouch();                         | Restituisce un booleano                                           |
| Getter               | isPlayer();                             | isPlayer();                          | Restituisce un booleano                                           |
| Getter               | getPlayer();                            | giocatore(i)                         | Restituisce un [IPlayer](/Vanilla/Players/IPlayer/)               |

    var test = mods.compatskills.TraitCreator.createTrait("test", 2, 3, "compatskills:banana", 1, "compatskills:banana<unk> 5");
    
    test.onBlockDrops = function(event as crafttweaker.event.BlockHarvestDropsEvent) {
    ...
    };