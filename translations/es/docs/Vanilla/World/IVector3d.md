# IVector3d

Un objeto Vector3d es un vector que usa tres dobles para las direcciones.  
Tienen varios métodos de utilidad y getters.

## Importar la clase

Podría ser necesario [importar](/AdvancedFunctions/Import/) la clase para evitar errores.  
`importar crafttweaker.world.IVector3d`

## Creando un nuevo objeto IVector3d

Si alguna vez te encuentras en la necesidad de crear un nuevo objeto IVector3d, puedes usar este método:

```zenscript
//crafttweaker.world.IVector3d.create(double x, double y, double z);
crafttweaker.world.IVector3d.create(0.0D, 0.0D, 0.0D);
```

## ZenGetters

| ZenGetter   | Tipo      |
| ----------- | --------- |
| x           | doble     |
| y           | doble     |
| z           | doble     |
| normalizado | IVector3d |

## Métodos

- Doble puntoProducto(IVector3d otros);
- IVector3d crossProduct(IVector3d otros);
- Sustrato IVector3d (IVector3d otros);
- Añadir IVector3d (IVector3d otros);
- doble distanciaTo(IVector3d otro);
- Escala IVector3d (doble factor);