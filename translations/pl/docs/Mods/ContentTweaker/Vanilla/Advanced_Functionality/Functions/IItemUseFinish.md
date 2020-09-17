# IItemUseFinish

Funkcja IItemUseFinish może być dodana do elementu [](/Mods/ContentTweaker/Vanilla/Creatable_Content/Item/) i będzie uruchamiana tylko wtedy, gdy użytkownik zakończy korzystanie z elementu (e. . kończy jedzenie).

## Importowanie pakietu

Może być wymagane zaimportowanie pakietu, jeśli napotkasz jakieś problemy, więc lepiej być bezpiecznym niż przepraszamy i dodać import.  
`zaimportuj mods.contenttweaker.IItemUseFinish;`

## Parametry

IItemRightClickFunction jest funkcją o następujących parametrach:

- [IMutableItemStack](/Mods/ContentTweaker/Vanilla/Types/Item/IMutableItemStack/) itemStack → Przedmiot, który jest używany
- [IWorld](/Mods/ContentTweaker/Vanilla/Types/World/IWorld/) Świat → Świat, w którym gracz jest
- [Obiekt IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/) → Obiekt używając przedmiotu

Funkcja musi zwrócić [IItemStack](/Vanilla/Items/IItemStack/).

## Przykład

```zenscript
zsItem.onItemUseFinish = function(stack, world player) {
    stack.damage(1, gracz);
    return stack;
};
```