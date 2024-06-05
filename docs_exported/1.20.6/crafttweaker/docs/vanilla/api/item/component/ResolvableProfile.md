# ResolvableProfile

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.item.component.ResolvableProfile;
```


## Extending Record

ResolvableProfile extends Record. That means all methods available in Record are also available in ResolvableProfile

## Properties

|    Name     |                     Type                     | Has Getter | Has Setter |
|-------------|----------------------------------------------|------------|------------|
| gameProfile | [GameProfile](/vanilla/api/util/GameProfile) | true       | false      |
| id          | stdlib.UUID?                                 | true       | false      |
| isResolved  | boolean                                      | true       | false      |
| name        | string?                                      | true       | false      |

