# IItemRightClick

Funkcja IItemRightClick może zostać dodana do elementu [](/Mods/ContentTweaker/Vanilla/Creatable_Content/Item/) i zostanie uruchomiona, gdy użytkownik kliknie prawym przyciskiem myszy na element wybrany w jego podstawowej ręce.

## Importowanie pakietu

Może być wymagane zaimportowanie pakietu, jeśli napotkasz jakieś problemy, więc lepiej być bezpiecznym niż przepraszamy i dodać import.  
`zaimportuj mods.contenttweaker.IItemRightClick;`

## Parametry

Funkcja IItemRightClick jest funkcją o następujących parametrach:

- [IMutableItemStack](/Mods/ContentTweaker/Vanilla/Types/Item/IMutableItemStack/) itemStack → Przedmiot, który jest kliknięty prawym przyciskiem myszy
- [IWorld](/Mods/ContentTweaker/Vanilla/Types/World/IWorld/) Świat → Świat, w którym gracz jest
- [ICTPlayer](/Mods/ContentTweaker/Vanilla/Types/Player/ICTPlayer/) gracz → Gracz wykonujący prawe kliknięcie
- String ręka → "OFF_HAND" lub "MAIN_HAND"

Funkcja musi zwrócić `"SUCCESS"`, `"PASA"` lub `"FAIL"`

## Przykład

```zenscript
zsItem.itemRightClick = function(stack, Świat, gracz, ręka) {
    Commands.call("scoreboard players set @p name 5", player, world);
    return "Pass";
};
```