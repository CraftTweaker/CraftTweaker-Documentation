# IVector3d

Un oggetto Vector3d è un vettore che utilizza tre raddoppia per le direzioni.  
Hanno diversi metodi di utilità e getter.

## Importare la classe

Potrebbe essere necessario [importare](/AdvancedFunctions/Import/) la classe per evitare errori.  
`importare crafttweaker.world.IVector3d`

## Creare un nuovo oggetto IVector3d

Se mai ti trovi nella necessità di creare un nuovo oggetto IVector3d, puoi usare questo metodo:

```zenscript
//crafttweaker.world.IVector3d.create(double x, double y, double z);
crafttweaker.world.IVector3d.create(0.0D, 0.0D, 0.0D);
```

## ZenGetters

| ZenGetter    | Tipo      |
| ------------ | --------- |
| x            | doppia    |
| y            | doppia    |
| z            | doppia    |
| normalizzato | IVector3d |

## ZenMethods

- doppio dotProduct(IVector3d altro);
- IVector3d crossProduct(IVector3d other);
- IVector3d sottra(IVector3d altro);
- IVector3d add(IVector3d other);
- doppia distanzaTo(IVector3d altro);
- Scala IVector3d (doppio fattore);