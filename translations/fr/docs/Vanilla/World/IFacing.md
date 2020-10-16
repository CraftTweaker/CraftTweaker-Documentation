# IFacing

L'interface IFacing vous permet d'obtenir les directions possibles d'un [IBlockPoss](/Vanilla/World/IBlockPos/).

## Importing the package

Il pourrait vous être nécessaire d'importer le paquet si vous rencontrez des problèmes, donc mieux vaut être sûr que désolé et ajouter l'importation.  
`importer crafttweaker.world.IFac ;`

## Enumerations

L'interface Facing a 6 méthodes statiques qui retournent cette direction.  
Il a aussi un autre qui prend la direction en tant que chaîne d'entrée (par exemple `"NORTH"`)

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

| ZenGetter | ZenMethod | Return Type |
| --------- | --------- | ----------- |
| name      | getName() | string      |
| rotateY   | rotateY() | IFacing     |
| opposé    | opposé()  | IFacing     |

## Autres méthodes

### Comparer deux faces

Vous pouvez comparer deux faces en utilisant le standard comparant les Opérateurs `== ! < > <= >=`  
Alternativement, vous pouvez utiliser la fonction, même si la fonction retourne un entier égal à 0.

```zenscript
//Renvoie vrai ou faux
facingOne == facingTwo;

//Renvoie 0 s'ils sont égaux
facingOne.compare(facingTwo);
```