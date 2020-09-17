# IItemDestroyedBlock

Die Funktion IItemDestroyedBlock kann einem [Element](/Mods/ContentTweaker/Vanilla/Creatable_Content/Item/) hinzugefügt werden und wird immer dann ausgeführt, wenn Sie einen Block mit dem zugeordneten Element kaputt machen wollen.

## Dieses Paket importieren

Es kann erforderlich sein, dass Sie das Paket importieren, wenn Sie irgendwelche Probleme haben. Seien Sie also besser sicher als entschuldigen und fügen Sie den Import hinzu.  
`importieren mods.contenttweaker.IItemDestroyedBlock;`

## Parameter

Der IItemDestroyedBlock ist eine Funktion mit den folgenden Parametern:

- [IMutableItemStack](/Mods/ContentTweaker/Vanilla/Types/Item/IMutableItemStack/) Stapel → Der Gegenstand.
- [IWelt](/Mods/ContentTweaker/Vanilla/Types/World/IWorld/) Welt → Die Welt, in der diese Welt stattfindet
- [ICTBlockState](/Mods/ContentTweaker/Vanilla/Types/Block/ICTBlockState/) blockState → Status des abgebauten Blocks.
- [IBlockPos](/Mods/ContentTweaker/Vanilla/Types/Block/IBlockPos/) pos → Wo findet das statt?
- [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/) Entität → Wen / Was baut den Block ab?

Die Funktion muss einen Boolean zurückgeben, das ist `true` wenn der BlockBreaking-Prozess erfolgreich ist, und `false` , wenn dies nicht der Fall ist.