### onClickBlock derecho

| Setter/Getter/Method | Nombres del método            | Nombres                    | Input/Output                                       |
|:-------------------- |:----------------------------- |:-------------------------- | -------------------------------------------------- |
| Obtén                | getHitVector();               | hitVector();               | Devuelve un [IVector3d](/Vanilla/World/IVector3d/) |
| Obtén                | getUseBlock();                | useBlock();                | Devuelve una cadena                                |
| Setter               | setUseBlock(String useBlock); | useBlock(String useBlock); | Toma una cuerda                                    |
| Obtén                | getUseItem();                 | useItem();                 | Devuelve una cadena                                |
| Setter               | setUseItem(String useItem);   | useItem(String useItem);   | Toma una cuerda                                    |

    var test = mods.compatskills.TraitCreator.createTrait("test", 2, 3, "compatskills:banana", 1, "compatskills:banana|5");
    
    test.onRight tClickBlock = function(event as crafttweaker.event.PlayerInteractBlockEvent) {
    ...
    };