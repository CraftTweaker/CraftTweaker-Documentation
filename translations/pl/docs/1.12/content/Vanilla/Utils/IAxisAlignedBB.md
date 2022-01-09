# IAxisAlignedBB



## Importing the package
It might be required for you to [import](/AdvancedFunctions/Import/) the package if you encounter any issues (like casting an [Array](/AdvancedFunctions/Arrays_and_Loops/)), so better be safe than sorry and add the import.  
`import crafttweaker.util.IAxisAlignedBB;`

## IAxisAlignedBB constructor
You can create a IAxisAlignedBB object yourself by using the following methods:

```zenscript
IAxisAlignedBB.create(double minX, double minY, double minZ, double maxX, double maxY, double maxZ);
IAxisAlignedBB.create(IBlockPos pos;
IAxisAlignedBB.create(IBlockPos pos1, IBlockPos pos2;
IAxisAlignedBB.create(IVector3d min, IVector3d max);
```

The First method allows you to create a position at the given coordinates.


## ZenGetters
| ZenGetter | Type                                   |
| --------- | -------------------------------------- |
| minX      | double                                 |
| minY      | double                                 |
| minZ      | double                                 |
| maxX      | double                                 |
| maxY      | double                                 |
| maxZ      | double                                 |
| center    | [IVector3d](/Vanilla/World/IVector3d/) |

