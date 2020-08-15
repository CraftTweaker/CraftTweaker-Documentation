### onRightClickBlock

| Setter/Getter/Method | Nomi Metodo                   | Nomi                       | Input/Output                                          |
|:-------------------- |:----------------------------- |:-------------------------- | ----------------------------------------------------- |
| Getter               | getHitVector();               | hitVector();               | Restituisce un [IVector3d](/Vanilla/World/IVector3d/) |
| Getter               | getUseBlock();                | useBlock();                | Restituisce una Stringa                               |
| Setter               | setUseBlock(String useBlock); | useBlock(String useBlock); | Prende una Stringa                                    |
| Getter               | getUseItem();                 | useItem();                 | Restituisce una Stringa                               |
| Setter               | setUseItem(String useItem);   | useItem(String useItem);   | Prende una Stringa                                    |

    var test = mods.compatskills.TraitCreator.createTrait("test", 2, 3, "compatskills:banana", 1, "compatskills:banana<unk> 5");
    
    test.onRightClickBlock = function(event as crafttweaker.event.PlayerInteractBlockEvent) {
    ...
    };