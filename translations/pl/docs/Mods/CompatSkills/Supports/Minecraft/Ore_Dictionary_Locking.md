# Blokowanie OreDictionary

## Funkcja:

Ta blokada dodaje możliwość blokowania dowolnych i wszystkich przedmiotów pod określonym tagiem słownika rudy. Oznacza to, że jeśli zablokujesz wpis słownika rudy "oreŻelaza" każdy element/blok z tagiem "oreŻela" byłby zablokowany za ustawionymi wymaganiami. Ten typ blokady obsługuje również parametr [IData](/Vanilla/Data/IData/) , co oznacza, że wpływa tylko na rzeczy pod znacznikiem Ore-Dict IF mają pasujący tag IDATA do tego, który jest dostarczany do blokady.

## Składnia:

    mods.compatskills.OreDictLock.addOreDictLock(IOreDictEnt, String... zablokowane);
    mods.compatskills.OreDictLock.addNBTOreDictLock(IOreDictentry wpis, znacznik IDanych, String... zablokowane);
    
    mods.compatskills.OreDictLock.addOreDictLock(<ore:ingotIron>, "dim|1");
    mods.compatskills.OreDictLock.addNBTOreDictLock(<ore:oreIron>, Znacznik IData "dim|1");