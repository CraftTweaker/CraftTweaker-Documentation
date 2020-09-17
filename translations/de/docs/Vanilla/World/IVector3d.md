# IVector3d

Ein Vector3d-Objekt ist ein Vektor, der drei Doppel für die Richtungen verwendet.  
Sie haben mehrere Hilfsmethoden und Getter.

## Diese Klasse importieren

Es könnte erforderlich sein, [die Klasse](/AdvancedFunctions/Import/) zu importieren, um Fehler zu vermeiden.  
`crafttweaker.world.IVector3d`

## Erstelle ein neues IVector3d-Objekt

Wenn du jemals ein neues IVector3d-Objekt erstellen musst, kannst du diese Methode verwenden:

```zenscript
//crafttweaker.world.IVector3d.create(double x, double y, double z);
crafttweaker.world.IVector3d.create(0.0D, 0.0D, 0.0D);
```

## ZenGetter

| ZenGetter    | Type      |
| ------------ | --------- |
| x            | double    |
| y            | double    |
| z            | double    |
| normalisiert | IVector3d |

## ZenMethoden

- doppelter dotProduct(IVector3d weiter);
- IVector3d CrossProduct(IVector3d weiter);
- IVector3d Subtract(IVector3d weiter);
- IVector3d Hinzufügen(IVector3d weiter);
- double distanceTo(IVector3d other);
- IVector3d Skalierung(Doppelfaktor);