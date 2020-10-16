# Enfrentar

La interfaz Ifroning te permite obtener las instrucciones de [IBlockPos](/Vanilla/World/IBlockPos/) posibles.

## Importing the package

Podría ser necesario que importes el paquete si encuentras algún problema, así que más vale estar seguro que lo sentimos y añadir la importación.  
`importar crafttweaker.world.IFacing;`

## Enumerations

La interfaz frontal tiene 6 métodos estáticos que devuelven dicha dirección.  
También tiene uno más que toma la dirección como entrada de cadena (por ejemplo, `"NORTH"`)

```zenscript
crafttweaker.world.IFacing.north()
crafttweaker.world.IFacing.east()
crafttweaker.world.IFacing.south()
crafttweaker.world.IFacing.west()
crafttweaker.world.IFacing.down()
crafttweaker.world.IFacing.up()


crafttweaker.world.IFacing.fromString(String name);
```

## ZenGetters/ZenMethods without parameters

| ZenGetter | ZenMethod  | Return Type |
| --------- | ---------- | ----------- |
| name      | getName()  | string      |
| rotateY   | rotateY()  | Enfrentar   |
| opuesto   | opuesto () | Enfrentar   |

## Otros métodos

### Comparando dos caras

¡Puedes comparar dos caras usando el estándar comparando a los Operadores `== ! < > <= >=`  
Alternativamente, puede usar la función, aunque la función devuelve un int que es 0 si son iguales.

```zenscript
//Devuelve verdadero o falso
facingOne == facingTwo;

//Devuelve 0 si son iguales
facingOne.compare(facingTwo);
```