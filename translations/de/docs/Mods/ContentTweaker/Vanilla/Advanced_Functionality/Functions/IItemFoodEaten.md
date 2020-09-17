# IItemFoodEaten

Die Funktion IItemFoodEaten wird aufgerufen, wenn das zugehörige [Lebensmittel Element](/Mods/ContentTweaker/Vanilla/Creatable_Content/ItemFood/) gegessen wird. Note that this event *will not fire* if the item already has a provided [IItemUseFinish](/Mods/ContentTweaker/Vanilla/Advanced_Functionality/Functions/IItemUseFinish/).

## Dieses Paket importieren

Es kann erforderlich sein, dass Sie das Paket importieren, wenn Sie irgendwelche Probleme haben. Seien Sie also besser sicher als entschuldigen und fügen Sie den Import hinzu.  
`importieren mods.contenttweaker.IItemFoodEaten;`

## Parameter

Das IItemFoodEaten ist eine Funktion mit den folgenden Parametern (In dieser Reihenfolge):

- [IMutableItemStack](/Mods/ContentTweaker/Vanilla/Types/Item/IMutableItemStack/) mutableItemStack → Das Futter wird gegessen.
- [IWorld](/Mods/ContentTweaker/Vanilla/Types/World/IWorld/) Welt → Die Welt, in der der Spieler ist
- [CTPlayer](/Mods/ContentTweaker/Vanilla/Types/Player/ICTPlayer/) Spieler → Der Spieler, der das Essen frisst.

## Beispiele

```zenscript
#loader contenttweaker

importiert mods.contenttweaker.VanillaFactory;

var item = VanillaFactory.createItem("suspicious_soup");

item.healAmount = 4;
item.saturation = 1.5;
item. nItemFoodEaten = function(stack, world player) {
    if (!world.isRemote()) {
        player. ddPotionEffect(<potion:minecraft:weakness>.makePotionEffect(60, 1));
    }
};
item.register();
```