# IItemFoodEaten

La funzione IItemFoodEaten viene chiamata ogni volta che viene mangiato l'oggetto alimentare [](/Mods/ContentTweaker/Vanilla/Creatable_Content/ItemFood/) associato. Nota che questo evento *non sparerà* se l'elemento ha già un [IItemUseFinish fornito](/Mods/ContentTweaker/Vanilla/Advanced_Functionality/Functions/IItemUseFinish/).

## Importazione del pacchetto

Potrebbe essere necessario per importare il pacchetto se si verificano problemi, in modo da essere più sicuri di spiacenti e aggiungere l'importazione.  
`import mods.contenttweaker.IItemFoodEaten;`

## Parametri

IItemFoodEaten è una funzione con i seguenti parametri (In questo ordine):

- [IMutableItemStack](/Mods/ContentTweaker/Vanilla/Types/Item/IMutableItemStack/) mutableItemStack → The food item being eaten.
- [mondo IWorld](/Mods/ContentTweaker/Vanilla/Types/World/IWorld/) → Il mondo in cui si trova il giocatore
- [CTPlayer](/Mods/ContentTweaker/Vanilla/Types/Player/ICTPlayer/) giocatore → Il giocatore che mangia il cibo.

## Esempi

```zenscript
#loader contenttweaker

import mods.contenttweaker.VanillaFactory;

var item = VanillaFactory.createItem("suspicious_soup");

item.healAmount = 4;
item.saturation = 1.5;
item. nItemFoodEaten = function(stack, world, player) {
    if (!world.isRemote()) {
        player. ddPotionEffect(<potion:minecraft:weakness>.makePotionEffect(60, 1));
    }
};
item.register();
```