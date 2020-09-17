### en Bloqueado

| Setter/Getter/Method | Nombres del método                  | Nombres                           | Input/Output                                                  |
|:-------------------- |:----------------------------------- |:--------------------------------- | ------------------------------------------------------------- |
| Obtén                | getDropChance();                    | dropChance();                     | Devuelve un float                                             |
| Setter               | setDropChance(float dropChance);    | dropChance(float dropChance);     | Toma un float                                                 |
| Obtén                | getFortuneLevel();                  | fortuneLevel();                   | Devuelve un entero                                            |
| Obtén                | getDrops();                         | drops();                          | Devuelve una Lista de [ItemStack](/Vanilla/Items/IItemStack/) |
| Setter               | setDrops(Lista<iitemstack> soltar); | soltar(Lista<iitemstack> soltar); | Lleva una lista de [ItemStack](/Vanilla/Items/IItemStack/)    |
| Método               | addItem(IItemStack itemStack);      | addItem(IItemStack itemStack);    | Takes an [IItemStack](/Vanilla/Items/IItemStack/)             |
| Obtén                | isSilkTouch();                      | sedaTouch();                      | Devuelve un booleano                                          |
| Obtén                | isJugador();                        | isJugador();                      | Devuelve un booleano                                          |
| Obtén                | getPlayer();                        | jugador();                        | Devuelve un [IPlayer](/Vanilla/Players/IPlayer/)              |

    var test = mods.compatskills.TraitCreator.createTrait("test", 2, 3, "compatskills:banana", 1, "compatskills:banana|5");
    
    test.onBlockDrops = function(event as crafttweaker.event.BlockHarvestDropsEvent) {
    ...
    };