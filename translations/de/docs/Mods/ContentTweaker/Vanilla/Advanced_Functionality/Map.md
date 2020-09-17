# Karte

Mit dem Kartenpaket können Sie einen Wegpunkt mittels BASE's Wegpunkt-Event-Handler festlegen.

## Dieses Paket importieren

Sie können das Paket so importieren, dass Sie es nicht immer neu eingeben müssen.

    importieren mods.contenttweaker.Map;
    

## Wegpunkte hinzufügen

Dies ist die einzige Methode, die das Kartenpaket offenbart und es ermöglicht Ihnen, einen Wegpunkt an der angegebenen Stelle zu setzen.  
Es ist eine ungültige Methode mit den Parametern:

- string-Name
- [IWorld](/Mods/ContentTweaker/Vanilla/Types/World/IWorld/)
- [IBlockPos](/Mods/ContentTweaker/Vanilla/Types/Block/IBlockPos/)
- [CTColor](/Mods/ContentTweaker/Vanilla/Types/Color/Color/)

    Map.setWaypoint(String-Name, IWorld-Welt, IBlockPos pos, CTColor Farbe)