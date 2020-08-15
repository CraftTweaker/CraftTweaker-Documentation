# IEntityAttribute

## Dieses Paket importieren

Möglicherweise ist es erforderlich, dass Sie das Paket importieren, wenn Sie irgendwelche Probleme haben (z.B. [Array](/AdvancedFunctions/Arrays_and_Loops/)), also besser sicher sein als bedauern und fügen Sie den Import.  
`import craftweaker.entity.Attribute;`

## ZenGetter

| ZenGetter     | GetterMethode     | Rückgabetyp      |
| ------------- | ----------------- | ---------------- |
| name          | getName()         | string           |
| defaultWert   | getDefaultValue() | double           |
| sollte Watch  | getShouldWatch()  | boolean          |
| übergeordnete | getParent()       | IEntityAttribute |

## Mehr ZenMethoden

- doppelte clampValue(doppelter Wert) → Macht etwas...