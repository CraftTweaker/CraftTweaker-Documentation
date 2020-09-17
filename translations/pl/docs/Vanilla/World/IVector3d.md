# IVector3d

Obiekt Vector3d jest wektorem, który używa trzech podwójnych kierunków.  
Ma kilka metod użyteczności i pobiera.

## Importowanie klasy

Może być wymagane [zaimportowanie](/AdvancedFunctions/Import/) klasy, aby uniknąć błędów.  
`zaimportuj crafttweaker.world.IVector3d`

## Tworzenie nowego obiektu IVector3d

Jeśli kiedykolwiek znajdziesz się w potrzebie stworzenia nowego obiektu IVector3d, możesz użyć tej metody:

```zenscript
//crafttweaker.world.IVector3d.create(podwójne x, podwójne, podwójne z);
crafttweaker.world.IVector3d.create(0.0D, 0,0D, 0,0D);
```

## ZenGetters

| ZenGetter      | Typ       |
| -------------- | --------- |
| x              | podwójne  |
| y              | podwójne  |
| z              | podwójne  |
| znormalizowany | IVector3d |

## Metody ZenMethods

- podwójna dotProdukt(IVector3d inny);
- IVector3d crossProduct(IVector3d inny);
- Odjąć IVector3d (IVector3d inny);
- Dodać IVector3d (IVector3d inny);
- podwójna odległośćdo (IVector3d inny);
- skala IVector3d (podwójny czynnik);