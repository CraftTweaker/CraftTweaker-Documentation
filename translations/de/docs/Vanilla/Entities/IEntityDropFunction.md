# IEntityDropFunction

Eine IEntityDropFunktion wird aufgerufen, wenn die zugehörige Entität getötet wird. Lassen Sie es Ihrer Phantasie überlassen, was Sie damit tun können:

## Dieses Paket importieren

Es kann erforderlich sein, dass Sie das Paket importieren, wenn Sie irgendwelche Probleme haben. Seien Sie also besser sicher als entschuldigen und fügen Sie den Import hinzu.  
`importiere craftweaker.entity.IEntityDropFunction;`

## Parameter

Die IEntityDropFunktion ist eine Funktion mit den folgenden Parametern:

- [IEntität](/Vanilla/Entities/IEntity/) → Die Entität, die gerade gestorben ist.
- [IDamageSource](/Vanilla/Damage/IDamageSource/) dmgSourve → Die Quelle des Todes des Entitäts.

Die Funktion muss einen [IItemStack](/Vanilla/Items/IItemStack/)oder `null` zurückgeben.