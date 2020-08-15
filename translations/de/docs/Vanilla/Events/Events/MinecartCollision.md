# MinecartCollision

MinecartCollisionEvent wird gefeuert, wenn ein Minecart mit einer Einheit kollidiert.

## Event-Klasse
Du musst das Ereignis als diese Klasse in den Funktionskopf verschieben:  
`crafttweaker.event. inecartCollisionEvent`  
Sie können natürlich auch [die Klasse vor](/AdvancedFunctions/Import/) importieren und dann diesen Namen verwenden.

## Erweiterte Event-Schnittellen
MinecartCollision Events implementieren die folgenden Schnittstellen und können auch alle ihre Methoden/Getters/Setter aufrufen:

- [IMinecartEvent](/Vanilla/Events/Events/IMinecartEvent/)

## ZenGetter

| ZenGetter        | Type                                  |
| ---------------- | ------------------------------------- |
| `kollidierender` | [IEntity](/Vanilla/Entities/IEntity/) |
