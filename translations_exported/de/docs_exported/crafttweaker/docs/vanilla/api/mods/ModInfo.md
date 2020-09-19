# ModInfo

Haltet Informationen über einen geladenen Mod

Diese Klasse wurde von einer Mod mit mod-id `crafttweaker` hinzugefügt. Wenn Sie diese Funktion nutzen möchten, müssen Sie diese Mod installiert haben.

## Diese Klasse importieren
Es kann erforderlich sein, dass Sie das Paket importieren, wenn Sie irgendwelche Probleme haben (wie zum Beispiel ein Array zu bearbeiten), also besser sicher sein als bedauern und fügen Sie den Import.
```zenscript
crafttweaker.api.mods.ModInfo
```

## Eigenschaften

| Name          | Type                                                                                                | Hat Getter | Hat Setter |
| ------------- | --------------------------------------------------------------------------------------------------- | ---------- | ---------- |
| blocks        | Liste&lt;[craftweaker.api.block.MCBlock](/vanilla/api/blocks/MCBlock)&gt;               | true       | false      |
| displayName   | String                                                                                              | true       | false      |
| entitytypes   | Liste&lt;[crafttweaker.api.entity.MCEntityType](/vanilla/api/entities/MCEntityType)&gt; | true       | false      |
| flüssigkeiten | Liste&lt;[craftweaker.api.fluid.MCFluid](/vanilla/api/fluid/MCFluid)&gt;                | true       | false      |
| gegenstände   | Liste&lt;[craftweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)&gt;           | true       | false      |
| modo          | String                                                                                              | true       | false      |
| namespace     | String                                                                                              | true       | false      |
| version       | String                                                                                              | true       | false      |

