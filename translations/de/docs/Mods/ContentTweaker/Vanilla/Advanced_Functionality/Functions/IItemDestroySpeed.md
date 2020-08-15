# IItemDestroySpeed

Die Funktion IItemDestroySpeed kann einem [Element](/Mods/ContentTweaker/Vanilla/Creatable_Content/Item/) hinzugefügt werden und bestimmt die Blockbrechergeschwindigkeit.

## Dieses Paket importieren

Es kann erforderlich sein, dass Sie das Paket importieren, wenn Sie irgendwelche Probleme haben. Seien Sie also besser sicher als entschuldigen und fügen Sie den Import hinzu.  
`importiert mods.contenttweaker.IItemDestroySpeed;`

## Parameter

Die IItemDestroySpeed ist eine Funktion mit den folgenden Parametern:

- [IMutableItemStack](/Mods/ContentTweaker/Vanilla/Types/Item/IMutableItemStack/) mutableItemStack → Das Element.
- [ICTBlockState](/Mods/ContentTweaker/Vanilla/Types/Block/ICTBlockState/) blockState → Status des abgebauten Blocks.

Die Funktion muss einen float-Wert zurückgeben.