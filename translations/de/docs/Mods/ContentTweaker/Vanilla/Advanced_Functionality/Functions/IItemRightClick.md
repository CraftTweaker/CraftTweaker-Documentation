# IItemRightClick

Die IItemRightClick Funktion kann zu einem [Element](/Mods/ContentTweaker/Vanilla/Creatable_Content/Item/) hinzugefügt werden und wird ausgelöst, wenn ein Benutzer mit dem ausgewählten Element in seiner primären Hand rechtsklickt.

## Dieses Paket importieren

Es kann erforderlich sein, dass Sie das Paket importieren, wenn Sie irgendwelche Probleme haben. Seien Sie also besser sicher als entschuldigen und fügen Sie den Import hinzu.  
`importieren mods.contenttweaker.IItemRightClick;`

## Parameter

Die IItemRightClick Funktion ist eine Funktion mit den folgenden Parametern:

- [IMutableItemStack](/Mods/ContentTweaker/Vanilla/Types/Item/IMutableItemStack/) itemStack → Das Element, das mit der rechten Maustaste geklickt wird
- [IWorld](/Mods/ContentTweaker/Vanilla/Types/World/IWorld/) Welt → Die Welt, in der der Spieler ist
- [ICTPlayer](/Mods/ContentTweaker/Vanilla/Types/Player/ICTPlayer/) Spieler → Der Spieler, der den Rechtsklick macht
- String Hand → Entweder "OFF_HAND" oder "MAIN_HAND"

Die Funktion muss entweder `"SUCCESS"`, `"PASS"` oder `"FEHLER"` zurückgeben

## Beispiel

```zenscript
zsItem.itemRightClick = function(stack, world player, player, hand) {
    Commands.call("scoreboard players set @p name 5", player, world);
    return "Pass";
};
```