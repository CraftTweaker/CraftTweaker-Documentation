### [PLACEHOLDER] onright ClickBlock

| Ustawienie/Getter/Metoda   | Nazwy metod                   | Nazwisko                   | Input/Output                                  |
|:-------------------------- |:----------------------------- |:-------------------------- | --------------------------------------------- |
| crwdns74646:0crwdne74646:0 | getHitVector();               | hitVector();               | Zwraca [IVector3d](/Vanilla/World/IVector3d/) |
| crwdns74646:0crwdne74646:0 | getUseBlock();                | useBlock();                | Zwraca ciąg                                   |
| Setter                     | setUseBlock(String useBlock); | useBlock(String useBlock); | Robi ciąg                                     |
| crwdns74646:0crwdne74646:0 | getUseItem();                 | useItem();                 | Zwraca ciąg                                   |
| Setter                     | setUseItem(String useItem);   | useItem(String useItem);   | Robi ciąg                                     |

    test var = mods.compatskills.TraitCreator.createTrait("test", 2, 3, "compatskills:banana", 1, "compatskills:banana|5");
    
    test.onRightClickBlock = function(event as crafttweaker.event.PlayerInteractBlockEvent) {
    ...
    };