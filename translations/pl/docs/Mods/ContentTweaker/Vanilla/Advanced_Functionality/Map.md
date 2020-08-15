# Mapa

Pakiet mapy pozwala ustawić punkt drogi za pomocą obsługi zdarzeń BASE.

## Importowanie pakietu

Możesz zaimportować pakiet, aby nie musiał go ponownie wpisywać za każdym razem.

    importuj mods.contenttweaker.Map;
    

## Dodawanie punktów drogi

Jest to jedyna metoda eksponowana przez pakiet mapy i pozwala na ustawienie punktu nawigacyjnego w danej lokalizacji.  
Jest to metoda pusta z parametrami:

- nazwa ciągu
- [IWorld](/Mods/ContentTweaker/Vanilla/Types/World/IWorld/)
- [IBlockPos](/Mods/ContentTweaker/Vanilla/Types/Block/IBlockPos/)
- [CTColor](/Mods/ContentTweaker/Vanilla/Types/Color/Color/)

    Map.setWaypoint(Nazwa ciągu, świat świata, IBlockPos pos, kolor CTColor)