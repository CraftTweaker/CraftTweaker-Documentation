# IItemFoodEaten

Funkcja IItemFoodEaten jest wywoływana za każdym razem, gdy zjedzony jest powiązany z nią [element żywnościowy](/Mods/ContentTweaker/Vanilla/Creatable_Content/ItemFood/). Zauważ, że to wydarzenie *nie wystrzeli* jeśli produkt ma już dostarczone [IItemUseFinish](/Mods/ContentTweaker/Vanilla/Advanced_Functionality/Functions/IItemUseFinish/).

## Importowanie pakietu

Może być wymagane zaimportowanie pakietu, jeśli napotkasz jakieś problemy, więc lepiej być bezpiecznym niż przepraszamy i dodać import.  
`importuj mods.contenttweaker.IItemFoodEaten;`

## Parametry

IItemFoodEaten jest funkcją o następujących parametrach (w tej kolejności):

- [IMutableItemStack](/Mods/ContentTweaker/Vanilla/Types/Item/IMutableItemStack/) mutableItemStack → Jedzenie jest spożywane.
- [IWorld](/Mods/ContentTweaker/Vanilla/Types/World/IWorld/) Świat → Świat, w którym gracz jest
- [CTPlayer](/Mods/ContentTweaker/Vanilla/Types/Player/ICTPlayer/) gracz → Gracz zjadający jedzenie.

## Przykłady

```zenscript
#loader contenttweaker

importuje mods.contenttweaker.VanillaFactory;

var item = VanillaFactory.createItem("podejrzany_soup");

item.healAmount = 4;
item.saturation = 1.5;
element. nItemFoodEaten = function(stack, world player) {
    if (!world.isRemote()) {
        player. ddPotionEffect(<potion:minecraft:weakness>.makePotionEffect(60, 1));
    }
};
item.register();
```