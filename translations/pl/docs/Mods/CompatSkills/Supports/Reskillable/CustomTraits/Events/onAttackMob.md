### onAttackMob

| Ustawienie/Getter/Metoda   | Nazwy metod        | Nazwisko              | Input/Output                                           |
|:-------------------------- |:------------------ |:--------------------- | ------------------------------------------------------ |
| crwdns74646:0crwdne74646:0 | getDamageSource(); | Źródło uszkodzenia(); | Zwraca [IDamageSource](/Vanilla/Damage/IDamageSource/) |
| crwdns74646:0crwdne74646:0 | getAmount();       | kwota();              | Zwraca zmienną                                         |

    test var = mods.compatskills.TraitCreator.createTrait("test", 2, 3, "compatskills:banana", 1, "compatskills:banana|5");
    
    test.onAttackMob = function(event as crafttweaker.event.EntityLivingHurtEvent) {
    ...
    };