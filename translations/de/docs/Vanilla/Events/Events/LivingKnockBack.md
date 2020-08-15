# LivingKnockBack

Dieses Ereignis wird abgefeuert, wenn eine Einheit zurückgestoßen wird. Das Ereignis ist **abbrechbar** und dadurch wird verhindert, dass die Entität zurückgeworfen wird. Alternativ kann die Stärke des Rückstoßes zusätzlich zum X- und Z-Verhältnis angepasst werden.

## Event-Klasse
Du musst das Ereignis als diese Klasse in den Funktionskopf verschieben:  
`crafttweaker.event. ivingKnockBackEvent`  
Sie können natürlich auch [die Klasse vor](/AdvancedFunctions/Import/) importieren und dann diesen Namen verwenden.

## Erweiterte Event-Schnittellen
LivingKnockBack Events implementieren die folgenden Schnittstellen und können auch alle ihre Methoden/Getters/Setter aufrufen:

- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)
- [ILivingEvent](/Vanilla/Events/Events/ILivingEvent/)


## ZenGetter/ZenSetter
Folgende Informationen können während der Veranstaltung abgerufen bzw. eingestellt werden:

| ZenGetter          | ZenSetter   | Type                                  |
| ------------------ | ----------- | ------------------------------------- |
| `angreifer`        | `angreifer` | [IEntity](/Vanilla/Entities/IEntity/) |
| `originalAttacker` |             | [IEntity](/Vanilla/Entities/IEntity/) |
| `kräftig`          | `kräftig`   | float                                 |
| `originalstärke`   |             | float                                 |
| `ratioX`           | `ratioX`    | double                                |
| `quooZ`            | `quooZ`     | double                                |
| `originalRatioX`   |             | double                                |
| `originalRatioZ`   |             | double                                |

## Notizen

Wenn das Ereignis eintrifft, ist es möglich, dass der `Angreifer`, `Stärke`, oder das verschiedene `Verhältnis`s wurden bereits geändert. Diese Werte finden Sie in den `original*` Variablen.
