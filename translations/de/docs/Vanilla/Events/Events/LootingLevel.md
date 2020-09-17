# Plünderungsebene

Dieses Ereignis wird abgefeuert, wenn eine lebende Entitätskreatur getötet wird, um die Plünderungsstufe zu berechnen. Der Wert kann erhöht oder verringert werden oder wie er ist. Der Wert wurde möglicherweise bereits durch andere Ereignisse geändert, aber der ursprüngliche Wert ist nicht enthalten.

## Event-Klasse
Du musst das Ereignis als diese Klasse in den Funktionskopf verschieben:  
`crafttweaker.event. ootingLevelEvent`  
Sie können natürlich auch [die Klasse vor](/AdvancedFunctions/Import/) importieren und dann diesen Namen verwenden.

## Erweiterte Event-Schnittellen
LootingLevel Events implementieren die folgenden Schnittstellen und können alle ihre Methoden/Getter/Setter auch aufrufen:

- [ILivingEvent](/Vanilla/Events/Events/ILivingEvent/)


## ZenGetter/ZenSetter
Folgende Informationen können während der Veranstaltung abgerufen bzw. eingestellt werden:

| ZenGetter          | ZenSetter          | Type                                            |
| ------------------ | ------------------ | ----------------------------------------------- |
| `plündernde Stufe` | `plündernde Stufe` | int                                             |
| `Schadensquelle`   |                    | [IDamageSource](/Vanilla/Damage/IDamageSource/) |
